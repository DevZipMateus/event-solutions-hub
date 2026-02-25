

## Diagnóstico do Problema

O widget WebCIS **não aparece** porque existe um problema de **timing/ordem de execução**:

1. O script `googlereviews.js` carrega com `defer`, ou seja, executa quando o HTML termina de carregar
2. Nesse momento, ele procura a div `.app-review-webcis-appwgr` no DOM
3. Porém, essa div está **dentro de um componente React** (`ClientsSection.tsx`), que ainda não foi montado quando o script executa
4. Resultado: o script não encontra a div e não renderiza nada

Os network requests confirmam que o script e os dados **carregam com sucesso** (status 200, com 20 avaliações retornadas). O problema é puramente de timing.

## Solução

Mover a div `.app-review-webcis-appwgr` para **fora do React**, diretamente no `index.html`, e usar um `useEffect` no componente `ClientsSection` para mover essa div para dentro da seção de clientes após a montagem do React. Alternativamente (e mais simples):

### Abordagem recomendada

No componente `ClientsSection.tsx`, adicionar um `useEffect` que re-executa o script do WebCIS após o componente montar, garantindo que a div já existe no DOM:

1. **`src/components/ClientsSection.tsx`** — Adicionar um `useEffect` que, após a montagem do componente, injeta dinamicamente o script `googlereviews.js` (removendo o atributo `defer`), para que ele encontre a div já renderizada no DOM.

2. **`index.html`** — Remover o `<script defer src="https://apps.webcis.com.br/googlereviews.js?...">` de lá, pois será carregado dinamicamente pelo React.

### Detalhes técnicos

```typescript
// No ClientsSection.tsx, adicionar:
useEffect(() => {
  const existing = document.querySelector('script[src*="webcis"]');
  if (existing) existing.remove();
  
  const script = document.createElement('script');
  script.src = 'https://apps.webcis.com.br/googlereviews.js?code=ChIJLbWT6PhRzpQR9QViRYHWtr0';
  document.body.appendChild(script);
  
  return () => { script.remove(); };
}, []);
```

Isso garante que quando o script executa, a div `.app-review-webcis-appwgr` já existe no DOM e as avaliações do Google serão renderizadas corretamente.

