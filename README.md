# RiO Piscinas

Novo site institucional da RiO Piscinas. A composição segue a referência visual fornecida (Albacete), com identidade roxa da RiO, fotografias oficiais e catálogo próprio.

## Executar

Requer Node.js 20 ou superior. O projeto não depende de pacotes de produção.

```sh
npm run build
npm run preview
```

`npm run check` verifica a integridade dos dados e das imagens. Publique a pasta `dist/` em qualquer hospedagem estática. Na Vercel, use `npm run build` como comando de build e `dist` como diretório de saída. A navegação usa rotas por hash, sem necessidade de regras de reescrita.

## Conteúdo

- Home: banner rotativo, empresa, quatro destaques, apresentação do catálogo com realidade aumentada, rede nacional, galeria e orçamento.
- Sete linhas: Paraná, Guaporé, Guaíba, Tapajós, Iguaçu, dos Sinos e Hualai.
- Detalhes com galeria, ficha técnica ampliável e plantas oficiais disponíveis.
- Creativity Lux, empresa, catálogos, contato e revenda.
- Busca por nome, menu móvel, navegação por teclado e respeito à preferência de movimento reduzido.

Os formulários abrem uma mensagem revisável no WhatsApp oficial. Não simulam um envio, não armazenam dados e não exigem backend. A seção de realidade aumentada direciona ao catálogo oficial; não implementa um visualizador 3D próprio. A galeria que acompanha o link do Instagram usa fotos oficiais de produtos, sem afirmar que é um feed conectado.

## Editar

`src/data.js` contém as imagens, produtos e catálogos. `src/app.js` contém as seções e interações. `src/styles.css` concentra estilos e as cores `#5e0449` e `#80286c`, extraídas do site original da Rio Piscinas. Imagens otimizadas estão em `public/assets/`; o mapeamento das fontes consta em `asset-sources.json`.

O site original e seu domínio não são alterados por este repositório. Os catálogos, PDFs, vídeo, redes sociais e atendimento usam os endereços oficiais existentes. Confirme disponibilidade e especificações com a marca antes de publicar comercialmente.
