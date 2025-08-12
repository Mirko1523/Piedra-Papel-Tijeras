import React from "react";
import Image from "next/image";

export default function GoGame() {
  return (
    <div>
      <a
        href="/play"
        className="inline-block group rounded-lg cursor-pointer" 
      >
        <Image
          src="/buttonstart.png"
          alt="A jugar"
          width={150}
          height={180}
          className="block transform transition-transform duration-200 ease-out group-hover:scale-110 active:scale-95 origin-center will-change-transform relative z-10 rounded-lg"
        />
      </a>
    </div>
  );
}
