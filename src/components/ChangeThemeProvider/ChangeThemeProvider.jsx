import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from './theme';
import { selectTheme } from 'redux/theme/theme-selectors';

const ChangeThemeProvider = ({ children }) => {
  const themeName = useSelector(selectTheme);

  const theme = themeName === 'light' ? lightTheme : darkTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ChangeThemeProvider;
