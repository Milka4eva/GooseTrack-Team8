import { Description } from 'components/MainPage/Description/Description';
import { AuthSection } from '../components/MainPage/AuthSection/AuthSection';
import { Reviews } from 'components/MainPage/Reviews/Reviews';

const countReviews = 6

const MainPage = () => {
  return <>
      <AuthSection/>
      <Description/>
      <Reviews number={countReviews}/>
    </>
}

export default MainPage