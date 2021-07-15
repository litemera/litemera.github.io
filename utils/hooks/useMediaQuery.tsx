import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window["matchMedia"](query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (): void => {
      return setMatches(media.matches);
    };

    media.addEventListener("change", listener);

    return () => {
      return media.removeEventListener("change", listener);
    };
  }, [matches, query]);

  return matches;
};
