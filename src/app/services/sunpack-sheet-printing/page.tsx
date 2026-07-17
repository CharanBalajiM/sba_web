import type { Metadata } from "next";
import SunpackSheetPrinting from "./SunpackClient";

export const metadata: Metadata = {
  title: "Sunpack Sheet Printing Erode & Tamil Nadu | Sree Balaji Advertising",
  description:
    "Weatherproof coroplast sheet advertising prints for mass outdoor local marketing campaigns in Erode and Tamil Nadu. Standard pole-board sizes with metal eyelets.",
  alternates: {
    canonical: "/services/sunpack-sheet-printing",
  },
};

export default function Page() {
  return <SunpackSheetPrinting />;
}
