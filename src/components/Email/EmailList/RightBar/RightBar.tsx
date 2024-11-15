import Avatar from "@/components/Avatar/Avatar";
import React from "react";
import Body from "./Body";
import { EmailWithStatus } from "@/types/email";

function RightBar({
  emailId,
  email,
  toggleFavorite,
  toggleRead,
}: {
  emailId: string;
  email: EmailWithStatus;
  toggleFavorite: (emailId: string) => void;
  toggleRead: (emailId: string) => void;
}) {
  if (!email.isRead) toggleRead(emailId);
  return (
    <div className="bg-white flex gap-5 py-8 pl-6 pr-16 ml-2 mr-5 rounded-lg border-bordercolor border">
      <Avatar
        character={email.from.name.charAt(0)}
        className="size-12 text-2xl"
      />
      <Body toggleFavorite={toggleFavorite} email={email} />
    </div>
  );
}

export default RightBar;
