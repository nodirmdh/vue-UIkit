<script setup>
    import {ref} from 'vue'
    import Checkbox from '@/components/Checkbox/Checkbox.vue'
    import CheckboxGroup from '@/components/Checkbox/CheckboxGroup.vue'


    const checkboxActive = ref(true)
    const checkboxDisabled = ref(true)
    const checkboxDisabledChecked = ref(true)

    const listOfHeroes = ref([
        {name: 'Spider Man', id: 'h1'},
        {name: 'Batman', id: 'h2'},
        {name: 'Thor', id: 'h3'},
        {name: 'Loki', id: 'h4'},
    ])
    const selectedHeroes = ref(['h1'])

    const switchProffessional = ref(false)
</script>


<template>

    <h1 class="heading-1">Checkbox</h1>
    <h1 class="heading-2">Checkbox Active</h1>
    <div class="line">
        <checkbox
        label="Checkbox Active"
        id="checkboxActive"
        name="checkboxActive"
        value="I like it"
        v-model:checked="checkboxActive"/> 
    </div>
    <h1 class="heading-2">Checkbox Disabled</h1>
    <div class="line">
        <checkbox
        label="Checkbox Disabled"
        id="checkboxDisabled"
        name="checkboxDisabled"
        value="I like it"
        :disabled="checkboxDisabled"
        v-model:checked="checkboxDisabledChecked"/> 
    </div>
    <h1 class="heading-2">Checkbox Group</h1>
    <div class="line line_block">
        <p>Selected Heroes: {{selectedHeroes}}</p>
        <checkbox-group name="heroes" v-model:value="selectedHeroes" :options="listOfHeroes"/>
    </div>
    <h1 class="heading-2">Switch</h1>
    <div class="line line_block">
        <p>Switch: {{switchProffessional}}</p>
        <checkbox
        label="I'm a professional"
        id="switch"
        name="switch"
        value="I'm a professional"
        type="switch"
        v-model:checked="switchProffessional"/> 
    </div>
</template>


<style lang="scss">


</style>