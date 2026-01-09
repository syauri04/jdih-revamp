"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { IoPlay, IoPause } from "react-icons/io5";

interface CardAudioProps {
  audioSrc: string;
}

export default function CardAudio({ audioSrc }: CardAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const BAR_COUNT = 120;

  const [waveform] = useState<number[]>(() =>
    Array.from({ length: BAR_COUNT }, () => Math.random() * 0.9 + 0.1)
  );

  /* ------------------ utils ------------------ */

  const fileName = useMemo(() => {
    try {
      return decodeURIComponent(audioSrc.split("/").pop() || "Audio");
    } catch {
      return "Audio";
    }
  }, [audioSrc]);

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "00:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  /* ------------------ audio controls ------------------ */

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();

    setIsPlaying((prev) => !prev);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;

    setCurrentTime(audioRef.current.currentTime);
    setProgress(audioRef.current.currentTime / audioRef.current.duration || 0);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!audioRef.current || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const seekTime = (clickX / rect.width) * audioRef.current.duration;

    audioRef.current.currentTime = seekTime;
  };

  /* ------------------ draw waveform ------------------ */

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || waveform.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const barWidth = width / BAR_COUNT;
    const playedBars = Math.floor(progress * BAR_COUNT);

    waveform.forEach((value, i) => {
      const barHeight = value * height;
      ctx.fillStyle = i <= playedBars ? "#097969" : "rgba(9,121,105,0.3)";
      ctx.fillRect(i * barWidth, height - barHeight, barWidth * 0.7, barHeight);
    });
  }, [progress, waveform]);

  /* ------------------ render ------------------ */

  return (
    <div className="bg-[rgba(117,116,116,0.05)] rounded-[20px] p-8 mt-16">
      {/* Title */}
      <h2 className="text-[#097969] text-[32px] leading-10 tracking-[-0.02em] font-bold mb-8">
        Audio Peraturan
      </h2>

      {/* File info */}
      <div className="flex items-center justify-between mb-4 text-sm text-black/60 tracking-[-0.01em]">
        <span className="font-medium truncate max-w-[70%]">{fileName}</span>
        <span className="tabular-nums">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      {/* Player */}
      <div className="flex items-center gap-5">
        <button
          onClick={togglePlay}
          className="
                w-14 h-14 
                rounded-full 
                bg-[#043927] text-white
                flex items-center justify-center
                leading-none p-0
                shrink-0
                hover:opacity-90 transition
                cursor-pointer
            "
        >
          {isPlaying ? <IoPause size={28} /> : <IoPlay size={28} />}
        </button>

        <canvas
          ref={canvasRef}
          width={600}
          height={70}
          onClick={handleSeek}
          className="cursor-pointer w-full"
        />
      </div>

      <audio
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
