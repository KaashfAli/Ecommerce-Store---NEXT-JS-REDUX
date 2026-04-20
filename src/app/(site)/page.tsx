import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs E-commerce store",
  description: "This is Home Page of Nextjs E-commerce store",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
