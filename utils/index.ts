import { KAKAO_CHANNEL_ID } from "@utils/constants";

export const plusFriendChat = (): void => {
  return (window["Kakao" as any] as any).Channel.chat({
    channelPublicId: KAKAO_CHANNEL_ID,
  });
};
