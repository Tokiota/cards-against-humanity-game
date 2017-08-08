<template>
    <div >
        <br>
        <ul>
            <li> <BlackCard text="But before I kill you, Mr Bond, I must show you 50,000 volts straight to the nipples"></BlackCard></li>
            <li> <BlackCard text="But before I kill you, Mr Bond, I must show you a bitch slap"></BlackCard></li>
            <li> <BlackCard text="But before I kill you, Mr Bond, I must show you a brain tumor"></BlackCard></li>
            <li> <BlackCard text="But before I kill you, Mr Bond, I must show you a fetus"></BlackCard></li>
        </ul>
        <button type="button" v-on:click="done">Done</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BlackCard from '@components/black-card'
import router from '@/router/'

@Component({
    components:{ BlackCard }
})
export default class Question  extends Vue{
    done() {
        router.replace('results')
    }
}
</script>

<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: -block;
  margin: 0 10px;
}

</style>
