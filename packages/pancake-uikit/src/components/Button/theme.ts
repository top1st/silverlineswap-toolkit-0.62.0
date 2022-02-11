import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "42px",
    padding: "0 18px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    borderRadius: "7px",
    fontFamily: "PT Sans, sans-serif",
    fontWeight: "700",
    color: "white",
  },
  [variants.SECONDARY]: {
    backgroundColor: "backgroundAlt2",
    border: "1px solid #fff",
    borderRadius: "24px",
    color: "#fff",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "600",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
  },
};
