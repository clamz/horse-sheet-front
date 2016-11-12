<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header-view></header-view>
      <main class="mdl-layout__content">
        <div class="page-content">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>

import HeaderView from './header/HeaderView.vue'
export default {
  components: {
    HeaderView
  }
}
</script>
<style>
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
.page {
  text-align: center;
}
code {
  background-color: #f0f0f0;
  padding: 3px 5px;
  border-radius: 2px;
}
</style>
