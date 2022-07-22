<template>
    <header class="header">
        <nav class="nav">
            <h1 @click="$router.push('/')" class="cursor-pointer">Resume Builder</h1>
            <section class="nav__items">
                <ResumeStages v-if="$route.name === 'ResumeBuilder'" class="resume-builder" />
                <AppButton color="dark-accent" outlined class="app-btn">
                    <div>Sign In</div>
                </AppButton>
            </section>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import ResumeStages from '../components/ResumeStages.vue';
</script>

<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 7rem;
        background-color: #FFF;
        box-shadow: 0 2px 3px rgba(0, 0, 0, .1)
    }

    .nav {
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        padding-inline: 2rem;

        &__items {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-grow: 1;

            .resume-builder {
                @media (max-width: 1150px) {
                    margin: auto;
                }
            }
        }

        h1 {
            color: var(--color-primary);

            @media (max-width: 600px) {
                font-size: 1.6rem;
            }
        }

        .app-btn {
            margin-inline-start: 2rem;
        }
    }
</style>