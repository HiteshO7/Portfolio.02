import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Magnetic({ children }) {
    const magnetic = useRef(null);

    useEffect(() => {
        console.log(children);
        const currentMagnetic = magnetic.current; // Store the current value in a variable
        const xTo = gsap.quickTo(currentMagnetic, "x", {
            duration: 1,
            ease: "elastic.out(1, 0.3)"
        });
        const yTo = gsap.quickTo(currentMagnetic, "y", {
            duration: 1,
            ease: "elastic.out(1, 0.3)"
        });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = currentMagnetic.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        currentMagnetic.addEventListener("mousemove", handleMouseMove);
        currentMagnetic.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            currentMagnetic.removeEventListener("mousemove", handleMouseMove);
            currentMagnetic.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [children]); // 'children' added as a dependency

    return React.cloneElement(children, { ref: magnetic });
}
