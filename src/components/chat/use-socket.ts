import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useEffect } from 'react';
import { Socket, io } from 'socket.io-client';

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

const connect = () => {
  socket = io('ws://localhost:4000', {
    path: '/socket.io',
  });
};

const getSocketInstance = () => socket;

export const useSocket = () => {
  useEffect(() => {
    if (!socket) {
      console.log('connect ws');
      connect();
      return () => {
        console.log('disconnect ws');
        socket.close();
      };
    }
  }, []);

  return getSocketInstance;
};
