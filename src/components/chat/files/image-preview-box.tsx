import { X } from 'lucide-react';

interface Props {
  url: string;
  onClose: () => void;
}

export const ImagePreviewBox = ({ url, onClose }: Props) => (
  <div className="w-full p-4">
    <div className="p-2 rounded relative w-full h-full border-slate-100 border">
      <img src={url} alt="Upload Preview" className="max-h-12" />
      <button onClick={onClose} className="absolute right-0 top-0 p-1">
        <X size={15} />
      </button>
    </div>
  </div>
);
