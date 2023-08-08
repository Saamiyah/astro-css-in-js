import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../astro.13965cd5.mjs';
import 'html-escaper';
import { Wrapper, Title, Content, Img, SummaryContainer, Summary } from './pandaStyles.ts.8b2e6b3a.mjs';

const $$Astro$1 = createAstro();
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  const { id } = Astro2.params;
  const articleResponse = await fetch(
    `https://api.spaceflightnewsapi.net/v3/articles/${id}`
  );
  const articleData = await articleResponse.json();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(Wrapper, "class")}>
  <h1${addAttribute(Title, "class")}>${articleData.title}</h1>
  <h2>${articleData.newsSite}</h2>
  <div${addAttribute(Content, "class")}>
    <img${addAttribute(Img, "class")}${addAttribute(articleData.imageUrl, "src")} alt="News">
    <div${addAttribute(SummaryContainer, "class")}>
      <p${addAttribute(Summary, "class")}>${articleData.summary}</p>
    </div>
  </div>
</div>

<!-- ---
import {
  StyledWrapper,
  StyledTitle,
  StyledNewsSite,
  StyledContent,
  StyledImg,
  StyledSummaryContainer,
  StyledSummary,
} from "../shared/styles";

const { id } = Astro.params;

const articleResponse = await fetch(
  \`https://api.spaceflightnewsapi.net/v3/articles/\${id}\`
);

const articleData = await articleResponse.json();
---

<StyledWrapper>
  <StyledTitle>{articleData.title}</StyledTitle>
  <>{articleData.newsSite}</>
  <StyledContent>
    <StyledImg src={articleData.imageUrl} alt="News" />
    <StyledSummaryContainer>
      <StyledSummary>{articleData.summary}</StyledSummary>
    </StyledSummaryContainer>
  </StyledContent>
</StyledWrapper> -->./pandaStyles
../shared/pandaStyles`;
}, "/Users/saamiyah/Projects/component-library/astro-styled-components/fast-filament/src/pages/article/[id].astro", void 0);

const $$file$1 = "/Users/saamiyah/Projects/component-library/astro-styled-components/fast-filament/src/pages/article/[id].astro";
const $$url$1 = "/article/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const res = await fetch(`https://api.spaceflightnewsapi.net/v3/reports/${id}`);
  const reports = await res.json();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(Wrapper, "class")}>
  <h1${addAttribute(Title, "class")}>${reports.title}</h1>
  <h2>${reports.newsSite}</h2>
  <div${addAttribute(Content, "class")}>
    <img${addAttribute(Img, "class")}${addAttribute(reports.imageUrl, "src")} alt="News">
    <div${addAttribute(SummaryContainer, "class")}>
      <p${addAttribute(Summary, "class")}>${reports.summary}</p>
    </div>
  </div>
</div>

<!-- ---
import {
  StyledWrapper,
  StyledTitle,
  StyledNewsSite,
  StyledContent,
  StyledImg,
  StyledSummaryContainer,
  StyledSummary,
} from "../shared/styles";

const { id } = Astro.params;

const res = await fetch(\`https://api.spaceflightnewsapi.net/v3/reports/\${id}\`);

const reports = await res.json();
---

<StyledWrapper>
  <StyledTitle>{reports.title}</StyledTitle>
  <>{reports.newsSite}</>
  <StyledContent>
    <StyledImg src={reports.imageUrl} alt="News" />
    <StyledSummaryContainer>
      <StyledSummary>{reports.summary}</StyledSummary>
    </StyledSummaryContainer>
  </StyledContent>
</StyledWrapper> -->
../article/pandaStyles ../shared/pandaStyles`;
}, "/Users/saamiyah/Projects/component-library/astro-styled-components/fast-filament/src/pages/report/[id].astro", void 0);

const $$file = "/Users/saamiyah/Projects/component-library/astro-styled-components/fast-filament/src/pages/report/[id].astro";
const $$url = "/report/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_$1 as _, _id_ as a };
