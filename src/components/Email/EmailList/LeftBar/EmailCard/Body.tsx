import { formatDate } from "@/Services/utils";
import { EmailWithStatus } from "@/types/email";
import React from "react";

function Body({ email }: { email: EmailWithStatus }) {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <div>
        <p>
          From:{" "}
          <span className="font-semibold">
            {email.from.name} &lt;{email.from.email}&gt;
          </span>
        </p>
        <p>
          Subject: <span className="font-semibold">{email.subject}</span>
        </p>
      </div>
      <div className="space-y-1">
        <p className="line-clamp-1">{email.short_description}</p>
        <div className="flex gap-5 items-center">
          <p>{formatDate(email.date)}</p>
          {email.isFavorite && (
            <p className="text-accentcolor font-semibold text-xs">Favorite</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
