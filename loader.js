"use client";

export default function loader({ src, width, quality }) {
    return `https://youtube.stephenkilonzo.com/${src}?w=${width}&q=${quality || 75}`;
}
