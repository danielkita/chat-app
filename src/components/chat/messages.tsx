import { AnimatePresence } from 'framer-motion';
import { Message } from '@/components/chat/message.tsx';
import { useMessages } from '@/components/chat/use-messages.ts';

export const Messages = () => {
  const { messages, containerRef } = useMessages();

  return (
    <div
      className="scroll-smooth max-w-full overflow-x-hidden"
      ref={containerRef}
    >
      <AnimatePresence>
        {messages.map((message) => (
          <Message key={message.id} user={message.user}>
            {message.text}
          </Message>
        ))}
      </AnimatePresence>
    </div>
  );
};
