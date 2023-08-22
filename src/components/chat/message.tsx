import React from 'react';
import { motion } from 'framer-motion';
import { Reply } from 'lucide-react';
import { useUser } from '@/components/user/use-user.ts';
import { cn } from '@/lib/utils.ts';
import { UserAvatar } from '@/components/user/user-avatar.tsx';
import { useReplyStore } from '@/components/chat/reply/use-reply-store.ts';

type Props = React.PropsWithChildren<{
  user: {
    name: string;
    id: string;
  };
  id: string;
  showReplyButton?: boolean;
  replies?: number;
}>;

const ANIMATION_OFFSET = 100;
export const Message = ({
  children,
  user,
  id,
  showReplyButton = true,
  replies,
}: Props) => {
  const { user: currentUser } = useUser();
  const { setMessageId } = useReplyStore();

  const isOwnMessage = currentUser.id === user.id;

  const messageClass = isOwnMessage
    ? cn('bg-blue-500 text-white')
    : cn('bg-gray-200 text-gray-800');

  const wrapperClass = isOwnMessage ? 'justify-end' : 'justify-start';

  const handleReplyClick = () => {
    setMessageId(id);
  };

  return (
    <motion.div
      initial={{
        x: isOwnMessage ? -ANIMATION_OFFSET : ANIMATION_OFFSET,
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
    >
      <div className={`flex max-w-[80vw] ${wrapperClass}`}>
        <div className="max-w-[80%] mb-4">
          <div className="mt-2">
            <div className="flex">
              {!isOwnMessage && (
                <div className="self-end px-2">
                  <UserAvatar user={user} />
                </div>
              )}
              <div>
                <div className="font-bold text-rose-800 text-xs pb-1">
                  {user.name}
                </div>
                <div
                  className={`overflow-ellipsis overflow-hidden p-4 rounded-lg  ${messageClass}`}
                >
                  {children}
                </div>
              </div>
            </div>
            <div className="text-right">
              <button
                className="inline-block cursor-pointer"
                onClick={handleReplyClick}
              >
                {!!replies && (
                  <b className="text-xs inline-block align-middle pr-2">
                    {replies} replies
                  </b>
                )}
                {showReplyButton && (
                  <span className="inline-block pt-1 align-middle">
                    <Reply size={15} />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
