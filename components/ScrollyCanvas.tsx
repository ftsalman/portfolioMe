"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const frameCount = 160;

  const currentFrame = (index: number) =>
    `/sequence/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.png`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  // Preload images
  useEffect(() => {
    const preload = async () => {
      const promises = Array.from({ length: frameCount }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.src = currentFrame(i);
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
      });

      try {
        imagesRef.current = await Promise.all(promises);
        setImagesLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };

    preload();
  }, []);

  const drawImage = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = imagesRef.current[index];
    if (!image) return;

    const { width, height } = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    const hRatio = width / image.width;
    const vRatio = height / image.height;
    const ratio = Math.max(hRatio, vRatio);

    const centerX = (width - image.width * ratio) / 2;
    const centerY = (height - image.height * ratio) / 2;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      centerX,
      centerY,
      image.width * ratio,
      image.height * ratio
    );
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!imagesLoaded) return;

    const index = Math.round(latest);
    requestAnimationFrame(() => drawImage(index));
  });

  useEffect(() => {
    if (!imagesLoaded) return;

    drawImage(0);

    const handleResize = () => {
      const index = Math.round(frameIndex.get());
      drawImage(index);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, frameIndex]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
        <canvas ref={canvasRef} className="w-full h-full block" />

        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Loading experience...
          </div>
        )}
      </div>
    </div>
  );
}