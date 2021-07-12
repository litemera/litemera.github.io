import React from "react";

import { NextPage } from "next";
import { css } from "styled-jsx/css";

import {
  TITLE_KO,
  FACEBOOK_USERNAME,
  INSTAGRAM_USERNAME,
  TWITTER_USERNAME,
} from "@utils/constants";

const style = css`
  .footer {
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    width: 100vw;
    text-align: center;
    padding: 16px 0 32px;
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

const Footer: NextPage = () => {
  const tosItems = [
    {
      title: "개인정보처리방침",
      href: "https://www.notion.so/volla/8aa9a7f58a0645f093ff96caa0877ac9",
    },
    {
      title: "서비스이용약관",
      href: "https://www.notion.so/volla/8aa9a7f58a0645f093ff96caa0877ac9",
    },
  ];

  const snsItems = [
    {
      src: `facebook`,
      href: `facebook.com/${FACEBOOK_USERNAME}`,
      title: `페이스북`,
    },
    {
      src: `instagram`,
      href: `instagram.com/${INSTAGRAM_USERNAME}/`,
      title: `인스타그램`,
    },
    {
      src: `twitter`,
      href: `twitter.com/${TWITTER_USERNAME}`,
      title: `트위터`,
    },
  ];

  return (
    <>
      <style jsx>{style}</style>
      <div className="footer">
        <div className="tos">
          {tosItems.map((item, i: number) => (
            <a
              key={i}
              title={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{item.title}</span>
            </a>
          ))}
        </div>
        <div className="sns">
          {snsItems.map((item, i: number) => (
            <a
              key={i}
              title={item.title}
              href={`https://${item.href}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                width="24px"
                height="24px"
                src={`images/ic-${item.src}-white.svg`}
                alt={`${TITLE_KO} ${item.title}`}
                title={`${TITLE_KO} ${item.title}`}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
