<template>
<div>底部界面放到</div>
</template>

<script>
import { onShowSingleSecNotify, onHideSingleSecNotify } from '../../utils/notifyEvent'

export default {
  name: 'BottomLayout',
  mounted() {
    console.log('底部 mounted')
    onShowSingleSecNotify(function () {
      nw.Window.get().show()
    })
    onHideSingleSecNotify(function () {
      nw.Window.get().hide()
    })
  }
}
</script>

<style scoped>

</style>
