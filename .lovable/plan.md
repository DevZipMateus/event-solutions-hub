

## Plano: Remover depoimentos estáticos da seção Nossos Clientes

Remover os 4 cards de depoimentos fictícios (Ricardo, Carla, Fernando, Ana Paula) do `ClientsSection.tsx`, mantendo apenas o título da seção e o widget WebCIS de avaliações do Google.

### Alterações

**`src/components/ClientsSection.tsx`**:
- Remover a interface `ClientTestimonial` e o array `clients`
- Remover o grid de cards com os depoimentos
- Remover o import do ícone `Quote`
- Manter o título "Nossos Clientes", o subtítulo, o `useEffect` do WebCIS e a div do widget

