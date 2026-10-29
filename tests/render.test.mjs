import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createServer } from 'vite';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';

let server;
let markup;
before(async () => {
  server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  markup = renderToStaticMarkup(createElement(App));
});
after(async () => { await server?.close(); });

test('todas as âncoras e referências de títulos têm destino', () => {
  const ids = [...markup.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const match of markup.matchAll(/(?:href="#|aria-labelledby="|aria-controls=")([^"]+)"/g)) {
    assert.ok(ids.includes(match[1]), `Destino ausente: ${match[1]}`);
  }
});
test('contato demonstrativo não oferece envio inexistente', () => {
  assert.match(markup, /E-mail demonstrativo/);
  assert.match(markup, /WhatsApp ainda não informado/);
  assert.doesNotMatch(markup, /href="(?:mailto:|https:\/\/wa.me)|<form/);
});
test('conteúdo inclui um título principal e FAQ nativo', () => {
  assert.equal([...markup.matchAll(/<h1\b/g)].length, 1);
  assert.equal([...markup.matchAll(/<details\b/g)].length, 5);
  assert.equal([...markup.matchAll(/ESPAÇO PARA FOTOGRAFIA REAL/g)].length, 4);
  assert.match(markup, /aria-pressed="true"/);
});
