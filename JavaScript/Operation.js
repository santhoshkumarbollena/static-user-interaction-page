
const volumefun = (x, y,z) => { return x * y*z }

const coder3 = new Vue({
  el: '#coder3',
  data: {
    guest: 'Santhosh',
    height: 5,
    weight: 3,
    length: 7
  },
  computed: {
    volume: function () {
      const i = parseInt(this.height)
      const j = parseInt(this.weight)
      const k = parseInt(this.length)
      return `${this.guest}, your volume is ${volumefun(i, j , k)}.`
    }
  }

})