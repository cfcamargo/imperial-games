
import React from 'react';
import { DefaultUi, Player, Youtube } from "@vime/react";

import '@vime/core/themes/default.css'
export function VideoPlayer() {

const videoURL = "3QHPHi0YlY8"

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1200px] max-h-[50vh] aspect-video z-10">
          <Player>
            <Youtube videoId={videoURL} />
            <DefaultUi />
          </Player>
        </div>
      </div>
    </div>
)
}