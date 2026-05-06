import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const target = event.target;
            const isClickable =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button");

            setIsPointer(Boolean(isClickable));
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div
                style={{
                    ...styles.cursorDot,
                    transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
                }}
            />

            <div
                style={{
                    ...styles.cursorRing,
                    ...(isPointer ? styles.cursorRingActive : {}),
                    transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
                }}
            />
        </>
    );
}

const styles = {
    cursorDot: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: "#d946ef",
        boxShadow: "0 0 18px rgba(217, 70, 239, 0.95)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "transform 0.03s linear",
    },

    cursorRing: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "1px solid rgba(216, 180, 254, 0.75)",
        background: "rgba(168, 85, 247, 0.08)",
        boxShadow: "0 0 35px rgba(168, 85, 247, 0.35)",
        pointerEvents: "none",
        zIndex: 9998,
        transition:
            "transform 0.09s ease-out, width 0.2s ease, height 0.2s ease, background 0.2s ease, border 0.2s ease",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
    },

    cursorRingActive: {
        width: "56px",
        height: "56px",
        background: "rgba(217, 70, 239, 0.16)",
        border: "1px solid rgba(240, 171, 252, 0.95)",
        boxShadow: "0 0 45px rgba(217, 70, 239, 0.55)",
    },
};