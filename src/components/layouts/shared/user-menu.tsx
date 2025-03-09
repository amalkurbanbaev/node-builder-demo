import { KeyRoundIcon, LogOutIcon, UserCircle2Icon } from "lucide-react";

import { DropdownMenu } from "@/components/ui/dropdown-menu";

export const UserMenu = () => {
  const handleChangePassword = async () => {
    return undefined;
  };

  const handleLogout = async () => {
    return undefined;
  };

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <div className="flex cursor-pointer items-center gap-x-3">
          <UserCircle2Icon size={40} strokeWidth={1} className="text-muted-foreground" />
          <div className="flex flex-col text-sm">
            <div className="font-semibold">{userInfo?.name}</div>
            <div className="text-muted-foreground">{userInfo?.email}</div>
          </div>
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content sideOffset={10} className="w-56">
        {!userInfo?.must_change_password ? (
          <DropdownMenu.Item onClick={handleChangePassword}>
            <KeyRoundIcon />
            <span>Сменить пароль</span>
          </DropdownMenu.Item>
        ) : null}

        <DropdownMenu.Item onClick={handleLogout}>
          <LogOutIcon />
          <span>Выйти из аккаунта</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};

const userInfo = {
  name: "John Doe",
  email: "john.doe@example.com",
  must_change_password: false,
};
