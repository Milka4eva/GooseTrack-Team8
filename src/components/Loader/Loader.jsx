import { Bars } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';
import { useTheme } from 'styled-components';

const Loader = () => {
  const theme = useTheme();
  return (
    <LoaderWrapper>
      <Bars
        height="80"
        width="80"
        color={theme.notChangedcolors.accentColor}
        ariaLabel="bars-loading"
        visible
      />
    </LoaderWrapper>
  );
};

export default Loader;
