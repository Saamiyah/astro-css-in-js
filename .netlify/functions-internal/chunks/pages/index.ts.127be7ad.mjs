import { c as css } from './index.astro.d9e8bed0.mjs';
import '../astro.13965cd5.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                           */import './index.ts.127be7ad.mjs';

const Title = css({
  padding: "1rem",
  fontSize: "1.5rem",
  lineHeight: "2rem",
  textAlign: "center",
  color: "zinc.200",
  background: "zinc.800"
});
const Container = css({
  background: "zinc.200",
  padding: "1rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem"
});
const Text = css({
  padding: "1rem",
  fontSize: "1.5rem",
  lineHeight: "2rem"
});
const Reports = css({
  display: "flex",
  padding: "1rem",
  marginBottom: "0.5rem",
  marginTop: "1rem",
  justifyContent: "center",
  fontSize: "1.5rem",
  lineHeight: "2re"
});
const ArticleContainer = css({
  display: "grid",
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  gap: "1.5rem",
  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
  },
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
  }
});

export { ArticleContainer, Container, Reports, Text, Title };
