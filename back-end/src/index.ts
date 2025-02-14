import app from "./app"

const PORTA = process.env.PORTA ?? 3000

app.listen(PORTA, () => console.log(`API rodando na porta ${PORTA}`))