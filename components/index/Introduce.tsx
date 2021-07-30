"use strict";

import React from "react";

import styled from "styled-components";

import { units } from "@styles/mixin/index";
import { TITLE } from "@utils/constants";
import { useMediaQuery } from "@utils/hooks/useMediaQuery";

const iconLists = [
  {
    src: "trash",
    title: "Automatically delete after 24 hours",
  },
  {
    src: "cloud",
    title: "No server, No cloud",
  },
];

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.lightgrey};

  .grid {
    display: grid;
    grid-gap: ${units(4)};
    max-width: 800px;
    margin: ${units(16)} auto 0;
    grid-template-columns: repeat(${iconLists.length}, 1fr);

    div {
      text-align: center;

      img {
        width: ${units(24)};
        height: ${units(24)};
        margin-bottom: ${units(-2)};

        @media ${(props) => props.theme.mqbp.pablet} {
          width: ${units(16)};
          height: ${units(16)};
        }
      }
    }
  }
`;

interface IntroducePropsType {
  children?: any;
}

const Introduce: React.FC<IntroducePropsType> = ({
  children,
}: IntroducePropsType) => {
  const isMobile: boolean = useMediaQuery(`(max-width: 420px)`);

  return (
    <React.StrictMode>
      <Container className="section">
        <div className="wrapper">
          <h1>What is {TITLE}?</h1>
          <h2>
            Every photos taken with {TITLE} will be deleted automatically after
            24 hours. {isMobile ? null : <br />}We do not upload the photos to
            server or cloud services.
          </h2>
          <div className="grid">
            {iconLists.map((item, i: number) => (
              <div key={i}>
                <img
                  alt={item.title}
                  title={item.title}
                  src={`/images/${item.src}.png`}
                  width="96px"
                  height="96px"
                />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
          {children ? children : null}
        </div>
      </Container>
    </React.StrictMode>
  );
};

export default Introduce;
