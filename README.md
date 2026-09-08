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

## Fotos em falta
O ficheiro de design original referenciava fotos que ainda não existem
como ficheiros. Substitui pelos ficheiros reais em `assets/` com estes
nomes exatos (o layout já está preparado para eles):

| Ficheiro | Usado em |
|---|---|
| `p01.jpg` | Graça — sala e zona de jantar (imagem grande) |
| `p02.jpg` | Expertise — escadas |
| `p03.jpg` | Alcântara — cozinha |
| `p04.jpg` | Alcântara — entrada e corredor (imagem grande) |
| `p05.jpg` | Alcântara — detalhe de iluminação |
| `p06.jpg` | Expertise — detalhe de toalhas |
| `p07.jpg` | Graça — quarto |
| `p08.jpg` | Graça — detalhe de styling |
| `p09.jpg` | Hero (topo da página) — sala de estar |
| `p11.jpg` | Príncipe Real — cozinha em mansarda (imagem grande) |
| `p12.jpg` | Quem somos — cozinha com luz natural |
| `p13.jpg` | Expertise — cozinha |
| `p14.jpg` | Príncipe Real — casa de banho |
| `p15.jpg` | Príncipe Real — varanda |

Até lá adicionares, cada espaço mostra um gradiente escuro em vez de
imagem partida — o site funciona na mesma.

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
