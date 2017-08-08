<template>
    <li> {{ playerName }} &nbsp;&nbsp;&nbsp;
        <BlackCard :text="text"></BlackCard>
    </li>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BlackCard from '@components/black-card'

@Component({
    props: {
        text: String,
        playerName: String,
    },
    components: { BlackCard }
})
export default class Question extends Vue {
    done() {

    }
}
</script>

<style scoped>
li {
    display: inline-block;
    margin: 0 10px;
}
</style>
