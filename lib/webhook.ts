interface CorreTopLeadPayload {
  name: string;
  phone: string;
  email?: string;
  source: string;
  planInterest?: string;
  externalId?: string;
  branchExternalId?: string;
}

export async function sendLeadToCorreTop(payload: CorreTopLeadPayload) {
  // Read from window properties if available, fallback to defaults
  const hubUrl = (typeof window !== 'undefined' && (window as any).CORRETOP_HUB_URL) 
    || "https://corretop.vercel.app/api/webhooks/leads";
  const hubToken = (typeof window !== 'undefined' && (window as any).CORRETOP_HUB_TOKEN)
    || "crt_live_PCIpgmgdjDhwVn6-Ylt8rK84klwYK9C7-4_uwPdb2KQ";

  // Clean phone number: Keep only digits, must be at least 10 digits
  const cleanedPhone = payload.phone.replace(/\D/g, '');

  // Strict payload building (no extra properties to avoid 422 Invalid Payload)
  const strictPayload: Record<string, any> = {
    name: payload.name.trim(),
    phone: cleanedPhone,
    source: payload.source.trim(),
  };

  if (payload.email && payload.email.trim() !== '') {
    strictPayload.email = payload.email.trim();
  }
  if (payload.planInterest && payload.planInterest.trim() !== '') {
    strictPayload.planInterest = payload.planInterest.trim();
  }
  if (payload.externalId && payload.externalId.trim() !== '') {
    strictPayload.externalId = payload.externalId.trim();
  }
  if (payload.branchExternalId && payload.branchExternalId.trim() !== '') {
    strictPayload.branchExternalId = payload.branchExternalId.trim();
  }

  // Basic client-side validation to avoid useless requests
  if (strictPayload.name.length < 2 || strictPayload.phone.length < 10) {
    console.warn("sendLeadToCorreTop: Invalid payload data (name too short or phone < 10 digits)");
    return { success: false, error: "Dados inválidos" };
  }

  try {
    const response = await fetch(hubUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${hubToken}`,
        "Idempotency-Key": `lead-${Date.now()}`
      },
      body: JSON.stringify(strictPayload)
    });

    const result = await response.json().catch(() => ({}));
    if (response.ok && (result.success || response.status === 200 || response.status === 201)) {
      return { success: true, data: result };
    } else {
      console.error("sendLeadToCorreTop: Error from webhook:", result);
      return { success: false, error: result.error || "Erro ao registrar o lead no CRM" };
    }
  } catch (error) {
    console.error("sendLeadToCorreTop: Network error:", error);
    return { success: false, error: "Falha de rede ou conexão" };
  }
}
