import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function MatchaSequence({ frameCount = 15, folderPath = '/matcha_img_seq/', fileNamePrefix = '', fileNameSuffix = '.png' }) {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef(null);

    // Use window scroll for simplicity with sticky header
    // We map 0px to 2 viewport heights (approx scroll duration of sticky section)
    const { scrollY } = useScroll();

    // transform scrollY pixels [0, 1500] -> [0, 14]
    const rawIndex = useTransform(scrollY, [0, window.innerHeight * 2], [0, frameCount - 1], { clamp: true });

    const [currentFrame, setCurrentFrame] = useState(0);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            // Format: 001, 002, etc.
            const padIndex = i.toString().padStart(3, '0');
            img.src = `${folderPath}${fileNamePrefix}${padIndex}${fileNameSuffix}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, [frameCount, folderPath, fileNamePrefix, fileNameSuffix]);

    // Initial draw
    useEffect(() => {
        if (isLoaded && images.length > 0 && canvasRef.current) {
            renderFrame(0);
        }
    }, [isLoaded, images]);

    useMotionValueEvent(rawIndex, "change", (latest) => {
        const frameIndex = Math.round(latest);
        if (frameIndex !== currentFrame && isLoaded) {
            renderFrame(frameIndex);
            setCurrentFrame(frameIndex);
        }
    });

    const renderFrame = (index) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = images[index];

        if (!canvas || !img) return;

        // Handle High DPI
        const dpr = window.devicePixelRatio || 1;
        // Get parent dimensions
        const rect = canvas.getBoundingClientRect();

        // Set actual size in memory (scaled to account for extra pixel density)
        if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        }

        // Draw Image Cover logic
        const ratio = img.width / img.height;
        let newWidth = rect.width;
        let newHeight = rect.width / ratio;

        if (newHeight < rect.height) {
            newHeight = rect.height;
            newWidth = rect.height * ratio;
        }

        const xOffset = newWidth > rect.width ? (rect.width - newWidth) / 2 : 0;
        const yOffset = newHeight > rect.height ? (rect.height - newHeight) / 2 : 0;

        // Clear and draw
        ctx.clearRect(0, 0, rect.width, rect.height);
        ctx.drawImage(img, xOffset, yOffset, newWidth, newHeight);
    };

    // Resize handler
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) renderFrame(currentFrame);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, currentFrame]);

    return (
        <div ref={containerRef} className="matcha-sequence-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'cover' // fallback
                }}
            />
            {!isLoaded && <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--bg-dark)' }}></div>}
        </div>
    );
}
