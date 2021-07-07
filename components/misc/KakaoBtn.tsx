import React from "react";

import { css } from "styled-jsx/css";

import { TITLE_KO } from "@utils/constants";
import { plusFriendChat } from "@utils/index";

const style = css`
  div {
    z-index: 99999;
    right: 16px;
    bottom: 24px;
    position: fixed;
    width: 56px;
    height: 56px;
  }

  img {
    cursor: pointer;
    border-radius: 100%;
  }
`;

const KakaoBtn: React.FC = () => {
  return (
    <React.StrictMode>
      <style jsx>{style}</style>
      <div>
        <img
          width="56px"
          height="56px"
          src={"/images/kakao.svg"}
          onClick={plusFriendChat}
          alt={`${TITLE_KO} 카카오톡채널 문의하기`}
          title={`${TITLE_KO} 카카오톡채널 문의하기`}
        />
      </div>
    </React.StrictMode>
  );
};

export default KakaoBtn;
