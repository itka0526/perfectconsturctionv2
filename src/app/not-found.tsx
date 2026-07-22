import { ButtonLink } from "@/components";

export default function NotFound() {
  return (
    <main className="error-state section section--soft">
      <div className="shell error-state__inner">
        <p className="eyebrow">404 · Хуудас олдсонгүй</p>
        <h1 className="display">Энэ давхарт хуудас алга.</h1>
        <p className="lede">
          Холбоос өөрчлөгдсөн эсвэл хуудас устсан байж магадгүй. Үндсэн
          мэдээлэл рүү буцаж, төслийн шийдлээ үргэлжлүүлэн үзээрэй.
        </p>
        <div className="button-row">
          <ButtonLink href="/">Нүүр хуудас</ButtonLink>
          <ButtonLink href="/products" variant="outline">
            Лифтний шийдлүүд
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
