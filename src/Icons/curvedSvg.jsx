import React from 'react';

const CurvedSvg = ({
  fillColor = '#333754',
  width = 1196,
  height = 1440,
}) => {
  console.log(width, height)
  return(
    // <svg viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    //   <path fillRule="evenodd" clipRule="evenodd" d="M0 1440h390.6l624.06-212c108.46-36.84 181.34-138.08 181.34-251.9v-.01c0-110.4-68.61-209.35-172.48-248.73L661.98 590.28c-178.57-67.7-296.53-237.82-296.53-427.62V0H0v1440z" fill={fillColor} />
    // </svg>
    <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path filRule="evenodd" cliRule="evenodd" d={`M0 1440H390.598L1014.66 1228C1123.12 1191.16 1196 1089.92 1196 976.092V976.09C1196 865.691 1127.39 766.742 1023.52 727.364L661.979 590.279C483.409 522.573 365.446 352.463 365.446 162.66V0H0V1440Z`} fill="#333754"/>
    </svg>

)};

export default CurvedSvg;
