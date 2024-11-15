"use client";
import React, { useState } from "react";
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";
import useEmailState from "@/hooks/useEmailState";
import { EmailWithStatus } from "@/types/email";

function EmailList({ filter }: { filter: string }) {
  const [emailId, setEmailId] = useState("");
  const { emails, loading, toggleFavorite, toggleRead } = useEmailState();

  return (
    <div className="grid grid-cols-12">
      <div className={`${emailId === "" ? "col-span-12" : "col-span-4"}`}>
        <LeftBar
          emails={emails}
          loading={loading}
          filter={filter}
          emailId={emailId}
          setEmailId={setEmailId}
        />
      </div>
      <div className={`${emailId === "" ? "hidden" : "col-span-8"}`}>
        {emailId !== "" && (
          <RightBar
            toggleFavorite={toggleFavorite}
            toggleRead={toggleRead}
            email={
              emails?.find((email) => email.id === emailId) as EmailWithStatus
            }
            emailId={emailId}
          />
        )}
      </div>
    </div>
  );
}

export default EmailList;
