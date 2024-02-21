import ChatWindow from "@/components/room/ChatWindow";
import RoomNav from "@/components/room/RoomNav";
import React, { PropsWithChildren } from "react";

const RoomLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative w-full h-full">
      <RoomNav />
      {children}
      <ChatWindow />
    </div>
  );
};

export default RoomLayout;
