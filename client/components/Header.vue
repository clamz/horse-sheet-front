<template>
  <header>
    {{hello}} {{count}}
  </header>
</template>

<script>

import Vuex from 'vuex'

import headerStore from './HeaderStore.js'
export default {
  store: headerStore,
  computed: {
    ...Vuex.mapGetters(['count', 'hello'])
  }
}
</script>
