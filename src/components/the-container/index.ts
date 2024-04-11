import { cn } from '@/utils/cn'

export { default as TheContainer } from './TheContainer.vue'

export type ContainerProps = {
  class?: string
}
export const containerStyles = (props?: Partial<ContainerProps>) => {
  return cn('mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8', props?.class)
}
