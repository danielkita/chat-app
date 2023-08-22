import { createServer } from 'http';
import { Server } from 'socket.io';
import { Message } from './types/message';
import { randomUUID } from 'crypto';

const httpServer = createServer();

const io = new Server(httpServer, {
  // @ts-expect-error ts types mismatch
  cors: {
    origin: '*',
  },
  path: '/socket.io',
});

io.on('connection', (socket) => {
  const user = {
    id: randomUUID(),
    name: 'Anonymous',
  };
  socket.on('message', (data: Pick<Message, 'user' | 'text'>) => {
    const msg: Message = {
      ...data,
      id: randomUUID(),
    };
    io.emit('message', msg);
  });

  socket.on('typing', () => {
    socket.broadcast.emit('typing', {
      user,
    });
  });

  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', {
      user,
    });
  });
});

httpServer.listen(4000);

console.log('socket server started, listening on port 4000');
