<template>
  <div class="counter" @click="$store.dispatch('incrementAsync')">
    {{ count }}
  </div>
</template>

<script>
import './counter.scss'
import Vuex from 'vuex'
import store from './CounterStore.js'
export default {
  store,
  computed: {
    ...Vuex.mapGetters(['count'])
  }
}
</script>
