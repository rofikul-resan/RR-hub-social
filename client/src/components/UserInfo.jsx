import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { nameShorter } from "../utils";
import { AiOutlineLogout } from "react-icons/ai";

const UserInfo = () => {
  return (
    <Dropdown placement="bottom-start" className="mr-2 bg-black/80 text-white">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform  mr-2 w-7 h-7"
          color="secondary"
          name={nameShorter("Jason Hughes")}
          size="sm"
          src=""
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions">
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem
          key="logout"
          color="primary"
          className="text-center"
          as={Button}
        >
          <div className="flex gap-2 items-center justify-center ">
            <p> Log Out</p>
            <AiOutlineLogout />
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserInfo;