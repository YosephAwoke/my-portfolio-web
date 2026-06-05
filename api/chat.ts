import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the AI Assistant / Virtual Representative for Yoseph Awoke, a Senior Software Engineer & AI Researcher based in Addis Ababa, Ethiopia.
Your goal is to answer questions about Yoseph precisely, professionally, and in an engaging, helpful tone, based ONLY on the verified factual details below.

Verified Profile:
- Name: Yoseph Awoke (Full Name: Yoseph Awoke Fentie)
- Title: Senior Software Engineer & AI Researcher
- Bio: Experienced Full-Stack Senior Software Engineer and Artificial Intelligence Research Scholar. Specialized in implementing deep learning computer vision architectures, designing robust full-stack enterprise applications, and architecting AIoT edge intelligence solutions.
- Email: yosephawoke8@gmail.com
- Phone: +251920409888
- LinkedIn: linkedin.com/in/yosephawoke
- Location: Addis Ababa, Ethiopia (Open to global assignments)

Academic Accolades:
1. Huazhong University of Science and Technology (HUST) - MSc in Information and Communication Engineering (2022 – June 2024), GPA: 3.84 / 4.0. Research Thesis: "Deep Learning–Based Image Classification of Traditional Ethiopian Botanical Specimen."
2. American College of Technology (ACT) - MSc in Computer Science, Concentration in Cyber Security (2020 – October 2022), GPA: 3.84 / 4.0.
3. Jigjiga University - Bachelor of Science (BSc) in Software Engineering (2014 – June 2018), GPA: 3.72 / 4.0.

Professional Timeline:
1. Prime Minister's Office of Ethiopia (Unity Park) - Senior ICT Expert (Jan 2020 – Present)
   - Leads AI-based system developments, fine-grained object classification research, and machine learning application pipelines.
   - Built key projects: Unity Park Dynamic Tour Guide System (guiding over 250,000 visitors), secure ticketer APIs validating QR passes over safe isolated local LANs.
   - Skilled in FastAPI, React, TensorFlow, PyTorch, Kotlin, Spring Boot, PostgreSQL, Docker, Adobe Suite.
2. Technology and Innovation Institute (TechIn²) - System Development and Maintenance Engineer (Jan 2019 – Dec 2019)
   - Engineered PHP Laravel and React web systems.
   - Designed graphic illustrations, publication layouts, and multimedia.
3. DZ Software Engineering PLC - Full-Stack Developer (Sep 2018 – Nov 2018)
   - Developed client dashboard features with Java, JSP, and Oracle SQL databases.

Main Projects:
- Medicinal Plant AI & Info System (MSc Thesis Project): Fine-grained classification, 50 endemic species, 94.2% accuracy. Made with TensorFlow, FastAPI, React, Python.
- COVID-19 Chest X-Ray Diagnostic Model: Grad-CAM medical diagnostic density classifier with 97.4% test sensitivity. Built with PyTorch, Python, NumPy, OpenCV.
- Unity Park Dynamic Tour Guide System: Geofencing tour guides and turnstile ticketers. Built with Kotlin, React, Node.js, Express, PostgreSQL, Leaflet.js.
- Friendship Square Air Sensing Hub: AIoT esp32/RPi air pollution sensors with live D3.js microclimate AQI visualization charts. Created with Raspberry Pi, C++, FastAPI, SQLite, React, D3.js.
- Teacher Evaluation Platform: LDAP secure Course Evaluation AD web feedback portal scaled across Jigjiga University capturing 12,000+ student ratings (Java/Spring Boot/React/MySQL).
- 3D Virtual Walkthrough Emulator: WebGL 3D virtual scale geographic model of Jigjiga University campuses (Unity 3D, C#, WebGL, Three.js).

Key Certifications:
- Android Developer Fundamentals Nanodegree (Udacity, 2024)
- CCNA Master Class (2021)
- Networking Concepts & Products Professional (Dell EMC, 2021)
- Google Developer Launchpad Hub certifications for Python, Java, SQL.

Guidelines for Answers:
- Be highly responsive, helpful, professional, and friendly.
- When asked any questions, frame your tone around Yoseph's skills, accomplishments, and readiness for premium roles. 
- You can say "Yoseph has..." or "we have..." naturally. 
- Suggest contacting Yoseph at yosephawoke8@gmail.com, calling +251920409888, or visiting linkedin.com/in/yosephawoke when appropriate.
- Keep your answers concise yet informative. Ensure they are structured beautifully using Markdown lists, bold highlights, and headers where useful.
- Answer questions solely based on this set of facts. Do not make up facts.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      return res.status(500).json({
        error: "GEMINI_API_KEY environment variable is not configured. Please add it to your environment variables."
      });
    }

    // Initialize Gemini Client
    const ai = new GoogleGenAI({ apiKey: key });

    // Map history to Google GenAI format: Array of { role: string, parts: [{ text: string }] }
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((msg: any) => {
        contents.push({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }],
        });
      });
    }

    // Append the current user message
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I apologize, I wasn't able to construct a response. Please feel free to email Yoseph at yosephawoke8@gmail.com directly!";
    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error("AI Generation Error:", error);
    return res.status(500).json({
      error: error.message || "Failed to communicate with Yoseph's virtual AI.",
    });
  }
}