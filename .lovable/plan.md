

# Plano: Ajustar Posicionamento das Imagens para 25% do Topo

## Objetivo
Alterar o posicionamento de todas as imagens do site para que o ponto focal seja aproximadamente 25% a partir do topo da imagem. Isso vai mostrar melhor os rostos e elementos importantes das fotos, cortando proporcionalmente a parte inferior quando necessário.

## Componentes a Serem Alterados

### 1. HeroCarousel.tsx (linha 66)
- Alterar `backgroundPosition: 'center top'` para `backgroundPosition: 'center 25%'`

### 2. BannerSection.tsx (linha 10)
- Alterar `backgroundPosition: 'center top'` para `backgroundPosition: 'center 25%'`

### 3. CasesCarousel.tsx (linha 99)
- Alterar `object-top` para `object-[center_25%]` na imagem principal do carrossel

### 4. ServiceGalleryCarousel.tsx (linhas 51 e 70)
- Alterar `object-top` para `object-[center_25%]` nas imagens principais
- Alterar `object-top` para `object-[center_25%]` nas miniaturas (thumbnails)

## Resumo das Alterações

| Componente | Linha | Antes | Depois |
|------------|-------|-------|--------|
| HeroCarousel | 66 | `backgroundPosition: 'center top'` | `backgroundPosition: 'center 25%'` |
| BannerSection | 10 | `backgroundPosition: 'center top'` | `backgroundPosition: 'center 25%'` |
| CasesCarousel | 99 | `object-top` | `object-[center_25%]` |
| ServiceGalleryCarousel | 51 | `object-top` | `object-[center_25%]` |
| ServiceGalleryCarousel | 70 | `object-top` | `object-[center_25%]` |

## Resultado Esperado
- Todas as imagens terão o ponto focal em aproximadamente 25% a partir do topo
- Rostos e elementos importantes ficarão visíveis em todas as resoluções
- Comportamento consistente em PC, tablets e mobile
- A parte inferior das imagens será cortada quando necessário, preservando a área superior

