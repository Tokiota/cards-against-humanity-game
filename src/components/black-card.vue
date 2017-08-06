<template>
    <span >
        <h2>{{text}}</h2>
    </span>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props:{
        text : String
    }
})
export default class BlackCard  extends Vue{}
</script>

<style scoped>
h2{
    display:inline
}
</style>
