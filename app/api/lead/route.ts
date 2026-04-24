export const runtime = "edge"

const WEBHOOK_URL =
  "https://n8n-webhook.axmxa0.easypanel.host/webhook/vila-mariana-sp"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch {
    // Não expõe erros internos ao cliente
    return new Response(JSON.stringify({ ok: false }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  }
}
