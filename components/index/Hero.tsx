import React from "react";

import { css } from "styled-jsx/css";

import DownloadBtn from "@components/misc/DownloadBtn";
import { TITLE } from "@utils/constants";
import { useMediaQuery } from "@utils/hooks/useMediaQuery";

const style = css`
  .hero {
    margin: 96px auto 32px;
    text-align: center;
  }

  .hero > div {
    display: inline-block;
  }

  h1 {
    margin-bottom: -8px;
  }

  @media screen and (max-width: 420px) {
    .hero {
      margin: 64px auto 0;
    }
  }

  @media screen and (max-width: 320px) {
    .hero {
      margin: 48px auto 0;
    }
  }
`;

interface HeroPropsType {
  children?: any;
}

const Hero: React.FC<HeroPropsType> = ({ children }: HeroPropsType) => {
  const isMobile: boolean = useMediaQuery(`(max-width: 420px)`);

  return (
    <React.StrictMode>
      <style jsx>{style}</style>
      <div className="hero section">
        <div className="wrapper">
          <img
            width="96px"
            height="96px"
            alt={TITLE}
            title={TITLE}
            src="/images/launcher.svg"
          />
          <h1>{TITLE}</h1>
          <h2>
            Take a photo with Litemera, it will be {isMobile ? null : <br />}
            deleted automatically after 24 hours
          </h2>
          <DownloadBtn />
          {children}
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Hero;
