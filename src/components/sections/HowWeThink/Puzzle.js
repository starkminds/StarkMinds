import React, { useState } from 'react';
import variables from "../../../scss/_exports.module.scss";
import Canvas from './Canvas';


function Puzzle() {
    const [activeClick, setActiveClick] = useState(0);
    const [blowUp, setBlowUp] = useState(false);
    const determineClick = (num) => {
        if (activeClick < 8) {
            if ((num - activeClick !== 1) && (num - activeClick !== 0)) {
                // must click next dot in list
                blowItUp();
            } else {
                setActiveClick(num);
            }
        }
    }

    const blowItUp = () => {
        setBlowUp(true);
        setActiveClick(0);

        setTimeout(() => {
            setBlowUp(false);
        }, 2000);
    }


    return (
        <div>
            <div style={{ zIndex: `${activeClick > 6 ? '2': '1'}`}} class="canvas-container">
                <Canvas />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 411.27 295.76" className="puzzle" style={{backgroundColor: `${blowUp ? variables['stark-red']: 'transparent'}`, zIndex: `${activeClick > 7 ? '1': '2'}`}}>
                <g id="phase_6" style={{ opacity: `${activeClick > 7 ? '100': '0'}`}}>
                    <g fill={variables[`${activeClick > 7 ? 'stark-red': 'stark-dark'}`]}>
                        <path
                            d="M410.85,30.96c.16,4.15-1.39,7.53-4.88,9.8-8.38,5.46-16.73,10.97-25.24,16.21-11.71,7.21-55.62,33.3-69.35,41.51-5.09-11.73-11.91-22.52-20.17-32.05,11.02-6.62,18-10.82,18.97-11.41,9.89-5.99,19.79-11.97,29.73-17.89,13.73-8.2,27.46-16.38,41.27-24.45,2.75-1.61,5.74-2.89,8.75-3.96,3.42-1.22,6.76-.56,9.61,1.7,6.6,5.26,10.97,11.81,11.31,20.54Z" />
                        <path
                            d="M318.72,268.83c5.03,5.2,5.72,9.66,2.26,16.06-1.49,2.75-6.49,6.93-6.49,6.93,0,0-12,11-26-5,0,0-18.82-20.3-29-31,9.16-5.33,17.57-11.78,25.05-19.17l1.75-1.34c5.98,6.24,11.8,12.35,17.65,18.41,4.9,5.06,9.87,10.05,14.78,15.11Z" />
                        <path
                            d="M310.19,99.19c.37-.22,.76-.46,1.19-.71,6.56,15.17,10.2,31.91,10.2,49.49,0,33.91-13.54,64.65-35.5,87.13-.51,.52-1.02,1.03-1.54,1.55l-25.05,19.17c-18.39,10.69-39.76,16.81-62.57,16.81-39,0-73.82-17.91-96.68-45.95,7.48-4.55,19.39-11.79,33.83-20.56,18.59,20.06,46.44,30.88,75.52,26.53,46.77-7,79.01-50.58,72.01-97.35-.85-5.66-2.23-11.11-4.09-16.29,19.43-11.8,32.36-19.64,32.68-19.82Z" />
                        <path
                            d="M311.38,98.48c-.43,.25-.82,.49-1.19,.71l-34.81,14.47c-4.41-10.13-10.69-19.14-18.36-26.67,13.38-8.04,25.15-15.12,34.19-20.56,8.26,9.53,15.08,20.32,20.17,32.05Z" />v
                        <path d="M275.38,113.66l34.81-14.47c-.32,.18-13.25,8.02-32.68,19.82-.65-1.82-1.36-3.6-2.13-5.35Z" />
                        <path d="M259.49,255.82l25.05-19.17c-7.48,7.39-15.89,13.84-25.05,19.17Z" />
                        <path
                            d="M277.51,119.01c-38.19,23.18-101.49,61.63-143.44,87.11-7.11-7.67-12.87-16.69-16.82-26.73l158.13-65.73c.77,1.75,1.48,3.53,2.13,5.35Z" />
                        <path
                            d="M275.38,113.66L117.25,179.39c-.89-2.26-1.68-4.56-2.38-6.92,39.76-23.91,99.26-59.69,142.15-85.48,7.67,7.53,13.95,16.54,18.36,26.67Z" />
                        <path
                            d="M117.25,179.39c3.95,10.04,9.71,19.06,16.82,26.73-14.44,8.77-26.35,16.01-33.83,20.56-7.88-9.67-14.34-20.54-19.04-32.3l36.05-14.99Z" />
                        <path
                            d="M117.25,179.39l-36.05,14.99c-.18-.44-.36-.88-.53-1.32,7.46-4.49,19.48-11.73,34.2-20.59,.7,2.36,1.49,4.66,2.38,6.92Z" />
                        <path
                            d="M113.91,54.5l-1.44,1.76c-7.98,7.36-15,15.74-20.84,24.94-3.5-3.79-9.03-9.81-12.58-13.54-9.24-9.7-18.52-19.37-27.82-29.01-3.25-3.37-6.43-6.83-9.95-9.89-3.94-3.43-4.83-7.47-3.44-12.22C40.19,8.48,49.87,.82,57.69,.58c3.37-.11,5.97,1.07,8.3,3.52,15.29,16.08,32.59,34.36,47.92,50.4Z" />
                        <path d="M112.47,56.26l-20.56,25.24c-.09-.1-.18-.2-.28-.3,5.84-9.2,12.86-17.58,20.84-24.94Z" />
                        <path
                            d="M109.49,151.9l.05-5.36c-.08,1.78-.08,3.57-.05,5.36ZM184.25,63.29c-46.77,7-79.01,50.59-72.01,97.35,.61,4.06,1.49,8.01,2.63,11.83-14.72,8.86-26.74,16.1-34.2,20.59-5.43-13.98-8.41-29.19-8.41-45.09,0-24.57,7.1-47.47,19.37-66.77,.1,.1,.19,.2,.28,.3l20.56-25.24c.55-.51,1.11-1.01,1.67-1.51,22.02-19.56,51.01-31.44,82.78-31.44,37.67,0,71.44,16.71,94.29,43.12-9.04,5.44-20.81,12.52-34.19,20.56-18.52-18.24-45.09-27.84-72.77-23.7Z" />
                        <path d="M109.49,151.9c-.03-1.79-.03-3.58,.05-5.36l-.05,5.36Z" />
                        <path
                            d="M81.2,194.38c4.7,11.76,11.16,22.63,19.04,32.3-5.33,3.23-8.42,5.1-8.56,5.19-13.3,8.07-26.59,16.19-39.91,24.23-7.97,4.8-16.02,9.45-24,14.22-5.33,3.2-10.51,2.94-15.27-.93-6.93-5.63-11.82-12.54-11.96-21.89-.06-4.32,1.87-7.66,5.66-9.91,13.76-8.16,27.48-16.39,41.24-24.55,8.35-4.96,16.63-10.09,25.01-15.02l8.75-3.64Z" />
                        <path d="M81.2,194.38l-8.75,3.64c.61-.37,3.5-2.12,8.22-4.96,.17,.44,.35,.88,.53,1.32Z" />
                    </g>
                </g>
                <g id="phase_5" style={{ opacity: `${activeClick > 6 ? '100': '0'}`}} fill={variables[`${activeClick > 7 ? 'stark-red': 'stark-dark'}`]}>
                    <g>
                        <path
                            d="M380.44,56.65c-11.71,7.21-55.62,33.31-69.35,41.51-5.08-11.73-11.91-22.53-20.16-32.06,11.01-6.62,17.99-10.82,18.96-11.4,9.89-5.99,19.79-11.97,29.73-17.89,13.73-8.2,27.46-16.38,41.27-24.45,2.75-1.61,5.74-2.89,8.75-3.96,3.42-1.22,6.76-.56,9.61,1.7,6.6,5.26,10.97,11.81,11.31,20.54,.16,4.15-1.39,7.53-4.88,9.8-8.38,5.46-16.73,10.97-25.24,16.21Z" />
                        <path
                            d="M209.31,232.33c46.77-7,79-50.58,72.01-97.35-.85-5.66-2.23-11.1-4.09-16.29,19.42-11.8,32.35-19.64,32.67-19.82,.37-.22,.76-.46,1.19-.71,6.57,15.17,10.21,31.91,10.21,49.49,0,68.85-55.82,124.66-124.66,124.66-39.01,0-73.83-17.91-96.68-45.96,7.48-4.55,19.39-11.78,33.83-20.55,18.58,20.06,46.43,30.88,75.52,26.53Z" />
                        <path
                            d="M277.23,118.69c-4.41-12.32-11.51-23.2-20.5-32.03,13.39-8.04,25.16-15.11,34.2-20.56,8.25,9.53,15.08,20.33,20.16,32.06-.43,.25-.82,.49-1.19,.71-.32,.18-13.25,8.02-32.67,19.82Z" />
                        <path
                            d="M114.59,172.15c39.76-23.92,99.25-59.69,142.14-85.49,8.99,8.83,16.09,19.71,20.5,32.03-38.2,23.18-101.5,61.63-143.44,87.11-8.72-9.39-15.39-20.81-19.2-33.65Z" />
                        <path
                            d="M114.59,172.15c3.81,12.84,10.48,24.26,19.2,33.65-14.44,8.77-26.35,16-33.83,20.55-8.18-10.03-14.82-21.35-19.58-33.61,7.46-4.5,19.48-11.73,34.21-20.59Z" />
                        <path
                            d="M113.62,54.18l.23,.26c-8.67,7.71-16.26,16.61-22.5,26.45-3.5-3.78-9.03-9.82-12.59-13.55-9.24-9.7-18.52-19.37-27.82-29.01-3.25-3.37-6.43-6.83-9.95-9.89-3.94-3.43-4.83-7.47-3.44-12.22C39.9,8.16,49.58,.5,57.4,.26c3.37-.11,5.97,1.07,8.3,3.52,15.29,16.08,32.59,34.36,47.92,50.4Z" />
                        <path
                            d="M196.64,22.99c37.66,0,71.43,16.7,94.29,43.11-9.04,5.45-20.81,12.52-34.2,20.56-18.52-18.23-45.09-27.83-72.77-23.69-46.76,7-79,50.59-72,97.35,.61,4.06,1.49,8.01,2.63,11.83-14.73,8.86-26.75,16.09-34.21,20.59-5.43-13.98-8.41-29.19-8.41-45.09,0-24.56,7.1-47.46,19.38-66.76,6.24-9.84,13.83-18.74,22.5-26.45,22.02-19.56,51.02-31.45,82.79-31.45ZM109.21,151.58l.05-5.36c-.08,1.78-.09,3.57-.05,5.36Z" />
                        <path d="M109.21,151.58c-.04-1.79-.03-3.58,.05-5.36l-.05,5.36Z" />
                        <path
                            d="M99.96,226.35c-5.34,3.24-8.42,5.11-8.57,5.2-13.3,8.07-26.59,16.19-39.91,24.23-7.97,4.8-16.02,9.45-24,14.22-5.33,3.2-10.51,2.94-15.27-.93-6.93-5.63-11.82-12.54-11.96-21.89-.06-4.32,1.87-7.66,5.66-9.91,13.76-8.16,27.48-16.39,41.24-24.55,8.35-4.96,16.63-10.09,25.01-15.02,.61-.37,3.5-2.12,8.22-4.96,4.76,12.26,11.4,23.58,19.58,33.61Z" />
                    </g>
                </g>
                <g id="phase_4" style={{ opacity: `${activeClick > 5 ? '100': '0'}`}} fill={variables[`${activeClick > 7 ? 'stark-red': 'stark-dark'}`]}>
                    <g>
                        <path
                            d="M411.01,31c.16,4.15-1.39,7.53-4.88,9.8-8.38,5.46-16.73,10.97-25.24,16.21-11.71,7.21-55.62,33.3-69.35,41.51-5.08-11.73-11.91-22.52-20.17-32.05,11.02-6.62,18-10.83,18.97-11.41,9.89-5.99,19.79-11.97,29.73-17.89,13.73-8.2,27.46-16.38,41.27-24.45,2.75-1.61,5.74-2.89,8.75-3.96,3.42-1.22,6.76-.56,9.61,1.7,6.6,5.26,10.97,11.81,11.31,20.54Z" />
                        <path
                            d="M311.54,98.52c6.56,15.17,10.2,31.9,10.2,49.49,0,68.85-55.81,124.66-124.66,124.66-39,0-73.82-17.91-96.68-45.95,7.48-4.55,19.39-11.78,33.83-20.56,18.59,20.06,46.44,30.88,75.52,26.53,46.77-7,79.01-50.59,72.01-97.36-.85-5.65-2.23-11.1-4.09-16.28,19.43-11.8,32.36-19.64,32.68-19.82,.37-.22,.76-.46,1.19-.71Z" />
                        <path
                            d="M311.54,98.52c-.43,.25-.82,.49-1.19,.71-.32,.18-13.25,8.02-32.68,19.82-4.41-12.32-11.5-23.19-20.49-32.02,13.38-8.04,25.15-15.12,34.19-20.56,8.26,9.53,15.09,20.32,20.17,32.05Z" />
                        <path
                            d="M197.08,23.35c37.67,0,71.44,16.71,94.29,43.12-9.04,5.44-20.81,12.52-34.19,20.56-18.52-18.24-45.09-27.84-72.77-23.7-46.77,7-79.01,50.58-72.01,97.35,.61,4.06,1.49,8.01,2.63,11.83-14.72,8.86-26.73,16.09-34.2,20.59-5.43-13.98-8.41-29.19-8.41-45.09,0-68.85,55.81-124.66,124.66-124.66Z" />
                        <path
                            d="M257.18,87.03c8.99,8.83,16.08,19.7,20.49,32.02-38.19,23.18-101.49,61.63-143.44,87.11-8.71-9.39-15.38-20.81-19.2-33.65,39.75-23.91,99.25-59.69,142.15-85.48Z" />
                        <path
                            d="M115.03,172.51c3.82,12.84,10.49,24.26,19.2,33.65-14.44,8.78-26.35,16.01-33.83,20.56-8.17-10.03-14.82-21.35-19.57-33.62,7.47-4.5,19.48-11.73,34.2-20.59Z" />
                        <path
                            d="M100.4,226.72c-5.33,3.23-8.42,5.1-8.56,5.19-13.3,8.07-26.59,16.19-39.91,24.23-7.97,4.8-16.02,9.45-24,14.22-5.33,3.2-10.51,2.94-15.27-.93-6.93-5.63-11.82-12.54-11.96-21.89-.06-4.32,1.87-7.66,5.66-9.91,13.76-8.16,27.48-16.39,41.24-24.55,8.35-4.96,16.63-10.09,25.01-15.02,.6-.37,3.5-2.12,8.22-4.96,4.75,12.27,11.4,23.59,19.57,33.62Z" />
                    </g>
                </g>
                <g id="phase_3" style={{ opacity: `${activeClick > 3 ? '100': '0'}`}} fill={variables[`${activeClick > 7 ? 'stark-red': 'stark-dark'}`]}>
                    <path
                        d="M196.53,23.87c68.85,0,124.66,55.81,124.66,124.66s-55.81,124.66-124.66,124.66-124.66-55.81-124.66-124.66S127.68,23.87,196.53,23.87Zm12.67,209.34c46.77-7,79.01-50.59,72.01-97.35-7-46.77-50.58-79.01-97.35-72.01s-79.01,50.58-72.01,97.35,50.58,79.01,97.35,72.01Z" />
                </g>
                <g id="phase_2" style={{ opacity: `${activeClick > 2 ? '100': '0'}`}} fill={variables[`${activeClick > 7 ? 'stark-red': 'stark-dark'}`]}>
                    <path
                        d="M320.32,149.05c0,10.5-8.84,19.74-19.33,19.74s-19.19-9.24-19.19-19.74c0-47.29-38.53-86.35-85.82-86.35s-85.81,38.56-85.81,85.85c0,10.5-8.69,19.24-19.18,19.24s-19.83-9.24-19.83-19.74c0-68.85,55.97-124.39,124.82-124.39s124.34,56.54,124.34,125.39Z" />
                </g>
                <g id="phase_1" style={{ opacity: `${activeClick > 1 ? '100': '0'}`, display: `${blowUp ? 'none': 'block'}`}} fill={variables[`${activeClick > 7 ? 'stark-red': 'stark-dark'}`]}>
                    <path
                        d="M196.13,23.19c10.49,0,17.5,8.57,17.5,19.06s-7.01,19.46-17.5,19.46c-47.29,0-84.32,39.02-84.32,86.31,0,10.49-8.69,19.23-19.18,19.23s-19.84-9.24-19.84-19.73c0-68.85,54.49-124.33,123.34-124.33Z" />
                </g>
                <g id="dot_1" style={{ transform: `translate(${blowUp ? '-200%, 0' : '0,0'})`}}>
                        <circle cx="92.41" cy="147.6" r="13.95" fill={(activeClick > 0  && activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => determineClick(0)} onMouseOver={() => determineClick(1)} />
                </g>
                <g id="dot_2" style={{ transform: `translate(${blowUp ? '0, -200%' : '0,0'})`}}>
                        <circle cx="196.12" cy="42.18" r="13.95" fill={(activeClick > 1  && activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => determineClick(1)} onMouseOver={() => determineClick(2)} />
                </g>
                <g id="dot_3" style={{ transform: `translate(${blowUp ? '200%, 0' : '0,0'})`}}>
                        <circle cx="301.12" cy="149.18" r="13.95" fill={(activeClick > 2  && activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => determineClick(2)} onMouseOver={() => determineClick(3)} />
                </g>
                <g id="dot_4" style={{ transform: `translate(${blowUp ? '0, 200%' : '0,0'})`}}>
                        <circle cx="196.12" cy="252.67" r="13.95" fill={(activeClick > 3  && activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => determineClick(3)} onMouseOver={() => determineClick(4)} />
                </g>
                <g id="dot_5"  style={{ opacity: `${activeClick > 3 ? '100': '0'}`,  transform: `translate(${blowUp ? '-200%, -200%' : '0,0'})`}}>
                        <circle cx="22.12" cy="249.67" r="13.95" fill={(activeClick > 4  && activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => determineClick(4)} onMouseOver={() => determineClick(5)} />
                </g>
                <g id="dot_6" style={{ opacity: `${activeClick > 3 ? '100': '0'}`, transform: `translate(${blowUp ? '200%, 200%' : '0,0'})`}}>
                        <circle cx="391.12" cy="28.14" r="13.95" fill={(activeClick > 5  && activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => determineClick(5)} onMouseOver={() => determineClick(6)} />
                </g>
                <g id="dot_7" style={{ opacity: `${activeClick > 5 ? '100': '0'}`, transform: `translate(${blowUp ? '-200%, 200%' : '0,0'})`}}>
                        <circle cx="58.12" cy="20.6" r="13.95" fill={(activeClick > 6  && activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => determineClick(6)} onMouseOver={() => determineClick(7)} />
                </g>
                <g id="dot_8" style={{ opacity: `${activeClick > 5 ? '100': '0'}`, transform: `translate(${blowUp ? '200%, -200%' : '0,0'})`}}>
                        <circle cx="303.12" cy="276.6" r="13.95" fill={(activeClick > 7 && activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => determineClick(7)} onMouseOver={() => determineClick(8)} />
                </g>
            </svg>
        </div>
    )
}

export default Puzzle;