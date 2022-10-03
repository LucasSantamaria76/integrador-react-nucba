import { objColors } from './objectAndFunctions';

export const themes = {
  light: {
    colors: {
      primary: '#d8f2f6',
      secondary: '#03d7f5',
      hover: '#03d7f545',
      background: '#f1f1f1',
      backgroundHeader: '#d8f2f655',
      background02: '#d2d2d288',
      surface: '#ffffffaa',
      text: '#000',
      secondaryText: '#a7edfa',
      ...objColors,
    },
    shadow: '2px 2px 5px 1px rgba(100,100,100, 0.60),2px 2px 3px 1px rgba(100,100,100, 0.75)',
  },
  dark: {
    colors: {
      primary: '#102e4c',
      secondary: '#424242',
      hover: '#42424245',
      background: '#23292d',
      backgroundHeader: '#102e4c55',
      background02: '#505b6088',
      surface: '#4b5052aa',
      text: '#fff',
      secondaryText: '#317e94',
      ...objColors,
    },
    shadow: '2px 2px 5px 1px rgba(220, 220, 220, 0.6), 2px 2px 3px 1px rgba(220, 220, 220, 0.75)',
  },
};
