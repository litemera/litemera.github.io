"use strict";

import React from "react";

import styled from "styled-components";

import { units } from "@styles/mixin/index";
import { TITLE, IOS_URL, AND_URL } from "@utils/constants";

type storeTypes = {
  store: string;
  os: string;
  href: string;
  title: string;
};

const APP_STORE_TYPES: storeTypes[] = [
  {
    store: `App Store`,
    os: `ios`,
    href: IOS_URL,
    title: `Download on the App Store - ${TITLE}`,
  },
  {
    store: `Google Play`,
    os: `android`,
    href: AND_URL,
    title: `Get it on Google Play - ${TITLE}`,
  },
];

const Container = styled.div`
  margin-top: ${units(24)};
  @media ${(props) => props.theme.mqbp.pablet} {
    margin-top: ${units(16)};
  }
  @media ${(props) => props.theme.mqbp.small} {
    margin-top: ${units(8)};
  }

  div {
    width: auto;
    height: ${units(14)};
    border-radius: ${units(4)};
    display: inline-block;
    background-color: ${(props) => props.theme.colors.white};

    &.ios {
      margin-right: ${units(2)};
    }

    img {
      width: ${units(6)};
      height: ${units(6)};
      padding: 16px 12px 16px 16px;
      display: inline-block;
      @media ${(props) => props.theme.mqbp.android} {
        padding-right: 8px;
      }
      @media ${(props) => props.theme.mqbp.small} {
        padding: 16px 4px 16px 12px;
      }
    }

    span {
      color: ${(props) => props.theme.colors.background};
      font-weight: 700;
      line-height: ${units(14)};
      margin-right: ${units(4)};
      vertical-align: top;
      display: inline-block;
    }
  }
`;

interface DownloadBtnPropsType {
  children?: any;
}

const DownloadBtn: React.FC<DownloadBtnPropsType> = ({
  children,
}: DownloadBtnPropsType) => {
  return (
    <React.StrictMode>
      <Container>
        {APP_STORE_TYPES.map((type, i: number) => (
          <div className={type.os} role="button" key={i}>
            <a
              href={type.href}
              target="_blank"
              title={type.title}
              rel="noopener noreferrer"
            >
              <img
                width="24px"
                height="24px"
                src={`/images/store-${type.os}.png`}
                alt={type.title}
                title={type.title}
              />
              <span>{type.store}</span>
            </a>
          </div>
        ))}
        {children ? children : null}
      </Container>
    </React.StrictMode>
  );
};

export default DownloadBtn;
