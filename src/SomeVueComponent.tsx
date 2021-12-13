import { defineComponent } from 'vue-demi'

type Props = {
  /**
   * WHAT.THE.FUCK
   */
  wtf: string;
}

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