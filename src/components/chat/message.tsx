import React from 'react';
import { motion } from 'framer-motion';
import { useUser } from '@/components/user/use-user.ts';
import { cn } from '@/lib/utils.ts';
import { UserAvatar } from '@/components/user/user-avatar.tsx';

type Props = React.PropsWithChildren<{
  user: {
    name: string;
    id: string;
  };
}>;

const ANIMATION_OFFSET = 100;
export const Message = ({ children, user }: Props) => {
  const { user: currentUser } = useUser();

  const isOwnMessage = currentUser.id === user.id;

  const messageClass = isOwnMessage
    ? cn('bg-blue-500 text-white')
    : cn('bg-gray-200 text-gray-800');

  const wrapperClass = isOwnMessage ? 'justify-end' : 'justify-start';

  return (
    <motion.div
      initial={{
        x: isOwnMessage ? -ANIMATION_OFFSET : ANIMATION_OFFSET,
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
    >
      <div className={`flex max-w-[80vw] ${wrapperClass}`}>
        {!isOwnMessage && (
          <div className="self-end py-4 px-2">
            <UserAvatar user={user} />
          </div>
        )}
        <div className="max-w-[80%]">
          <div className="mt-2">
            <div className="font-bold text-rose-800 text-xs pb-1">
              {user.name}
            </div>
            <div
              className={`overflow-ellipsis overflow-hidden p-4 rounded-lg mb-4 ${messageClass}`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
