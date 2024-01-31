import styled from 'styled-components';

import ShareImg from './img/share.svg'
import FollowImg from './img/follow.svg'
import Spin from '../Spin';

const Panel = styled.div`
    flex: 1;
    padding: 30px 70px;
`

const LogoWapper = styled.div`
    position: relative;
`

const Logo = styled.div`
    margin: 0 auto;
    width: 105px;
    height: 84px;
`

const DescImg = styled.img`
    position: absolute;
    bottom: 0;
    right: 21%;
`

const MidText = styled.div`
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    margin-top: 50px;
`

const ActionBtnWapper = styled.div`
    display: flex;
    margin-top: 25px;
`

const BtnPrimary = styled.div`
    width: 284px;
    height: 69px;
    border-radius: 12px;
    background: rgba(235, 244, 121, 1);
    color: rgba(0, 0, 0, 1);
    text-align: center;
    line-height: 69px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`

const SpinWapper = styled.div`
    width: 120px;
    border-radius: 12px;
    border: 2px;
    height: 69px;
    overflow: hidden;
    margin: 0 auto;
`

const SpinText = styled.div`
    font-size: 16px;
    font-weight: 400;
    height: 69px;
    line-height: 69px;
    text-align: center;
    color: rgba(0, 61, 50, 1);
`

export default function() {
    return <Panel>
       <LogoWapper>
            <Logo>
                <svg width="106" height="64" viewBox="0 0 106 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.4874 11.8974C43.4874 18.4682 38.3444 23.7949 32.0002 23.7949C25.656 23.7949 20.513 18.4682 20.513 11.8974C20.513 5.32666 25.656 0 32.0002 0C38.3444 0 43.4874 5.32666 43.4874 11.8974ZM51.1098 45.4029C48.4452 48.3446 47.8445 51.0809 48.368 52.7048C49.3824 55.8516 51.0454 56.183 51.7263 56.1408C52.5913 56.0871 53.9588 55.366 54.3808 53.1669C54.7374 51.3087 53.8611 48.3988 51.1098 45.4029ZM44.8228 40.6374C41.2607 44.7973 39.1813 49.9793 40.8317 55.0986C42.6946 60.8774 47.1461 64.2947 52.2199 63.9799C57.1096 63.6766 61.1371 59.9349 62.1538 54.6365C63.1016 49.6976 60.9385 44.6986 57.4147 40.6365C61.6507 38.4058 66.9809 37.051 72.7251 37.4682C85.2027 38.3745 94.2913 49.4581 97.2687 59.638C97.8779 61.7209 100.073 62.9192 102.171 62.3145C104.27 61.7098 105.477 59.531 104.868 57.4481C101.371 45.4926 90.318 30.8706 73.3026 29.6347C64.813 29.0181 56.9874 31.4198 51.1122 35.2137C45.9481 31.8641 39.326 29.6242 32.0113 29.6242C22.8472 29.6242 15.3111 33.6746 9.90059 39.1457C4.53847 44.5678 1.08567 51.5504 0.0510712 57.9177C-0.29686 60.0589 1.16982 62.0748 3.32699 62.4201C5.48416 62.7655 7.51495 61.3096 7.86288 59.1683C8.62664 54.4679 11.2883 48.9547 15.5473 44.648C19.758 40.3902 25.3499 37.4787 32.0113 37.4787C36.8156 37.4787 41.2095 38.7245 44.8228 40.6374ZM72.2051 23.7949C78.5493 23.7949 83.6922 18.4682 83.6922 11.8974C83.6922 5.32666 78.5493 0 72.2051 0C65.8609 0 60.7179 5.32666 60.7179 11.8974C60.7179 18.4682 65.8609 23.7949 72.2051 23.7949Z" fill="url(#paint0_linear_89_3673)"/>
                    <defs>
                    <linearGradient id="paint0_linear_89_3673" x1="52.5128" y1="0" x2="52.5128" y2="70.6031" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#979ABE"/>
                    <stop offset="1" stop-color="#979ABE" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>
                <DescImg src={ShareImg.src}/>
            </Logo>
       </LogoWapper>

        <MidText>Share this event to Twitter and @any friend to let more people see it</MidText>

        <ActionBtnWapper>
            <BtnPrimary>Refer</BtnPrimary>
            <SpinWapper>
                <Spin renderChildren={() => <SpinText>+ 0/2 SPIN</SpinText>} />
            </SpinWapper>
        </ActionBtnWapper>

        
    </Panel>
}