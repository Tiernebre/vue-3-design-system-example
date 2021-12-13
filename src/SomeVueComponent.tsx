import { defineComponent } from 'vue-demi'

type SomeVueComponentProps = {
  /**
   * WHAT.THE.FUCK
   */
  wtf: string;
}

/**
 * COOL BEANS
 */
const SomeVueComponent = defineComponent<SomeVueComponentProps>({
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