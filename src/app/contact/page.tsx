import {
  Breadcrumbs,
  PlaceholderBadge,
  SectionHeading,
  TrackedLink,
} from "@/components";
import { siteSettings } from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import {
  breadcrumbsJsonLd,
  organizationJsonLd,
} from "@/lib/structured-data";

import { JsonLd } from "../_route-helpers";

export const metadata = createPageMetadata({
  title: "Perfect Construction-той холбогдох",
  description:
    "Шинэ лифтний төслийн талаар утас, и-мэйл, Facebook, оффисын уулзалт эсвэл газрын зургаар Perfect Construction-той шууд холбогдоно.",
  path: "/contact",
});

const channelDescriptions = {
  phone: "Шууд ярьж, талбайн уулзалтын цаг тохирох.",
  email: "Зураг, шаардлага, төслийн мэдээллийг илгээх.",
  facebook: "Facebook-ээр богино асуулт, уулзалтын хүсэлт илгээх.",
  map: "Оффисын байршил, очих чиглэлийг харах.",
  office: "Урьдчилан цаг тохирч биечлэн уулзах.",
};

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={[
          organizationJsonLd(),
          breadcrumbsJsonLd([
            { name: "Нүүр", path: "/" },
            { name: "Холбоо барих", path: "/contact" },
          ]),
        ]}
      />
      <section className="page-hero section">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Нүүр", href: "/" },
              { label: "Холбоо барих" },
            ]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Шууд харилцаа</p>
              <h1 className="display">Төслөө ярилцах хамгийн богино зам</h1>
            </div>
            <p className="lede">
              Маягт бөглөх шаардлагагүй. Утасдах, и-мэйл бичих, Facebook-ээр
              холбогдох эсвэл уулзалт товлож барилгын нөхцөлөө шууд ярилцаарай.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Холбоо барих суваг"
            title="Өөрт тохирох аргаа сонгоно уу"
            description="Доорх холбоо барих мэдээллийг үйлдвэрлэлийн хувилбараас өмнө дахин баталгаажуулна."
          />
          <div className="contact-grid">
            {siteSettings.contacts.map((channel) => (
              <article className="card" key={channel.id}>
                <p className="card__meta">{channel.label.mn}</p>
                <div className="card__body">
                  <h2>{channel.value}</h2>
                  <p>{channelDescriptions[channel.kind]}</p>
                  {channel.verificationStatus === "placeholder" ? (
                    <PlaceholderBadge />
                  ) : null}
                  <TrackedLink
                    className="link-arrow"
                    eventContext={`contact_${channel.kind}`}
                    eventName="contact_click"
                    external={channel.external}
                    href={channel.href}
                  >
                    {channel.kind === "map" ? "Газрын зураг нээх" : "Холбогдох"}{" "}
                    <span aria-hidden="true">→</span>
                  </TrackedLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell detail-grid">
          <div>
            <p className="eyebrow">Оффис ба уулзалт</p>
            <h2 className="display">{siteSettings.address.mn}</h2>
            {siteSettings.addressVerificationStatus === "placeholder" ? (
              <PlaceholderBadge label="Хаягийг баталгаажуулна" />
            ) : null}
          </div>
          <div className="prose">
            <h2>Эхний ярианы дараа юу болох вэ?</h2>
            <ol className="resource-list">
              <li>Барилгын зориулалт, давхар, одоогийн явцыг товч ярилцана.</li>
              <li>Шаардлагатай бол талбайн уулзалт, бодит хэмжилт товлоно.</li>
              <li>
                Мэдээлэл бүрэн үед урьдчилсан үнийн саналыг дараагийн ажлын
                өдөрт багтаан бэлтгэх зорилготой.
              </li>
            </ol>
            <PlaceholderBadge label="Үнийн саналын хугацааг баталгаажуулна" />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell prose">
          <h2>Хариу өгөх тухай</h2>
          <p>
            Дуудлагыг шууд авахыг зорьдог. Аваагүй дуудлага байвал эргэн
            холбогдож, шинэ төслийн талбайн уулзалт болон дараагийн алхмыг
            тохирно. Энэ нь бүх нийтэд зориулсан 24/7 засварын дуудлагын амлалт
            биш.
          </p>
        </div>
      </section>
    </main>
  );
}
