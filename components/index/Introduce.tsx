import React from "react";

import styled from "styled-components";

import { TITLE } from "@utils/constants";
import { useMediaQuery } from "@utils/hooks/useMediaQuery";

const iconLists = [
  {
    emoji: "🗑️",
    title: "Automatically delete after 24 hours",
  },
  {
    emoji: "☁️",
    title: "No server, No cloud",
  },
];

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.lightgrey};

  .grid {
    display: grid;
    grid-gap: 16px;
    max-width: 800px;
    margin: 64px auto 0;
    grid-template-columns: repeat(${iconLists.length}, 1fr);

    div {
      text-align: center;

      p {
        line-height: 0;
        font-size: 64px;
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
                <p>{item.emoji}</p>
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
