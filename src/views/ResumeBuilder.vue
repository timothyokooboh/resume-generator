<template>
    <div>
        <component :is="component"></component>
    </div>
</template>

<script setup lang="ts">
    import PersonalInformation from '../components/resume-forms/PersonalInformation.vue';
    import { watchEffect } from 'vue';
    import { useRoute } from 'vue-router'

    type Stage  = 'personal-information'
    let component = PersonalInformation;

    const strategies = {
        'personal-information': PersonalInformation,
    }

    const route = useRoute();

    watchEffect(() => {
        const stage = route.params.stage as Stage
        component = strategies[stage]
    })
</script>

<style scoped>

</style>