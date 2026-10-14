-- Corre isto no Supabase: Dashboard -> SQL Editor -> New query -> Run
-- (já foi executado no projeto stillhaus-studio)

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  area text,
  rooms text,
  package text,
  message text
);

-- Ativa Row Level Security (obrigatório para expor a tabela ao browser em segurança)
alter table public.quote_requests enable row level security;

grant insert on public.quote_requests to anon;

-- Só permite ao público (chave anon/publishable) INSERIR pedidos, nunca ler, editar ou apagar.
-- Para veres os pedidos, usa o Table Editor no dashboard (aí estás autenticado como owner).
create policy "public can insert quote requests"
  on public.quote_requests
  for insert
  to anon
  with check (true);
