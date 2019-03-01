<template>  
    <div>
        testlifecycle
        <son></son>
        <!--<son1/>-->
    </div>
</template>
<script>
    import son from '@/components/son.vue'
    import son1 from '@/components/son1.vue'
    export default {
        components: {
            son,
            son1
        },
        created() {
            console.log('---- parent created---')
        },
        beforeCreate() {
            console.log('------parent beforeCreate------')
        }
    }
</script>