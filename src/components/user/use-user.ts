import { create } from 'zustand';
import { User } from '../../../types/message.ts';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UseUserStore {
  user: User;
  setUser: (user: User) => void;
}

export const useUser = create<UseUserStore>()(
  persist(
    (set) => ({
      user: {
        id: window.crypto.randomUUID(),
        name: 'Anonymous',
      },
      setUser: (user) => set({ user }),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user }),
    },
  ),
);
