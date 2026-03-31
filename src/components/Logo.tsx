const Logo = ({ className = "", size = 40 }: { className?: string; size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagon */}
      <polygon
        points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
        fill="none"
        stroke="#30365C"
        strokeWidth="3"
      />
      {/* Inner hexagon */}
      <polygon
        points="50,20 78,35 78,65 50,80 22,65 22,35"
        fill="none"
        stroke="#F8D922"
        strokeWidth="2.5"
      />
      {/* Corner dots */}
      <circle cx="50" cy="5" r="4" fill="#30365C" />
      <circle cx="93" cy="27.5" r="4" fill="#30365C" />
      <circle cx="93" cy="72.5" r="4" fill="#30365C" />
      <circle cx="50" cy="95" r="4" fill="#30365C" />
      <circle cx="7" cy="72.5" r="4" fill="#30365C" />
      <circle cx="7" cy="27.5" r="4" fill="#30365C" />
      {/* 3D cube / letter shape inside */}
      <path
        d="M35 40 L50 32 L65 40 L65 60 L50 68 L35 60 Z"
        fill="#30365C"
        opacity="0.9"
      />
      <path
        d="M50 32 L65 40 L50 48 L35 40 Z"
        fill="#F8D922"
      />
      <path
        d="M50 48 L65 40 L65 60 L50 68 Z"
        fill="#30365C"
      />
      <path
        d="M50 48 L35 40 L35 60 L50 68 Z"
        fill="#1E2347"
      />
    </svg>
  );
};

export default Logo;
