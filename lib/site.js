// Shared identity for structured data: page-level Service blocks point at ORG_ID as their
// provider, and /about describes PERSON_ID. City level only; the street address stays private.

export const SITE = "https://www.provinesconsulting.com";
export const ORG_ID = `${SITE}/#organization`;
export const PERSON_ID = `${SITE}/#connor`;
export const LINKEDIN_COMPANY = "https://www.linkedin.com/company/provines-consulting";
export const LINKEDIN_CONNOR = "https://www.linkedin.com/in/connor-provines-a003a6a2/";

export const AREA_SERVED = [
  { "@type": "City", name: "San Jose" },
  { "@type": "AdministrativeArea", name: "San Francisco Bay Area" },
  { "@type": "Country", name: "United States" },
];

export const ADDRESS = { "@type": "PostalAddress", addressLocality: "San Jose", addressRegion: "CA", addressCountry: "US" };
