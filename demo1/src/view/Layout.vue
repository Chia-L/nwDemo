<template>
  <div>
    <Menu mode="horizontal"
          active-name="activeComp"
          @on-select="menuChange">
      <menu-item v-for="menu in menus" :name="menu.comp" :key="menu.comp">
        <span v-text="menu.name"></span>
      </menu-item>
    </Menu>
    <Button @click="showBottom">打开实时窗口</Button>
    <Button @click="hideBottom">关闭实时窗口</Button>
    <component :is="activeComp"></component>
  </div>
</template>

<script>
import Home from './Home'
import SecurityEvent from './SecurityEvent'
import Logs from './Logs'
import { emitShowSingleSecNotify, emitHideSingleSecNotify } from '../../utils/notifyEvent'
export default {
  name: 'home',
  components: {
    Home,
    SecurityEvent,
    Logs
  },
  data() {
    return {
      activeComp: 'Home',
      menus: [{comp: 'Home', name: '首页'}, {comp: 'SecurityEvent', name: '安全事件'}, {comp: 'Logs', name: '日志'}]
    }
  },
  mounted() {
    let step = 0
    let vm = this
    let timer = null
    let  timer1 = null
    vm.showBottom()
    function aa() {
      if (timer1) {
        nw.global.clearTimeout(timer1)
      }
      timer1 = nw.global.setTimeout(function () {
        vm.hideBottom()
        nw.global.clearTimeout(timer1)
        timer1 = null
        console.log('隐藏',timer1)
        step++
        timer = nw.global.setTimeout(function () {
          vm.showBottom()
          nw.global.clearTimeout(timer)
          timer = null
          console.log('展示',timer)
          if (step<1000){
            aa()
          }
        }, 2000)
      },2000)
    }
    aa()
  },
  methods: {
    menuChange(v){
      this.activeComp = v
      console.log(this._nw)
    },
    showBottom() {
      emitShowSingleSecNotify()
    },
    hideBottom() {
      emitHideSingleSecNotify()
    }
  }
}
</script>

<style scoped>

</style>
