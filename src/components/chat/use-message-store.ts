import { Message } from 'types/message';
import { create } from 'zustand';

const initialMessages: Message[] = [
  {
    id: window.crypto.randomUUID(),
    text: 'Hello! How are you?',
    date: new Date(),
    type: 'TEXT',
    user: {
      id: window.crypto.randomUUID(),
      name: 'Mr. Robot',
    },
  },
];

interface MessageStore {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  appendMessage: (message: Message) => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
  messages: initialMessages,
  setMessages: (messages) => set(() => ({ messages })),
  appendMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));
