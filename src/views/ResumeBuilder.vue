<template>
    <div class="layout">
        <component :is="component"></component>
    </div>
</template>

<script setup lang="ts">
    import PersonalInformation from '../components/resume-forms/PersonalInformation.vue';
    import Education from '../components/resume-forms/Education.vue';
    import ProfessionalSummary from '../components/resume-forms/ProfessionalSummary.vue';
    import WorkHistory from '../components/resume-forms/WorkHistory.vue';
    import ResumeStagesNavigationButtons from '../components/ResumeStagesNavButtons.vue';
    import { watchEffect } from 'vue';
    import { useRoute } from 'vue-router'

    type Stage  = 'personal-information'
    let component = PersonalInformation;

    const strategies = {
        'personal-information': PersonalInformation,
        'summary': ProfessionalSummary,
        'work-history': WorkHistory,
        'education': Education,
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