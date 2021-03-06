"use strict";

import React from "react";

import Image from "next/image";
import styled from "styled-components";

import { units } from "@styles/mixin/index";
import { TITLE } from "@utils/constants";
import { useMediaQuery } from "@utils/hooks/useMediaQuery";

const Container = styled.div`
  margin: ${units(8)} auto 0;
  overflow: hidden;

  .img {
    margin-top: ${units(16)};
    position: relative;
    text-align: center;

    img {
      width: 80vw;
      max-width: 400px !important;
    }
  }
`;

interface MockPropsType {
  children?: any;
}

const Mock: React.FC<MockPropsType> = ({ children }: MockPropsType) => {
  const isMobile: boolean = useMediaQuery(`(max-width: 420px)`);

  return (
    <React.StrictMode>
      <Container className="section">
        <div className="wrapper">
          <h1>⏳ 24 Hours</h1>
          <h2>
            Erase unimportant photos from memory. {isMobile ? null : <br />}
            Litemera will delete them for you.
          </h2>
          <div className="img">
            <Image
              width={400}
              height={823}
              src="/images/mock.png"
              alt={TITLE}
              title={TITLE}
            />
          </div>
          {children ? children : null}
        </div>
      </Container>
    </React.StrictMode>
  );
};

export default Mock;
