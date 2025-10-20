import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Load base messages
  const baseMessages = (await import(`../../dictionary/${locale}.json`)).default as any;

  // Attempt to load page-scoped welcoming messages and merge under the 'welcoming' namespace
  let welcomingNamespace: any = {};
  try {
    const welcomingFile = (await import(`../../dictionary/${locale}/welcoming.json`)).default as any;
    const { welcoming: welcomingRoot = {}, ...welcomingSections } = welcomingFile || {};
    // Merge root welcoming keys with section groups (features, stats, benefits, ...)
    welcomingNamespace = { ...welcomingRoot, ...welcomingSections };
  } catch (_) {
    // Optional file; ignore if missing
  }

  // Attempt to load page-scoped product messages and merge under the 'product' namespace
  let productNamespace: any = {};
  try {
    const productFile = (await import(`../../dictionary/${locale}/product.json`)).default as any;
    const { product: productRoot = {}, ...productSections } = productFile || {};
    // Merge root product keys with section groups (features, benefits, cta, ...)
    productNamespace = { ...productRoot, ...productSections };
  } catch (_) {
    // Optional file; ignore if missing
  }

  const messages = {
    ...baseMessages,
    welcoming: {
      ...(baseMessages?.welcoming || {}),
      ...welcomingNamespace,
    },
    product: {
      ...(baseMessages?.product || {}),
      ...productNamespace,
    },
  };

  return {
    locale,
    messages,
  };
});
