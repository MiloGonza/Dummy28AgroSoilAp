import { PaletteColorOptions } from '@mui/material/styles';

// project imports
import { ThemeMode } from 'config';

// types
import { PaletteThemeProps } from 'types/theme';
import { PalettesProps } from '@ant-design/colors';

// ==============================|| PRESET THEME - CUSTOM GREEN/BLUE THEME ||============================== //

export default function Theme8(colors: PalettesProps, mode: ThemeMode): PaletteThemeProps {
  const { grey } = colors;
  const greyColors: PaletteColorOptions = {
    0: grey[0],
    50: grey[1],
    100: grey[2],
    200: grey[3],
    300: grey[4],
    400: grey[5],
    500: grey[6],
    600: grey[7],
    700: grey[8],
    800: grey[9],
    900: grey[10],
    A50: grey[15],
    A100: grey[11],
    A200: grey[12],
    A400: grey[13],
    A700: grey[14],
    A800: grey[16]
  };

  // color principal actualizado (#0FF25A)
  let primaryColors = [
    '#E6FFE3', // lighter
    '#A8FFC1', // 100
    '#6CFF9B', // 200
    '#3DFF79', // light
    '#18F864', // 400
    '#0FF25A', // main
    '#0DC94B', // dark
    '#0AA13B', // 700
    '#077B2C', // darker
    '#044D1B'  // 900
  ];

  // color secundario (azul oscuro #0F3B56)
  let secondaryColors = [
    '#E1ECF3',
    '#B3CDDD',
    '#80A9C3',
    '#4D85A9',
    '#266C96',
    '#0F3B56',
    '#0C3147',
    '#092737',
    '#061D29',
    '#031317'
  ];

  let errorColors = ['#FDE8E7', '#F25E52', '#F04134', '#EE3B2F', '#E92A21'];
  let warningColors = ['#FFF7E0', '#FFC926', '#FFBF00', '#FFB900', '#FFA900'];
  let infoColors = ['#E0F4F5', '#26B0BA', '#00A2AE', '#009AA7', '#008694'];
  let successColors = ['#E0F5EA', '#26B56E', '#00A854', '#00A04D', '#008D3A'];

  if (mode === ThemeMode.DARK) {
    // variantes para dark mode
    primaryColors = [
      '#1A3320',
      '#145A2F',
      '#0F803E',
      '#0BB44E',
      '#0DC94B',
      '#0FF25A',
      '#34F673',
      '#67FA97',
      '#9BFDBA',
      '#D0FFDC'
    ];

    secondaryColors = [
      '#132D3F',
      '#17415C',
      '#1C5679',
      '#206A96',
      '#267EB3',
      '#0F3B56',
      '#3991D1',
      '#64ADE0',
      '#9CCBF0',
      '#D0E6F9'
    ];

    errorColors = ['#321d1d', '#7d2e28', '#d13c31', '#e66859', '#f8baaf'];
    warningColors = ['#342c1a', '#836611', '#dda705', '#e9bf28', '#f8e577'];
    infoColors = ['#1a2628', '#11595f', '#058e98', '#1ea6aa', '#64cfcb'];
    successColors = ['#1a2721', '#115c36', '#05934c', '#1da65d', '#61ca8b'];
  }

  return {
    primary: {
      lighter: primaryColors[0],
      100: primaryColors[1],
      200: primaryColors[2],
      light: primaryColors[3],
      400: primaryColors[4],
      main: primaryColors[5],  // #0FF25A
      dark: primaryColors[6],
      700: primaryColors[7],
      darker: primaryColors[8],
      900: primaryColors[9],
      contrastText: '#000'     // <- texto negro para contraste
    },
    secondary: {
      lighter: secondaryColors[0],
      100: secondaryColors[1],
      200: secondaryColors[2],
      light: secondaryColors[3],
      400: secondaryColors[4],
      main: secondaryColors[5],  // #0F3B56
      dark: secondaryColors[6],
      700: secondaryColors[7],
      darker: secondaryColors[8],
      900: secondaryColors[9],
      contrastText: '#fff'
    },
    error: {
      lighter: errorColors[0],
      light: errorColors[1],
      main: errorColors[2],
      dark: errorColors[3],
      darker: errorColors[4],
      contrastText: '#fff'
    },
    warning: {
      lighter: warningColors[0],
      light: warningColors[1],
      main: warningColors[2],
      dark: warningColors[3],
      darker: warningColors[4],
      contrastText: greyColors[100]
    },
    info: {
      lighter: infoColors[0],
      light: infoColors[1],
      main: infoColors[2],
      dark: infoColors[3],
      darker: infoColors[4],
      contrastText: '#fff'
    },
    success: {
      lighter: successColors[0],
      light: successColors[1],
      main: successColors[2],
      dark: successColors[3],
      darker: successColors[4],
      contrastText: '#fff'
    },
    grey: greyColors,
    // override para botones
    components: {
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            backgroundColor: '#0FF25A',
            color: '#000', // texto negro
            '&:hover': {
              backgroundColor: '#0DC94B'
            }
          }
        }
      }
    }
  };
}