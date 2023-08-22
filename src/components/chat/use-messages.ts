import { useEffect, useRef } from 'react';
import { useSocket } from '@/components/chat/use-socket.ts';
import { Message } from '../../../types/message.ts';
import { useMessageStore } from '@/components/chat/use-message-store.ts';

export const useMessages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { messages, appendMessage } = useMessageStore();
  const getSocket = useSocket();

  useEffect(() => {
    const socket = getSocket();
    socket?.on('message', (serverMessage: Message) => {
      const newMessage = serverMessage;
      appendMessage(newMessage);
      setTimeout(() => {
        containerRef.current?.scrollBy(0, containerRef.current.scrollHeight);
      }, 50);
    });
  }, []);

  return {
    messages,
    containerRef,
  };
};
