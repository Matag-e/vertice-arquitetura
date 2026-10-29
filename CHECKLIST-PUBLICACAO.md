# Checklist de publicação

## Dados e conteúdo
- [ ] Confirmar o e-mail real e ativar o contato em `src/content.ts`.
- [ ] Confirmar telefone/WhatsApp antes de incluir qualquer link.
- [ ] Inserir fotografias reais, autorização de uso, créditos e textos alternativos.
- [ ] Atualizar nomes e descrições das obras e remover os avisos de demonstração somente após conferir os dados.
- [ ] Revisar serviços, escopo, FAQ e identidade com o escritório.
- [ ] Não acrescentar avaliações, números, endereço ou credenciais sem confirmação.

## Experiência e acessibilidade
- [ ] Conferir menu, Escape, âncoras, filtros, FAQ e volta ao início.
- [ ] Testar o link de e-mail em dispositivos com e sem aplicativo configurado.
- [ ] Conferir larguras de 360, 390, 768, 1024 e 1440 px, sem rolagem horizontal.
- [ ] Testar zoom de 200%, Tab, Shift+Tab, Enter, Espaço e leitor de tela.
- [ ] Conferir contraste, foco, movimento reduzido e imagens após substituir o conteúdo.
- [ ] Inspecionar console e aba de rede em desktop e celular.

## Build e hospedagem
- [ ] Executar `npm ci`, `npm test`, `npm run build` e `npm audit`.
- [ ] Reavaliar resultados do audit e atualizações antes de publicar.
- [ ] Publicar apenas `dist/`, sem dependências, arquivos locais ou segredos.
- [ ] Configurar domínio real e HTTPS; confirmar os cabeçalhos HTTP efetivamente enviados.
- [ ] Adaptar `_headers` ao provedor; rever CSP quando incluir novos recursos.
- [ ] Configurar HSTS no provedor após validar HTTPS e subdomínios.
- [ ] Após aprovação final, remover `noindex, nofollow` de `index.html` e trocar `Disallow: /` em `public/robots.txt` por `Allow: /`.
- [ ] Acrescentar canonical, `og:url`, imagem social real e sitemap com o domínio confirmado.
- [ ] Reconstruir o build após qualquer alteração e testar URLs no domínio definitivo.
- [ ] Documentar rotina de manutenção e revisão de dependências.
