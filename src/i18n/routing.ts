import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["tr", "en", "es", "fr", "de"],

  // Used when no locale matches
  defaultLocale: "tr",
  localeDetection: false,
  //to remove the locale prefix from the url
  localePrefix: "as-needed",
});
