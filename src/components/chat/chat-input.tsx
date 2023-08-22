import { useChatInput } from '@/components/chat/use-chat-input.ts';
import { Button } from '@/components/ui/button.tsx';
import { FileUploader } from '@/components/chat/files/file-uploader.tsx';
import { ImagePreviewBox } from '@/components/chat/files/image-preview-box.tsx';
import React from 'react';

export const ChatInput = ({ threadId }: { threadId?: string }) => {
  const [loading, setLoading] = React.useState(false);

  const { handleSubmit, handleUpload, handlePreviewClose, url, mode } =
    useChatInput({ threadId });

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-24 bg-white">
        <div className="flex items-center h-full p-4">
          <div className="mr-4">
            <FileUploader
              loading={loading}
              setLoading={setLoading}
              onUpload={handleUpload}
            />
          </div>
          {mode === 'TEXT' ? (
            <input
              name="message"
              type="text"
              required
              className="mr-2 flex-1 border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />
          ) : (
            <ImagePreviewBox url={url} onClose={handlePreviewClose} />
          )}
          <Button disabled={loading} type="submit">
            Send
          </Button>
        </div>
      </div>
    </form>
  );
};
