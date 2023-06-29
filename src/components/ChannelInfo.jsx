import React from "react";
import { YoutubeApi } from "../contextApi/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, name }) {
  const { youtube } = YoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    // my-4 위아래로 마진을 줌 , mb-8 아래로 마진을 줌
    <div className="flex my-4 mb-8 items-center">
      {url && <img className="w-10 h-10 rounded-full" src={url} alt={name} />}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  );
}
