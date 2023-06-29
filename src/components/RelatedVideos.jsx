import { useQuery } from "@tanstack/react-query";
import React from "react";
import { YoutubeApi } from "../contextApi/YoutubeApiContext";
import VideoCard from "./VideoCard";
export default function RelatedVideos({ id }) {
  const { youtube } = YoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </div>
  );
}
