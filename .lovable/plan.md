
# Plano: Corrigir Responsividade de Imagens em Mobile e Todas as Resoluções

## Problema Identificado
As imagens de background e nas galerias estao ficando mal posicionadas em telas menores (mobile e tablets). O posicionamento atual `center top` nao funciona bem quando a proporcao da tela muda drasticamente.

## Estrategia de Solucao
Implementar posicionamento responsivo que:
- Em mobile: centraliza verticalmente a parte importante da imagem (aproximadamente 30% do topo)
- Em tablet: ajusta para 25% do topo
- Em desktop: mantem 20-25% do topo

A chave e usar posicoes responsivas via CSS que se adaptam ao viewport.

---

## Componentes a Serem Alterados

### 1. HeroCarousel.tsx

**Problema atual:** `backgroundPosition: 'center top'` fixo para todas as telas.

**Solucao:** Usar classes CSS responsivas em vez de inline style para o posicionamento, permitindo diferentes valores por breakpoint.

Alteracoes:
- Adicionar classe responsiva para o container da imagem
- Usar Tailwind com valores customizados por breakpoint

Codigo antes:
```tsx
<div
  className="absolute inset-0"
  style={{ 
    backgroundImage: `url(${slides[currentSlide].image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top'
  }}
/>
```

Codigo depois:
```tsx
<div
  className="absolute inset-0 bg-cover bg-[center_30%] sm:bg-[center_25%] md:bg-[center_20%] lg:bg-[center_15%]"
  style={{ 
    backgroundImage: `url(${slides[currentSlide].image})`
  }}
/>
```

---

### 2. BannerSection.tsx

**Problema atual:** `backgroundPosition: 'center top'` fixo.

**Solucao:** Aplicar mesma logica responsiva.

Codigo antes:
```tsx
<div
  className="absolute inset-0 bg-cover md:bg-fixed"
  style={{ 
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: 'center top'
  }}
/>
```

Codigo depois:
```tsx
<div
  className="absolute inset-0 bg-cover md:bg-fixed bg-[center_30%] sm:bg-[center_25%] md:bg-[center_20%]"
  style={{ 
    backgroundImage: `url(${bannerImage})`
  }}
/>
```

---

### 3. CasesCarousel.tsx (linha 124)

**Problema atual:** `object-top` fixo para todas as telas.

**Solucao:** Usar posicionamento responsivo com Tailwind.

Codigo antes:
```tsx
className="w-full h-full object-cover object-top"
```

Codigo depois:
```tsx
className="w-full h-full object-cover object-[center_30%] sm:object-[center_25%] md:object-[center_20%]"
```

---

### 4. ServiceGalleryCarousel.tsx

**Linha 55 (imagem principal):**

Codigo antes:
```tsx
className="max-w-full max-h-[500px] w-auto h-auto object-contain object-top"
```

Codigo depois:
```tsx
className="max-w-full max-h-[500px] w-auto h-auto object-contain object-[center_30%] sm:object-[center_25%] md:object-[center_20%]"
```

**Linha 115 (thumbnails):**

Codigo antes:
```tsx
className="w-full h-full object-cover object-top"
```

Codigo depois:
```tsx
className="w-full h-full object-cover object-[center_30%] sm:object-[center_25%] md:object-[center_20%]"
```

---

## Resumo das Alteracoes

| Componente | Arquivo | Antes | Depois |
|------------|---------|-------|--------|
| HeroCarousel | linha 71-77 | backgroundPosition inline 'center top' | Classes Tailwind responsivas bg-[center_30%] sm:bg-[center_25%] md:bg-[center_20%] lg:bg-[center_15%] |
| BannerSection | linha 7-12 | backgroundPosition inline 'center top' | Classes Tailwind responsivas bg-[center_30%] sm:bg-[center_25%] md:bg-[center_20%] |
| CasesCarousel | linha 124 | object-top | object-[center_30%] sm:object-[center_25%] md:object-[center_20%] |
| ServiceGalleryCarousel | linha 55 | object-top | object-[center_30%] sm:object-[center_25%] md:object-[center_20%] |
| ServiceGalleryCarousel | linha 115 | object-top | object-[center_30%] sm:object-[center_25%] md:object-[center_20%] |

---

## Por que Esta Abordagem Funciona

1. **Mobile (< 640px):** `center 30%` - posiciona o foco um pouco mais abaixo do topo absoluto, melhor para telas altas e estreitas
2. **Tablet (640px-767px):** `center 25%` - ajuste intermediario
3. **Tablet/Desktop (768px+):** `center 20%` - mais proximo do topo pois a proporcao e mais proxima da imagem original
4. **Desktop grande (1024px+):** `center 15%` (apenas Hero) - ainda mais proximo do topo

Esta abordagem garante que as partes principais das imagens (rostos, elementos importantes) fiquem sempre visiveis independente da resolucao.

---

## Resultado Esperado

- Todas as imagens terao enquadramento adequado em mobile, tablet e desktop
- Rostos e elementos importantes visiveis em todas as resolucoes
- Transicao suave de posicionamento entre breakpoints
- Comportamento consistente em todo o site
