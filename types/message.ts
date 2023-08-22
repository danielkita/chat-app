export type MessageType = 'TEXT' | 'IMAGE';

export interface User {
  id: string;
  name: string;
}

export interface Message {
  id: string;
  text: string;
  user: User;
  threadId?: string;
  date: Date;
  type: MessageType;
}
