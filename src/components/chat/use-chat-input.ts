import React from 'react';
import { useSocket } from '@/components/chat/use-socket.ts';
import { Message } from '../../../types/message.ts';
import { useUser } from '@/components/user/use-user.ts';

export const useChatInput = ({ threadId }: { threadId?: string }) => {
  const getSocket = useSocket();
  const { user } = useUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const socket = getSocket();
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('message') as string;
    const message: Pick<Message, 'user' | 'text' | 'threadId'> = {
      text,
      user,
      threadId,
    };
    socket?.emit('message', message);

    e.currentTarget.reset();
  };

  return {
    handleSubmit,
  };
};
