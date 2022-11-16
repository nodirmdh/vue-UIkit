<script setup>
import { ref } from 'vue'
import AppRadiobutton from '@/components/AppRadiobutton.vue'

const footballClubs = ref([
  { name: 'Real Madrid', id: 'f1' },
  { name: 'Manchester City', id: 'f2' },
  { name: 'Bayern Munchen', id: 'f3' },
  { name: 'PSG', id: 'f4' },
  { name: 'Juventus', id: 'f5' },
])

const selectedClub = ref('')

const disabledRadio = ref(true)
const disabledRadioChecked = ref(true)

</script>

<template>
  <h1 class="heading-1">{{$t('Radiobutton')}}</h1>
  <h2 class="heading-2">{{$t('Basic')}}</h2>
  <div class="line line_block">
    <p>{{$t('Selected Club')}}: {{selectedClub}}</p>
    <div v-for="club in footballClubs" :key="club.id">
      <app-radiobutton 
      :value="club.name" 
      :label="club.name" 
      :id="club.id" 
      name="club"
      v-model:checkedValue="selectedClub" />
    </div>
  </div>
  <h2 class="heading-2">{{$t('Disabled')}}</h2>
  <div class="line">
    <app-radiobutton 
    value="Radiobutton Disabled" 
    :label="$t('Radiobutton Disabled')" 
    id="RadiobuttonDisabled" 
    name="RadiobuttonDisabled"
    :disabled="disabledRadio"
    v-model:checkedValue="disabledRadioChecked" />
  </div>

</template>


<style>

</style>