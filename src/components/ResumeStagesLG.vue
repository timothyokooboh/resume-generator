<template>
    <div class="stages">
        <div 
            v-for="(stage, idx) in resumeStagesStore.stages" 
            :key="idx" 
            class="stage" 
            :class="{ active: isActive(stage), 'previous-stage': isPrevious(stage)}"
        >
            <span class="sn">{{ idx + 1 }}</span>
            <span class="text-uppercase">{{ stage?.title }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ResumeStage } from "../types"
    import { useResumeStages } from "../store/ResumeStages"

    const resumeStagesStore = useResumeStages()

    defineProps<{
        isActive: Function,
        isPrevious: Function
    }>()
</script>

<style lang="scss" scoped>
  .stages {
        display: flex;
        align-items: center;
    }
    .stage {
        margin-inline-end: 1rem;
        color: #ccc;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        .sn {
            padding: .2rem .4rem;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid #ccc;
            font-size: 1rem;
            margin-right: .5rem;
        }

        &:not(:last-child)::after {
            content: '';
            width: 2rem;
            height: 2px;
            background-color: #ccc;
            margin-inline-start: 1rem
        }
    }

    .active {
        color: var(--color-primary);

        .sn {
            border: 1px solid var(--color-primary);
        }

        &:not(:last-child)::after {
            content: '';
            background-color: var(--color-primary);
        }
    }
    .previous-stage {
        color: var(--color-primary);

        .sn {
            background-color: var(--color-primary);
            color: #FFF;
        }

        &:not(:last-child)::after {
            content: '';
            background-color: var(--color-primary);
        }
    }
</style>