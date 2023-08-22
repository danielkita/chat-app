import { motion } from 'framer-motion';
import { Reply } from 'lucide-react';
import { Message as MessageType } from 'types/message.ts';
import { cn } from '@/lib/utils.ts';
import { useUser } from '@/components/user/use-user.ts';
import { UserAvatar } from '@/components/user/user-avatar.tsx';
import { useReplyStore } from '@/components/chat/reply/use-reply-store.ts';

interface Props {
  message: MessageType;
  showReplyButton?: boolean;
  replies?: number;
}

const ANIMATION_OFFSET = 100;
export const Message = ({
  message,
  showReplyButton = true,
  replies,
}: Props) => {
  const { user, id } = message;
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
                  {message.type === 'TEXT' && <>{message.text}</>}
                  {message.type === 'IMAGE' && (
                    <>
                      <img width={300} src={message.text} alt="chat image" />
                    </>
                  )}
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
