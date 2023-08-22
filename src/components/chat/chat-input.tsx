import { useChatInput } from '@/components/chat/use-chat-input.ts';
import { Button } from '@/components/ui/button.tsx';

export const ChatInput = () => {
  const { handleSubmit } = useChatInput();

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-16 bg-white">
        <div className="flex items-center h-full p-4">
          <input
            name="message"
            type="text"
            required
            className="mr-2 flex-1 border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <Button type="submit">Send</Button>
        </div>
      </div>
    </form>
  );
};
