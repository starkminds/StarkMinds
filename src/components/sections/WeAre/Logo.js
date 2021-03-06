
import React, { useState, useEffect } from 'react';

const Logo = props => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="logo-container" style={{ transform: `scale(${props.scale}) translateY(${offsetY * props.rate}px`, left: props.left, top: props.top, right: props.right, opacity:props.opacity, filter: `blur(${props.blur})` }}>
            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 60.43">
                <path
                    d="M82.41,3.34c-1.16-1.88-3.62-2.47-5.5-1.32l-18.4,11.28c-4.63-5.14-11.32-8.37-18.76-8.37-6.07,0-11.65,2.16-16.01,5.74L14.96,1.27c-1.51-1.61-4.04-1.7-5.65-.19-1.61,1.51-1.7,4.04-.19,5.65l9.3,9.96c-2.48,3.9-3.92,8.53-3.92,13.49,0,3.2,.6,6.26,1.69,9.08L1.91,48.02c-1.88,1.15-2.47,3.62-1.32,5.5,.75,1.23,2.07,1.91,3.41,1.91,.71,0,1.44-.19,2.09-.59l14.13-8.67c4.63,5.65,11.67,9.26,19.52,9.26,4.38,0,8.49-1.12,12.09-3.09l6.24,6.82c.79,.84,1.85,1.27,2.92,1.27,.98,0,1.96-.36,2.73-1.08,1.61-1.51,1.7-4.04,.19-5.65l-5.84-6.18c4.28-4.53,6.92-10.63,6.92-17.34,0-3.61-.77-7.05-2.14-10.16l18.23-11.18c1.88-1.15,2.47-3.62,1.32-5.5ZM22.5,30.18c0-9.51,7.74-17.25,17.25-17.25,4.55,0,8.68,1.78,11.76,4.67l-28.32,17.37c-.44-1.52-.69-3.13-.69-4.79Zm34.5,0c0,9.51-7.74,17.25-17.25,17.25-4.97,0-9.45-2.13-12.6-5.51l28.78-17.65c.68,1.85,1.07,3.83,1.07,5.91Z"
                    fill={props.color || "black"}/>  
                </svg>
        </div>
    )
}

export default Logo;