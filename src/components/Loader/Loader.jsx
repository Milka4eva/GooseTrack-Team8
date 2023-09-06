import { Bars } from 'react-loader-spinner';
import { useTheme } from 'styled-components';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  const theme = useTheme();

  return (
    <LoaderWrapper>
      <Bars
        height="70"
        width="70"
        color={theme.notChangedcolors.accentColor}
        ariaLabel="bars-loading"
        visible
      />
    </LoaderWrapper>
  );
};

export default Loader;
