import { defineComponent } from "vue-demi";

export const SomeOtherComponent = defineComponent({
  setup () {
    return () => <div>This is ANOTHER component!</div>
  }
})