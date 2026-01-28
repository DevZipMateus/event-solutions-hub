

# Plano: Ajustar Posicionamento das Imagens para 25% Superior

## Objetivo
Alterar o posicionamento de todas as imagens do site para que o ponto focal seja aproximadamente 25% a partir do topo da imagem, em vez do topo absoluto. Isso vai mostrar melhor os rostos e elementos importantes das fotos.

## Componentes a Serem Alterados

### 1. HeroCarousel.tsx
- Alterar `backgroundPosition: 'center top'` para `backgroundPosition: 'center 25%'`

### 2. BannerSection.tsx
- Alterar `backgroundPosition: 'center top'` para `backgroundPosition: 'center 25%'`

### 3. CasesCarousel.tsx
- Alterar `object-top` para `object-[center_25%]` nas imagens do carrossel de cases

### 4. ServiceGalleryCarousel.tsx
- Alterar `object-top` para `object-[center_25%]` nas imagens principais e miniaturas

## Detalhes Técnicos

| Componente | Propriedade Atual | Nova Propriedade |
|------------|-------------------|------------------|
| HeroCarousel | `backgroundPosition: 'center top'` | `backgroundPosition: 'center 25%'` |
| BannerSection | `backgroundPosition: 'center top'` | `backgroundPosition: 'center 25%'` |
| CasesCarousel | `object-top` | `object-[center_25%]` |
| ServiceGalleryCarousel (imagens) | `object-top` | `object-[center_25%]` |
| ServiceGalleryCarousel (miniaturas) | `object-top` | `object-[center_25%]` |

## Resultado Esperado
- Todas as imagens terão o ponto focal em aproximadamente 25% a partir do topo
- Rostos e elementos importantes ficarão visíveis em todas as resoluções
- Comportamento consistente em PC, tablets e mobile

