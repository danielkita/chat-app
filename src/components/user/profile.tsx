import React, { useRef } from 'react';
import { useUser } from '@/components/user/use-user.ts';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { UserAvatar } from '@/components/user/user-avatar.tsx';

export const Profile = () => {
  const [editMode, setEditMode] = React.useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { user, setUser } = useUser();

  const handleEditClick = () => {
    setEditMode(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 10);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userName = formData.get('userName') as string;
    setUser({
      id: user.id,
      name: userName,
    });
    setEditMode(false);
  };

  return (
    <div className="flex justify-between">
      {editMode ? (
        <form
          onSubmit={handleSubmit}
          className="mb-4 flex justify-between w-full"
        >
          <Input name="userName" ref={inputRef} defaultValue={user.name} />
          <Button className="ml-3" size="sm">
            Save
          </Button>
        </form>
      ) : (
        <>
          <div className="flex items-center mb-4">
            <UserAvatar user={user} />
            <span className="ml-2">{user.name}</span>
          </div>
          <div>
            <Button size="sm" onClick={handleEditClick}>
              Edit
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
