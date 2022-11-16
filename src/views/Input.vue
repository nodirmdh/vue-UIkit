<script setup>
import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, maxLength, numeric, email, sameAs} from '@vuelidate/validators'

import Input from '@/components/AppInput.vue'
import Button from '@/components/AppButton.vue'

const nameField = ref('')
const emailField = ref('')
const luckyField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')
const frontendField = ref('')

const mustBeFrontend = (value) => value.includes('frontend')

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3))
  },
  emailField: {
    email: helpers.withMessage('Вы ввели неверный email', email)
  },
  luckyField: {
    maxLength: helpers.withMessage(`Максимальная длина: 2 символа`, maxLength(3)),
    numeric: helpers.withMessage('Вы можете ввести только цифры', numeric)
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value))
  },
  frontendField: {
    frontendField: helpers.withMessage('Строка должна содержать слово frontend', mustBeFrontend)
  }
}))

const v = useVuelidate(rules, {nameField, emailField, luckyField, confirmPasswordField, frontendField})

const submitForm = () => {
  v.value.$touch()
  if (v.value.$error) return
  alert('Form submitted')
}
</script>

<template>
  <h1 class="heading-1">{{$t('Inputs')}}</h1>

  <form @submit.prevent="submitForm">
    <Input
      :label="$t('Your name')"
      name="name"
      :placeholder="$t('Input your name')"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"/>
      
    <Input
      :label="$t('Your email')"
      name="email"
      :placeholder="$t('Input your email')"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"/>
      
    <Input
      :label="$t('Your lucky number')"
      name="lucky"
      :placeholder="$t('Input your lucky number')"
      v-model:value="v.luckyField.$model"
      :error="v.luckyField.$errors"/>
      
    <Input
      :label="$t('Your password')"
      name="password"
      :placeholder="$t('Please input password')"
      v-model:value="passwordField"
      type="password"/>
      
    <Input
      :label="$t('Confirm password')"
      name="confirm"
      :placeholder="$t('Please confirm password')"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
      type="password"/>

    <Input
      :label="$t('Frontend string')"
      name="frontend"
      :placeholder="$t('Input string with frontend')"
      v-model:value="v.frontendField.$model"
      :error="v.frontendField.$errors"/>

    <Button :label="$t('Submit')" color="primary"></Button>
  </form>
</template>