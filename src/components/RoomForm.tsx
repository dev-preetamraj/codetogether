"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

type Props = {
  setOpen: (value: boolean) => void;
};

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),

  roomId: z.string().min(6, {
    message: "Room ID must be 6 or more characters long",
  }),
});

const RoomForm = ({ setOpen }: Props) => {
  const router = useRouter();
  const { user } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user ? user.first_name + " " + user.last_name : "",
      roomId: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setOpen(false);
    router.push(`/room/${values.roomId}`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="roomId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room ID</FormLabel>
              <FormControl>
                <Input placeholder="Room ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create/Join Room</Button>
      </form>
    </Form>
  );
};

export default RoomForm;
