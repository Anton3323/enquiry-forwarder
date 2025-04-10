export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const makeWebhookUrl = "https://hook.eu2.make.com/adqcwnpx9pxrudg22c7h2yfum77qjmd3";

  try {
    const response = await fetch(makeWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      throw new Error(`Make.com responded with status ${response.status}`);
    }

    res.status(200).json({ message: "Forwarded to Make successfully" });
  } catch (err) {
    console.error("Error forwarding to Make:", err);
    res.status(500).json({ message: "Failed to forward to Make" });
  }
}
