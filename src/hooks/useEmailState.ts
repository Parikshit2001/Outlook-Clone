import { getAllEmail } from "@/Services/apiService";
import { Email, EmailWithStatus } from "@/types/email";
import { useEffect, useState } from "react";

const useEmailState = () => {
  const [emails, setEmails] = useState<EmailWithStatus[] | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleFavorite = (emailId: string) => {
    const updatedEmail = emails?.map((curr) => {
      if (curr.id === emailId) {
        curr.isFavorite = !curr.isFavorite;
      }
      return curr;
    });
    if (updatedEmail) setEmails(updatedEmail);
  };

  const toggleRead = (emailId: string) => {
    const updatedEmail = emails?.map((curr) => {
      if (curr.id === emailId) {
        curr.isRead = !curr.isRead;
      }
      return curr;
    });
    if (updatedEmail) setEmails(updatedEmail);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const emailData = localStorage.getItem("emailData");
        if (emailData) {
          setEmails(JSON.parse(emailData));
          return;
        }
        setLoading(true);
        const data = await getAllEmail();
        const emailWithStatus: EmailWithStatus[] = data.list.map(
          (email: Email) => ({
            ...email,
            isRead: false,
            isFavorite: false,
          })
        );
        setEmails(emailWithStatus);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (emails === null) loadData();
  }, [emails]);

  useEffect(() => {
    if (emails) {
      localStorage.setItem("emailData", JSON.stringify(emails));
    }
  }, [emails]);

  return { emails, loading, toggleFavorite, toggleRead };
};

export default useEmailState;
