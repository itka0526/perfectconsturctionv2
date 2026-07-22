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
  title: "Холбоо барих",
  description:
    "Шинэ лифтний төслийн талаар утас, и-мэйл, Facebook, оффисын уулзалт эсвэл газрын зургаар Төгс Бүтээн Босголттой шууд холбогдоно.",
  path: "/contact",
});

const channelDescriptions = {
  phone: "Утсаар ярьж, талбайн уулзалтын цаг товлоно.",
  email: "Барилгын зураг, шаардлага, төслийн мэдээлэл илгээнэ.",
  facebook: "Facebook-ээр асуулт асууж, уулзалтын хүсэлт илгээнэ.",
  map: "Оффисын байршил, очих чиглэлийг харна.",
  office: "Урьдчилан цаг товлож, биечлэн уулзана.",
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
              <p className="eyebrow">Холбоо барих</p>
              <h1 className="display">Шинэ төслийнхөө талаар шууд ярилцъя</h1>
            </div>
            <p className="lede">
              Маягт бөглөх шаардлагагүй. Утсаар ярих, и-мэйл бичих,
              Facebook-ээр холбогдох эсвэл уулзалтын цаг товлож болно.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Холбоо барих мэдээлэл"
            title="Өөрт тохирох аргаар холбогдоорой"
            description="Утас, и-мэйл эсвэл Facebook-ээр холбогдож, шаардлагатай бол талбайн уулзалтын цаг товлоно."
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
            <h2>Холбогдсоны дараа</h2>
            <ol className="resource-list">
              <li>Барилгын зориулалт, давхрын тоо, одоогийн явцыг товч ярилцана.</li>
              <li>Шаардлагатай бол талбайн уулзалт, бодит хэмжилт товлоно.</li>
              <li>
                Талбайн хэмжилт хийж, шаардлагатай мэдээлэл бүрдсэний дараа
                урьдчилсан үнийн саналыг дараагийн ажлын өдөрт багтаан бэлтгэнэ.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell prose">
          <h2>Дуудлагад хариу өгөх</h2>
          <p>
            Дуудлагыг шууд авахыг зорьдог. Хэрэв дуудлага авч чадаагүй бол
            эргэн холбогдож, шаардлагатай тохиолдолд талбайн уулзалтын цаг
            товлоно.
          </p>
        </div>
      </section>
    </main>
  );
}
