import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useReplyStore } from '@/components/chat/reply/use-reply-store.ts';
import { useMessageStore } from '@/components/chat/use-message-store.ts';
import { Message } from '@/components/chat/message.tsx';
import { ChatInput } from '@/components/chat/chat-input.tsx';

export const ReplyPanel = () => {
  const { messageId, setMessageId } = useReplyStore();
  const { messages } = useMessageStore();
  const threadRootMessage = messages.find(
    (message) => message.id === messageId,
  );

  const handleOpenChange = () => {
    setMessageId(null);
  };

  if (!threadRootMessage) {
    return null;
  }

  const threadMessages = messages.filter(
    (message) => message.threadId === threadRootMessage.id,
  );

  return (
    <>
      <Sheet open={!!messageId} onOpenChange={handleOpenChange}>
        <SheetContent className="flex flex-col h-full">
          <SheetHeader>
            <SheetTitle>Thread</SheetTitle>
            <SheetDescription className="flex-1 h-full">
              <div className="flex flex-col h-full">
                <div className="flex-1 flex overflow-y-auto">
                  <div className="flex flex-col flex-1">
                    <div className="divide-y">
                      <div>
                        <Message
                          showReplyButton={false}
                          id={threadRootMessage.id}
                          key={threadRootMessage.id}
                          user={threadRootMessage.user}
                        >
                          {threadRootMessage.text}
                        </Message>
                      </div>
                      <div>
                        {threadMessages.map((message) => (
                          <Message
                            showReplyButton={false}
                            id={message.id}
                            key={message.id}
                            user={message.user}
                          >
                            {message.text}
                          </Message>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mx-6 py-2">
                  <ChatInput threadId={threadRootMessage.id} />
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};
