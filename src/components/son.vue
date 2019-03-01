<template>
  <div class="son">
    i am a son component
    <son1/>
  </div>
</template>

<style scoped>
    .son {
        color: red;
    }
</style>

<script>
    import son1 from '@/components/son1.vue'
    export default {
        components: {
            son1
        },
        created() {
            console.log('---- son created---')
        },
        beforeCreate() {
            console.log('------son beforeCreated------')
        }
    }
</script>