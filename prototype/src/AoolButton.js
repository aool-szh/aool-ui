export default {
  name: 'AoolButton',
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">{{ count }}</button>
  `
}