<script setup>
import {ref} from 'vue'
import ProgressBar from '@/components/Progress/ProgressBar.vue'
import ProgressCircle from '@/components/Progress/ProgressCircle.vue'
import AppButton from '@/components/AppButton.vue'

const percentBar = ref(40)
const percentCircle = ref(60)

const addPercentBar = () => {
  percentBar.value += 10
  if(percentBar.value > 100){
    percentBar.value = 100
  }
}
const addPercentCircle = () => {
  percentCircle.value += 10
  if(percentCircle.value > 100){
    percentCircle.value = 100
  }
}
const removePercentBar = () => {
  percentBar.value -= 10
  if(percentBar.value < 0){
    percentBar.value = 0
  }
}
const removePercentCircle = () => {
  percentCircle.value -= 10
  if(percentCircle.value < 0){
    percentCircle.value = 0
  }
}
</script>

<template>
  <h1 class="heading-1">{{$t('Progress')}}</h1>
  <h2 class="heading-2">{{$t('Progress Bar')}}</h2>
  <div class="line line_block">
    <app-button :label="$t('Add 10%')" @click="addPercentBar"/>
    <app-button :label="$t('Remove 10%')" @click="removePercentBar"/>
  </div>
  <progressBar maxWidth="50%" :percent="percentBar" />
  <progressBar maxWidth="50%" :percent="percentBar" color="success"/>
  <h2 class="heading-2">{{$t('Progress Circle')}}</h2>
  <div class="line line_block">
    <app-button :label="$t('Add 10%')" @click="addPercentCircle"/>
    <app-button :label="$t('Remove 10%')" @click="removePercentCircle"/>
  </div>
  <div class="line line_block">
    <progress-circle :percent="percentCircle"/>
    <progress-circle :percent="percentCircle" color="success"/>
  </div>
</template>


<style>

</style>