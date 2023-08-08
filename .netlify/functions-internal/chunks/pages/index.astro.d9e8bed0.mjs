import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.13965cd5.mjs';
import 'html-escaper';
/* empty css                           */import { Title as Title$1, Container, Text, ArticleContainer, Reports } from './index.ts.127be7ad.mjs';

// src/assert.ts
function isObject(value) {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

// src/condition.ts
var isBaseCondition = (v) => v === "base";
function filterBaseConditions(c) {
  return c.slice().filter((v) => !isBaseCondition(v));
}

// src/css-important.ts
var importantRegex = /!(important)?$/;
function isImportant(value) {
  return typeof value === "string" ? importantRegex.test(value) : false;
}
function withoutImportant(value) {
  return typeof value === "string" ? value.replace(importantRegex, "").trim() : value;
}
function withoutSpace(str) {
  return typeof str === "string" ? str.replaceAll(" ", "_") : str;
}

// src/hash.ts
function toChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
}
function toName(code) {
  let name = "";
  let x;
  for (x = Math.abs(code); x > 52; x = x / 52 | 0)
    name = toChar(x % 52) + name;
  return toChar(x % 52) + name;
}
function toPhash(h, x) {
  let i = x.length;
  while (i)
    h = h * 33 ^ x.charCodeAt(--i);
  return h;
}
function toHash(value) {
  return toName(toPhash(5381, value) >>> 0);
}

// src/walk-object.ts
var isNotNullish = (element) => element != null;
function walkObject(target, predicate, options = {}) {
  const { stop, getKey } = options;
  function inner(value, path = []) {
    if (isObject(value) || Array.isArray(value)) {
      const result = {};
      for (const [prop, child] of Object.entries(value)) {
        const key = getKey?.(prop) ?? prop;
        const childPath = [...path, key];
        if (stop?.(value, childPath)) {
          return predicate(value, path);
        }
        const next = inner(child, childPath);
        if (isNotNullish(next)) {
          result[key] = next;
        }
      }
      return result;
    }
    return predicate(value, path);
  }
  return inner(target);
}

// src/normalize-style-object.ts
function toResponsiveObject(values, breakpoints) {
  return values.reduce((acc, current, index) => {
    const key = breakpoints[index];
    if (current != null) {
      acc[key] = current;
    }
    return acc;
  }, {});
}
function normalizeStyleObject(styles, context) {
  const { utility, conditions } = context;
  const { hasShorthand, resolveShorthand } = utility;
  return walkObject(
    styles,
    (value) => {
      return Array.isArray(value) ? toResponsiveObject(value, conditions.breakpoints.keys) : value;
    },
    {
      stop: (value) => Array.isArray(value),
      getKey: (prop) => {
        return hasShorthand ? resolveShorthand(prop) : prop;
      }
    }
  );
}

// src/classname.ts
var fallbackCondition = {
  shift: (v) => v,
  finalize: (v) => v,
  breakpoints: { keys: [] }
};
var sanitize = (value) => typeof value === "string" ? value.replaceAll(/[\n\s]+/g, " ") : value;
function createCss(context) {
  const { utility, hash, conditions: conds = fallbackCondition } = context;
  const formatClassName = (str) => [utility.prefix, str].filter(Boolean).join("-");
  const hashFn = (conditions, className) => {
    let result;
    if (hash) {
      const baseArray = [...conds.finalize(conditions), className];
      result = formatClassName(toHash(baseArray.join(":")));
    } else {
      const baseArray = [...conds.finalize(conditions), formatClassName(className)];
      result = baseArray.join(":");
    }
    return result;
  };
  return (styleObject = {}) => {
    const normalizedObject = normalizeStyleObject(styleObject, context);
    const classNames = /* @__PURE__ */ new Set();
    walkObject(normalizedObject, (value, paths) => {
      const important = isImportant(value);
      if (value == null)
        return;
      const [prop, ...allConditions] = conds.shift(paths);
      const conditions = filterBaseConditions(allConditions);
      const transformed = utility.transform(prop, withoutImportant(sanitize(value)));
      let className = hashFn(conditions, transformed.className);
      if (important)
        className = `${className}!`;
      classNames.add(className);
    });
    return Array.from(classNames).join(" ");
  };
}

