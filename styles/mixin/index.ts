"use strict";

const UNIT = 4;

export const black = (opacity: number): string => {
  return `rgba(0, 0, 0, ${opacity})`;
};

export const white = (opacity: number): string => {
  return `rgba(255, 255, 255, ${opacity})`;
};

export const units = (size: number): string => {
  return `${size * UNIT}px`;
};
