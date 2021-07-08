import { KAKAO_CHANNEL_ID } from "@utils/constants";

export const plusFriendChat = (): void => {
  return (window["Kakao" as any] as any).Channel.chat({
    channelPublicId: KAKAO_CHANNEL_ID,
  });
};

export const userAgent = (android, ios) => {
  const userAgent = navigator.userAgent;

  if (typeof window !== "undefined") {
    if (/android/i.test(userAgent)) {
      window["open"](android);
    } else if (
      /iPad|iPhone|iPod/.test(userAgent) ||
      (navigator.appVersion.indexOf("Mac") != -1 && !window.MSStream)
    ) {
      window["open"](ios);
    } else if (/windows phone/i.test(userAgent)) {
      window["open"](android);
    } else window["open"](android);
  }
};

