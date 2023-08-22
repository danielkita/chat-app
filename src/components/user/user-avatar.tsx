import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar.tsx';
import { User } from 'types/message';

export const UserAvatar = ({ user }: { user: User }) => {
  return (
    <Avatar>
      <AvatarImage
        src={`https://i.pravatar.cc/150?${new URLSearchParams({
          u: user.id,
        }).toString()}`}
      />
      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
    </Avatar>
  );
};
