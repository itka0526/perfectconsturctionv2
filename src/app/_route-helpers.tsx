import type { JsonLdObject } from "@/lib/structured-data";
import { serializeJsonLd } from "@/lib/structured-data";

export function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

export function EditorialList({ items }: { items: string[] }) {
  return (
    <ul className="resource-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
