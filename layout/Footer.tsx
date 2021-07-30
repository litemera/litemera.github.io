"use strict";

import React from "react";

import styled from "styled-components";

import { units } from "@styles/mixin/index";
import {
  TITLE,
  FACEBOOK_USERNAME,
  INSTAGRAM_USERNAME,
  TWITTER_USERNAME,
} from "@utils/constants";
import { capitalizeFirstLetter } from "@utils/index";

const TOS_ITEMS: { title: string; href: string }[] = [
  {
    title: "Privacy Policy",
    href: "Privacy-Policy-ddd8297bdaa7486c8d8a0a6a483d5c95",
  },
  {
    title: "Terms of Use",
    href: "Terms-of-Use-8b9ca8af6eae4ced8b34eec775f1fe99",
  },
];

const SNS_ITEMS: { src: string; href: string }[] = [
  {
    src: `facebook`,
    href: `facebook.com/${FACEBOOK_USERNAME}`,
  },
  {
    src: `instagram`,
    href: `instagram.com/${INSTAGRAM_USERNAME}`,
  },
  {
    src: `twitter`,
    href: `twitter.com/${TWITTER_USERNAME}`,
  },
];

const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
  text-align: center;
  padding: ${units(16)} 0;
  background-color: ${(props) => props.theme.colors.lightgrey};

  & > img {
    opacity: 0.54;
    margin: 0 auto ${units(4)};
    display: inline-block;
  }

  .tos {
    margin-bottom: ${units(2)};

    span {
      cursor: pointer;
      margin: ${units(2)} ${units(4)};
      padding: 1px;
      font-size: ${units(3)};
      opacity: 0.54;

      &:hover {
        opacity: 1;
      }
    }
  }

  .sns {
    img {
      width: ${units(6)};
      height: ${units(6)};
      margin: ${units(2)} ${units(4)};
      padding: 1px;
      cursor: pointer;
      opacity: 0.54;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

interface FooterPropsType {
  children?: any;
}

const Footer: React.FC<FooterPropsType> = ({ children }: FooterPropsType) => {
  return (
    <React.StrictMode>
      <Container>
        <img
          width="96px"
          height="20px"
          alt={TITLE}
          title={TITLE}
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Flitemera.github.io&count_bg=%001E1E1E&title_bg=%001E1E1E&icon=&edge_flat=false"
        />
        <div className="tos">
          {TOS_ITEMS.map((item, i: number) => (
            <a
              key={i}
              title={item.title}
              href={`https://www.notion.so/volla/${item.href}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>{item.title}</span>
            </a>
          ))}
        </div>
        <div className="sns">
          {SNS_ITEMS.map((item, i: number) => (
            <a
              key={i}
              title={capitalizeFirstLetter(item.src)}
              href={`https://${item.href}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                width="24px"
                height="24px"
                src={`images/icons/ic-${item.src}-white.svg`}
                alt={`${TITLE} ${capitalizeFirstLetter(item.src)}`}
                title={`${TITLE} ${capitalizeFirstLetter(item.src)}`}
              />
            </a>
          ))}
        </div>
        {children ? children : null}
      </Container>
    </React.StrictMode>
  );
};

export default Footer;
