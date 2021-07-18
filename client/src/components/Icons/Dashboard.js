import React from "react";

export default function Dashboard({ color }) {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1" fill="white">
        <rect x="12.44336" y="3" width="6.56706" height="6.5625" rx="1" />
      </mask>
      <rect
        x="12.44336"
        y="3"
        width="6.56706"
        height="6.5625"
        rx="1"
        stroke={color}
        stroke-width="2.5"
        mask="url(#path-1-inside-1)"
      />
      <mask id="path-2-inside-2" fill="white">
        <rect x="12.44336" y="10.5" width="6.56706" height="6.5625" rx="1" />
      </mask>
      <rect
        x="12.44336"
        y="10.5"
        width="6.56706"
        height="6.5625"
        rx="1"
        stroke={color}
        stroke-width="2.5"
        mask="url(#path-2-inside-2)"
      />
      <mask id="path-3-inside-3" fill="white">
        <rect x="3" y="10.5" width="6.56706" height="6.5625" rx="1" />
      </mask>
      <rect
        x="3"
        y="10.5"
        width="6.56706"
        height="6.5625"
        rx="1"
        stroke={color}
        stroke-width="2.5"
        mask="url(#path-3-inside-3)"
      />
      <mask id="path-4-inside-4" fill="white">
        <rect x="3" y="3" width="6.56706" height="6.5625" rx="1" />
      </mask>
      <rect
        x="3"
        y="3"
        width="6.56706"
        height="6.5625"
        rx="1"
        stroke={color}
        stroke-width="2.5"
        mask="url(#path-4-inside-4)"
      />
    </svg>
  );
}