// src/memo.ts
var memo = (fn) => {
  const cache = /* @__PURE__ */ new Map();
  const get = (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
  return get;
};

// src/hypenate-property.ts
var wordRegex = /([A-Z])/g;
var msRegex = /^ms-/;
var hypenateProperty = memo((property) => {
  if (property.startsWith("--"))
    return property;
  return property.replace(wordRegex, "-$1").replace(msRegex, "-ms-").toLowerCase();
});

const conditions = new Set(["_hover","_focus","_focusWithin","_focusVisible","_disabled","_active","_visited","_target","_readOnly","_readWrite","_empty","_checked","_enabled","_expanded","_highlighted","_before","_after","_firstLetter","_firstLine","_marker","_selection","_file","_backdrop","_first","_last","_only","_even","_odd","_firstOfType","_lastOfType","_onlyOfType","_peerFocus","_peerHover","_peerActive","_peerFocusWithin","_peerFocusVisible","_peerDisabled","_peerChecked","_peerInvalid","_peerExpanded","_peerPlaceholderShown","_groupFocus","_groupHover","_groupActive","_groupFocusWithin","_groupFocusVisible","_groupDisabled","_groupChecked","_groupExpanded","_groupInvalid","_indeterminate","_required","_valid","_invalid","_autofill","_inRange","_outOfRange","_placeholder","_placeholderShown","_pressed","_selected","_default","_optional","_open","_fullscreen","_loading","_currentPage","_currentStep","_motionReduce","_motionSafe","_print","_landscape","_portrait","_dark","_light","_osDark","_osLight","_highContrast","_lessContrast","_moreContrast","_ltr","_rtl","_scrollbar","_scrollbarThumb","_scrollbarTrack","_horizontal","_vertical","sm","smOnly","smDown","md","mdOnly","mdDown","lg","lgOnly","lgDown","xl","xlOnly","xlDown","2xl","2xlOnly","smToMd","smToLg","smToXl","smTo2xl","mdToLg","mdToXl","mdTo2xl","lgToXl","lgTo2xl","xlTo2xl","base"]);

function isCondition(value){
  return conditions.has(value) || /^@|&|&$/.test(value)
}

const underscoreRegex = /^_/;
const selectorRegex = /&|@/;

function finalizeConditions(paths){
  return paths.map((path) => {
    if (conditions.has(path)){
      return path.replace(underscoreRegex, '')
    }

    if (selectorRegex.test(path)){
      return `[${withoutSpace(path.trim())}]`
    }

    return path
  })}

  function sortConditions(paths){
    return paths.sort((a, b) => {
      const aa = isCondition(a);
      const bb = isCondition(b);
      if (aa && !bb) return 1
      if (!aa && bb) return -1
      return 0
    })
  }

const classNameMap = {
  "aspectRatio": "aspect",
  "boxDecorationBreak": "decoration",
  "zIndex": "z",
  "boxSizing": "box",
  "objectPosition": "object",
  "objectFit": "object",
  "overscrollBehavior": "overscroll",
  "overscrollBehaviorX": "overscroll-x",
  "overscrollBehaviorY": "overscroll-y",
  "position": "pos",
  "top": "top",
  "left": "left",
  "insetInline": "inset-x",
  "insetBlock": "inset-y",
  "inset": "inset",
  "insetBlockEnd": "inset-b",
  "insetBlockStart": "inset-t",
  "insetInlineEnd": "end",
  "insetInlineStart": "start",
  "right": "right",
  "bottom": "bottom",
  "insetX": "inset-x",
  "insetY": "inset-y",
  "float": "float",
  "visibility": "vis",
  "display": "d",
  "hideFrom": "hide",
  "hideBelow": "show",
  "flexBasis": "basis",
  "flex": "flex",
  "flexDirection": "flex",
  "flexGrow": "grow",
  "flexShrink": "shrink",
  "gridTemplateColumns": "grid-cols",
  "gridTemplateRows": "grid-rows",
  "gridColumn": "col-span",
  "gridRow": "row-span",
  "gridColumnStart": "col-start",
  "gridColumnEnd": "col-end",
  "gridAutoFlow": "grid-flow",
  "gridAutoColumns": "auto-cols",
  "gridAutoRows": "auto-rows",
  "gap": "gap",
  "gridGap": "gap",
  "gridRowGap": "gap-x",
  "gridColumnGap": "gap-y",
  "rowGap": "gap-x",
  "columnGap": "gap-y",
  "justifyContent": "justify",
  "alignContent": "content",
  "alignItems": "items",
  "alignSelf": "self",
  "padding": "p",
  "paddingLeft": "pl",
  "paddingRight": "pr",
  "paddingTop": "pt",
  "paddingBottom": "pb",
  "paddingBlock": "py",
  "paddingBlockEnd": "pb",
  "paddingBlockStart": "pt",
  "paddingInline": "px",
  "paddingInlineEnd": "pe",
  "paddingInlineStart": "ps",
  "marginLeft": "ml",
  "marginRight": "mr",
  "marginTop": "mt",
  "marginBottom": "mb",
  "margin": "m",
  "marginBlock": "my",
  "marginBlockEnd": "mb",
  "marginBlockStart": "mt",
  "marginInline": "mx",
  "marginInlineEnd": "me",
  "marginInlineStart": "ms",
  "outlineWidth": "ring",
  "outlineColor": "ring",
  "outline": "ring",
  "outlineOffset": "ring",
  "divideX": "divide-x",
  "divideY": "divide-y",
  "divideColor": "divide",
  "divideStyle": "divide",
  "width": "w",
  "inlineSize": "w",
  "minWidth": "min-w",
  "minInlineSize": "min-w",
  "maxWidth": "max-w",
  "maxInlineSize": "max-w",
  "height": "h",
  "blockSize": "h",
  "minHeight": "min-h",
  "minBlockSize": "min-h",
  "maxHeight": "max-h",
  "maxBlockSize": "max-b",
  "color": "text",
  "fontFamily": "font",
  "fontSize": "fs",
  "fontWeight": "font",
  "fontSmoothing": "smoothing",
  "fontVariantNumeric": "numeric",
  "letterSpacing": "tracking",
  "lineHeight": "leading",
  "textAlign": "text",
  "textDecoration": "text-decor",
  "textDecorationColor": "text-decor",
  "textEmphasisColor": "text-emphasis",
  "textDecorationStyle": "decoration",
  "textDecorationThickness": "decoration",
  "textUnderlineOffset": "underline-offset",
  "textTransform": "text",
  "textIndent": "indent",
  "textShadow": "text-shadow",
  "textOverflow": "text",
  "verticalAlign": "align",
  "wordBreak": "break",
  "textWrap": "text",
  "truncate": "truncate",
  "lineClamp": "clamp",
  "listStyleType": "list",
  "listStylePosition": "list",
  "listStyleImage": "list-img",
  "backgroundPosition": "bg",
  "backgroundPositionX": "bg-x",
  "backgroundPositionY": "bg-y",
  "backgroundAttachment": "bg",
  "backgroundClip": "bg-clip",
  "background": "bg",
  "backgroundColor": "bg",
  "backgroundOrigin": "bg-origin",
  "backgroundImage": "bg-img",
  "backgroundRepeat": "bg-repeat",
  "backgroundBlendMode": "bg-blend",
  "backgroundSize": "bg",
  "backgroundGradient": "bg-gradient",
  "textGradient": "text-gradient",
  "gradientFrom": "from",
  "gradientTo": "to",
  "gradientVia": "via",
  "borderRadius": "rounded",
  "borderTopLeftRadius": "rounded-tl",
  "borderTopRightRadius": "rounded-tr",
  "borderBottomRightRadius": "rounded-br",
  "borderBottomLeftRadius": "rounded-bl",
  "borderTopRadius": "rounded-t",
  "borderRightRadius": "rounded-r",
  "borderBottomRadius": "rounded-b",
  "borderLeftRadius": "rounded-l",
  "borderStartStartRadius": "rounded-ss",
  "borderStartEndRadius": "rounded-se",
  "borderStartRadius": "rounded-s",
  "borderEndStartRadius": "rounded-es",
  "borderEndEndRadius": "rounded-ee",
  "borderEndRadius": "rounded-e",
  "border": "border",
  "borderColor": "border",
  "borderInline": "border-x",
  "borderInlineWidth": "border-x",
  "borderInlineColor": "border-x",
  "borderBlock": "border-y",
  "borderBlockWidth": "border-y",
  "borderBlockColor": "border-y",
  "borderLeft": "border-l",
  "borderLeftColor": "border-l",
  "borderInlineStart": "border-s",
  "borderInlineStartColor": "border-s",
  "borderRight": "border-r",
  "borderRightColor": "border-r",
  "borderInlineEnd": "border-e",
  "borderInlineEndColor": "border-e",
  "borderTop": "border-t",
  "borderTopColor": "border-t",
  "borderBottom": "border-b",
  "borderBottomColor": "border-b",
  "borderBlockEnd": "border-be",
  "borderBlockEndColor": "border-be",
  "borderBlockStart": "border-bs",
  "borderBlockStartColor": "border-bs",
  "boxShadow": "shadow",
  "boxShadowColor": "shadow",
  "mixBlendMode": "mix-blend",
  "filter": "filter",
  "brightness": "brightness",
  "contrast": "contrast",
  "grayscale": "grayscale",
  "hueRotate": "hue-rotate",
  "invert": "invert",
  "saturate": "saturate",
  "sepia": "sepia",
  "dropShadow": "drop-shadow",
  "blur": "blur",
  "backdropFilter": "backdrop",
  "backdropBlur": "backdrop-blur",
  "backdropBrightness": "backdrop-brightness",
  "backdropContrast": "backdrop-contrast",
  "backdropGrayscale": "backdrop-grayscale",
  "backdropHueRotate": "backdrop-hue-rotate",
  "backdropInvert": "backdrop-invert",
  "backdropOpacity": "backdrop-opacity",
  "backdropSaturate": "backdrop-saturate",
  "backdropSepia": "backdrop-sepia",
  "borderCollapse": "border",
  "borderSpacing": "border-spacing",
  "borderSpacingX": "border-spacing-x",
  "borderSpacingY": "border-spacing-y",
  "tableLayout": "table",
  "transitionTimingFunction": "ease",
  "transitionDelay": "delay",
  "transitionDuration": "duration",
  "transitionProperty": "transition-prop",
  "transition": "transition",
  "animation": "animation",
  "animationDelay": "animation-delay",
  "transformOrigin": "origin",
  "scale": "scale",
  "scaleX": "scale-x",
  "scaleY": "scale-y",
  "translate": "translate",
  "translateX": "translate-x",
  "translateY": "translate-y",
  "accentColor": "accent",
  "caretColor": "caret",
  "scrollBehavior": "scroll",
  "scrollbar": "scrollbar",
  "scrollMargin": "scroll-m",
  "scrollMarginX": "scroll-mx",
  "scrollMarginY": "scroll-my",
  "scrollMarginLeft": "scroll-ml",
  "scrollMarginRight": "scroll-mr",
  "scrollMarginTop": "scroll-mt",
  "scrollMarginBottom": "scroll-mb",
  "scrollMarginBlock": "scroll-my",
  "scrollMarginBlockEnd": "scroll-mb",
  "scrollMarginBlockStart": "scroll-mt",
  "scrollMarginInline": "scroll-mx",
  "scrollMarginInlineEnd": "scroll-me",
  "scrollMarginInlineStart": "scroll-ms",
  "scrollPadding": "scroll-p",
  "scrollPaddingBlock": "scroll-pb",
  "scrollPaddingBlockStart": "scroll-pt",
  "scrollPaddingBlockEnd": "scroll-pb",
  "scrollPaddingInline": "scroll-px",
  "scrollPaddingInlineEnd": "scroll-pe",
  "scrollPaddingInlineStart": "scroll-ps",
  "scrollPaddingX": "scroll-px",
  "scrollPaddingY": "scroll-py",
  "scrollPaddingLeft": "scroll-pl",
  "scrollPaddingRight": "scroll-pr",
  "scrollPaddingTop": "scroll-pt",
  "scrollPaddingBottom": "scroll-pb",
  "scrollSnapAlign": "snap",
  "scrollSnapStop": "snap",
  "scrollSnapType": "snap",
  "scrollSnapStrictness": "strictness",
  "scrollSnapMargin": "snap-m",
  "scrollSnapMarginTop": "snap-mt",
  "scrollSnapMarginBottom": "snap-mb",
  "scrollSnapMarginLeft": "snap-ml",
  "scrollSnapMarginRight": "snap-mr",
  "touchAction": "touch",
  "userSelect": "select",
  "fill": "fill",
  "stroke": "stroke",
  "srOnly": "sr",
  "debug": "debug",
  "appearance": "appearance",
  "backfaceVisibility": "backface",
  "clipPath": "clip-path",
  "hyphens": "hyphens",
  "mask": "mask",
  "maskImage": "mask-image",
  "maskSize": "mask-size",
  "textSizeAdjust": "text-size-adjust",
  "textStyle": "textStyle"
};

const shorthands = {
  "pos": "position",
  "insetEnd": "insetInlineEnd",
  "end": "insetInlineEnd",
  "insetStart": "insetInlineStart",
  "start": "insetInlineStart",
  "flexDir": "flexDirection",
  "p": "padding",
  "pl": "paddingLeft",
  "pr": "paddingRight",
  "pt": "paddingTop",
  "pb": "paddingBottom",
  "py": "paddingBlock",
  "paddingY": "paddingBlock",
  "paddingX": "paddingInline",
  "px": "paddingInline",
  "pe": "paddingInlineEnd",
  "paddingEnd": "paddingInlineEnd",
  "ps": "paddingInlineStart",
  "paddingStart": "paddingInlineStart",
  "ml": "marginLeft",
  "mr": "marginRight",
  "mt": "marginTop",
  "mb": "marginBottom",
  "m": "margin",
  "my": "marginBlock",
  "marginY": "marginBlock",
  "mx": "marginInline",
  "marginX": "marginInline",
  "me": "marginInlineEnd",
  "marginEnd": "marginInlineEnd",
  "ms": "marginInlineStart",
  "marginStart": "marginInlineStart",
  "ringWidth": "outlineWidth",
  "ringColor": "outlineColor",
  "ring": "outline",
  "ringOffset": "outlineOffset",
  "w": "width",
  "minW": "minWidth",
  "maxW": "maxWidth",
  "h": "height",
  "minH": "minHeight",
  "maxH": "maxHeight",
  "bgPosition": "backgroundPosition",
  "bgPositionX": "backgroundPositionX",
  "bgPositionY": "backgroundPositionY",
  "bgAttachment": "backgroundAttachment",
  "bgClip": "backgroundClip",
  "bg": "background",
  "bgColor": "backgroundColor",
  "bgOrigin": "backgroundOrigin",
  "bgImage": "backgroundImage",
  "bgRepeat": "backgroundRepeat",
  "bgBlendMode": "backgroundBlendMode",
  "bgSize": "backgroundSize",
  "bgGradient": "backgroundGradient",
  "rounded": "borderRadius",
  "roundedTopLeft": "borderTopLeftRadius",
  "roundedTopRight": "borderTopRightRadius",
  "roundedBottomRight": "borderBottomRightRadius",
  "roundedBottomLeft": "borderBottomLeftRadius",
  "roundedTop": "borderTopRadius",
  "roundedRight": "borderRightRadius",
  "roundedBottom": "borderBottomRadius",
  "roundedLeft": "borderLeftRadius",
  "roundedStartStart": "borderStartStartRadius",
  "roundedStartEnd": "borderStartEndRadius",
  "roundedStart": "borderStartRadius",
  "roundedEndStart": "borderEndStartRadius",
  "roundedEndEnd": "borderEndEndRadius",
  "roundedEnd": "borderEndRadius",
  "borderX": "borderInline",
  "borderXWidth": "borderInlineWidth",
  "borderXColor": "borderInlineColor",
  "borderY": "borderBlock",
  "borderYWidth": "borderBlockWidth",
  "borderYColor": "borderBlockColor",
  "borderStart": "borderInlineStart",
  "borderStartColor": "borderInlineStartColor",
  "borderEnd": "borderInlineEnd",
  "borderEndColor": "borderInlineEndColor",
  "shadow": "boxShadow",
  "shadowColor": "boxShadowColor",
  "x": "translateX",
  "y": "translateY"
};

const breakpointKeys = ["base","sm","md","lg","xl","2xl"];

const hasShorthand = true;

const resolveShorthand = (prop) => shorthands[prop] || prop;

function transform(prop, value) {
  const key = resolveShorthand(prop);
  const propKey = classNameMap[key] || hypenateProperty(key);
  const className = `${propKey}_${withoutSpace(value)}`;
  return { className }
}

const context = {
  hash: false,
  conditions: {
    shift: sortConditions,
    finalize: finalizeConditions,
    breakpoints: { keys: breakpointKeys }
  },
  utility: {
    prefix: undefined,
    transform,
    hasShorthand,
    resolveShorthand,
  }
};

const css = createCss(context);
css.raw = (styles) => styles;

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Astro description">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${title}</title>
  ${renderHead()}</head>
  <body>
    ${renderSlot($$result, $$slots["default"])}
  </body></html>`;
}, "/Users/saamiyah/Projects/component-library/astro-styled-components/fast-filament/src/layouts/Layout.astro", void 0);

const Card = css({
  display: "flex",
  padding: "1.5rem",
  flexDirection: "column",
  gap: "1rem",
  borderRadius: "0.5rem",
  cursor: "pointer"
});
const Img = css({
  display: "block",
  width: "100%",
  height: "auto"
});
const Title = css({
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  fontWeight: "700",
  color: "gray.800"
});
const Summary = css({
  color: "InfoText"
});

const $$Astro$1 = createAstro();
const $$PandaCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PandaCard;
  const { article, articleType } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(Card, "class")}>
  <a${addAttribute(`/${articleType}/${article.id}`, "href")}>
    <img${addAttribute(Img, "class")}${addAttribute(article.imageUrl, "src")}>
  </a>
  <h2${addAttribute(Title, "class")}>${article.title}</h2>
  <p${addAttribute(Summary, "class")}>${article.summary}</p>
</div>`;
}, "/Users/saamiyah/Projects/component-library/astro-styled-components/fast-filament/src/components/PandaCard/PandaCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const articleResponse = await fetch(
    "https://api.spaceflightnewsapi.net/v3/articles"
  );
  const reportResponse = await fetch(
    "https://api.spaceflightnewsapi.net/v3/reports"
  );
  const articleData = await articleResponse.json();
  const reportData = await reportResponse.json();
  const articles = articleData.slice(0, 11);
  const reports = reportData.slice(0, 20);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AstroNews", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="astro-J7PV25F6">
    <h1${addAttribute(Title$1 + " astro-J7PV25F6", "class")}>*ASTRONEWS*</h1>

    <div${addAttribute(Container + " astro-J7PV25F6", "class")}>
      <div class="astro-J7PV25F6">
        <p${addAttribute(Text + " astro-J7PV25F6", "class")}>Latest articles</p>
      </div>
      <div${addAttribute(ArticleContainer + " astro-J7PV25F6", "class")}>
        ${articles.map((article) => renderTemplate`${renderComponent($$result2, "Card", $$PandaCard, { "article": article, "articleType": "article", "class": "astro-J7PV25F6" })}`)}
      </div>
      <div${addAttribute(Reports + " astro-J7PV25F6", "class")}>
        <p${addAttribute(Text + " astro-J7PV25F6", "class")}>Reports</p>
      </div>
      <div${addAttribute(ArticleContainer + " astro-J7PV25F6", "class")}>
        ${reports.map((report) => renderTemplate`${renderComponent($$result2, "Card", $$PandaCard, { "article": report, "articleType": "report", "class": "astro-J7PV25F6" })}`)}
      </div>
    </div>
  </main>
` })}
<!-- <ThemeProvider theme={theme}> -->
<!-- <Layout title="Astro News">
  <main>
    <StyledTitle>*ASTRONEWS*</StyledTitle>

    <StyledContainer>
      <div>
        <StyledText>Latest articles</StyledText>
      </div>
      <StyledArticleContainer>
        {
          articles.map((article: IArticle) => (
            <Card article={article} articleType="article" />
          ))
        }
      </StyledArticleContainer>
      <StyledReports>
        <StyledText>Reports</StyledText>
      </StyledReports>
      <StyledArticleContainer>
        {
          reports.map((report: IReport) => (
            <Card article={report} articleType="report" />
          ))
        }
      </StyledArticleContainer>
    </StyledContainer>
  </main>
</Layout> --><!-- </ThemeProvider> -->`;
}, "/Users/saamiyah/Projects/component-library/astro-styled-components/fast-filament/src/pages/index.astro", void 0);

const $$file = "/Users/saamiyah/Projects/component-library/astro-styled-components/fast-filament/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { css as c, index as i };
