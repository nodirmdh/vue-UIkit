<script setup>
import { ref, computed } from 'vue';
import AppInput from '../components/AppInput.vue';
import useVuelidate from '@vuelidate/core'
import {minLength} from '@vuelidate/validators'

const nameField = ('')

const rules = computed(() => ({
  nameField: {
    minLength: minLength(3)
  }
}))

const v = useVuelidate(rules, {nameField})

console.log(v)
</script>

<template>
  <h1 class="heading-1">Inputs</h1>

  <form >
    <app-input 
    label='Your Name'
    name="name"
    placeholder="Input your Name"
    v-model:value="v.nameField.$model"
    :error="v.nameField.$errors"/> 
  </form>
</template>

<style>

</style>