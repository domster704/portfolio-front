import sanitize from "sanitize-html";

const ALLOWED_TAGS = [
  "div",
  "p",
  "br",

  "ul",
  "ol",
  "li",

  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",

  "blockquote",
  "code",
  "pre",

  "a",
  "img",

  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
] as const;

const ALLOWED_ATTRIBUTES: sanitize.IOptions["allowedAttributes"] = {
  a: ["href", "target", "rel", "title"],

  img: [
    "src",
    "srcset",
    "sizes",
    "alt",
    "title",
    "width",
    "height",
    "loading",
    "decoding",
    "class",
  ],

  code: ["class"],
  pre: ["class"],
};

export function sanitizeHtml(html?: string | null): string {
  return sanitize(html ?? "", {
    allowedTags: [...ALLOWED_TAGS],

    allowedAttributes: ALLOWED_ATTRIBUTES,

    allowedSchemes: ["http", "https", "mailto", "tel"],

    allowedSchemesByTag: {
      img: ["http", "https"],
      a: ["http", "https", "mailto", "tel"],
    },

    allowProtocolRelative: false,

    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: {
          ...attribs,
          target: "_blank",
          rel: "noopener noreferrer",
        },
      }),

      img: (tagName, attribs) => ({
        tagName,
        attribs: {
          ...attribs,
          loading: attribs.loading ?? "lazy",
          decoding: attribs.decoding ?? "async",
        },
      }),
    },

    exclusiveFilter(frame) {
      if (frame.tag === "a" && !frame.attribs.href) {
        return true;
      }

      if (frame.tag === "img" && !frame.attribs.src) {
        return true;
      }

      return false;
    },
  });
}
