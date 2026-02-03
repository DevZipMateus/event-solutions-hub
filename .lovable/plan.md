
# Plano: Substituir Todas as Imagens por Imagens Geradas por IA

## Resumo

Este plano substituirá **todas as imagens do site** por novas imagens geradas por IA que serão responsivas e contextualizadas para cada seção. As imagens terão alta qualidade e serão otimizadas para funcionar bem em todos os dispositivos.

---

## Inventário de Imagens a Substituir

### 1. Hero Carousel (5 imagens)
| Imagem Atual | Contexto para Nova Imagem |
|--------------|---------------------------|
| hero-bombeiros.jpg | Bombeiro civil em evento corporativo, uniforme profissional, ambiente de convenção |
| hero-carregadores.jpg | Carregadores movimentando equipamentos em evento, trabalho em equipe |
| hero-limpeza.jpg | Equipe de limpeza profissional em evento, uniformes, ambiente limpo |
| hero-recepcionistas.jpg | Recepcionistas elegantes em balcão de credenciamento |
| hero-seguranca.jpg | Seguranças profissionais em evento corporativo |

### 2. Banner de Divisão (1 imagem)
| Imagem Atual | Contexto para Nova Imagem |
|--------------|---------------------------|
| section-banner.jpg | Evento corporativo de grande porte em andamento, atmosfera profissional |

### 3. Seção de Serviços - Imagem do Profissional (1 imagem)
| Imagem Atual | Contexto para Nova Imagem |
|--------------|---------------------------|
| services-person.png | Profissional de eventos sorrindo, vestimenta formal, fundo transparente |

### 4. Cards de Serviços (9 imagens)
| Serviço | Contexto para Nova Imagem |
|---------|---------------------------|
| Limpeza | Equipe de limpeza atuando em evento |
| Bombeiros | Bombeiro civil monitorando evento |
| Carregadores | Logística e movimentação de equipamentos |
| Tradutores | Intérprete com fone de ouvido em cabine |
| Recepcionistas | Recepcionista no balcão de credenciamento |
| Seguranças | Segurança profissional em evento |
| Garçons/Buffet | Garçom servindo em evento elegante |
| Staff | Equipe de apoio organizando evento |
| Locações | Estruturas de eventos (tendas, palcos) |

### 5. Galerias de Serviços (30+ imagens)
Cada serviço tem sua galeria de fotos que será substituída:
- Limpeza: 6 imagens
- Bombeiro: 6 imagens
- Carregadores: 3 imagens
- Recepcionistas: 6 imagens
- Seguranças: 6 imagens
- Buffet/Garçons: 6 imagens

### 6. Feedback de Clientes (16 imagens)
| Cliente | Imagens |
|---------|---------|
| Thiago Rosinhole | 3 imagens de exposição de arte |
| Saudosa Maloca | 11 imagens de festival de samba |
| Shopping Frei Caneca | 2 imagens de congresso |

---

## Abordagem Técnica

### Geração de Imagens com IA

Para gerar imagens de alta qualidade e responsivas, vou usar o **Lovable AI com o modelo google/gemini-3-pro-image-preview** (Nano banana pro), que produz resultados superiores para imagens profissionais.

### Configuração Necessária

1. **Criar Edge Function** para geração de imagens
2. **Criar página de administração** para gerar e gerenciar imagens
3. **Armazenar imagens** no Lovable Cloud Storage
4. **Atualizar referências** no código

### Dimensões Responsivas

As imagens serão geradas em formato paisagem widescreen (16:9 ou 3:2) com resolução adequada para:
- Desktop: 1920x1080
- Tablet: 1280x720  
- Mobile: 640x360

---

## Etapas de Implementação

### Etapa 1: Configurar Infraestrutura
- Criar bucket de storage para imagens geradas
- Criar edge function para geração de imagens via Lovable AI

### Etapa 2: Criar Página de Administração
- Interface para gerar imagens por contexto
- Preview das imagens geradas
- Upload automático para storage

