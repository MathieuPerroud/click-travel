<style lang="scss" scoped>
</style>
<template>
    <div class="horizontal">
        <TicketLabel v-bind:label="'GATE'" v-bind:value="gate" v-bind:bigger="true"/>
        <TicketLabel v-bind:label="'TIME'" v-bind:value="time" v-bind:bigger="true"/>
        <TicketLabel v-bind:label="'SEAT'" v-bind:value="seat" v-bind:bigger="true"/>
    </div>
</template>

<script>

export default {
    name: 'boarding-time-place',
    props: ["gate", "time", "seat"],
    methods: {
        
    }
}
</script>
