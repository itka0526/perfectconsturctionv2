export interface NavigationItem {
  href: string;
  label: string;
}

export const primaryNavigation: NavigationItem[] = [
  { href: "/products", label: "Бүтээгдэхүүн" },
  { href: "/brands", label: "Үйлдвэрлэгчид" },
  { href: "/projects", label: "Төслүүд" },
  { href: "/services", label: "Ажлын үе шат" },
  { href: "/about", label: "Бидний тухай" },
  { href: "/resources", label: "Мэдээлэл" },
];

export const secondaryNavigation: NavigationItem[] = [
  { href: "/about/certificates", label: "Гэрчилгээ" },
  { href: "/contact", label: "Холбоо барих" },
  { href: "/privacy", label: "Нууцлал" },
];
