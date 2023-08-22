// zustand store

import { create } from 'zustand';

interface ReplyStore {
  messageId: string | null;
  setMessageId: (messageId: string | null) => void;
}

export const useReplyStore = create<ReplyStore>((set) => ({
  messageId: null,
  setMessageId: (messageId) => set(() => ({ messageId })),
}));
