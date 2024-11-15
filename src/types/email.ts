export interface Email {
  id: string;
  from: {
    email: string;
    name: string;
  };
  date: number;
  subject: string;
  short_description: string;
}

export interface EmailWithStatus extends Email {
  isRead: boolean;
  isFavorite: boolean;
}
