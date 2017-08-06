<template>
    <span >
        {{whiteText}}
    </span>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props:{
        whiteText : String
    }
})
export default class WhiteCard  extends Vue {
    whiteText: string
}
</script>

<style scoped>
</style>
