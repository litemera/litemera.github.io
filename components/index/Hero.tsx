import React from "react";

import styled from "styled-components";

import DownloadBtn from "@components/misc/DownloadBtn";
import { TITLE } from "@utils/constants";
import { useMediaQuery } from "@utils/hooks/useMediaQuery";

const HeroContainer = styled.div`
  margin: 96px auto 32px;
  text-align: center;
  @media ${(props) => props.theme.mqbp.pablet} {
    margin: 64px auto 0;
  }
  @media ${(props) => props.theme.mqbp.small} {
    margin: 48px auto 0;
  }
`;

const InlineDiv = styled.div`
  display: inline-block;
`;

const HeadingTitle = styled.h1`
  margin-bottom: -8px;
`;

interface HeroPropsType {
  children?: any;
}

const Hero: React.FC<HeroPropsType> = ({ children }: HeroPropsType) => {
  const isMobile: boolean = useMediaQuery(`(max-width: 420px)`);

  return (
    <React.StrictMode>
      <HeroContainer className="hero section">
        <InlineDiv className="wrapper">
          <img
            width="96px"
            height="96px"
            alt={TITLE}
            title={TITLE}
            src="/images/launcher.svg"
          />
          <HeadingTitle>{TITLE}</HeadingTitle>
          <h2>
            Take a photo with Litemera, it will be {isMobile ? null : <br />}
            deleted automatically after 24 hours
          </h2>
          <DownloadBtn />
          {children ? children : null}
        </InlineDiv>
      </HeroContainer>
    </React.StrictMode>
  );
};

export default Hero;
