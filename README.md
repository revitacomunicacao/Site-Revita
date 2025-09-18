# Revita Comunicação - Site Institucional

Site institucional da Revita Comunicação, desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Deploy

Este projeto está configurado para ser hospedado em:
**https://companhiadamidia.com.br/**

### Configurações Aplicadas

1. **Base Path**: Configurado no `vite.config.ts` como `/`
2. **React Router**: Configurado com `basename="/"`
3. **Links**: Todos os links internos usam `Link` do React Router
4. **HTAccess**: Configurado para SPA routing no Apache

### Build para Produção

```bash
npm run build
```

O build será gerado na pasta `dist/` e deve ser enviado para:
`/` no servidor (raiz)

### Estrutura de Arquivos no Servidor

```
/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── .htaccess
```

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📱 Responsivo

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🎨 Tecnologias

- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React Router** - Roteamento
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **React Icons** - Biblioteca de ícones
- **Vite** - Build tool

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── home/
│   │   ├── components/
│   │   │   ├── Banner.tsx
│   │   │   ├── Institucional.tsx
│   │   │   ├── LogoCarousel.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── Servicos.tsx
│   │   └── index.tsx
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   └── AnimatedElement.tsx
├── assets/
├── hooks/
└── lib/
```

## 🎯 Funcionalidades

- ✅ Header responsivo com menu mobile
- ✅ Banner com carrossel de slides
- ✅ Seções institucionais
- ✅ Carrossel de clientes
- ✅ Portfolio
- ✅ Serviços
- ✅ Footer completo
- ✅ Animações suaves
- ✅ SEO otimizado
- ✅ Performance otimizada

## 🔧 Configurações Especiais

### Base Path
O projeto está configurado para funcionar em subdiretório:
- Vite: `base: '/'`
- React Router: `basename="/"`

### Roteamento SPA
O arquivo `.htaccess` está configurado para:
- Redirecionar todas as rotas para `index.html`
- Cache de assets estáticos
- Compressão Gzip

## 📞 Contato

**Revita Comunicação**
- Email: contato@revitacomunicacao.com.br
- Telefone: (34) 99710-0854
- Localização: Uberlândia - MG

---

Desenvolvido por **Revita Comunicação** 🚀
