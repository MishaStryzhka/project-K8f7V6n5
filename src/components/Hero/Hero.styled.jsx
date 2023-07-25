import styled from 'styled-components';
/*
/**|======================================
/**| import bg images
/**|======================================
*/
import bg_sm_1x from '../../images/MainPageImages/bg-lg@1x.png';
import bg_sm_2x from '../../images/MainPageImages/bg-sm@2x.png';
import bg_md_1x from '../../images/MainPageImages/bg-md@1x.png';
import bg_md_2x from '../../images/MainPageImages/bg-md@2x.png';
import bg_lg_1x from '../../images/MainPageImages/bg-lg@1x.png';
import bg_lg_2x from '../../images/MainPageImages/bg-lg@2x.png';

import dt_bg_1x from '../../images/MainPageImages/dt-bg@1x.png';
import dt_bg_2x from '../../images/MainPageImages/dt-bg@2x.png';
import tb_bg_1x from '../../images/MainPageImages/tb-bg@1x.png';
import tb_bg_2x from '../../images/MainPageImages/tb-bg@2x.png';
import mb_bg_1x from '../../images/MainPageImages/mb-bg@1x.png';
import mb_bg_2x from '../../images/MainPageImages/mb-bg@2x.png';

/*
/**|======================================
/**| styled components
/**|======================================
*/

export const HeroTitle = styled.h1`
  font-family: Manrope;
  font-size: 32px;
  font-weight: 700;
  width: 280px;
  line-height: 1.37;
  padding-top: 2rem;
  margin-left: 1rem;

  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: 1.47;
    width: 588px;
    /* background-color: rgba(253, 257, 242, 0.5); */
  }

  @media screen and (min-width: 1280px) {
    padding-top: 188px;
    font-weight: 800;
    line-height: 1.3;
    width: 500px;
  }
`;

export const Background = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: calc(99dvh - 85px);

  background-image: url(${bg_sm_1x});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg_sm_2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bg_md_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg_md_2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${bg_lg_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg_lg_2x});
    }
  }
`;

export const BackgroundMainPage = styled.div`
  @keyframes myAnim {
    0% {
      transform: scale(2);
    }

    100% {
      transform: scale(1);
    }
  }

  background-size: 120%, cover;
  background-position: bottom, center;
  background-repeat: no-repeat;
  height: calc(99dvh - 85px);

  background-image: url(${mb_bg_1x}), url(${bg_sm_1x});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mb_bg_2x}), url(${bg_sm_2x});
  }

  @media screen and (min-width: 768px) {
    background-position: top, center;

    background-image: url(${tb_bg_1x}), url(${bg_md_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tb_bg_2x}), url(${bg_md_2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-size: 70%, cover;
    background-position: right, center;

    background-image: url(${dt_bg_1x}), url(${bg_lg_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${dt_bg_2x}), url(${bg_lg_2x});
    }
  }
  animation: myAnim 0.25s ease-in-out 0s 1 normal forwards;
`;