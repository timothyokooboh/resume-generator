<template>
    <div class="layout">
        <component :is="component"></component>
        <ResumeStagesNavigationButtons />
    </div>
</template>

<script setup lang="ts">
    import PersonalInformation from '../components/resume-forms/PersonalInformation.vue';
    import Education from '../components/resume-forms/Education.vue';
    import ResumeStagesNavigationButtons from '../components/ResumeStagesNavigationButtons.vue';
    import { watchEffect } from 'vue';
    import { useRoute } from 'vue-router'

    type Stage  = 'personal-information'
    let component = PersonalInformation;

    const strategies = {
        'personal-information': PersonalInformation,
        'education': Education
    }

    const route = useRoute();

    watchEffect(() => {
        const stage = route.params.stage as Stage
        component = strategies[stage]
    })
</script>

<style lang="scss" scoped>
    .layout {
        max-width: 95rem;
        width: 90%;
        margin: 3rem auto;
    }
</style>