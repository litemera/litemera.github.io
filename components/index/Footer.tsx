import React from "react";

import { NextPage } from "next";
import { css } from "styled-jsx/css";

const style = css`
  .footer {
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    width: 100vw;
    text-align: center;
    padding: 16px 0;
  }

  span {
    cursor: pointer;
    padding: 16px;
    font-size: 12px;
    opacity: 0.54;
  }

  span:hover {
    opacity: 1;
  }
`;

const Footer: NextPage = () => {
  const footerItems = [
    {
      title: "개인정보처리방침",
    },
    {
      title: "서비스이용약관",
    },
  ];

  return (
    <>
      <style jsx>{style}</style>
      <div className="footer">
        {footerItems.map((item, i: number) => (
          <span key={i}>{item.title}</span>
        ))}
      </div>
    </>
  );
};

export default Footer;
