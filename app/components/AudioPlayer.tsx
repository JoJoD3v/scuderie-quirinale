"use client";

import { useState, useRef, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

function formatTime(time: number): string {
  if (isNaN(time) || time === 0) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMuted) {
      const restore = volume > 0 ? volume : 0.5;
      audio.volume = restore;
      setVolume(restore);
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-darkgray rounded-2xl p-6 shadow-xl w-full">
      <audio
        ref={audioRef}
        src="/audio/audio.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      {/* Track info */}
      <div className="mb-5">
        <p className="font-body text-xs uppercase tracking-widest text-gray-400 mb-1">
          Audioguida d&apos;Autore
        </p>
        <p className="font-title text-white text-lg leading-snug">
          Zahi Hawass &amp; Roberto Giacobbo
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-2">
        <div className="relative w-full h-1.5 rounded-full bg-gray-600 mb-1 overflow-visible">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            aria-label="Posizione di riproduzione"
          />
        </div>
        <div className="flex justify-between font-body text-xs text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-5">
        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-md hover:bg-red-700 active:scale-95 transition-all duration-150"
          aria-label={isPlaying ? "Pausa" : "Riproduci"}
        >
          {isPlaying ? (
            <Pause size={22} strokeWidth={2.5} />
          ) : (
            <Play size={22} strokeWidth={2.5} className="ml-0.5" />
          )}
        </button>

        {/* Volume */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMute}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={isMuted ? "Attiva audio" : "Silenzia"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <div className="relative w-24 h-1.5 rounded-full bg-gray-600 hidden sm:block">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-primary"
              style={{ width: `${isMuted ? 0 : volume * 100}%` }}
            />
            <input
              type="range"
              min={0}
              max={1}
              step={0.02}
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              aria-label="Volume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
