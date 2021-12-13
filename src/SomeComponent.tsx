import { defineComponent } from 'vue-demi'

type Props = {
  /**
   * WHAT.THE.FUCK
   */
  wtf: string;
}

export const SomeVueComponent = defineComponent<Props>({
  render () {
    return <div>HI: {this.wtf}</div>
  }
})
