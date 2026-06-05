// Contact handler: supports SendGrid (preferred) or forwarding to a webhook URL.
export default async function handler(req: any, res: any) {
  try {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const { name, email, message } = req.body || {};
    if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });

    // Prefer SendGrid if configured
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const CONTACT_WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL;

    if (SENDGRID_API_KEY) {
      // Use SendGrid mail send API
      const payload = {
        personalizations: [{ to: [{ email: process.env.CONTACT_RECEIVER_EMAIL }], subject: `Portfolio contact from ${name}` }],
        from: { email: process.env.CONTACT_FROM_EMAIL || 'no-reply@portfolio' },
        content: [{ type: 'text/plain', value: `Name: ${name}\nEmail: ${email}\n\n${message}` }],
      };

      const r = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${SENDGRID_API_KEY}` },
        body: JSON.stringify(payload),
      });

      if (!r.ok) {
        const text = await r.text();
        console.error('SendGrid error', text);
        return res.status(500).json({ error: 'Failed to send email via SendGrid' });
      }

      return res.status(200).json({ ok: true });
    }

    if (CONTACT_WEBHOOK_URL) {
      const r = await fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!r.ok) {
        const text = await r.text();
        console.error('Webhook forward error', text);
        return res.status(500).json({ error: 'Failed to forward to webhook' });
      }
      return res.status(200).json({ ok: true });
    }

    return res.status(500).json({ error: 'No contact delivery configured. Set SENDGRID_API_KEY or CONTACT_WEBHOOK_URL.' });
  } catch (err: any) {
    console.error('/api/contact error', err);
    return res.status(500).json({ error: err?.message || 'Internal error' });
  }
}
