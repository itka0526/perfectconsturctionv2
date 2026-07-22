import type { ServiceStep, TimelineStep } from "./types";

export const serviceSteps: ServiceStep[] = [
  {
    id: "meeting",
    order: 1,
    title: { mn: "Уулзалт" },
    description: { mn: "Барилгын зориулалт, төсөв, хэрэгжүүлэх хугацаа, үндсэн шаардлагыг ярилцана." },
    verificationStatus: "verified",
  },
  {
    id: "site-measurement",
    order: 2,
    title: { mn: "Талбайн хэмжилт" },
    description: { mn: "Шахтын дотор хэмжээ, худгийн гүн, цахилгаан хангамж, талбайн бэлэн байдлыг шалгана." },
    verificationStatus: "verified",
  },
  {
    id: "technical-selection",
    order: 3,
    title: { mn: "Техникийн сонголт" },
    description: { mn: "Даац, хурд, зогсолтын тоо, хаалга, кабин, үйлдвэрлэгчийг сонгоно." },
    verificationStatus: "verified",
  },
  {
    id: "manufacturing",
    order: 4,
    title: { mn: "Үйлдвэрлэл" },
    description: { mn: "Батлагдсан техникийн үзүүлэлт, гэрээний дагуу үйлдвэрт захиална." },
    verificationStatus: "verified",
  },
  {
    id: "delivery",
    order: 5,
    title: { mn: "Тээвэр" },
    description: { mn: "Үйлдвэрээс гарсан бүтээгдэхүүнийг тохирсон маршрутаар Монголд тээвэрлэнэ." },
    verificationStatus: "verified",
  },
  {
    id: "installation",
    order: 6,
    title: { mn: "Угсралт, суурилуулалт" },
    description: { mn: "Шахт болон талбайн бэлэн байдлыг шалгасны дараа угсарч, суурилуулна." },
    verificationStatus: "verified",
  },
];

export const standardTimeline: TimelineStep[] = [
  {
    id: "manufacturing",
    duration: { mn: "30 хоног" },
    title: { mn: "Үйлдвэрлэл" },
    startsWhen: { mn: "Техникийн үзүүлэлт, гэрээт захиалга батлагдсанаас" },
    verificationStatus: "verified",
  },
  {
    id: "delivery",
    duration: { mn: "15–30 хоног" },
    title: { mn: "БНХАУ-аас тээвэрлэх" },
    startsWhen: { mn: "Үйлдвэрээс гарснаас" },
    verificationStatus: "verified",
  },
  {
    id: "installation",
    duration: { mn: "8 хоногоос" },
    title: { mn: "Угсралт, суурилуулалт" },
    startsWhen: { mn: "Шахт, талбайн бэлэн байдлыг баталгаажуулснаас" },
    verificationStatus: "verified",
  },
];

export const standardTimelineSummary = {
  mn: "БНХАУ-аас захиалах ердийн лифтний үйлдвэрлэл, тээвэр, угсралт нийтдээ ойролцоогоор 2–3 сар үргэлжилнэ. Техникийн үзүүлэлт, гэрээ батлагдсанаас хойш үйлдвэрлэл 30 хоног, үйлдвэрээс гарснаас хойш тээвэр 15–30 хоног, шахт болон талбай бэлэн болсноос хойш угсралтад 8 ба түүнээс дээш хоног шаардагдана. Эцсийн хуваарийг захиалгын онцлогоос хамаарч төсөл бүрд тусад нь батална.",
};
