import React from "react";
import EmailCard from "./EmailCard/EmailCard";
import { EmailWithStatus } from "@/types/email";

function LeftBar({
  emailId,
  setEmailId,
  filter,
  emails,
  loading,
}: {
  emailId: string;
  setEmailId: (emailId: string) => void;
  filter: string;
  emails: EmailWithStatus[] | null;
  loading: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 max-h-[90vh] overflow-y-auto">
      {loading ? (
        <p>Loading...</p>
      ) : (
        emails
          ?.filter((email) => {
            if (filter === "Read" && email.isRead) {
              return true;
            } else if (filter === "Unread" && !email.isRead) {
              return true;
            } else if (filter === "Favorites" && email.isFavorite) {
              return true;
            } else if (filter === "") {
              return true;
            } else {
              return false;
            }
          })
          .map((email) => (
            <div key={email.id} onClick={() => setEmailId(email.id)}>
              <EmailCard
                email={email}
                selected={email.id === emailId}
                setEmailId={setEmailId}
              />
            </div>
          ))
      )}
    </div>
  );
}

export default LeftBar;
