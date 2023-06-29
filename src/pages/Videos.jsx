import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useQuery } from "@tanstack/react-query";
import { YoutubeApi } from "../contextApi/YoutubeApiContext";
export default function Videos() {
  const { query } = useParams();
  const { youtube } = YoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", query], () => youtube.search(query), {
    staleTime: 1000 * 60 * 1,
  });

  return (
    <>
      <div>video {query ? `${query}` : "ㅎ"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
