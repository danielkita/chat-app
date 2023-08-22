import React from 'react';
import { PlusSquare, Loader } from 'lucide-react';
import { uploadFile } from '@/lib/utils.ts';

export const FileUploader = ({
  onUpload,
  loading,
  setLoading,
}: {
  onUpload: (url: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleUpload = async (files: FileList) => {
    setLoading(true);
    const file = files[0];
    if (!file) {
      return;
    }
    try {
      const uploadedFile = await uploadFile(file);
      onUpload(uploadedFile.url);
    } catch (e) {
      // TODO: error handling
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) handleUpload(event.target.files);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <input
        accept="image/*"
        onChange={handleFileChange}
        type="file"
        name="file"
        hidden
        ref={inputRef}
      />
      <button
        disabled={loading}
        type="button"
        className="inline-block align-middle"
        onClick={handleClick}
      >
        {loading ? (
          <Loader className="text-slate-500" />
        ) : (
          <PlusSquare className="text-slate-500" />
        )}
      </button>
    </>
  );
};
