# Área do Cliente - Modal Promocional

Este documento descreve a implementação do modal promocional para a "Área do Cliente".

## 📋 O que foi implementado

Um modal interativo e profissional que é exibido quando o usuário clica no botão **"Área do Cliente"** no header do site.

## 🎯 Objetivo

Informar os clientes sobre a futura plataforma "Área do Cliente" antes de sua implementação completa, gerando expectativa e capturando leads interessados.

## ✨ Funcionalidades

### 1. **Preview Visual**
- Exibe uma imagem demonstrativa da interface (painel de gerenciamento)
- Banner com label "PREVIEW DO PAINEL"

### 2. **Badge "EM BREVE"**
- Destaque visual em laranja (cor primária da marca)
- Indica que a funcionalidade está em desenvolvimento

### 3. **Lista de Recursos**
6 recursos principais destacados com ícones:
- 📦 **Rastreamento em Tempo Real** - Acompanhe suas cargas 24/7
- 📋 **Histórico Completo** - Acesse todos os seus pedidos
- ✅ **Gestão de Faturas** - Visualize e baixe documentos
- 👥 **Suporte Prioritário** - Chat direto com a equipe
- 📖 **Programa de Fidelidade** - Ganhe descontos e benefícios
- 📅 **Solicitar Cotações** - Peça orçamentos rapidamente

### 4. **Call-to-Action**
- **Botão "Quero ser notificado"** - Captura email do interessado
- **Botão "Fale com a gente"** - Redireciona para página de contato

### 5. **Interatividade**
- Fecha ao clicar no X
- Fecha ao clicar fora do modal
- Fecha ao pressionar ESC
- Animações suaves de abertura/fechamento

## 🖼️ Imagem de Preview

### **IMPORTANTE: Adicionar Imagem**

Para que o modal funcione corretamente, você precisa adicionar a imagem de preview:

1. **Nome do arquivo:** `area-cliente-preview.png`
2. **Localização:** `/public/area-cliente-preview.png`
3. **Recomendações:**
   - **Resolução ideal:** 1200x800px ou similar (16:10 ou 16:9)
   - **Formato:** PNG (com fundo) ou JPG
   - **Conteúdo:** Screenshot ou mockup da interface do "Painel do Cliente"
   - **Tamanho do arquivo:** < 500KB (otimizar para web)

### Como adicionar a imagem:

```bash
# Copie a imagem fornecida para a pasta public
cp /caminho/para/sua/imagem.png /home/sea/projetos/HJLog/public/area-cliente-preview.png
```

**Ou use a imagem que você mencionou** salvando-a como `area-cliente-preview.png` na pasta `public/`.

## 📁 Arquivos Modificados

### Arquivos Criados:
- `src/components/shared/AreaClienteModal.astro` - Componente do modal

### Arquivos Modificados:
- `src/components/layout/Header/HeaderActions.astro` - Botão alterado de link para botão + script
- `src/layouts/MainLayoult.astro` - Modal adicionado ao layout

### Arquivos de Dados:
- `src/data/navigation.ts` - Mantido (href="#" já existente)

## 🎨 Design

### Cores Utilizadas:
- **Badge "EM BREVE":** Laranja primário (`var(--primary)`)
- **Features hover:** Border laranja
- **Ícones:** Fundo laranja com ícone escuro
- **Botão principal:** Laranja com hover branco
- **Botão secundário:** Outline com hover laranja

### Responsividade:
- **Mobile:** Features em 1 coluna, botões empilhados
- **Tablet+:** Features em 2 colunas, botões lado a lado

## 🔧 Como Testar

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Acesse `http://localhost:4321`

3. Clique no botão **"Área do Cliente"** no header (visível apenas em telas maiores que 640px)

4. O modal deve abrir mostrando:
   - Badge "EM BREVE"
   - Título e subtítulo
   - Imagem de preview (quando adicionada)
   - 6 features em grid
   - Botões de CTA

## 📝 Notas para o Cliente

### Quando apresentar:
- Mostre o modal funcionando
- Explique que a imagem precisa ser adicionada
- Peça feedback sobre os recursos listados
- Confirme se os recursos descritos fazem sentido para o negócio

### Próximos Passos (Futuro):
Quando decidir implementar a Área do Cliente de verdade:
1. Remover este modal
2. Criar as páginas da plataforma
3. Alterar o botão para redirecionar para `/area-cliente` ou `/login`

## 🚀 Melhorias Futuras (Opcionais)

- Integrar com EmailJS para capturar emails de interessados
- Adicionar contador de pessoas interessadas
- Criar página de "Em Breve" dedicada
- Integração com CRM para gestão de leads

---

**Desenvolvido para HJLOG Transportes**
Data: Janeiro 2026
