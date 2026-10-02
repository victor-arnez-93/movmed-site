# MovMed — Site institucional

Site de apresentação da MovMed, plataforma em desenvolvimento para conectar pacientes a profissionais de saúde em atendimentos presenciais.

HTML, CSS e JavaScript puro. Sem dependências, instalação ou compilação. Responsivo para computador, tablet e celular. A logo fornecida está preservada em `public/assets/logo-movmed.png`.

## Repositório no GitHub Desktop

- **Name:** `movmed-site`
- **Description:** `Site institucional da MovMed — plataforma de conexão entre pacientes e profissionais de saúde.`
- **Local path:** mantenha sua pasta `C:\Users\Victor\Documents\CRV`.
- **Initialize this repository with a README:** desmarcado; este pacote já contém o README.
- **Git ignore:** None; este pacote já contém `.gitignore`.
- **License:** None, enquanto não houver uma decisão sobre licenciamento.

Crie o repositório, extraia o conteúdo deste pacote na pasta `movmed-site` criada pelo GitHub Desktop (sem outra pasta intermediária), faça o commit e publique o repositório.

Commit inicial sugerido: `feat: cria site institucional da MovMed`

Descrição do commit: `Adiciona landing page responsiva, prévia ilustrativa do aplicativo, seções para pacientes e profissionais, central de transparência e configuração para Render Static Site.`

## Publicar no Render

No painel do Render, escolha **New → Static Site**, conecte o repositório e use:

| Campo | Valor |
| --- | --- |
| Name | `movmed-site` |
| Branch | `main` (ou a branch publicada) |
| Root Directory | deixe vazio |
| Build Command | `echo "MovMed static site ready"` |
| Publish Directory | `public` |

Clique em **Deploy Static Site**. O Render fornecerá a URL. Não é necessário configurar Node, variáveis de ambiente ou reescrita SPA. O arquivo `render.yaml` também permite criação por Blueprint. Nenhum deploy foi realizado como parte desta entrega.

## Visualizar localmente

Na pasta do projeto:

```sh
python -m http.server 8000 --directory public
```

Abra `http://localhost:8000`. Também é possível abrir `public/index.html` diretamente.

## Estrutura

- `public/index.html`: apresentação e perguntas frequentes.
- `public/termos.html`: diretrizes preliminares, organizadas por assunto.
- `public/styles.css`: estilos legíveis e responsivos.
- `public/app.js`: menu móvel e aviso das lojas.
- `public/assets/`: logo original e favicon.
- `public/404.html`: página de erro.
- `render.yaml`: configuração de hospedagem.

## Escopo desta versão

O site apresenta o projeto. Não implementa busca real, contas, habilitação de profissionais, contratação, pagamentos, banco de dados ou aplicativos nativos. A prévia do app é ilustrativa, não usa pacientes, profissionais, preços, avaliações ou registros fictícios. Os botões das lojas abrem um aviso de desenvolvimento e não apontam para aplicativos de terceiros.

As categorias são propostas iniciais; confirmar serviços, regiões e regras de funcionamento antes do lançamento. Não há coleta de consentimentos nem formulário sem destino. O site não instala rastreadores ou fontes externas.

## Antes da operação

As diretrizes de `termos.html` são preliminares. Solicite revisão jurídica e regulatória antes de usar como contrato ou ativar atendimento. Um termo não afasta automaticamente vínculo de emprego, INSS, obrigações tributárias, direito de ação ou responsabilidade legal da plataforma. Confirme também as normas profissionais pertinentes aos serviços oferecidos.

Defina e publique razão social/CNPJ, contatos reais de suporte e privacidade, critérios de verificação e atualização documental, contratos, pagamentos, cancelamentos/reembolsos, consentimento clínico, retenção de registros e segurança de dados. Logs e documentos citados são recursos futuros, não recursos desta landing page.

Após a publicação dos aplicativos, substitua os botões `[data-store]` por links reais para as lojas e revise os textos “em breve”. Atualize o status do produto, a disponibilidade dos serviços e a política de privacidade conforme a operação efetiva. A publicação nas lojas exige projetos e processos próprios, não é feita por este site.

## Referências consultadas

- Referência de fluxo: https://parafuzo.com/
- Render Static Sites: https://render.com/docs/static-sites
- CLT: https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452compilado.htm
- CDC: https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm
- LGPD: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm

Nome MovMed e logo fornecidos pelo solicitante. Esta entrega não verifica disponibilidade de marca, domínio ou registro no INPI.

## Verificação desta entrega

Validada a sintaxe de JavaScript e a existência dos arquivos, páginas e âncoras de todos os links internos. A logo é uma cópia idêntica do arquivo fornecido. A conferência visual e a execução de interações em navegador não foram concluídas porque o navegador de testes não estava disponível e seu download falhou neste ambiente.
