<script setup>
const emits = defineEmits(['update:checkedValue'])
const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    id: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    checked: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    group: {
        type: Boolean,
        default: false
    },

})
const handleClick = (event) => {
    emits('update:checkedValue', event.target.value)
}
</script>

<template>
    <input class="radiobutton" type="radio" :name="name"
        :id="id" :value="value" :checked="checked" :disabled="disabled" @input="handleClick($event)">
    <label :for="id">{{label}}</label>
</template>

<style lang="scss" scoped>
.radiobutton{
    position: absolute;
    z-index: -1;
    opacity: 0;
    & + label{
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    & + label::before{
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        flex-grow: 0;
        border:1px solid #abd5bd;
        border-radius: 6px;
        margin-right: 10px;
        background-repeat: no-repeat;
        background-size: 50% 50%;
        border-radius: 50%;

    }
    &:checked +label::before{
        border-color: var(--primary);
        background-color: var(--primary);
        background-image: url('@/assets/done.svg');
        background-position: 50%;
        background-size: 80%;
    }
    &:not(:disabled):not(:checked) + label:hover::before{
        border-color: var(--primary-hover);
    }
    &:not(:disabled):active + label::before {
        background-color: var(--primary);
        border: 1px solid #ECEBED;
    }
    &:focus + label::before{
        box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
    }
    &:focus:not(:checked) + label::before{
        border-color: var(--primary);
    }
    &:disabled + label::before{
        background-color: #e9ecef;
        border: 1px solid #ECEBED;
        background-image: url('@/assets/done.svg');
        background-position: 50%;
        background-size: 80%;
    }
}
</style>