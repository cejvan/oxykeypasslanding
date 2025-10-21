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

  // Attempt to load page-scoped solutions messages and merge under the 'solutions' namespace
  let solutionsNamespace: Record<string, unknown> = {};
  try {
    const solutionsFile = (await import(`../../dictionary/${locale}/solutions.json`)).default as Record<string, unknown>;
    const { solutions: solutionsRoot = {}, ...solutionsSections } = solutionsFile || {};
    // Merge root solutions keys with section groups (sectors, whyOxyKeyPass, cta, ...)
    solutionsNamespace = { 
      ...(solutionsRoot as Record<string, unknown>), 
      ...(solutionsSections as Record<string, unknown>) 
    };
  } catch {
    // Optional file; ignore if missing
  }

  // Attempt to load page-scoped models messages and merge under the 'models' namespace
  let modelsNamespace: Record<string, unknown> = {};
  try {
    const modelsFile = (await import(`../../dictionary/${locale}/models.json`)).default as Record<string, unknown>;
    const { models: modelsRoot = {}, ...modelsSections } = modelsFile || {};
    // Merge root models keys with section groups (mobileApp, generalApi, companyApi, ...)
    modelsNamespace = { 
      ...(modelsRoot as Record<string, unknown>), 
      ...(modelsSections as Record<string, unknown>) 
    };
  } catch {
    // Optional file; ignore if missing
  }

  // Attempt to load page-scoped integrations messages and merge under the 'integrations' namespace
  let integrationsNamespace: Record<string, unknown> = {};
  try {
    const integrationsFile = (await import(`../../dictionary/${locale}/integrations.json`)).default as Record<string, unknown>;
    const { integrations: integrationsRoot = {}, ...integrationsSections } = integrationsFile || {};
    // Merge root integrations keys with section groups (turnstiles, doorLocks, lockers, ...)
    integrationsNamespace = { 
      ...(integrationsRoot as Record<string, unknown>), 
      ...(integrationsSections as Record<string, unknown>) 
    };
  } catch {
    // Optional file; ignore if missing
  }

  // Attempt to load page-scoped security messages and merge under the 'security' namespace
  let securityNamespace: Record<string, unknown> = {};
  try {
    const securityFile = (await import(`../../dictionary/${locale}/security.json`)).default as Record<string, unknown>;
    const { security: securityRoot = {}, ...securitySections } = securityFile || {};
    // Merge root security keys with section groups (features, compliance, standards, ...)
    securityNamespace = { 
      ...(securityRoot as Record<string, unknown>), 
      ...(securitySections as Record<string, unknown>) 
    };
  } catch {
    // Optional file; ignore if missing
  }

  // Attempt to load page-scoped pricing messages and merge under the 'pricing' namespace
  let pricingNamespace: Record<string, unknown> = {};
  try {
    const pricingFile = (await import(`../../dictionary/${locale}/pricing.json`)).default as Record<string, unknown>;
    const { pricing: pricingRoot = {}, ...pricingSections } = pricingFile || {};
    // Merge root pricing keys with section groups (plans, comparison, cta, ...)
    pricingNamespace = { 
      ...(pricingRoot as Record<string, unknown>), 
      ...(pricingSections as Record<string, unknown>) 
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
    solutions: {
      ...(baseMessages?.solutions || {}),
      ...solutionsNamespace,
    },
    models: {
      ...(baseMessages?.models || {}),
      ...modelsNamespace,
    },
    integrations: {
      ...(baseMessages?.integrations || {}),
      ...integrationsNamespace,
    },
    security: {
      ...(baseMessages?.security || {}),
      ...securityNamespace,
    },
    pricing: {
      ...(baseMessages?.pricing || {}),
      ...pricingNamespace,
    },
  };

  return {
    locale,
    messages,
  };
});
