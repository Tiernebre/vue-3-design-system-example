import { ButtonHTMLAttributes, defineComponent } from 'vue-demi'

type Props = {
  /**
   * WHAT.THE.FUCK
   */
  wtf: string;
} & ButtonHTMLAttributes;

const SomeVueComponent = defineComponent<Props>({
  render () {
    return <div>HI: {this.wtf}</div>
  }
})

SomeVueComponent.props = {
  wtf: {
    type: String,
    required: true
  }
}

export { SomeVueComponent }