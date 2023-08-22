import { Profile } from '@/components/user/profile.tsx';

export const Sidebar = () => {
  return (
    <>
      <div className="absolute inset-x-0 t-0 md:w-1/4 bg-white shadow md:static">
        <div className="p-4">
          <Profile />

          <ul className="space-y-2 hidden md:block">
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
