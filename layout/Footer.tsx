import React from "react";

import { NextPage } from "next";
import { css } from "styled-jsx/css";

import {
  TITLE,
  FACEBOOK_USERNAME,
  INSTAGRAM_USERNAME,
  TWITTER_USERNAME,
} from "@utils/constants";
import { capitalizeFirstLetter } from "@utils/index";

const style = css`
  .footer {
    margin: 0 auto;
    width: 100vw;
    text-align: center;
    padding: 64px 0;
  }

  .tos {
    margin-bottom: 8px;
  }

  .tos span {
    cursor: pointer;
    margin: 8px 16px;
    padding: 1px;
    font-size: 12px;
    opacity: 0.54;
  }

  .sns img {
    width: 24px;
    height: 24px;
    margin: 8px 16px;
    padding: 1px;
    cursor: pointer;
    opacity: 0.54;
  }

  .tos span:hover,
  .sns img:hover {
    opacity: 1;
  }
`;

const tosItems = [
  {
    title: "Privacy policy",
    href: "https://www.notion.so/volla/8aa9a7f58a0645f093ff96caa0877ac9",
  },
  {
    title: "Terms of service",
    href: "https://www.notion.so/volla/8aa9a7f58a0645f093ff96caa0877ac9",
  },
];

const snsItems = [
  {
    src: `facebook`,
    href: `facebook.com/${FACEBOOK_USERNAME}`,
  },
  {
    src: `instagram`,
    href: `instagram.com/${INSTAGRAM_USERNAME}/`,
  },
  {
    src: `twitter`,
    href: `twitter.com/${TWITTER_USERNAME}`,
  },
];

const Footer: NextPage = () => {
  const formatTitle = (str: string): string => {
    return capitalizeFirstLetter(str);
  };

  return (
    <>
      <style jsx>{style}</style>
      <div className="footer">
        <div className="tos">
          {tosItems.map((item, i: number) => (
            <a
              key={i}
              title={`${item.title}(Korean)`}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{`${item.title}(Korean)`}</span>
            </a>
          ))}
        </div>
        <div className="sns">
          {snsItems.map((item, i: number) => (
            <a
              key={i}
              title={formatTitle(item.src)}
              href={`https://${item.href}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                width="24px"
                height="24px"
                src={`images/ic-${item.src}-white.svg`}
                alt={`${TITLE} ${formatTitle(item.src)}`}
                title={`${TITLE} ${formatTitle(item.src)}`}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
