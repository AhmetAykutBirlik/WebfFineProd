'use client';

interface ServiceVideoProps {
    videoSrc: string;
    title: string;
}

export default function ServiceVideo({ videoSrc, title }: ServiceVideoProps) {
    return (
        <video
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-full object-cover"
        >
            <source src={videoSrc} type="video/quicktime" />
            <source src={videoSrc} type="video/mp4" />
        </video>
    );
}
