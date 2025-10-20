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
  const baseMessages = (await import(`../../dictionary/${locale}.json`)).default as Record<string, unknown>;

  // Attempt to load page-scoped welcoming messages and merge under the 'welcoming' namespace
  let welcomingNamespace: Record<string, unknown> = {};
  try {
    const welcomingFile = (await import(`../../dictionary/${locale}/welcoming.json`)).default as Record<string, unknown>;
    const { welcoming: welcomingRoot = {}, ...welcomingSections } = welcomingFile || {};
    // Merge root welcoming keys with section groups (features, stats, benefits, ...)
    welcomingNamespace = { 
      ...(welcomingRoot as Record<string, unknown>), 
      ...(welcomingSections as Record<string, unknown>) 
    };
  } catch {
    // Optional file; ignore if missing
  }

  // Attempt to load page-scoped product messages and merge under the 'product' namespace
  let productNamespace: Record<string, unknown> = {};
  try {
    const productFile = (await import(`../../dictionary/${locale}/product.json`)).default as Record<string, unknown>;
    const { product: productRoot = {}, ...productSections } = productFile || {};
    // Merge root product keys with section groups (features, benefits, cta, ...)
    productNamespace = { 
      ...(productRoot as Record<string, unknown>), 
      ...(productSections as Record<string, unknown>) 
    };
  } catch {
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
