
import { MainPageConteiner, MainPageGoose, MainPageTitel, MainPageButtonCont, MainPageSingUp, MainPageLogIn } from "./AuthSection.staled";
import { Goose, GooseWebp } from "images/MainPage";
import Sprite from '../../../images/sprite.svg'

export const AuthSection = () => {
    return <>
        <MainPageConteiner>
            <picture>
                <source srcSet={GooseWebp} type="image/webp" />
                <source srcSet={Goose} type="image/png" />
                <MainPageGoose src={Goose} alt="Goose" loading="lazy"/>
            </picture>

            <MainPageTitel>G<span>oo</span>seTrack</MainPageTitel>

            <MainPageButtonCont>
                <MainPageSingUp to="/register">Sign up</MainPageSingUp>
                <MainPageLogIn to="/login">
                    Log In
                    <svg>
                        <use href={Sprite + "#icon-log-in-mainpage"}></use>
                    </svg>
                </MainPageLogIn>
            </MainPageButtonCont>

        </MainPageConteiner>
    </>
}