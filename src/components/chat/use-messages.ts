import React, { useEffect, useRef } from 'react';
import { useSocket } from '@/components/chat/use-socket.ts';
import { Message } from '../../../types/message.ts';

const initialMessages: Message[] = [
  {
    id: window.crypto.randomUUID(),
    text: 'Hello! How are you?',
    user: {
      id: window.crypto.randomUUID(),
      name: 'Mr. Robot',
    },
  },
];

export const useMessages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const getSocket = useSocket();

  useEffect(() => {
    const socket = getSocket();
    socket?.on('message', (serverMessage: Message) => {
      const newMessage = serverMessage;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
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
