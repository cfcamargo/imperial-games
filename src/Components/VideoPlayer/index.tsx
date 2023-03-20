import React from 'react';
import ReactPlayer from 'react-player';


interface VideoURLProps  {
  videoURL: string;
}

export function VideoPlayer({videoURL} : VideoURLProps) {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1200px] max-h-[70vh] aspect-video z-10">
          <ReactPlayer
            url={videoURL}
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>
    </div>
)
}