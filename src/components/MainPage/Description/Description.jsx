import { MainPageIMG, MainPageImgConteiner, MainPageList, MainPageTextConteiner } from "./Description.styled"
import {Img001Jpg, Img001Webp, Img001Jpg2x, Img001Webp2x, Img002Jpg, Img002Webp, Img002Jpg2x, Img002Webp2x, Img003Jpg, Img003Webp, Img003Jpg2x, Img003Webp2x} from '../../../images/MainPage'

export const Description = () => {
    return <>
        <MainPageList>
            <li>
                <MainPageTextConteiner>
                    <span>1.</span>
                    <h2><span>Calendar</span><br/>viev</h2>
                    <p>
                        GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.
                    </p>
                </MainPageTextConteiner>
                <MainPageImgConteiner>
                    <picture>
                        <source srcset={`${Img001Webp} 1x, ${Img001Webp2x} 2x`} type="image/webp" />
                        <source srcset={`${Img001Jpg} 1x, ${Img001Jpg} 2x`} type="image/jpeg" />
                        <MainPageIMG src={Img001Jpg} alt="Calendar" loading="lazy"/>
                    </picture>
                </MainPageImgConteiner>
            </li>
            <li>
                <MainPageTextConteiner>
                    <span>2.</span>
                    <h2>sidebar</h2>
                    <p>
                    GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.
                    </p>
                </MainPageTextConteiner>

                <MainPageImgConteiner>
                    <picture>
                        <source srcset={`${Img002Webp} 1x, ${Img002Webp2x} 2x`} type="image/webp" />
                        <source srcset={`${Img002Jpg} 1x, ${Img002Jpg} 2x`} type="image/jpeg" />
                        <MainPageIMG src={Img002Jpg} alt="Calendar" loading="lazy"/>
                    </picture>
                </MainPageImgConteiner>
            </li>
            <li>
            <MainPageTextConteiner>
                    <span>3.</span>
                    <h2><span>All in</span><br/>one</h2>
                    <p>
                    GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.
                    </p>
                </MainPageTextConteiner>
                <MainPageImgConteiner>
                    <picture>
                        <source srcset={`${Img001Webp} 1x, ${Img001Webp2x} 2x`} type="image/webp" />
                        <source srcset={`${Img001Jpg} 1x, ${Img001Jpg} 2x`} type="image/jpeg" />
                        <MainPageIMG src={Img001Jpg} alt="Calendar" loading="lazy"/>
                    </picture>
                </MainPageImgConteiner>
            </li>
        </MainPageList>
    </>
}