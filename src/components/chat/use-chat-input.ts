import React, { useState } from 'react';
import { useSocket } from '@/components/chat/use-socket.ts';
import { Message } from '../../../types/message.ts';
import { useUser } from '@/components/user/use-user.ts';

type Mode = 'TEXT' | 'IMAGE';

export const useChatInput = ({ threadId }: { threadId?: string }) => {
  const [mode, setMode] = useState<Mode>('TEXT');
  const [url, setUrl] = useState<string>('');
  const getSocket = useSocket();
  const { user } = useUser();

  const handleTextSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const socket = getSocket();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('message') as string;
    const message: Omit<Message, 'id' | 'date'> = {
      text,
      user,
      threadId,
      type: 'TEXT',
    };
    socket?.emit('message', message);

    e.currentTarget.reset();
  };

  const handleImageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const socket = getSocket();
    const text = url;
    const message: Omit<Message, 'id' | 'date'> = {
      text,
      user,
      threadId,
      type: 'IMAGE',
    };
    socket?.emit('message', message);

    e.currentTarget.reset();
    setMode('TEXT');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mode === 'TEXT') {
      return handleTextSubmit(e);
    }
    if (mode === 'IMAGE') {
      return handleImageSubmit(e);
    }
  };

  const handleUpload = (uploadUrl: string) => {
    setUrl(uploadUrl);
    setMode('IMAGE');
  };

  const handlePreviewClose = (): void => {
    setMode('TEXT');
  };

  return {
    mode,
    url,
    handleUpload,
    handlePreviewClose,
    handleSubmit,
  };
};
