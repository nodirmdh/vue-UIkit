<script setup>
const emits = defineEmits(['update:checked'])
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
    type: {
        type: String,
        default: 'checkbox'
    }
})

const handleClick = (event) => {
    if (props.group) {
        emits('updateCheckboxGroup', { optionId: props.id, checked: event.target.checked })
    } else {
        emits('update:checked', event.target.checked)
    }
}
</script>

<template>
    <div :class="[{'switch-container': type === 'switch'}]">
        <input :class="[{'checkbox': type === 'checkbox'}, {'switch': type === 'switch'}]" type="checkbox" :name="name"
            :id="id" :value="value" :checked="checked" :disabled="disabled" @input="handleClick($event)">
        <label :for="id">{{label}}</label>
        <label :for="id" class="switch__label" v-if="type === 'switch'">{{label}}</label>
    </div>
</template>



<style lang="scss" scoped>
.checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &+label {
        display: inline-block;
        align-items: center;
        user-select: none;
    }

    &+label::before {
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5db;
        border-radius: 6px;
        margin-right: 10px;

        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;

    }

    &:checked+label::before {
        border-color: var(--primary);
        background-color: var(--primary);
        background-image: url('@/assets/done.svg');

    }


    &:not(:disabled):not(:checked)+label:hover::before {
        border-color: var(--primary-hover);
    }

    &:not(:disabled):active+label::before {
        border-color: var(--primary);
        border: 1px solid #ECEBED;
    }

    &:focus+label::before {
        box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
    }

    &:focus:not(:checked)+label::before {
        border-color: var(--primary);
    }

    &:disabled+label::before {
        background-color: #e9ecef;
        border-color: 1px solid #ECEBED;
    }
}

.switch {
    height: 0;
    width: 0;
    visibility: 0;
    position: absolute;
    z-index: -1;
    opacity: 0;

    &-container {
        display: flex;
        align-items: center;
    }

    &__label {
        margin-left: 10px;
    }

    &+label {
        cursor: pointer;
        text-indent: -9999px;
        width: 50px;
        height: 35px;
        background: #fafafa;
        border: 1px solid #adb5bd;
        display: block;
        border-radius: 100px;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 5px;
            width: 26px;
            height: 26px;
            background: #fff;
            background: var(--primary);
            border-radius: 90px;
            transition: .3s;
            transform: translateY(-50%);
        }
    }

    &:checked {
        &+label {
            background: var(--primary);

            &:after {
                background: #fff;
                left: calc(100% - 5px);
                transform: translateX(-100%) translateY(-50%);

            }

            &:active::after {
                width: 33px;
            }
        }
    }
}
</style>