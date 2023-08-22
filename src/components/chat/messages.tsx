import { AnimatePresence } from 'framer-motion';
import { Message } from '@/components/chat/message.tsx';
import { useMessages } from '@/components/chat/use-messages.ts';

export const Messages = () => {
  const { messages, containerRef } = useMessages();

  return (
    <div
      className="scroll-smooth max-w-full overflow-x-hidden pr-4"
      ref={containerRef}
    >
      <AnimatePresence>
        {messages
          .filter((message) => !message.threadId)
          .map((message) => {
            const replies = messages.filter(
              (msg) => msg.threadId === message.id,
            ).length;
            return (
              <Message message={message} replies={replies} key={message.id} />
            );
          })}
      </AnimatePresence>
    </div>
  );
};
