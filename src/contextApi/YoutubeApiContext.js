import { createContext, useContext } from "react";
import FakeYoutubeClient from "../api/fakeYoutubeClient";
import YoutubeClient from "../api/youtubeClient";
import Youtube from "../api/youtube";
export const YoutubeContext = createContext();

export default function YoutubeApiProvider({ children }) {
  const client = new YoutubeClient();
  const youtube = new Youtube(client);
  return (
    <YoutubeContext.Provider value={{ youtube }}>
      {children}
    </YoutubeContext.Provider>
  );
}

export function YoutubeApi() {
  return useContext(YoutubeContext);
}
