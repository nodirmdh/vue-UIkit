<script setup>
import { ref, computed } from 'vue';
import TableBase from '@/components/Table/TableBase.vue'
import TableRow from '@/components/Table/TableRow.vue'
import TableColumn from '@/components/Table/TableColumn.vue'
import AppButton from '@/components/AppButton.vue'

const tableHeads = ['Id', `Author`, 'Title', 'Cover', '']
const tableSizeColumns = '50px 1fr 2fr 150px 140px'

const sortField = ref('id')
const typeSort = ref('asc')

const books = ref([
    {
        id: 1,
        author: 'Makhmudov Nodirbek',
        title: 'Vue',
        image: 'https://miro.medium.com/max/720/1*1Mnn_m0-2ofCrgyCdc9iuA.png',
        bg: '#03fc4a'
    },
    {
        id: 12,
        author: 'mdhnodir',
        title: 'UI',
        image: 'https://itproger.com/img/news/1562263059.jpg',
        bg: '#0388fc'
    },
    {
        id: 2,
        author: 'Махмудов Нодирбек',
        title: 'Kit',
        image: 'https://images.ctfassets.net/3shtzlb7cz90/6b2gmpofXD7oG5kugB6SDx/10e6f0efb12049cd7c239724ad19c250/first-aid-kit_720x432.jpg?fm=webp&q=70',
        bg: '#ff4747'
    },
])

const booksSorting = computed(() => {
    return books.value.sort((a, b) => {
        let modifier = 1;
        if(typeSort.value === 'desc') modifier = -1
        if(a[sortField.value] < b[sortField.value]) return -1 * modifier
        if(a[sortField.value] > b[sortField.value]) return 1 * modifier
        return 0
    })
})

const setSort = (name) => {
    if(sortField.value === name) {
        if(typeSort.value === 'asc'){
            typeSort.value = 'desc'
        } else {
            typeSort.value = 'asc'
        }
    } else {
        sortField.value = name
    }
}
</script>

<template>
    <h1 class="heading-1">{{$t('Table')}}</h1>
    <span>{{$t('Sort Field')}}: {{sortField}}</span><br>
    <span>{{$t('Type Sort')}}: {{typeSort}}</span><br>
    <table-base :head="tableHeads" :columnTemplates="tableSizeColumns" @sorting="setSort">
        <table-row v-for="book in booksSorting" :key="book.id" :columnTemplates="tableSizeColumns" :bgRow="book.bg">
            <table-column :columnTitle="tableHeads[0]">{{ book.id }}</table-column>
            <table-column :columnTitle="tableHeads[1]">{{ book.author }}</table-column>
            <table-column :columnTitle="tableHeads[2]">{{ book.title }}</table-column>
            <table-column :image="true" :srcImage="book.image"/>
            <table-column>
                <app-button :label="$t('Read')"></app-button>
            </table-column>
        </table-row>
    </table-base>

</template>



<style>

</style>