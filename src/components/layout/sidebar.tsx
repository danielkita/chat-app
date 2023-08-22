import { Profile } from '@/components/user/profile.tsx';

export const Sidebar = () => {
  return (
    <>
      <div className="w-1/4 bg-white shadow">
        <div className="p-4">
          <Profile />

          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:text-blue-700"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:text-blue-700"
              >
                Chats
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:text-blue-700"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
