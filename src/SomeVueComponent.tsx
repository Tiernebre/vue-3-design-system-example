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
  setup (props) {
    return <div>HI: {props.wtf}</div>
  }
})

SomeVueComponent.props = {
  wtf: {
    type: String,
    required: true
  }
}

export { SomeVueComponent }