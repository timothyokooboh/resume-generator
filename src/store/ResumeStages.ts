import { defineStore } from "pinia"
import { useRoute } from "vue-router"
import { reactive, computed } from "vue"

export const useResumeStages = defineStore('resumeStagesStore', () => {
    const route = useRoute()

    const stages = reactive([
        {
            title: 'personal information',
            value: 'personal-information',
            step: 1
        },
        {
            title: 'summary',
            value: 'summary',
            step: 2
        },
        {
            title: 'work history',
            value: 'work-history',
            step: 3
        },
        {
            title: 'education',
            value: 'education',
            step: 4
        },
        {
            title: 'skills',
            value: 'skills',
            step: 5

        },
        {
            title: 'anything else',
            value: 'anything-else',
            step: 6
        }
    ])

    const currentStage = computed(() => {
        const routeParams = route.params
        return stages.find(stage => stage.value === routeParams.stage)
    })

    const nextStage = computed(() => {
        if (!currentStage.value || currentStage.value.step === stages.length) return undefined
        if (currentStage.value !== undefined) {
            return stages.find(stage => stage.step === currentStage.value.step + 1)
        }
    })

    const prevStage = computed(() => {
        if (!currentStage.value || currentStage.value.step === 1) return undefined
        return stages.find(stage => stage.step === currentStage.value.step - 1)
    })

    return {
        stages,
        currentStage,
        nextStage,
        prevStage
    }
})