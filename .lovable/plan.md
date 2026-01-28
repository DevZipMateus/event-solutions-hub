
# Plano: URLs Diretas para Páginas de Serviços

## Objetivo
Alterar a estrutura de URLs de `/servicos/nome-servico` para `/nome-servico-para-eventos` (URLs mais limpas e amigáveis para SEO).

## Mudanças Necessárias

### 1. Atualizar Slugs dos Serviços (`src/lib/services-data.ts`)

Alterar cada slug para incluir "-para-eventos":

| Serviço | Slug Atual | Novo Slug |
|---------|------------|-----------|
| Limpeza para Eventos | `limpeza` | `limpeza-para-eventos` |
| Bombeiro Civil | `bombeiros` | `bombeiro-civil-para-eventos` |
| Carregadores | `carregadores` | `carregadores-para-eventos` |
| Tradutores | `tradutores` | `tradutores-para-eventos` |
| Recepcionista | `recepcionistas` | `recepcionista-para-eventos` |
| Seguranças | `segurancas` | `seguranca-para-eventos` |
| Garçons | `buffet` | `garcons-para-eventos` |
| Staff | `staff` | `staff-para-eventos` |
| Locações | `locacoes` | `locacoes-para-eventos` |

### 2. Atualizar Rota Principal (`src/App.tsx`)

```text
Antes: <Route path="/servicos/:slug" element={<ServicePage />} />
Depois: <Route path="/:slug" element={<ServicePage />} />
```

### 3. Atualizar Links no Header (`src/components/Header.tsx`)

```text
Antes: navigate(`/servicos/${slug}`)
Depois: navigate(`/${slug}`)
```

### 4. Atualizar Links na Seção de Serviços (`src/components/ServicesSection.tsx`)

```text
Antes: to={`/servicos/${service.slug}`}
Depois: to={`/${service.slug}`}
```

### 5. Atualizar Links na Página de Serviço (`src/pages/ServicePage.tsx`)

- Link de "Outros Serviços" na sidebar
```text
Antes: to={`/servicos/${relatedService.slug}`}
Depois: to={`/${relatedService.slug}`}
```

## Resultado Final

As URLs ficarão assim:
- `https://seusite.com/limpeza-para-eventos`
- `https://seusite.com/seguranca-para-eventos`
- `https://seusite.com/recepcionista-para-eventos`
- etc.

## Detalhes Técnicos

**Arquivos a modificar:**
1. `src/lib/services-data.ts` - 9 alterações de slug
2. `src/App.tsx` - 1 alteração de rota
3. `src/components/Header.tsx` - 1 alteração de navegação
4. `src/components/ServicesSection.tsx` - 1 alteração de Link
5. `src/pages/ServicePage.tsx` - 1 alteração de Link

**Nota importante:** A rota `/:slug` será posicionada antes da rota catch-all `*` para garantir que os serviços sejam encontrados corretamente. O componente `ServicePage` já possui tratamento para slugs não encontrados, redirecionando para uma mensagem de erro.
