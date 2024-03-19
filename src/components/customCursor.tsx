import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                top: position.y + 'px',
                left: position.x + 'px',
            }}
        ></div>
    );
};

export default CustomCursor;