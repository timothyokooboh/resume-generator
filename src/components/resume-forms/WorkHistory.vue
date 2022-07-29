<template>
    <div>
        <h1>Work history summary</h1>
        <section v-if="!viewingJobList">
            <div>
                {{ jobs.length > 0 ? 'Tell us about another job' : 'Tell us about your most recent job' }}
            </div>
    
            <Form :validation-schema="schema" class="form">
                <section class="employer">
                    <div class="form-control">
                        <label for='job_title'>Job Title</label>
                        <Field 
                            type="string" 
                            name='jobTitle' 
                            id='job_title' 
                            placeholder='e.g. Frontend Engineer' 
                            class='input' 
                            v-model='workHistory.title'
                        />
                        <ErrorMessage name='jobTitle' class='error' />
                    </div>
                    <div class="form-control">
                        <label for='employer'>Employer</label>
                        <Field 
                            type="string" 
                            name='employer' 
                            id='employer' 
                            placeholder='e.g. Google' 
                            class='input' 
                            v-model='workHistory.employer'
                        />
                        <ErrorMessage name='employer' class='error' />
                    </div>
                </section>
                <section class="location">
                    <div class="form-control">
                        <label for='city'>City</label>
                        <Field 
                            type="string" 
                            name='city' 
                            id='city' 
                            placeholder='e.g. Santa Clara' 
                            class='input' 
                            v-model='workHistory.city'
                        />
                        <ErrorMessage name='city' class='error' />
                    </div>
                    <div class="form-control">
                        <label for='country'>Country</label>
                        <Field 
                            type="string" 
                            name='country' 
                            id='country' 
                            placeholder='e.g. USA' 
                            class='input' 
                            v-model='workHistory.country'
                        />
                        <ErrorMessage name='country' class='error' />
                    </div>
                </section>
                <section class="date">
                    <div class="form-control">
                        <label for='start_date'>Start Date</label>
                        <Field 
                            type="date" 
                            name='startDate' 
                            id='start_date' 
                            placeholder='e.g. 12 January, 2022' 
                            class='input' 
                            v-model='workHistory.startDate'
                        />
                        <ErrorMessage name='startDate' class='error' />
                    </div>
                    <div class="form-control">
                        <label for='end_date'>End Date</label>
                        <Field 
                            type="date" 
                            name='endDate' 
                            id='employer' 
                            placeholder='e.g. 15 june, 2022' 
                            class='input' 
                            :disabled="workHistory.isCurrent"
                            v-model='workHistory.endDate'
    
                        />
                        <ErrorMessage name='endDate' class='error' v-if="!workHistory.isCurrent" />
    
                        <div class="checkbox">
                            <input type="checkbox" id="is_current" v-model="workHistory.isCurrent">
                            <label for="is_current">I currently work here</label>
                        </div>
                    </div>
                </section>
    
                <section>
                    <div class="form-control">
                        <label for="job_description">Enter the job description</label>
                        <div class="tips">
                           <span class="material-symbols-outlined icons">
                                tips_and_updates
                            </span>
                            <span>Highlight your achievements and responsibilities</span>
                        </div>
                        <div class="tips">
                             <span class="material-symbols-outlined icons">
                                tips_and_updates
                            </span>
                            <span>Don't abbreviate job titles</span>
                        </div>
                        <ckeditor 
                            id="job_description"
                            :editor="ClassicEditor" 
                            :config="editorConfig"
                            v-model="workHistory.description"
                        />
                    </div>
                </section>
            </Form>
        </section>

        <section v-else>
            <div 
                v-for="(job, index) in jobs"
                :key="index"
            >
                <div class="icons-conatiner">
                    <span class="material-symbols-outlined icon">
                        edit
                    </span>
                    <span class="material-symbols-outlined icon">
                        delete
                    </span>
                </div>

                <div class="">
                    <div>{{ job.title }}</div>
                    <div>{{ job.startDate}} - {{ job.endDate}}</div>
                </div>
                <div class="">
                    <div>{{ job.employer }}</div>s
                    <div>{{ job.city }}</div>
                    <div>{{ job.country }}</div>
                </div>
                <div v-html="job.description"></div>
            </div>
        </section>

        <ResumeStagesNavButtons>
            <AppButton 
                class="bg-primary" 
                outlined 
                @click="handleBackNavigation"
            >
                BACK
            </AppButton>
            <AppButton @click="handleNextNavigation">
                <span class="text-uppercase">Next</span>
            </AppButton>
        </ResumeStagesNavButtons>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, reactive, ref, Ref, watch, watchEffect, computed } from "vue";
    import { useRouter, useRoute } from "vue-router";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import * as yup from "yup"
    import { component as ckeditor } from '@ckeditor/ckeditor5-vue';
    import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
    import editorConfig from "../../editorConfig"
    import ResumeStagesNavButtons from "../ResumeStagesNavButtons.vue"
    import { useResumeStages } from '../../store/ResumeStages';
    import { Job } from "../../types"

    const resumeStagesStore = useResumeStages()
    const nextStage = computed(() => resumeStagesStore.nextStage)
    const prevStage = computed(() => resumeStagesStore.prevStage)

    const router = useRouter()
    const route = useRoute()
    let viewingJobList: Ref<boolean> = ref(false)

    const jobs: Ref<Job[]> = ref([])
    onMounted(() => {
        if (jobs.value.length > 0) {
            viewingJobList.value = true;
        }
    })
    const workHistory: Job = reactive({
        title: '',
        employer: '',
        city: '',
        country: '',
        startDate: null,
        endDate: null,
        isCurrent: false,
        description: '',
    })

    const schema = yup.object({
        title: yup.string().required().label('job title'),
        employer: yup.string().required(),
        city: yup.string(),
        country: yup.string(),
        startDate: yup.date().required('start date is required').typeError('start date is required').label('start date'),
        endDate: yup.date().required('end date is required').typeError('end date is required').label('end date')
    })

    const handleBackNavigation = () => {
        if (viewingJobList) {
            router.push(`/create-resume/${prevStage.value}/${route.params.resume_id}`)
        } 
    }
    const handleNextNavigation = () => {
        if (viewingJobList.value === false) {
            jobs.value.unshift(workHistory)
            viewingJobList.value = true
        } 
    }
</script>

<style lang="scss" scoped>
    @mixin breakPoint {
        @media (max-width: 600px) {
            display: block;
        }
    }

    h1 {
        font-weight: 400;
        font-size: 2.4rem;
        color: var(--color-primary)
    }

    .form {
        margin-top: 1.5rem;
        section:not(:first-of-type) {
            margin-top: 1.5rem;
        }

        .form-control {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;

            label {
                margin-block-end: .5rem;
            }

            .error {
                color: var(--color-danger);
                padding-block-start: .5rem;
                font-size: 1.3rem;
            }
        }

        .employer, .location, .date {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 2rem;
            @include breakPoint
        }

        .checkbox {
            display: flex;
            align-items: center;
            margin-block-start: 2rem;

            label {
                padding-inline-start: .5rem;
                    margin-block-end: 0;
                }
        }

    }

    .tips {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        margin-block-end: 1.2rem;
        font-style: italic;
        color: var(--color-dark-accent);

        &:first-of-type {
         margin-block-start: 1rem;
        }

        .icons {
            font-size: 1.5rem;
            margin-inline-end: .5rem;
        }
    }

    .icons-conatiner {
        text-align: right;
    }
</style>