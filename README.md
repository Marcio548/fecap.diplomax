# Validador de Diplomas — v4
- **/**  → Tela inicial (campo vazio).
- **/CodigoValidacao=SEU_CODIGO** → Vercel reescreve para **/CodigoValidacao/SEU_CODIGO** (rota do app).
- **/CodigoValidacao/SEU_CODIGO** → Também funciona.

`vercel.json` inclui:
{
  "rewrites": [
    { "source": "/CodigoValidacao=(.*)", "destination": "/CodigoValidacao/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
