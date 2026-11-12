"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // Force autoplay with muted property on mount (ensures Chrome, Safari, Edge allow autoplay)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Autoplay blocked, waiting for interaction:", err);
          setIsPlaying(false);
        });
    }
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div suppressHydrationWarning className="absolute inset-0 z-0 overflow-hidden select-none">
      {/* 1. Direct Background Video — Vivid, Clear, Unobstructed */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-thumb.jpg"
        suppressHydrationWarning
        className="w-full h-full object-cover object-center"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* 2. Light Natural Contrast Scrim — Keeps video vivid and engineer clearly visible */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60 pointer-events-none" />

      {/* 3. Floating Video Audio & Playback Controls (Bottom-Right) */}
      <div
        suppressHydrationWarning
        className="absolute bottom-6 right-6 z-30 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full shadow-2xl"
      >
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 pr-1.5 border-r border-white/15">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">Apex World Film</span>
        </div>

        <button
          type="button"
          onClick={toggleMute}
          title={isMuted ? "Unmute Audio" : "Mute Audio"}
          className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-slate-300" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-sky-400" />
          )}
        </button>

        <button
          type="button"
          onClick={togglePlay}
          title={isPlaying ? "Pause Video" : "Play Video"}
          className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 text-slate-300" />
          ) : (
            <Play className="w-3.5 h-3.5 text-sky-400" />
          )}
        </button>
      </div>
    </div>
  );
}
