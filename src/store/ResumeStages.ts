import { defineStore } from "pinia"
import { useRoute } from "vue-router"

export const useResumeStages = () => {
    const route = useRoute()

    return defineStore('resumeStages', {
        state: () => ({
            stages: [
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
        
            ],
        }),
        getters: {
            currentStage: (state) => {
                const routeParams = route.params
                return state.stages.find(stage => stage.value === routeParams.stage)
            },
            nextStage(state): {title: string, value: string, step: number} | null {
                if (!this.currentStage || this.currentStage.step === state.stages.length) return null
                return state.stages.find(stage => stage.step === this.currentStage.step + 1) || null
            },
            prevStage(state): {title: string, value: string, step: number} | null {
                if (!this.currentStage || this.currentStage.step === 1) return null
                return state.stages.find(stage => stage.step === this.currentStage.step - 1) || null
            } 
        }
        
    })()

}
