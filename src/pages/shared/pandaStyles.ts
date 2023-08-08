import { css } from "../../../styled-system/css";

const Wrapper = css({
  margin: "3rem",
  color: "gray",
});
const Title = css({
  paddingBottom: "1rem",
  color: "red",
  fontSize: "1.5rem",
  lineHeight: "2rem",
});

const NewsSite = css({
  paddingBottom: "1rem",
  fontSize: "1.5rem",
  lineHeight: "2rem",
});

const Content = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const Img = css({
  width: "auto",
});

const SummaryContainer = css({
  padding: "1.5rem",
  marginTop: "1.5rem",
  backgroundColor: "gray",
});

const Summary = css({
  marginTop: "1rem",
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
});

export { Title, Wrapper, Content, Img, SummaryContainer, Summary };
