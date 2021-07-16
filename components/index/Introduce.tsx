import React from "react";

import { css } from "styled-jsx/css";

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

const style = css`
  .introduce {
    background-color: #262626;
  }

  h1 {
    margin-bottom: -8px;
  }

  .grid {
    margin-top: 64px;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(${iconLists.length}, 1fr);
  }

  .item {
    text-align: center;
  }

  img {
    width: 48px;
    height: 48px;
  }
`;

const Introduce: React.FC = () => {
  const isMobile: boolean = useMediaQuery(`(max-width: 420px)`);

  return (
    <React.StrictMode>
      <style jsx>{style}</style>
      <div className="introduce section">
        <div className="wrapper">
          <h1 className="section--title">What is {TITLE}?</h1>
          <h2>
            Every photos taken with {TITLE} will be deleted automatically after
            24 hours. {isMobile ? null : <br />}We do not upload the photos to
            server or cloud services.
          </h2>
          <div className="grid">
            {iconLists.map((item, i: number) => (
              <div className="item" key={i}>
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
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Introduce;
