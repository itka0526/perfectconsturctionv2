import { ButtonLink } from "@/components";

export default function NotFound() {
  return (
    <main className="error-state section section--soft">
      <div className="shell error-state__inner">
        <p className="eyebrow">404 · Хуудас олдсонгүй</p>
        <h1 className="display">Хуудас олдсонгүй.</h1>
        <p className="lede">
          Холбоос өөрчлөгдсөн эсвэл хуудас устсан байж магадгүй. Үндсэн
          хуудас руу буцаж эсвэл бүтээгдэхүүний мэдээллийг үзнэ үү.
        </p>
        <div className="button-row">
          <ButtonLink href="/">Нүүр хуудас</ButtonLink>
          <ButtonLink href="/products" variant="outline">
            Бүтээгдэхүүн
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
