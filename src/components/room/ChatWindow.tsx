"use client";

import { RootState } from "@/features/store";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Input } from "../ui/input";

const ChatWindow = () => {
  const chat = useSelector((state: RootState) => state.roomNav.chat);

  if (!chat) return null;

  return (
    <Card className="absolute bottom-2 right-2 w-[400px] h-[600px]">
      <CardHeader>
        <CardTitle>Chat on codeTogether</CardTitle>
        <CardDescription>Chat with your fellow coders</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col justify-between h-[490px]">
          <ScrollArea className="w-full h-[440px]">
            <div className="flex flex-col space-y-[2px] mb-2">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold">Rahul</p>
                <p className="text-xs font-thin">Today at 8:20 PM</p>
              </div>
              <p className="text-sm">Some random message...</p>
            </div>

						<div className="flex flex-col space-y-[2px] mb-2">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-semibold">Preetam</p>
                  <p className="text-xs font-thin">Today at 8:20 PM</p>
                </div>
                <p className="text-sm">Some random ha bhai sjdhkj ...</p>
              </div>
          </ScrollArea>
          <div>
            <Input type="text" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatWindow;
