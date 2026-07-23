import Image from "next/image";

import { SectionHeading, TrackedLink } from "@/components";
import { assets, siteSettings } from "@/content";
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

const heroSocialIcons = [
  { asset: assets.socials.facebook, name: "facebook" },
  { asset: assets.socials.gmail, name: "gmail" },
  { asset: assets.socials.messenger, name: "messenger" },
  { asset: assets.socials.viber, name: "viber" },
] as const;

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
      <section className="page-hero page-hero--contact section">
        <div className="shell">
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Холбоо барих</p>
              <h1 className="display">Шинэ төслийнхөө талаар шууд ярилцъя</h1>
            </div>
            <div className="contact-hero-socials">
              <p className="lede contact-hero-socials__copy">
                Утас, и-мэйл эсвэл Facebook-ээр холбогдож, уулзалтын цагаа
                товлоорой.
              </p>
              {heroSocialIcons.map(({ asset, name }) => (
                <span
                  aria-hidden="true"
                  className={`contact-hero-socials__icon contact-hero-socials__icon--${name}`}
                  key={name}
                >
                  <Image
                    alt=""
                    height={asset.height}
                    loading="eager"
                    src={asset.src}
                    width={asset.width}
                  />
                </span>
              ))}
            </div>
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
        <div className="shell detail-grid detail-grid--contact-office">
          <div>
            <p className="eyebrow">Оффис ба уулзалт</p>
            <h2 className="contact-address">{siteSettings.address.mn}</h2>
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
    </main>
  );
}
