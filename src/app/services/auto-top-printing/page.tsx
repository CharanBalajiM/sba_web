import type { Metadata } from "next";
import AutoTopPrinting from "./AutoTopClient";

export const metadata: Metadata = {
  title: "Auto Top Printing & Branding Tamil Nadu | Sree Balaji Advertising",
  description:
    "Direct-on-rexine Auto Top printing & custom cover-replacement branding services across Tamil Nadu. High-visibility mobile transit advertising since 1999.",
  alternates: {
    canonical: "/services/auto-top-printing",
  },
};

export default function Page() {
  return <AutoTopPrinting />;
}
