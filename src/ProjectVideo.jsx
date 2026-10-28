import { useEffect, useRef } from 'react';

export default function ProjectVideo({ src, poster, title }) {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    let player;
    let disposed = false;
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else {
      import('hls.js').then(({ default: Hls }) => {
        if (disposed || !Hls.isSupported()) return;
        player = new Hls({ maxBufferLength: 30, maxMaxBufferLength: 60 });
        player.loadSource(src);
        player.attachMedia(video);
      });
    }
    return () => { disposed = true; player?.destroy(); };
  }, [src]);
  return <video ref={videoRef} poster={poster} controls preload="metadata" playsInline aria-label={`${title} project video`} />;
}
