<template>
    <div v-if="currentStage" class="test">
        <div class="text-center stage-title text-uppercase">{{ currentStage.title }}</div>
        <div class="stages-icon-container">
            <div 
                v-for="stage in resumeStagesStore.stages" 
                :key="stage.value" class="stage-icon" 
                :class="{ active: stage === currentStage }"
            >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue"
    import { useRoute } from "vue-router";
    import { ResumeStage } from "../types"
    import { useResumeStages } from "../store/ResumeStages"

    const resumeStagesStore = useResumeStages()

    const props = defineProps<{
        isActive: Function
    }>()

    const route = useRoute()
    const currentStage = computed(() => resumeStagesStore.stages.find(stage => stage.value === route.params.stage))
</script>

<style lang="scss" scoped>
    .stage-title {
        font-size: 1.2rem;
        color: var(--color-primary);
        margin-bottom: .5rem;
        text-align: center;
    }

    .stages-icon-container {
        display: flex;
        justify-content: center;
    }
    .stage-icon {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        border: 1px solid #ccc;

        &:not(:last-child) {
            margin-right: .5rem;
        }
    }

    .stage-icon.active {
        border: 1px solid var(--color-primary)
    }

    .test {
        @media (max-width: 550px) {
            display: flex;
            flex-direction: column-reverse;
            position: fixed;
            bottom: 0;
            padding-block: 1rem;
            left: 50%;
            width: 100%;
            transform: translateX(-50%);
            z-index: 9999;
            background-color: #F1F8FE;

            & > div {
                margin: 7px 0;
            }
        }
    }
</style>