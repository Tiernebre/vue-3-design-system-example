import { ref, defineComponent } from 'vue-demi'

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
  setup() {
    const state = ref(1)

    return () => <div>hi {state.value.toString()}</div>
  }
})

SomeVueComponent.props = {
  wtf: {
    type: String,
    required: true
  }
}

export { SomeVueComponent }