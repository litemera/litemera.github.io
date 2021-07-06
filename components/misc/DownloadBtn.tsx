import React from "react";

import css from "styled-jsx/css";

import { TITLE, IOS_URL, AND_URL } from "@utils/constants";

const style = css`
  .dlBtn {
    margin-top: 96px;
  }

  .dlBtn .btn {
    width: auto;
    height: 56px;
    border-radius: 16px;
    display: inline-block;
    background-color: #fff;
  }

  .ios {
    margin-right: 8px;
  }

  .btn img {
    width: 24px;
    height: 24px;
    padding: 16px 12px 16px 16px;
    display: inline-block;
  }

  .btn span {
    color: #121212;
    font-weight: 700;
    line-height: 56px;
    margin-right: 16px;
    vertical-align: top;
    display: inline-block;
  }

  @media screen and (max-width: 360px) {
    .btn img {
      padding-right: 8px;
    }
  }

  @media screen and (max-width: 320px) {
    .dlBtn {
      margin-top: 64px;
    }

    .ios {
      margin-right: 4px;
    }

    .btn img {
      padding: 16px 4px 16px 12px;
    }
  }
`;

const DownloadBtn: React.FC = () => {
  return (
    <>
      <style jsx>{style}</style>
      <div className="dlBtn">
        <div className="dlBtn_wrapper">
          <div className="btn ios" role="button">
            <a
              href={IOS_URL}
              target="_blank"
              title={`앱스토어에서 ${TITLE} 다운받기`}
              rel="noopener noreferrer"
            >
              <img
                width="24px"
                height="24px"
                src={"/images/store-ios.png"}
                alt={`App Store - ${TITLE}`}
                title={`App Store - ${TITLE}`}
              />
              <span>App Store</span>
            </a>
          </div>
          <div className="btn android" role="button">
            <a
              href={AND_URL}
              target="_blank"
              title={`구글 플레이에서 ${TITLE} 다운받기`}
              rel="noopener noreferrer"
            >
              <img
                width="24px"
                height="24px"
                src={"/images/store-android.png"}
                alt={`Google Play - ${TITLE}`}
                title={`Google Play - ${TITLE}`}
              />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadBtn;
