import React from "react";

import { NextPage } from "next";
import { css } from "styled-jsx/css";

import DownloadBtn from "@components/misc/DownloadBtn";
import { TITLE_EN, TITLE_KO, DESCRIPTION } from "@utils/constants";

const style = css`
  .hero {
    margin: 96px auto 0;
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

const Hero: NextPage = () => {
  return (
    <>
      <style jsx>{style}</style>
      <div className="hero">
        <div>
          <img
            width="96px"
            height="96px"
            alt={TITLE_EN}
            src="/images/launcher.svg"
          />
          <h1>{TITLE_EN}</h1>
          <h2>
            {DESCRIPTION}, {TITLE_KO}
          </h2>
          <DownloadBtn />
        </div>
      </div>
    </>
  );
};

export default Hero;
