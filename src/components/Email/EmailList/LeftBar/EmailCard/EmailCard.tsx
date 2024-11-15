import React from "react";
import Avatar from "../../../../Avatar/Avatar";
import Body from "./Body";
import { EmailWithStatus } from "@/types/email";

function EmailCard({
  selected = false,
  setEmailId,
  email,
}: {
  selected?: boolean;
  setEmailId: (emailId: string) => void;
  email: EmailWithStatus;
}) {
  return (
    <div
      className={`flex gap-5 hover:border-accentcolor border rounded-lg px-4 py-2 mr-4 cursor-pointer ${
        selected ? "bg-readbgcolor" : "bg-white"
      }`}
      onClick={setEmailId ? () => setEmailId(email.id) : undefined}
    >
      <Avatar character={email.from.name[0]} />
      <Body email={email} />
    </div>
  );
}

export default EmailCard;
