<style lang="scss" scoped>
    .content {
        background: white;
    }
    .ticket {
        background: white;
        border-radius:16px;
        overflow: hidden;
    }
    .header {
        background: #34a7dd;
        padding-left: 16px;
    }
    
    .footer {
        background: #34a7dd;
        height: 24px;
        width: 100%;
        display: flex;
    }
    .vertical{
        display: block;
    }
    .horizontal{
        float: left;
        display: flex;
    }
    #right{
        border-left: 1px dashed #c6c6c6!important;
    }
</style>
<template>
    <div class="ticket horizontal">
        <div id="left" class="vertical">
            <div class="header">
                <TicketHeader v-bind:classs="classs"/>
            </div>
            <div class="content vertical">
                <TicketLabel v-bind:label="'PASSENGER'" v-bind:value="passenger" v-bind:bigger="false"/>
                <div class="horizontal">
                    <TicketLabel v-bind:label="'FLIGHT'" v-bind:value="flight" v-bind:bigger="false"/>
                    <TicketLabel v-bind:label="'FROM'" v-bind:value="from" v-bind:bigger="false"/>
                    <TicketLabel v-bind:label="'TO'" v-bind:value="to" v-bind:bigger="false"/>
                    <TicketLabel v-bind:label="'CLASS'" v-bind:value="classs" v-bind:bigger="false"/>
                </div>
                <div class="horizontal">
                    <TicketBoarding v-bind:gate="gate" v-bind:time="number" v-bind:seat="seat"/>
                    <span>CODE128</span>
                </div>
            </div>
            <span class="footer"></span>
        </div>
        <div id="right" class="vertical">
            <div class="header">
                <TicketHeader v-bind:classs="classs"/>
            </div>
            <div class="content vertical">
                <TicketLabel v-bind:label="'PASSENGER'" v-bind:value="passenger" v-bind:bigger="false"/>
                <TicketBoarding v-bind:gate="gate" v-bind:time="number" v-bind:seat="seat"/>
                <span>CODE128</span>
            </div>
            <span class="footer"></span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ticket',
    props: ["passenger", "flight", "from", "to", "classs", "gate", "seat", "number"],
    methods: {
        
    }
}
</script>
