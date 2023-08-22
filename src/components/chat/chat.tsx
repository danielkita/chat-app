import { ChatInput } from '@/components/chat/chat-input.tsx';
import { Messages } from '@/components/chat/messages.tsx';
import { ReplyPanel } from '@/components/chat/reply/reply-panel.tsx';

export const Chat = () => {
  return (
    <>
      <ReplyPanel />
      <div className="h-16 bg-gray-200 items-center px-4 hidden md:flex">
        <div className="container mx-auto">
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
