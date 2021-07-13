import React from "react";

import { NextPage } from "next";
import { css } from "styled-jsx/css";

import { TITLE } from "@utils/constants";
import { useMediaQuery } from "@utils/hooks/useMediaQuery";

const style = css`
  .mock {
    margin: 32px auto 0;
    overflow: hidden;
  }

  .hero > div {
    display: inline-block;
  }

  h1 {
    margin-bottom: -8px;
  }

  .img {
    margin-top: 64px;
    position: relative;
    text-align: center;
  }

  .img img {
    width: 80vw;
    max-width: 400px;
  }

  @media screen and (max-width: 420px) {
    .hero {
    }
  }

  @media screen and (max-width: 320px) {
    .hero {
    }
  }
`;

const Mock: NextPage = () => {
  const isMobile: boolean = useMediaQuery(`(max-width: 420px)`);

  return (
    <>
      <style jsx>{style}</style>
      <div className="mock section">
        <div className="wrapper">
          <h1>24 Hours</h1>
          <h2>
            Erase unimportant photos from memory. {isMobile ? null : <br />}
            Litemera will delete it for you.
          </h2>
          <div className="img">
            <img src="/images/mock.png" alt={TITLE} title={TITLE} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mock;
