<style lang="scss" scoped>
    .root{
        padding: 16px;   
    }
    .label{
        font-size: 12px;
        color:#acacac
    }
    .value{
        color:#2b2b2b
    }
    .big{
        font-size: 24px;
        font-weight: bold;
    }
</style>
<template>
    <div class="root vertical">
        <div class="label">{{label}}</div>
        <div class="value" v-bind:class="{ big: bigger}">{{value}}</div>
    </div>
</template>

<script>

export default {
    name: 'ticket-label',
    props: ['label','value','bigger']
}
</script>
