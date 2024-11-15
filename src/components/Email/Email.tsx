"use client";
import { useState } from "react";
import EmailFilter from "./EmailFilter";
import EmailList from "./EmailList/EmailList";

function Email() {
  const [filter, setFilter] = useState("");
  return (
    <div className="pt-5 px-10">
      <EmailFilter filter={filter} setFilter={setFilter} />
      <EmailList filter={filter} />
    </div>
  );
}

export default Email;
