<template>
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <menu-container></menu-container>
        <span class="mdl-layout-title">Horse sheet</span>

      </div>
    </header>
</template>
<script>
import Menu from './Menu.vue'
export default {
  components:{
    MenuContainer:Menu,
  }
}
</script>
