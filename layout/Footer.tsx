import React from "react";

import styled from "styled-components";

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
  padding: 64px 0;
  background-color: ${(props) => props.theme.colors.lightgrey};
`;

const Hit = styled.img`
  opacity: 0.54;
  margin: 0 auto 16px;
  display: inline-block;
`;

const Tos = styled.div`
  margin-bottom: 8px;
`;

const LinkText = styled.span`
  cursor: pointer;
  margin: 8px 16px;
  padding: 1px;
  font-size: 12px;
  opacity: 0.54;
  &:hover {
    opacity: 1;
  }
`;

const SnsImage = styled.img`
  width: 24px;
  height: 24px;
  margin: 8px 16px;
  padding: 1px;
  cursor: pointer;
  opacity: 0.54;
  &:hover {
    opacity: 1;
  }
`;

interface FooterPropsType {
  children?: any;
}

const Footer: React.FC<FooterPropsType> = ({ children }: FooterPropsType) => {
  return (
    <React.StrictMode>
      <Container>
        <Hit
          alt={TITLE}
          title={TITLE}
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Flitemera.github.io&count_bg=%001E1E1E&title_bg=%001E1E1E&icon=&edge_flat=false"
        />
        <Tos>
          {TOS_ITEMS.map((item, i: number) => (
            <a
              key={i}
              title={item.title}
              href={`https://www.notion.so/volla/${item.href}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkText>{item.title}</LinkText>
            </a>
          ))}
        </Tos>
        <div>
          {SNS_ITEMS.map((item, i: number) => (
            <a
              key={i}
              title={capitalizeFirstLetter(item.src)}
              href={`https://${item.href}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <SnsImage
                width="24px"
                height="24px"
                src={`images/ic-${item.src}-white.svg`}
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
