/**
 * Serie III - Cloud Computing y CI/CD
 * Express. Azure usa process.env.PORT.
 * Opcional: STUDENT_NAME en configuracion de Azure.
 */
const express = require("express");

const app = express();
const port = Number(process.env.PORT) || 3000;
const studentName =
  process.env.STUDENT_NAME || "Evan Jesus Tejada Duarte";

function htmlPage(name) {
  const safe = String(name)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Serie III</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: system-ui, "Segoe UI", sans-serif;
      background: linear-gradient(145deg, #0f172a 0%, #1e3a5f 50%, #0c4a6e 100%);
      color: #e2e8f0;
    }
    main {
      text-align: center;
      padding: 2rem 2.5rem;
      border-radius: 16px;
      background: rgba(15, 23, 42, 0.75);
      border: 1px solid rgba(148, 163, 184, 0.25);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.45);
      max-width: 90vw;
    }
    h1 { font-size: 1.1rem; font-weight: 600; letter-spacing: 0.02em; color: #94a3b8; margin: 0 0 0.75rem; }
    .name { font-size: clamp(1.5rem, 5vw, 2.25rem); font-weight: 700; color: #f8fafc; margin: 0; }
    .hint { margin-top: 1.25rem; font-size: 0.8rem; color: #64748b; line-height: 1.5; }
  </style>
</head>
<body>
  <main>
    <h1>Estudiante</h1>
    <p class="name">${safe}</p>
    <p class="hint">Serie III · Despliegue en Azure App Service con CD desde GitHub</p>
  </main>
</body>
</html>`;
}

function sendHome(req, res) {
  res.set("Cache-Control", "no-store");
  res.type("html").send(htmlPage(studentName));
}

app.get("/", sendHome);
app.get("/index.html", sendHome);

app.get("/health", (req, res) => {
  res.type("text").send("ok");
});

app.use((req, res) => {
  res.status(404).type("text").send("No encontrado");
});

app.listen(port, () => {
  console.log(`Serie III escuchando en http://localhost:${port}`);
});
