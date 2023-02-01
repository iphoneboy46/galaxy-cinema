import React, { useState } from "react";
import "./VideoPlayer.scss";

interface VideoPlayerProps {
  datas: {
    id: number;
    name: string;
    url: string;
  }[];
  id: number | string;
}

function VideoPlayer({ datas, id }: VideoPlayerProps) {
  const handleClose = () => {
    const container = document.querySelector(".container") as HTMLDivElement;
    const modal = document.querySelector(".modal") as HTMLDivElement;
    const modal2 = document.querySelector(".modal2") as HTMLDivElement;

    const video = document.querySelector(".video") as HTMLIFrameElement;
    video.src = "";
    modal.style.display = "none";
    container.style.top = "-100%";
    container.style.display = "none";
    document.body.style.overflow = "auto";
    if(container.offsetWidth  >= 768 && container.offsetWidth <= 1024){
      modal2.style.display = 'none';
      

    }
    window.location.reload();
  };

  return (
    <>
      {datas?.map((data, index) => {
        if (data.id === id) {
          return (
            <div key={index} className="video-player">
              <i onClick={handleClose} className="fa-solid fa-xmark"></i>
              <h4>{data.name}</h4>
              <hr />
              <iframe className="video" src={data.url}></iframe>
            </div>
          );
        }
      })}
    </>
  );
}

export default VideoPlayer;
