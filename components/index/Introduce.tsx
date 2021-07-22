import React from "react";

import styled from "styled-components";

import { TITLE } from "@utils/constants";
import { useMediaQuery } from "@utils/hooks/useMediaQuery";

const iconLists = [
  {
    src: "auto_delete",
    title: "Automatically delete after 24 hours",
  },
  {
    src: "cloud_off",
    title: "No server, No cloud",
  },
];

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.lightgrey};

  .grid {
    margin-top: 64px;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(${iconLists.length}, 1fr);

    div {
      text-align: center;

      img {
        width: 48px;
        height: 48px;
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
                  width="48px"
                  height="48px"
                  src={`/images/icons/${item.src}.svg`}
                  alt={item.title}
                  title={item.title}
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
