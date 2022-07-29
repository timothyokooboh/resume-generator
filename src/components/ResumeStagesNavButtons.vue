<template>
    <div class="navigation-btns">
        <slot>
            <template v-if="prevStage">
                <AppButton class="bg-primary" outlined @click="$router.push(`/create-resume/${prevStage.value}/${$route.params.resume_id}`)">
                    BACK
                </AppButton>
            </template>
            <template v-if="nextStage && Object.keys(nextStage).length > 0">
                <AppButton @click="$router.push(`/create-resume/${nextStage.value}/${$route.params.resume_id}`)">
                    <span class="text-uppercase">Next: {{ nextStage.title }}</span>
                </AppButton>
            </template>
        </slot>
    </div>
</template>

<script setup lang="ts">
    import { useResumeStages } from '../store/ResumeStages';
    import { computed } from 'vue';
import AppButton from './AppButton.vue';
    const resumeStagesStore = useResumeStages()

    const nextStage = computed(() => resumeStagesStore.nextStage)
    const prevStage = computed(() => resumeStagesStore.prevStage)
</script>


<style lang="scss" scoped>
    .navigation-btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-block: 5rem;

        @media (max-width: 350px) {
            display: block;

            & > * {
                width: 100%;
                margin-block: 1.5rem;
            }
        }
    }
</style>