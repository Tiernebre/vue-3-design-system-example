import { ButtonHTMLAttributes } from 'vue'
import { defineComponent } from 'vue-demi'
import { handleAttrs } from './handleVue2Props'

type BrendanButtonProps = ButtonHTMLAttributes

export const BrendanButton = defineComponent<BrendanButtonProps>({
  setup(props, ctx) {
    console.log('received props = ', props)
    console.log('received ctx = ', ctx)
    const mergedProps = handleAttrs({
      ...props,
      ...ctx
    })
    return () => <button {...mergedProps}>{ctx.slots && ctx.slots.default && ctx.slots.default()}</button>
  }
})