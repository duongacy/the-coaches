import { cn } from '@/utils/cn'

export { default as NavLink } from './NavLink.vue'

export type NavLinkProps = {
  class?: string
}

export const navLinkStyles = (props?: Partial<NavLinkProps>) => {
  return cn(
    'text-lg flex items-center leading-7 text-neutral-500 hover:text-neutral-700 duration-200 underline-offset-4 font-semibold decoration-2',
    '[&.router-link-exact-active]:underline [&.router-link-exact-active]:text-neutral-800',
    props?.class
  )
}
