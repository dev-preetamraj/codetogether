"use client";

import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import NavLogo from "../NavLogo";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/features/store";
import { activateChat, deactivateChat } from "@/features/roomNavSlice";
import LanguageSelector from "./editors/LanguageSelector";
import RunButton from "./RunButton";

const RoomNav = () => {
  const dispatch: AppDispatch = useDispatch();
  const chat = useSelector((state: RootState) => state.roomNav.chat);
	
  const whiteBoard = useSelector(
    (state: RootState) => state.roomNav.whiteBoard
  );
  const activeUser = useSelector(
    (state: RootState) => state.roomNav.activeUser
  );

  const handleChatClick = () => {
    if (chat) {
      dispatch(deactivateChat());
    } else {
      dispatch(activateChat());
    }
  };

  return (
    <nav className="flex items-center justify-between px-10 h-[4rem] sticky top-0 backdrop-blur-md shadow-sm z-50">
      <NavLogo />

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-4">
          <Button variant="secondary">Active Users</Button>
          <Button>Editor</Button>
          <Button variant="outline">Whiteboard</Button>
          <Button variant="destructive" onClick={handleChatClick}>
            Chat
          </Button>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default RoomNav;
