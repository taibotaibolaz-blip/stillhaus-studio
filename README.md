# Stillhaus Studio — website

Site estático (HTML/CSS/JS puro, sem build step) com formulário de pedido
de orçamento ligado a uma base de dados Supabase.

## Estrutura
- `index.html` — todas as secções do site
- `css/style.css` — estilos
- `js/app.js` — toggle de idioma PT/EN + envio do formulário para o Supabase
- `js/config.js` — URL e chave pública do projeto Supabase (preencher)
- `supabase/schema.sql` — script para criar a tabela `quote_requests` e as
  políticas de segurança (RLS)
- `assets/` — fotografias do portfólio (ver lista abaixo)

## Fotos
`assets/p01.jpg` … `p15.jpg` (sem p10) estão preenchidas com uma seleção
de fotos reais de Carcavelos, Ourique 98 e Palácio 2 — os apartamentos já
identificados como os exemplos mais fortes do portfólio. Os nomes dos
"projetos" (Graça, Alcântara, Príncipe Real) são placeholders do design
original; troca-os pelos nomes/moradas reais quando fizer sentido, ou
substitui as fotos por outras a qualquer momento — o layout aceita
qualquer imagem nesses 14 ficheiros. Se um ficheiro faltar, o espaço
mostra um gradiente escuro em vez de imagem partida.

## Como correr localmente
Não precisas de Node nem de build. Basta abrir um servidor estático
simples na pasta do projeto, por exemplo:

```bash
python3 -m http.server 8000
```

E abrir http://localhost:8000

(Abrir o `index.html` diretamente com duplo-clique também funciona, mas
alguns browsers bloqueiam módulos JS via `file://` — usa o servidor local
para testar o formulário.)

## Configurar o Supabase
1. Cria um projeto em supabase.com
2. Vai a SQL Editor e corre o conteúdo de `supabase/schema.sql`
3. Vai a Project Settings -> API e copia o "Project URL" e a "anon public" key
4. Cola-os em `js/config.js`

Os pedidos de orçamento ficam visíveis em Table Editor -> quote_requests.
