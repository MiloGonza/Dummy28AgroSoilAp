import { useTheme } from '@mui/material/styles';

export default function LogoIcon() {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 60" // 🔹 recortado al tamaño real del logo
      width="129"
      height="129"
      style={{
        position: 'absolute', // 🔹 no afecta layout
        top: -70,
        left: 16
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Texto */}
      <text
        x="0"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="bold"
        fill="#0f3b56"
      >
        vizcrop
      </text>

      {/* Ícono */}
      <g transform="translate(120,10) scale(0.5)" stroke="#0FF25A" fill="none" strokeWidth="2">
        <path d="M60 20 L75 10 L90 20 V60 H60 Z" />
        <rect x="70" y="30" width="10" height="15" fill="none" />

        <path d="M0 60 Q30 30, 60 60" />
        <path d="M20 60 Q45 35, 80 60" />
        <path d="M40 60 Q65 40, 100 60" />

        <line x1="0" y1="20" x2="60" y2="20" />
        <line x1="10" y1="15" x2="10" y2="25" />
        <line x1="30" y1="15" x2="30" y2="25" />
        <line x1="50" y1="15" x2="50" y2="25" />
      </g>
    </svg>
  );
}
