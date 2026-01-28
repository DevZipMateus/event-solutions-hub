

# Plano: Corrigir Responsividade de Imagens em Todas as Telas

## Problema Atual
Os arquivos ainda estao com `backgroundPosition: 'center top'` e `object-top` fixos, que nao se adaptam bem a diferentes proporcoes de tela. Em mobile, as imagens ficam mal enquadradas.

## Solucao
Implementar posicionamento responsivo usando classes Tailwind com breakpoints:
- Mobile: `center 30%` (foco um pouco abaixo do topo)
- Tablet: `center 25%`
- Desktop: `center 20%`
- Desktop grande: `center 15%` (apenas Hero)

---

## Alteracoes por Arquivo

### 1. HeroCarousel.tsx (linhas 71-78)

De:
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

Para:
```tsx
<div
  className="absolute inset-0 bg-cover bg-[center_30%] sm:bg-[center_25%] md:bg-[center_20%] lg:bg-[center_15%]"
  style={{ 
    backgroundImage: `url(${slides[currentSlide].image})`
  }}
/>
```

---

### 2. BannerSection.tsx (linhas 7-13)

De:
```tsx
<div
  className="absolute inset-0 bg-cover md:bg-fixed"
  style={{ 
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: 'center top'
  }}
/>
```

Para:
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

De:
```tsx
className="w-full h-full object-cover object-top"
```

Para:
```tsx
className="w-full h-full object-cover object-[center_30%] sm:object-[center_25%] md:object-[center_20%]"
```

---

### 4. ServiceGalleryCarousel.tsx

**Linha 55 (imagem principal):**

De:
```tsx
className="max-w-full max-h-[500px] w-auto h-auto object-contain object-top"
```

Para:
```tsx
className="max-w-full max-h-[500px] w-auto h-auto object-contain object-[center_30%] sm:object-[center_25%] md:object-[center_20%]"
```

**Linha 115 (miniaturas):**

De:
```tsx
className="w-full h-full object-cover object-top"
```

Para:
```tsx
className="w-full h-full object-cover object-[center_30%] sm:object-[center_25%] md:object-[center_20%]"
```

---

## Resumo

| Arquivo | Linha | Antes | Depois |
|---------|-------|-------|--------|
| HeroCarousel.tsx | 71-78 | `backgroundPosition: 'center top'` inline | Classes responsivas `bg-[center_30%]` ate `lg:bg-[center_15%]` |
| BannerSection.tsx | 7-13 | `backgroundPosition: 'center top'` inline | Classes responsivas `bg-[center_30%]` ate `md:bg-[center_20%]` |
| CasesCarousel.tsx | 124 | `object-top` | `object-[center_30%] sm:object-[center_25%] md:object-[center_20%]` |
| ServiceGalleryCarousel.tsx | 55 | `object-top` | `object-[center_30%] sm:object-[center_25%] md:object-[center_20%]` |
| ServiceGalleryCarousel.tsx | 115 | `object-top` | `object-[center_30%] sm:object-[center_25%] md:object-[center_20%]` |

## Resultado Esperado
- Imagens com enquadramento adequado em mobile, tablet e desktop
- Rostos e elementos importantes sempre visiveis
- Transicao suave entre breakpoints
- Comportamento consistente em todo o site

