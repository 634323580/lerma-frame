import { Ref, isVue2, isVue3, ref, onMounted, onUnmounted} from 'vue-demi'

console.log(isVue2)
console.log(isVue3)

interface mouseReturn {
  x: Ref<number>,
  y: Ref<number>,
}


export default function useMouse(): mouseReturn {
  const x = ref<number>(0)
  const y = ref<number>(0)

  const update = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return {
    x,
    y
  }
}