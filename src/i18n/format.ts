import type { Lang } from "./translations";

// Source text uses a plain space as the thousands separator ("1 000"); render it as a
// non-breaking space so a number never splits across lines.
export const nb = (s: string) => s.replace(/(\d) (?=\d{3}\b)/g, "$1 ");

// Language-neutral page path ("" for home, "uses") to its localized URL path.
// EN lives at /, ES at /es/. Always ends with a slash, as the static build emits directories.
export const localeHref = (lang: Lang, path = "") =>
  (lang === "es" ? "/es/" : "/") + (path ? `${path.replace(/^\/|\/$/g, "")}/` : "");
