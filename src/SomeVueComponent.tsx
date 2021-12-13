import { ButtonHTMLAttributes, defineComponent } from 'vue-demi'

type Props = {
  /**
   * WHAT.THE.FUCK
   */
  wtf: string;
} & ButtonHTMLAttributes;

/**
 * Some cool Vue component in JSX. Neat-o JSX IS AWESEOMEEE
 */
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