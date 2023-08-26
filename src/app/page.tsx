"use client";

import VideoCard from "@/components/VideoCard";
import { VideoCardProps } from "@/components/types";
import videosData from "@/mockData/videos.json";

export default function Home() {
  return (
    <main className="flex flex-row">
      <div className="grid grid-rows-6 xxl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gird-cols-1">
        {videosData.map((video: VideoCardProps) => (
          <VideoCard
            video={video}
            key={video.videoUrl}
          />
        ))}
      </div>
    </main>
  );
}
