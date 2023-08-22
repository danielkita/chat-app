import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const uploadFile = async (file: File): Promise<{ url: string }> => {
  const formData = new FormData();

  formData.append('file', file);

  /*
   * External service
   * Source code: https://github.com/danielkita/fileuploader/tree/node
   * */
  const response = await fetch('https://file.awwweso.me', {
    body: formData,
    method: 'POST',
  });

  return response.json();
};
