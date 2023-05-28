import { Application } from 'https://deno.land/x/oak@v12.5.0/mod.ts'

const app = new Application()

app.use((ctx) => {
  ctx.response.body = 'Hello from Deno!'
})

const PORT = 3000

console.log(`Server running on ${PORT}`)
await app.listen({ port: PORT })
