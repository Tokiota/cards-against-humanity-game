<template>
    <div id="app">
        <h1>Devs vs Humanity</h1>
        <div>
            <ranking></ranking>
        </div>
        <br>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Ranking from '@components/ranking'
@Component({
    components:{ Ranking}
})
export default class main extends Vue {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
