export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const userAgent = (android: any, ios: any): void => {
  const userAgent: string = navigator.userAgent;

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
