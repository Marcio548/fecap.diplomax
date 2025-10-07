# Validador de Diplomas — v5 (rota à prova de erro)
- **/**  → Tela inicial (campo vazio).
- **/CodigoValidacao=SEU_CODIGO** → redireciona no cliente para **/CodigoValidacao/SEU_CODIGO** e abre a página 2.
- **/CodigoValidacao/SEU_CODIGO** → rota oficial do app.
- SPA fallback com `vercel.json`.

Deploy Vercel: build `npm run build`, output `dist`.
