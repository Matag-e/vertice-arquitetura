# Validação da entrega

Verificação em 21/10/2026.

- Node utilizado para as verificações: 24.19.0.
- TypeScript: `tsc --noEmit` concluído sem erros.
- Vite 8.3.5: build de produção concluído, com arquivos em `dist/`.
- Testes: 3 aprovados, 0 falhas. Cobrem destinos de âncoras, IDs únicos e referências ARIA, ausência de envio fictício, título principal único, FAQ nativo e sinalização dos espaços de fotografia.
- Auditoria durante a instalação: 24 pacotes auditados, 0 vulnerabilidades reportadas naquele momento. Isso não garante ausência de falhas e deve ser repetido antes da publicação.
- JavaScript gerado: aproximadamente 231,68 kB (72,61 kB gzip); CSS: 10,81 kB (3,32 kB gzip).
- A tentativa de abrir a prévia no navegador do ambiente terminou em timeout. Não foi possível concluir inspeção visual, console do navegador, testes de interação ou conferência de larguras de tela. Esses itens permanecem no checklist, sem aprovação presumida.

O Node padrão da máquina era 20.16.0, incompatível com a versão selecionada do Vite. A validação final executou os programas diretamente com o Node 24.19.0 disponível no ambiente. Para reproduzir com os comandos do README, primeiro atualize o Node usado pelo terminal para uma versão compatível.

O código é estático no navegador, sem processamento de dados, backend ou integração de WhatsApp. A captação real de contatos depende da confirmação e ativação do e-mail. Nenhum site foi publicado.
