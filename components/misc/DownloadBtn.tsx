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

  @media screen and (max-width: 420px) {
    .dlBtn {
      margin-top: 64px;
    }
  }

  @media screen and (max-width: 360px) {
    .btn img {
      padding-right: 8px;
    }
  }

  @media screen and (max-width: 320px) {
    .dlBtn {
      margin-top: 32px;
    }

    .ios {
      margin-right: 4px;
    }

    .btn img {
      padding: 16px 4px 16px 12px;
    }
  }
`;

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

interface DownloadBtnPropsType {
  children?: any;
}

const DownloadBtn: React.FC<DownloadBtnPropsType> = ({
  children,
}: DownloadBtnPropsType) => {
  return (
    <React.StrictMode>
      <style jsx>{style}</style>
      <div className="dlBtn">
        <div className="dlBtn_wrapper">
          {APP_STORE_TYPES.map((type, i: number) => (
            <div className={`btn ${type.os}`} role="button" key={i}>
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
        </div>
        {children ? children : null}
      </div>
    </React.StrictMode>
  );
};

export default DownloadBtn;
