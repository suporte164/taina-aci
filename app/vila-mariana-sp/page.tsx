import type { Metadata } from "next"
import { HomeContent } from "@/components/home-content"

export const metadata: Metadata = {
  title: "Endocrinologista na Vila Mariana SP | Dra. Tainã Aci",
  description:
    "Procurando endocrinologista na Vila Mariana, SP? Dra. Tainã Aci oferece consultas particulares especializadas em emagrecimento, hormônios, tireoide e saúde metabólica. Agende sua consulta.",
  keywords:
    "endocrinologista Vila Mariana, endocrinologista Vila Mariana SP, endocrinologista São Paulo, emagrecimento, hormônios, tireoide, diabetes, menopausa",
  alternates: {
    canonical: "https://endocrinologista.tainaaci.com.br/vila-mariana-sp",
  },
  openGraph: {
    title: "Endocrinologista na Vila Mariana SP | Dra. Tainã Aci",
    description:
      "Consultas particulares em endocrinologia na Vila Mariana, SP. Especializada em emagrecimento, hormônios e saúde metabólica. CRM 166519 | RQE 81061.",
    url: "https://endocrinologista.tainaaci.com.br/vila-mariana-sp",
    locale: "pt_BR",
    type: "website",
  },
}

export default function VilaMarianaSP() {
  return <HomeContent />
}
