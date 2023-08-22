import { Sidebar } from '@/components/layout/sidebar.tsx';
import { Chat } from '@/components/chat/chat.tsx';

const App = () => (
  <>
    <div className="flex md:flex-row flex-col h-screen bg-gray-100 md:divide-x">
      <Sidebar />
      <div className="pt-[88px] flex-1 flex flex-col bg-white md:pt-0 h-full">
        <Chat />
      </div>
    </div>
  </>
);

export default App;
