"use strict";

import { DefaultTheme } from "styled-components";

import { breakPoints } from "@styles/modules/breakPoints";
import { colors } from "@styles/modules/colors";
import { mqbp } from "@styles/modules/mqbp";

export const theme: DefaultTheme = {
  breakPoints: { ...breakPoints },
  colors: { ...colors },
  mqbp: { ...mqbp },
};
