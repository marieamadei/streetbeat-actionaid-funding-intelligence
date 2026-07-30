import type { Metadata } from "next";
import DemoWorkspace from "./DemoWorkspace";

export const metadata: Metadata = {
  title: "Demo | ActionAid Fundraising & Bandi Intelligence",
  description:
    "Workspace dimostrativo Streetbeat per fundraising, bandi e adozione responsabile dell’AI in ActionAid.",
};

export default function DemoPage() {
  return <DemoWorkspace />;
}
