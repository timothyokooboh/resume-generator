<template>
    <div>
        <div class="landing-page">
            <div class="landing-page__content">
                <h1>Create a Professional Resume in Minutes</h1>
                <div class="benefits">
                    <div class="list-item">
                        <span class="material-icons">navigate_next</span>
                        <span>Free to use resume / CV builder</span>
                    </div>
                    <div class="list-item">
                        <span class="material-icons">navigate_next</span>
                        <span>Pick a template</span>
                    </div>
                    <div class="list-item">
                        <span class="material-icons">navigate_next</span>
                        <span>Download finished resume in pdf</span>
                    </div>
                </div>

                <AppButton class="btn" size="lg" color="dark-accent">
                    Get Started
                </AppButton>
            </div>

            <div>
                <img src="../assets/resume-picture.jpg" alt="" class="landing-page__image">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppButton from '../components/AppButton.vue';

</script>

<style lang="scss" scoped>
    .landing-page {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        padding-inline-start: 2rem;
        padding-inline-end: 2rem;
        padding-block-end: 5rem;

        @media (max-width: 670px) {
            display: grid;
            row-gap: 3rem;
        }

        &__content {
            margin-inline-end: 3rem;

            @media (max-width: 670px) {
                 margin-inline-end: 0px;
            }
        }

        &__image {
            object-fit: contain;
            width: 300px;
            height: 350px;
            margin-inline-start: -3.3rem;
            margin-block-end: 4rem;
        }
    }

    .benefits {
        margin-left: -7px;
    }

    .list-item {
        display: flex;
        align-items: center;
        margin-block-start: 10px;
    }

    .btn {
        margin-block-start: 4rem;
    }
</style>