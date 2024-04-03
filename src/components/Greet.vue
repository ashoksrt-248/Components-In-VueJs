<template>
    <div>
        <h1>Hello {{ msg }} {{ Age }}</h1>
    </div>
</template>

<script>
    export default {
        name:'Greet',
        props:['msg','Age']

    }
</script>

<style scoped>

</style>