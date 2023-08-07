import { css } from "../../../styled-system/css";

const Card = css({
  display: "flex",
  padding: "1.5rem",
  flexDirection: "column",
  gap: "1rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
});

const Img = css({
  display: "block",
  width: "100%",
  height: "auto",
});

const Title = css({
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  fontWeight: "700",
  color: "#374151",
});

const Summary = css({
  color: "#374151",
});

const Link = css({
  position: "absolute",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
});

export { Card, Img, Title, Summary, Link };
