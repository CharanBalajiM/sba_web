import type { Metadata } from "next";
import Services from "./ServicesClient";

export const metadata: Metadata = {
  title: "Advertising Services Erode & Tamil Nadu | Sree Balaji Advertising",
  description:
    "Explore our targeted local advertising solutions in Tamil Nadu since 1999: Sunpack sheet printing, Auto top branding, design layouts, and stand coordination.",
  alternates: {
    canonical: "https://sreebalajiadvertising.co.in/services",
  },
};

export default function Page() {
  return <Services />;
}
