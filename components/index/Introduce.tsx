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
`;

const GridBox = styled.div`
  margin-top: 64px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(${iconLists.length}, 1fr);
`;

const GridItem = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
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
      <Container className="introduce section">
        <div className="wrapper">
          <h1 className="section--title">What is {TITLE}?</h1>
          <h2>
            Every photos taken with {TITLE} will be deleted automatically after
            24 hours. {isMobile ? null : <br />}We do not upload the photos to
            server or cloud services.
          </h2>
          <GridBox>
            {iconLists.map((item, i: number) => (
              <GridItem key={i}>
                <Image
                  width="48px"
                  height="48px"
                  src={`/images/icons/${item.src}.svg`}
                  alt={item.title}
                  title={item.title}
                />
                <h3>{item.title}</h3>
              </GridItem>
            ))}
          </GridBox>
          {children ? children : null}
        </div>
      </Container>
    </React.StrictMode>
  );
};

export default Introduce;
