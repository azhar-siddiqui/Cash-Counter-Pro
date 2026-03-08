import { generateStructuredData } from "@/app/page-metadata";

export function StructuredData() {
  const jsonLd = generateStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd,
      }}
    />
  );
}
