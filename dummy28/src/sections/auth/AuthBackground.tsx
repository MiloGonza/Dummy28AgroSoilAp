'use client';
// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// project imports
import { ThemeDirection } from 'config';

export default function AuthBackground() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden', // 🔹 evita scroll extra
        filter: 'blur(18px)',
        zIndex: -1,
        transform: theme.direction === ThemeDirection.RTL ? 'rotate(180deg)' : 'inherit'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 900 300"   // 🔹 ajustado, no tan grande
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(50,180)">
          <text
            x="0"
            y="0"
            fontFamily="Arial, sans-serif"
            fontSize="120"
            fontWeight="bold"
            fill="#0f3b56"
          >
            vizcrop
          </text>

          <g transform="translate(550,-60) scale(1.8)" stroke="#0FF25A" fill="none" strokeWidth="4">
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
        </g>
      </svg>
    </Box>
  );
}
