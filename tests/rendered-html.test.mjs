import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the ActionAid Funding Intelligence presentation", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /ActionAid Funding Intelligence/);
  assert.match(html, /Più opportunità/);
  assert.match(html, /Dall’AI sperimentata all’AI operativa/);
  assert.match(html, /Abbiamo una Ferrari importantissima/);
  assert.match(html, /AI per contesti in cui controllo e affidabilità/);
  assert.match(html, /OPPORTUNITÀ/);
  assert.match(html, /Jarvis/);
});

test("renders the interactive ActionAid demo", async () => {
  const response = await render("/demo");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Funding Control/);
  assert.match(html, /Due opportunità possono avanzare/);
  assert.match(html, /SCENARIO DEMO/);
  assert.match(html, /ActionAid/);
});
