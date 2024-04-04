<template>
    <div>
        <h1>Second Component</h1>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
    export default {
        name:'Second',
        props:{
            title:String,
        }
    }
</script>

<style scoped>

</style>