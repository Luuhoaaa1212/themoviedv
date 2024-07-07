import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const randomImageBanner = () => {
  const images = [
    "/banner/banner-1.jpg",
    "/banner/banner-2.jpg",
    "/banner/banner-3.jpg",
    "/banner/banner-4.jpg",
    "/banner/banner-5.jpg",
    "/banner/banner-6.jpg",
    "/banner/banner-7.jpg",
    "/banner/banner-8.jpg",
    "/banner/banner-9.jpg",
    "/banner/banner-10.jpg",
  ];

  const random = Math.floor(Math.random() * images.length);

  return images[random];
};

export const cliamsHeader = (headers: Headers) => {
  const token = process.env.NEXT_PUBLIC_TOKEN_SECRET_KEY;
  if (token) {
    headers.set("authorization", `Bearer ${token}`);
  }
  return headers;
};