### Etapa 3: Gerar Imagens do Hero Carousel (5 imagens)
- Bombeiros, Carregadores, Limpeza, Recepcionistas, Seguranças

### Etapa 4: Gerar Imagens da Seção de Serviços (10 imagens)
- 9 cards de serviços + 1 imagem do profissional

### Etapa 5: Gerar Imagem do Banner de Divisão (1 imagem)

### Etapa 6: Gerar Imagens das Galerias (30+ imagens)
- Múltiplas variações para cada serviço

### Etapa 7: Gerar Imagens de Feedback de Clientes (16 imagens)
- Exposição de arte, Festival de samba, Congresso

### Etapa 8: Atualizar Referências no Código
- Substituir imports em services-data.ts
- Atualizar paths em CasesCarousel.tsx
- Atualizar paths das galerias

---

## Detalhes Técnicos

### Edge Function: generate-image

```text
POST /functions/v1/generate-image
Body: { prompt: string, category: string }
Response: { imageUrl: string }
```

### Storage Bucket Structure

```text
/images
  /hero
    bombeiros.webp
    carregadores.webp
    limpeza.webp
    recepcionistas.webp
    seguranca.webp
  /services
    limpeza.webp
    bombeiros.webp
    ...
  /gallery
    /limpeza
      1.webp, 2.webp, ...
    /bombeiros
      1.webp, 2.webp, ...
  /cases
    /thiago-rosinhole
      1.webp, 2.webp, 3.webp
    /saudosa-maloca
      1.webp, 2.webp, ...
  /banner
    section-banner.webp
  /person
    services-person.webp
```

### Prompts de Exemplo

**Hero - Bombeiros:**
> "Professional civil firefighter at a corporate event in Brazil, wearing official uniform, monitoring a convention center, modern lighting, photorealistic, high quality, 16:9 aspect ratio"

**Hero - Recepcionistas:**
> "Elegant female receptionist at corporate event check-in desk, professional attire, welcoming smile, modern conference registration area, photorealistic, high quality, 16:9 aspect ratio"

**Galeria - Saudosa Maloca:**
> "Vibrant Brazilian samba festival, colorful decorations, crowd enjoying music, professional event photography style, warm lighting, photorealistic"

---

## Arquivos a Modificar

1. **Novos arquivos:**
   - `supabase/functions/generate-image/index.ts`
   - `src/pages/admin/ImageGenerator.tsx` (opcional)

2. **Arquivos a atualizar:**
   - `src/lib/services-data.ts` - URLs das imagens de serviços
   - `src/components/HeroCarousel.tsx` - URLs do hero
   - `src/components/BannerSection.tsx` - URL do banner
   - `src/components/CasesCarousel.tsx` - URLs dos cases
   - `src/components/ServicesSection.tsx` - URL da imagem do profissional

---

## Considerações de Responsividade

- Todas as imagens usarão formato **WebP** para melhor compressão
- Proporções **16:9** para heroes e banners (ótimo para widescreen)
- Proporções **4:5** ou **3:4** para cards verticais
- CSS com `object-fit: cover` e `object-position` ajustável
- Lazy loading para otimizar performance

---

## Estimativa de Tempo

| Etapa | Tempo Estimado |
|-------|---------------|
| Configurar infraestrutura | 5 minutos |
| Gerar 5 imagens hero | 3 minutos |
| Gerar 10 imagens serviços | 5 minutos |
| Gerar 1 imagem banner | 1 minuto |
| Gerar 30+ imagens galerias | 15 minutos |
| Gerar 16 imagens cases | 8 minutos |
| Atualizar código | 10 minutos |
| **Total** | **~45 minutos** |

---

## Observações

- A geração de imagens será feita em lotes para otimizar o tempo
- Cada imagem terá prompts específicos para garantir contexto adequado
- As imagens serão armazenadas no Cloud Storage para acesso rápido e CDN
- URLs públicas serão usadas para facilitar a integração
