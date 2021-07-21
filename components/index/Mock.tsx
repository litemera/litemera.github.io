import React from "react";

import styled from "styled-components";

import { TITLE } from "@utils/constants";
import { useMediaQuery } from "@utils/hooks/useMediaQuery";

const Container = styled.div`
  margin: 32px auto 0;
  overflow: hidden;
`;

const ImageBox = styled.div`
  margin-top: 64px;
  position: relative;
  text-align: center;
`;

const Image = styled.img`
  width: 80vw;
  max-width: 400px;
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
          <h1>24 Hours</h1>
          <h2>
            Erase unimportant photos from memory. {isMobile ? null : <br />}
            Litemera will delete them for you.
          </h2>
          <ImageBox>
            <Image src="/images/mock.png" alt={TITLE} title={TITLE} />
          </ImageBox>
          {children ? children : null}
        </div>
      </Container>
    </React.StrictMode>
  );
};

export default Mock;
