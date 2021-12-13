import { ref, defineComponent } from 'vue-demi'

type SomeVueComponentProps = {
  /**
   * Message that is displayed in the Vue component.
   */
  message: string;
}

/**
 * COOL BEANS
 */
const SomeVueComponent = defineComponent<SomeVueComponentProps>({
  setup(props, attrs) {
    const numberOfClicks = ref(0)

    const onClick = () => {
      numberOfClicks.value++
    }

    const emitCoolEvent = () => {
      attrs.emit('cool')
    }

    return () => <div>
      <h1>Welcome to Vue 3 Design System Demonstration</h1>
      <p>Prop `message` = {props.message}</p>
      <p>State `numberOfClicks` = {numberOfClicks.value}</p>
      <button onClick={onClick}>Click!</button>
      <button onClick={emitCoolEvent}>COOL!</button>
    </div>
  }
})

SomeVueComponent.props = {
  wtf: {
    type: String,
    required: true
  }
}

export { SomeVueComponent }