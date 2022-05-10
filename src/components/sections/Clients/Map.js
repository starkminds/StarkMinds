import variables from "../../../scss/_exports.module.scss";

function Map() {
    return (
        <div className="neon-logo">
            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221.13 166.17">
                <path
                d="M219.13,14.89v2.66c-.05,.1-.11,.2-.13,.31-.31,1.55-1.12,2.8-2.36,3.75-1.15,.88-2.33,1.72-3.55,2.48-6.02,3.77-12.03,7.54-18.09,11.25-7.6,4.66-15.24,9.25-22.86,13.87-1.85,1.12-3.71,2.24-5.56,3.37-.53,.32-1.06,.66-1.55,.96,5.34,12.71,6.84,25.84,4.55,39.3-2.3,13.53-8.28,25.35-17.75,35.36,1.46,1.62,2.85,3.22,4.3,4.76,3.12,3.28,6.28,6.52,9.42,9.78,1.44,1.49,2.86,3,4.28,4.5,1.58,1.67,2.06,3.62,1.37,5.81-1.3,4.12-4.12,6.86-7.97,8.64-.53,.25-1.14,.33-1.71,.5h-1.96c-.12-.05-.24-.11-.37-.13-1.08-.19-1.95-.76-2.67-1.55-.88-.96-1.66-2.01-2.56-2.95-4.31-4.55-8.65-9.08-12.97-13.62-.16-.17-.3-.36-.47-.52-1.17-1.16-2.34-2.32-3.44-3.41-14.45,8.12-29.8,10.6-45.89,7.67-16.23-2.95-29.32-11.42-39.77-24.1-.31,.17-.54,.28-.75,.41-4.87,2.97-9.73,5.95-14.6,8.92-5.05,3.08-10.11,6.16-15.17,9.23-2.35,1.42-4.74,2.79-7.08,4.24-1.82,1.13-3.72,1.13-5.52,.22-2-1.01-3.66-2.54-5-4.36-1.96-2.66-3.44-5.5-3.26-8.93,.11-2.04,.86-3.77,2.67-4.87,1.13-.69,2.34-1.26,3.47-1.95,4.49-2.74,8.95-5.52,13.46-8.24,6.62-4.01,13.27-7.97,19.91-11.96,.47-.29,.95-.58,1.32-.81-7.3-21.85-5.2-42.5,7.03-62.06-3.2-3.47-6.41-7.01-9.68-10.49-2.72-2.89-5.52-5.7-8.28-8.55-1.05-1.09-2.09-2.2-3.12-3.3-1.86-1.99-3.69-4.01-5.59-5.95-1.15-1.18-1.95-2.42-1.92-4.17,.03-1.55,.45-2.97,1.2-4.25,1.84-3.15,4.49-5.43,8.05-6.4,2.28-.62,4.36-.24,6.01,1.71,1.56,1.85,3.23,3.6,4.88,5.38,1.27,1.37,2.58,2.7,3.87,4.05,3.78,3.96,7.56,7.93,11.33,11.89,1.05,1.1,2.08,2.21,3.14,3.29,.88,.9,1.77,1.78,2.73,2.74,14.06-11.46,29.91-17.38,48.2-15.83,18.18,1.54,33.1,9.52,45.36,22.93,.87-.6,1.71-1.25,2.61-1.81,7.74-4.75,15.48-9.51,23.24-14.22,7.02-4.25,14.08-8.45,21.12-12.66,1.69-1.01,3.35-2.1,5.12-2.96,1.99-.97,4.1-1.33,6.17-.13,1.24,.72,2.25,1.67,3.15,2.81,1.4,1.78,2.58,3.65,3.24,5.83,.16,.53,.29,1.06,.44,1.59ZM69.43,111.46c.69,.85,1.23,1.73,1.97,2.37,2.01,1.75,4.05,3.49,6.19,5.08,2.42,1.8,5.06,3.25,7.82,4.46,6.74,2.96,13.77,4.15,21.12,3.67,3.88-.26,7.67-.9,11.36-2.11,4.87-1.59,9.36-3.88,13.33-7.17,2.29-1.89,4.47-3.88,6.45-6.08,3.1-3.44,5.46-7.35,7.33-11.58,2.38-5.41,3.73-11.06,4.14-16.94,.29-4.13,.04-8.24-.95-12.28-.49-1.98-1.15-3.91-1.74-5.91-.38,.2-.6,.29-.8,.41-6.42,3.87-12.85,7.72-19.26,11.61-7.79,4.72-15.55,9.48-23.34,14.2-6.2,3.76-12.43,7.46-18.64,11.21-2.77,1.67-5.5,3.4-8.26,5.07-2.17,1.32-4.36,2.59-6.71,3.98Zm-9.88-17.98c.16-.07,.25-.1,.32-.14,1.62-1,3.23-2.02,4.86-3,7.76-4.68,15.53-9.34,23.28-14.03,7.59-4.6,15.15-9.24,22.74-13.83,6.84-4.14,13.71-8.23,20.55-12.36,1.24-.75,2.44-1.57,3.74-2.4-.66-.59-1.25-1.12-1.84-1.64-4.42-3.89-9.35-6.94-14.94-8.84-4.99-1.7-10.12-2.57-15.39-2.51-1.63,.02-3.25,.3-4.88,.47-5.06,.52-9.86,1.94-14.41,4.2-4.93,2.45-9.29,5.65-13.01,9.75-3.81,4.2-6.97,8.78-9.12,14.04-2.67,6.51-4.02,13.23-3.62,20.29,.16,2.78,.62,5.49,1.19,8.2,.13,.61,.34,1.19,.52,1.82Z"
                fill={variables['stark-light']} />
                <path class="neon-glow"
                d="M219.13,14.89v2.66c-.05,.1-.11,.2-.13,.31-.31,1.55-1.12,2.8-2.36,3.75-1.15,.88-2.33,1.72-3.55,2.48-6.02,3.77-12.03,7.54-18.09,11.25-7.6,4.66-15.24,9.25-22.86,13.87-1.85,1.12-3.71,2.24-5.56,3.37-.53,.32-1.06,.66-1.55,.96,5.34,12.71,6.84,25.84,4.55,39.3-2.3,13.53-8.28,25.35-17.75,35.36,1.46,1.62,2.85,3.22,4.3,4.76,3.12,3.28,6.28,6.52,9.42,9.78,1.44,1.49,2.86,3,4.28,4.5,1.58,1.67,2.06,3.62,1.37,5.81-1.3,4.12-4.12,6.86-7.97,8.64-.53,.25-1.14,.33-1.71,.5h-1.96c-.12-.05-.24-.11-.37-.13-1.08-.19-1.95-.76-2.67-1.55-.88-.96-1.66-2.01-2.56-2.95-4.31-4.55-8.65-9.08-12.97-13.62-.16-.17-.3-.36-.47-.52-1.17-1.16-2.34-2.32-3.44-3.41-14.45,8.12-29.8,10.6-45.89,7.67-16.23-2.95-29.32-11.42-39.77-24.1-.31,.17-.54,.28-.75,.41-4.87,2.97-9.73,5.95-14.6,8.92-5.05,3.08-10.11,6.16-15.17,9.23-2.35,1.42-4.74,2.79-7.08,4.24-1.82,1.13-3.72,1.13-5.52,.22-2-1.01-3.66-2.54-5-4.36-1.96-2.66-3.44-5.5-3.26-8.93,.11-2.04,.86-3.77,2.67-4.87,1.13-.69,2.34-1.26,3.47-1.95,4.49-2.74,8.95-5.52,13.46-8.24,6.62-4.01,13.27-7.97,19.91-11.96,.47-.29,.95-.58,1.32-.81-7.3-21.85-5.2-42.5,7.03-62.06-3.2-3.47-6.41-7.01-9.68-10.49-2.72-2.89-5.52-5.7-8.28-8.55-1.05-1.09-2.09-2.2-3.12-3.3-1.86-1.99-3.69-4.01-5.59-5.95-1.15-1.18-1.95-2.42-1.92-4.17,.03-1.55,.45-2.97,1.2-4.25,1.84-3.15,4.49-5.43,8.05-6.4,2.28-.62,4.36-.24,6.01,1.71,1.56,1.85,3.23,3.6,4.88,5.38,1.27,1.37,2.58,2.7,3.87,4.05,3.78,3.96,7.56,7.93,11.33,11.89,1.05,1.1,2.08,2.21,3.14,3.29,.88,.9,1.77,1.78,2.73,2.74,14.06-11.46,29.91-17.38,48.2-15.83,18.18,1.54,33.1,9.52,45.36,22.93,.87-.6,1.71-1.25,2.61-1.81,7.74-4.75,15.48-9.51,23.24-14.22,7.02-4.25,14.08-8.45,21.12-12.66,1.69-1.01,3.35-2.1,5.12-2.96,1.99-.97,4.1-1.33,6.17-.13,1.24,.72,2.25,1.67,3.15,2.81,1.4,1.78,2.58,3.65,3.24,5.83,.16,.53,.29,1.06,.44,1.59ZM69.43,111.46c.69,.85,1.23,1.73,1.97,2.37,2.01,1.75,4.05,3.49,6.19,5.08,2.42,1.8,5.06,3.25,7.82,4.46,6.74,2.96,13.77,4.15,21.12,3.67,3.88-.26,7.67-.9,11.36-2.11,4.87-1.59,9.36-3.88,13.33-7.17,2.29-1.89,4.47-3.88,6.45-6.08,3.1-3.44,5.46-7.35,7.33-11.58,2.38-5.41,3.73-11.06,4.14-16.94,.29-4.13,.04-8.24-.95-12.28-.49-1.98-1.15-3.91-1.74-5.91-.38,.2-.6,.29-.8,.41-6.42,3.87-12.85,7.72-19.26,11.61-7.79,4.72-15.55,9.48-23.34,14.2-6.2,3.76-12.43,7.46-18.64,11.21-2.77,1.67-5.5,3.4-8.26,5.07-2.17,1.32-4.36,2.59-6.71,3.98Zm-9.88-17.98c.16-.07,.25-.1,.32-.14,1.62-1,3.23-2.02,4.86-3,7.76-4.68,15.53-9.34,23.28-14.03,7.59-4.6,15.15-9.24,22.74-13.83,6.84-4.14,13.71-8.23,20.55-12.36,1.24-.75,2.44-1.57,3.74-2.4-.66-.59-1.25-1.12-1.84-1.64-4.42-3.89-9.35-6.94-14.94-8.84-4.99-1.7-10.12-2.57-15.39-2.51-1.63,.02-3.25,.3-4.88,.47-5.06,.52-9.86,1.94-14.41,4.2-4.93,2.45-9.29,5.65-13.01,9.75-3.81,4.2-6.97,8.78-9.12,14.04-2.67,6.51-4.02,13.23-3.62,20.29,.16,2.78,.62,5.49,1.19,8.2,.13,.61,.34,1.19,.52,1.82Z"
                fill={variables['stark-light']} />
            </svg>
        </div>
    )
}

export default Map;