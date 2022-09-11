import React from 'react';

const GmailSvg = ({
  fillColor = "#4385F5",
  ...props
}) => {
  return(
    <>
      <svg viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M47 38.1H3a3 3 0 01-3-3V3a3 3 0 013-3h44a3 3 0 013 3v32.1a3 3 0 01-3 3z" fill="url(#paint0_linear)"/><path fillRule="evenodd" clipRule="evenodd" d="M47 38.1H5.96L50 3.57V35.1a3 3 0 01-3 3z" fill="url(#paint1_linear)"/><path fillRule="evenodd" clipRule="evenodd" d="M5.95 0H3A3 3 0 000 3v32.1a3 3 0 003 3h2.95V0zm38.1 0H47A3 3 0 0150 3v32.1a3 3 0 01-3 3h-2.95V0z" fill={fillColor}/><path fillRule="evenodd" clipRule="evenodd" d="M47 38.1H32.77L0 4.15V3a3 3 0 013-3h44a3 3 0 013 3v32.1a3 3 0 01-3 3z" fill="url(#paint2_linear)"/><path fillRule="evenodd" clipRule="evenodd" d="M48.6 6.07L25 23.17 1.4 6.07A3.4 3.4 0 010 3.32V3A3 3 0 013 0h44a3 3 0 013 3v.33a3.4 3.4 0 01-1.4 2.74z" fill="url(#paint3_linear)"/><path fillRule="evenodd" clipRule="evenodd" d="M47 0h-.35L25 15.68 3.35 0H3A3 3 0 000 3v.33a3.4 3.4 0 001.4 2.74L25 23.17l23.6-17.1A3.4 3.4 0 0050 3.32V3A3 3 0 0047 0z" fill={fillColor}/><defs><linearGradient id="paint0_linear" x1="6.16" y1="10.79" x2="13.31" y2="25.11" gradientUnits="userSpaceOnUse"><stop stopColor="#E3E3E3"/><stop offset="1" stopColor="#E2E2E2"/></linearGradient><linearGradient id="paint1_linear" x1="18.65" y1="25.3" x2="26.62" y2="41.58" gradientUnits="userSpaceOnUse"><stop stopColor="#F5F5F5"/><stop offset=".03" stopColor="#EEE"/><stop offset="1" stopColor="#EEE"/></linearGradient><linearGradient id="paint2_linear" x1="1.42" y1="0" x2="1.42" y2="35.93" gradientUnits="userSpaceOnUse"><stop stopOpacity=".15"/><stop offset="1" stopOpacity=".03"/></linearGradient><linearGradient id="paint3_linear" x1="0" y1="23.17" x2="50" y2="23.17" gradientUnits="userSpaceOnUse"><stop stopColor="#F5F5F5"/><stop offset="1" stopColor="#F5F5F5"/></linearGradient></defs>
      </svg>
    </>
  )
}

export default GmailSvg;
