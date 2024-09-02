import axios from "axios";
import "dotenv/config";
import { ResponseListNotifications } from "./interfaces/notifications";
import { Mentions } from "./interfaces/mentions";
import { api } from "./config/api";

export async function getMentions(token: string): Promise<Mentions> {
  const { data } = await api.get<ResponseListNotifications>(
    `app.bsky.notification.listNotifications`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return {
    mentions: data.notifications.filter(({ reason }) => reason === "mention"),
  };
}
