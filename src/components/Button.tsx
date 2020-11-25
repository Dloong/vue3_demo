// import { defineComponent, SetupContext, ref } from 'vue'

// interface ButtonProps {
//   type: 'primary' | 'dashed' | 'link'
// }
// const Button = defineComponent({
//   props: {
//     type: {
//       default: 'primary',
//       type: String
//     }
//   },
//   emits: ['change'],
//   setup(props: any, contex: SetupContext) {
//     const state = ref(0)
//     const handleClick = () => {
//       state.value++
//       contex.emit('change', state.value)
//     }
//     return () => (
//       <button class={['btn', `btn-${props.type}`]} onClick={handleClick}>
//       {contex.slots}
//     </button>
//     )
//   }
// })

// export default Button
