import { isVue3 } from 'vue-demi'

export const handleAttrs = (attrs: Record<string, unknown>): Record<string, unknown> => {
  if (isVue3) {
    return attrs
  }

  const { listeners, ...restOfAttrs } = attrs

  return {
    on: attrs.listeners,
    ...restOfAttrs
  }
}
