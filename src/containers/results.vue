<template>
    <div>
        <br>
        <ul>
            <li>
                <ResultLine playerName="Odin" text="But before I kill you, Mr Bond, I must show you a fetus"></ResultLine>
            </li>
            <li>
                <ResultLine playerName="Robin Hood" text="But before I kill you, Mr Bond, I must show you 50,000 volts straight to the nipples"></ResultLine>
            </li>
            <li>
                <ResultLine playerName="Dracula" text="But before I kill you, Mr Bond, I must show you a brain tumor"></ResultLine>
            </li>
            <li>
                <ResultLine playerName="Louse lane" text="But before I kill you, Mr Bond, I must show you a bitch slap"></ResultLine>
            </li>
        </ul>
        <button type="button" v-on:click="done">Done</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ResultLine from '@components/result-line'
import router from '@/router/'

@Component({
    components: { ResultLine }
})
export default class Question extends Vue {
    done() {
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: block;
    margin: 0 10px;
}
</style>
