"use clinet";
import { getEmailBody } from "@/Services/apiService";
import { formatDate } from "@/Services/utils";
import { EmailWithStatus } from "@/types/email";
import React, { useEffect, useState } from "react";

function Body({
  email,
  toggleFavorite,
}: {
  email: EmailWithStatus;
  toggleFavorite: (emailId: string) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [emailContent, setEmailContent] = useState("");

  useEffect(() => {
    setLoading(true);
    getEmailBody(email.id)
      .then((body) => setEmailContent(body))
      .catch(() => {
        setLoading(false);
        alert("Error fetching Email Body");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [email]);

  return (
    <div className="flex flex-col w-full gap-3 max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">{email.subject}</h1>
        <button
          onClick={() => toggleFavorite(email.id)}
          className="text-white bg-accentcolor px-2 py-0.5 rounded-full text-xs font-semibold"
        >
          Mark as Favorite
        </button>
      </div>
      <div>
        <p className="text-sm">{formatDate(email.date)}</p>
      </div>
      <div className="pt-5 ">
        {loading ? (
          "Loading..."
        ) : (
          <div
            className="flex flex-col gap-2 space-y-2"
            dangerouslySetInnerHTML={{ __html: emailContent.slice(5, -6) }}
          />
        )}
      </div>
    </div>
  );
}

export default Body;
