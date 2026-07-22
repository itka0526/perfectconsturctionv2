import type { ServiceStep, TimelineStep } from "./types";

export const serviceSteps: ServiceStep[] = [
  {
    id: "meeting",
    order: 1,
    title: { mn: "Уулзалт" },
    description: { mn: "Барилгын зориулалт, төсөв, хуваарь, үндсэн хэрэгцээг ярилцана." },
    verificationStatus: "verified",
  },
  {
    id: "site-measurement",
    order: 2,
    title: { mn: "Талбайн хэмжилт" },
    description: { mn: "Шахт, нүх, цахилгаан, барилгын бодит нөхцөлийг шалгана." },
    verificationStatus: "verified",
  },
  {
    id: "technical-selection",
    order: 3,
    title: { mn: "Техникийн сонголт" },
    description: { mn: "Даац, хурд, зогсолт, хаалга, кабин, үйлдвэрлэгчийг тохирно." },
    verificationStatus: "verified",
  },
  {
    id: "manufacturing",
    order: 4,
    title: { mn: "Үйлдвэрлэл" },
    description: { mn: "Батлагдсан үзүүлэлт, гэрээт захиалгын дагуу үйлдвэрлэнэ." },
    verificationStatus: "verified",
  },
  {
    id: "delivery",
    order: 5,
    title: { mn: "Хүргэлт" },
    description: { mn: "Үйлдвэрээс гарсны дараа төслийн маршрутаар Монголд хүргэнэ." },
    verificationStatus: "verified",
  },
  {
    id: "installation-commissioning",
    order: 6,
    title: { mn: "Угсралт ба ашиглалтад оруулах" },
    description: { mn: "Талбай бэлэн болсны дараа угсарч, тохируулга ба хүлээлгэн өгөлтийг гүйцэтгэнэ." },
    verificationStatus: "verified",
  },
];

export const standardTimeline: TimelineStep[] = [
  {
    id: "manufacturing",
    duration: { mn: "30 хоног" },
    title: { mn: "Үйлдвэрлэл" },
    startsWhen: { mn: "Техникийн үзүүлэлт батлагдаж, гэрээт захиалга баталгаажсанаас" },
    verificationStatus: "placeholder",
  },
  {
    id: "delivery",
    duration: { mn: "15 хоногоос" },
    title: { mn: "БНХАУ-аас хүргэлт" },
    startsWhen: { mn: "Үйлдвэрээс гарснаас" },
    verificationStatus: "placeholder",
  },
  {
    id: "installation",
    duration: { mn: "8 хоногоос" },
    title: { mn: "Угсралт" },
    startsWhen: { mn: "Талбайн бэлэн байдлыг албан ёсоор баталгаажуулснаас" },
    verificationStatus: "placeholder",
  },
];

export const afterSalesStatement = {
  mn: "Perfect Construction-аас нийлүүлж, суурилуулсан тоног төхөөрөмжид гэрээ, баталгаат нөхцөлийн дагуу борлуулалтын дараах дэмжлэг үзүүлнэ.",
};
