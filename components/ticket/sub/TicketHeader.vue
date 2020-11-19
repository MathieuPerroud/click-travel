<style lang="scss" scoped>
    p {
        color: white;
    }
    .header-label {
        font-size: 32px;
    }
    .class-type {
        font-size: 16px;

    }
</style>
<template>
    <div>
        <p class="header-label">Boarding Pass</p>
        <p class="class-type">{{classs}}</p>
    </div>
</template>

<script>

export default {
    name: 'ticket-header',
    props: ["classs"]
}
</script>
