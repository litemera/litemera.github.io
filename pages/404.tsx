"use strict";

import React from "react";

import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;

  a {
    display: inline-block;
    margin-top: 32px;
    opacity: 0.54;

    &:hover {
      opacity: 0.78;
    }
  }
`;

const Error: NextPage = () => {
  return (
    <Container>
      <h1> Page Not Found</h1>
      <Link href="/">Back</Link>
    </Container>
  );
};

export default Error;
