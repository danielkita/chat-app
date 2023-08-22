import { ChatInput } from '@/components/chat/chat-input.tsx';
import { Messages } from '@/components/chat/messages.tsx';

export const Chat = () => {
  return (
    <>
      <div className="h-16 bg-gray-200 flex items-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800">Chat App</h2>
        </div>
      </div>
      <div className="flex-1 flex overflow-y-auto">
        <div className="flex flex-col flex-1 p-4">
          <Messages />
        </div>
      </div>
      <ChatInput />
    </>
  );
};
