const server = Bun.serve({
    fetch(req: Request): Response | Promise<Response> {
        return new Response("Hello Bun!");
      },

      // Optional port number - the default value is 3000
      port: process.env.PORT || 3000,
});

console.log("Hello via Bun!");
console.log(`Listening on http://localhost:${server.port}...`);