<template>
    <div >
        <br>
        <BlackCard text="Essential But before I kill you, Mr Bond, I must show you _________"></BlackCard>
        <h2>Ecosystem</h2>
        <ul>
            <li> <WhiteCard whiteText="50,000 volts straight to the nipples"></WhiteCard></li>
            <li> <WhiteCard whiteText="72 virgins"></WhiteCard></li>
            <li> <WhiteCard whiteText="8 oz of sweet mexican black-tar"></WhiteCard></li>
            <li> <WhiteCard whiteText="A bag of magic beans"></WhiteCard></li>
        </ul>
        <button type="button" v-on:click="sendPhrase">Proceed</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BlackCard from '@components/black-card'
import WhiteCard from '@components/white-card'
import router from '@/router/'
@Component({
    components:{ BlackCard, WhiteCard }
})
export default class Question  extends Vue{
    sendPhrase (){
        router.replace('votation')
    }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
