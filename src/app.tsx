import { Sidebar } from '@/components/layout/sidebar.tsx';
import { Chat } from '@/components/chat/chat.tsx';

const App = () => (
  <>
    <div className="flex h-screen bg-gray-100 divide-x">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white">
        <Chat />
      </div>
    </div>
  </>
);

export default App;
