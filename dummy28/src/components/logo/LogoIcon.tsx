import { useTheme } from '@mui/material/styles';

export default function LogoIcon() {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 80" // 🔹 ajustado al espacio real del ícono
      width="64"
      height="64"
      style={{
        position: 'absolute',
        top: -10,
        left: 5
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0,10) scale(0.5)" stroke="#0FF25A" fill="none" strokeWidth="2">
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
