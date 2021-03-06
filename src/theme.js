import { Platform } from 'react-native';

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      tabBar: '#24292e',
      tabBarText: '#FFFFFF',
      accent: '#C0C0C0',
      error: '#FF0000'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
  export default theme;