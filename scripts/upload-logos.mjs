import { createClient } from "@supabase/supabase-js"
import { readFileSync } from "fs"

const sb = createClient("https://odisewmgwxgjhqhsznuv.supabase.co", process.env.SUPABASE_KEY)
const BUCKET = "taina-stories"

const logos = [
  { file: "C:\\Users\\rya_p\\Downloads\\LOGO V1 TAINÃ.png",         name: "logo-principal.png", type: "image/png" },
  { file: "C:\\Users\\rya_p\\Downloads\\LOGO V1 TAINÃ - RODAPE.png", name: "logo-rodape.png",    type: "image/png" },
]

for (const logo of logos) {
  const buf = readFileSync(logo.file)
  const { error } = await sb.storage.from(BUCKET).upload(logo.name, buf, { contentType: logo.type, upsert: true })
  if (error) { console.error(logo.name, "ERRO:", error.message); continue }
  const { data } = sb.storage.from(BUCKET).getPublicUrl(logo.name)
  console.log(logo.name + " → " + data.publicUrl)
}
