<script setup>
import AppButton from '@/components/AppButton.vue'

const eventForBtn = () => {
    alert('Вы кликнули кнопку: ' + '@click')
}
</script>

<template>
    <h1 class="heading-1">{{$t('Button')}}</h1>
    <h2 class="heading-2">{{$t('Colors')}}</h2>
    <div class="line">
        <app-button label="Primary" color="primary" />
        <app-button label="Secondary" color="second" />
        <app-button label="Success" color="success" />
        <app-button label="Info" color="info" />
        <app-button label="Warning" color="warning" />
        <app-button label="Danger" color="danger" />
    </div>
    <h2 class="heading-2">{{$t('Rounded')}}</h2>
    <div class="line">
        <app-button label="Primary" color="primary" rounded />
        <app-button label="Secondary" color="second" rounded />
        <app-button label="Success" color="success" rounded />
        <app-button label="Info" color="info" rounded />
        <app-button label="Warning" color="warning" rounded />
        <app-button label="Danger" color="danger" rounded />
    </div>
    <h2 class="heading-2">{{$t('Disabled')}}</h2>
    <div class="line">
        <app-button label="Primary" color="primary" disabled />
        <app-button label="Secondary" color="second" disabled />
        <app-button label="Success" color="success" disabled />
        <app-button label="Info" color="info" disabled />
        <app-button label="Warning" color="warning" disabled />
        <app-button label="Danger" color="danger" disabled />
    </div>
   
    <h2 class="heading-2">{{$t('Outlined')}}</h2>
    <div class="line">
        <app-button label="Primary" color="primary" :outlined="true" />
        <app-button label="Secondary" color="second" :outlined="true" />
        <app-button label="Success" color="success" :outlined="true" />
        <app-button label="Info" color="info" :outlined="true" />
        <app-button label="Warning" color="warning" :outlined="true" />
        <app-button label="Danger" color="danger" :outlined="true" />
    </div>
    <h2 class="heading-2">{{$t('Icon')}}</h2>
    <div class="line">
        <app-button icon="heart" color="primary" />
        <app-button icon="hand" color="second" />
        <app-button icon="address-book" color="success" />
        <app-button icon="credit-card" color="info" />
        <app-button icon="lemon" color="warning" />
        <app-button icon="hourglass" color="danger" />
    </div>
    <h2 class="heading-2">{{$t('Icon Outlined')}}</h2>
    <div class="line">
        <app-button icon="heart" color="primary" :outlined="true"/>
        <app-button icon="hand" color="second" :outlined="true"/>
        <app-button icon="address-book" color="success" :outlined="true"/>
        <app-button icon="credit-card" color="info" :outlined="true"/>
        <app-button icon="lemon" color="warning" :outlined="true"/>
        <app-button icon="hourglass" color="danger" :outlined="true"/>
    </div>
    <h2 class="heading-2">{{$t('Size')}}</h2>
    <div class="line">
        <app-button :label="$t('Normal')" color="primary" />
        <app-button :label="$t('Large')" color="primary" size="large"/>
    </div>
    <h2 class="heading-2">{{$t('Event')}}</h2>
    <div class="line">
        <app-button :label="$t('@click')" color="danger" @test="eventForBtn"/>
    </div>
        

</template>

