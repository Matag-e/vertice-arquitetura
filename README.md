# Vértice Arquitetura

Landing page em React, TypeScript e Vite, com CSS próprio, sem biblioteca de componentes, formulário fictício ou serviços externos. Layout editorial em preto, branco, cinza e areia; títulos em fonte serifada do sistema; composições geométricas em CSS identificadas como espaços reservados para fotografias. Nenhuma imagem representa um projeto realizado.

## Executar

Requisito: Node.js 22.12+ (recomendado: Node 24 LTS) ou 20.19+.

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

Abra o endereço local mostrado pelo Vite. O build é gerado em `dist/`; publique o conteúdo dessa pasta. `npm run preview` é apenas uma prévia local, não um servidor de produção. O ZIP contém código-fonte completo, lockfile e o build validado, sem `node_modules`.

## Estrutura

```text
src/
  main.tsx          entrada React
  App.tsx           composição e filtro do portfólio
  components.tsx    marca, cabeçalho, títulos e espaços de fotografia
  content.ts        serviços, FAQ, contato e dados do portfólio
  styles.css        estilos, responsividade, foco e movimento reduzido
public/
  favicon.svg
  robots.txt
  _headers          exemplo de cabeçalhos para hosts compatíveis
tests/
  render.test.mjs    verificação semântica do HTML renderizado
index.html          metadados e entrada Vite
vite.config.ts
tsconfig.json
package.json
package-lock.json
CHECKLIST-PUBLICACAO.md
VALIDACAO.md
dist/               build estático
```

## Conteúdo e conversão

Seções: apresentação, escritório, serviços, diferenciais baseados no briefing, portfólio filtrável, FAQ e contato. Menu móvel com estado anunciado e Escape para fechar; FAQ com controles nativos; navegação por âncoras; link para pular ao conteúdo; foco visível e suporte a movimento reduzido.

O e-mail `contato@vertice-arquitetura.example` é demonstrativo e não recebe mensagens. Não há número de WhatsApp, endereço, avaliações, preços ou projetos reais fornecidos. Nenhum desses dados foi inventado. Os CTAs levam à seção de contato, onde a indisponibilidade do canal é explícita. O projeto estará apto a captar contatos depois de configurar um e-mail válido.

Para habilitar contato: altere `contact.email` para um endereço real e `contact.enabled` para `true` em `src/content.ts`. A página passa a exibir um link `mailto:`; ele depende de um aplicativo de e-mail configurado no dispositivo e não envia dados pelo site. Atualize também os textos pendentes. WhatsApp deve ser incluído apenas após receber e validar um número real, em formato internacional.

## Fotografias reais

Coloque imagens autorizadas em `public/images/`, preencha `image` (por exemplo `/images/projeto-residencial.webp`) e `alt` em `src/content.ts`. Atualize títulos, categorias, textos e os rótulos de espaço reservado no portfólio quando houver obras confirmadas. Para a capa, passe `image` e `alt` ao `PhotoSpace` principal em `src/App.tsx`. Não use fotografias de terceiros como se fossem obras do escritório.

Exporte imagens em AVIF/WebP, ajuste o recorte e use resoluções adequadas (sugestão: 1200–1600 px para capa, 800–1200 px para cartões). Para novos tamanhos ou proporções, atualize os atributos `width`/`height`. A capa tem carregamento prioritário padrão (`eager`), e as imagens da galeria usam `lazy`. Nenhum arquivo de imagem pesado ou fonte externa é baixado por padrão.

## Publicação

A entrega está deliberadamente sem publicação e com indexação bloqueada durante a demonstração. Revise o checklist antes de colocar no ar. `base: './'` permite servir os arquivos compilados em subpastas; se acrescentar fotografias com caminhos iniciados em `/`, adapte esses caminhos para o diretório de publicação.

Não existem segredos, analytics, cookies próprios ou backend. Se adicionar um formulário, será necessário endpoint real com validação no servidor, proteção contra abuso, política de privacidade e tratamento de erros; não basta criar uma tela de sucesso.

O arquivo `_headers` é uma proposta para hospedagens que reconhecem esse formato, não uma configuração universal. Em outros provedores, configure os mesmos cabeçalhos no painel ou servidor. Use HTTPS; ative HSTS no provedor apenas depois de confirmar HTTPS e subdomínios. Revise a CSP caso adicione serviços externos. Revisar dependências e configurações continua sendo necessário após a entrega.
