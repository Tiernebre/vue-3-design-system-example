import { ButtonHTMLAttributes } from 'vue'
import { defineComponent } from 'vue-demi'

type BrendanButtonProps = ButtonHTMLAttributes

export const BrendanButton = defineComponent<BrendanButtonProps>({
  setup(props, ctx) {
    console.log('received props = ', props)
    console.log('received ctx = ', ctx)
    return () => <button {...props}>{ctx.slots && ctx.slots.default && ctx.slots.default()}</button>
  }
})