// virtual.d.ts (na raiz do projeto)
declare module 'virtual:generated-pages-react' {
  import type { RouteObject } from 'react-router-dom'
  const routes: RouteObject[]
  export default routes
}

// Declarações para assets
declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.mp4' {
  const src: string
  export default src
}

declare module '*.webm' {
  const src: string
  export default src
}
