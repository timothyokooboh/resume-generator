<template>
    <header class="header">
        <nav class="nav">
            <h1>Resume Generator</h1>
            <section class="nav__items">
                <ResumeStages v-if="$route.name === 'ResumeBuilder'" />
                <AppButton color="dark-accent" outlined class="app-btn">
                    Sign In
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
        padding-block: 1rem;
        background-color: #FFF;
        box-shadow: 0 2px 3px rgba(0, 0, 0, .1)
    }

    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 2rem;

        &__items {
            display: flex;
            align-items: center;
        }

        .app-btn {
            margin-inline-start: 2rem;
        }
    }
</style>