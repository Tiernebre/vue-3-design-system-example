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
  setup (props) {
    const someStatefulness = ref("Hey this is composable state duderzz")

    return () => {
      return <div>
        <p>
          HI: {props.wtf}
        </p>
        <p>
          {someStatefulness}
        </p>
      </div>
    }
  },
})

SomeVueComponent.props = {
  wtf: {
    type: String,
    required: true
  }
}

export { SomeVueComponent }