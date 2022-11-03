<template>
  <div>
    <Menu mode="horizontal"
          active-name="activeComp"
          @on-select="menuChange">
      <menu-item v-for="menu in menus" :name="menu.comp" :key="menu.comp">
        <span v-text="menu.name"></span>
      </menu-item>
    </Menu>
    <Button @click="">打开实时窗口</Button>
    <component :is="activeComp"></component>
  </div>
</template>

<script>
import Home from './Home'
import SecurityEvent from './SecurityEvent'
import Logs from './Logs'
import Vue from "vue";
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
  methods: {
    menuChange(v){
      this.activeComp = v
      console.log(this._nw)
    }
  }
}
</script>

<style scoped>

</style>
