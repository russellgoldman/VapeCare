import React from 'react';
import { Svg } from 'expo';

function BackgroundSvg() {
  return (
    <expo.Svg width="414" height="736" fill="none" >
        <expo.Svg.Path fill="#fff" d="M0 68h414v668H0z"/>
          <expo.Svg.G filter="url(#filter0_d)">
            <expo.Svg.Path d="M414 132.725V0H-9v234c15.66-46.374 49.489-66.148 105.58-73.531 91.434-12.035 169.009 22.628 230.763 22.628 42.285 0 82.829-13.326 86.657-50.372z" fill="#0AB8CF"/><expo.Svg.Path d="M416.487 132.982l.013-.128V-2.5h-428V234l4.869.8c7.675-22.729 19.736-38.788 36.65-50.109 16.979-11.364 39.032-18.077 66.888-21.743 45.322-5.966 87.264-.367 125.728 6.78 8.442 1.568 16.734 3.216 24.867 4.833 28.765 5.716 55.532 11.036 79.841 11.036 21.351 0 42.49-3.356 58.869-11.558 16.471-8.249 28.253-21.49 30.275-41.057z" stroke="#E5E8E9" stroke-width="5"/></expo.Svg.G><expo.Svg.Defs><filter id="filter0_d" x="-19" y="-10" width="453" height="260.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="5" dy="5"/><feGaussianBlur stdDeviation="5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></expo.Svg.Defs>
    </expo.Svg>
  );
}

export default BackgroundSvg;