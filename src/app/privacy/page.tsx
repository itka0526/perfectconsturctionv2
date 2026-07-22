import { Breadcrumbs, SectionHeading } from "@/components";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbsJsonLd } from "@/lib/structured-data";

import { JsonLd } from "../_route-helpers";

export const metadata = createPageMetadata({
  title: "Нууцлал ба аналитикийн мэдээлэл | Perfect Construction",
  description:
    "Perfect Construction вебсайтын аноним аналитик, шууд холбоос, гаднын үйлчилгээний талаарх нууцлалын тайлбар.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Нүүр", path: "/" },
          { name: "Нууцлал", path: "/privacy" },
        ])}
      />
      <section className="page-hero section">
        <div className="shell">
          <Breadcrumbs
            items={[{ label: "Нүүр", href: "/" }, { label: "Нууцлал" }]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Мэдээллийн бодлого</p>
              <h1 className="display">Нууцлал ба гаднын холбоос</h1>
            </div>
            <p className="lede">
              Энэ сайт маягт, бүртгэл, файл байршуулах хэсэггүй. Вебийн
              ашиглалтыг сайжруулахын тулд зөвхөн аноним хэмжилт ашиглана.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell prose">
          <SectionHeading
            eyebrow="Хэмжилт"
            title="Ямар үйлдлийг тоолдог вэ?"
          />
          <p>
            Хуудасны үзэлт, төхөөрөмжийн ерөнхий гүйцэтгэл, утас, и-мэйл,
            Facebook, газрын зураг, брэнд, бүтээгдэхүүн, төслийн холбоосын
            товшилтыг аноним үйл явдал хэлбэрээр хэмжиж болно.
          </p>
          <p>
            Аналитикийн үйл явдалд утасны дугаар, и-мэйл хаяг, зургийн нэр,
            төслийн нууц мэдээлэл зэрэг хувийн мэдээлэл дамжуулахгүй.
          </p>

          <h2>Веб маягт ба хадгалалт</h2>
          <p>
            Энэ сайт холбоо барих болон үнийн саналын маягт, хэрэглэгчийн
            бүртгэл, өгөгдлийн сан, файл байршуулах боломжгүй. Та утас, и-мэйл,
            Facebook-ээр холбогдоход тухайн үйлчилгээний өөрийн нууцлалын нөхцөл
            үйлчилнэ.
          </p>

          <h2>Гаднын холбоос</h2>
          <p>
            Facebook, Google Maps, и-мэйл болон утасны холбоосыг сонгоход та
            гаднын апп эсвэл вебсайт руу шилжинэ. Perfect Construction нь
            тэдгээр үйлчилгээний мэдээлэл боловсруулах ажиллагааг удирдахгүй.
          </p>

          <h2>Өөрчлөлт ба холбоо барих</h2>
          <p>
            Аналитикийн хэрэгсэл, сайтын боломж өөрчлөгдвөл энэ тайлбарыг
            шинэчилнэ. Нууцлалтай холбоотой асуултыг холбоо барих хуудсан дахь
            и-мэйлээр илгээнэ үү.
          </p>
        </div>
      </section>
    </main>
  );
}
