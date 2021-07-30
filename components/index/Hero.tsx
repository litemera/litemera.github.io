"use strict";

import React from "react";

import styled from "styled-components";

import DownloadBtn from "@components/misc/DownloadBtn";
import { units } from "@styles/mixin/index";
import { TITLE } from "@utils/constants";
import { useMediaQuery } from "@utils/hooks/useMediaQuery";

const Container = styled.div`
  margin: ${units(24)} auto ${units(8)};
  text-align: center;
  @media ${(props) => props.theme.mqbp.pablet} {
    margin: ${units(16)} auto 0;
  }
  @media ${(props) => props.theme.mqbp.small} {
    margin: ${units(12)} auto 0;
  }
`;

interface HeroPropsType {
  children?: any;
}

const Hero: React.FC<HeroPropsType> = ({ children }: HeroPropsType) => {
  const isMobile: boolean = useMediaQuery(`(max-width: 420px)`);

  return (
    <React.StrictMode>
      <Container className="section">
        <div className="wrapper">
          <img
            width="96px"
            height="96px"
            alt={TITLE}
            title={TITLE}
            src="/images/launcher.svg"
          />
          <h1>📸 {TITLE}</h1>
          <h2>
            Take a photo with Litemera, it will be {isMobile ? null : <br />}
            deleted automatically after 24 hours
          </h2>
          <DownloadBtn />
          {children ? children : null}
        </div>
      </Container>
    </React.StrictMode>
  );
};

export default Hero;
