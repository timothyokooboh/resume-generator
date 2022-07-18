<template>
    <header class="header">
        <nav class="nav">
            <h1>Resume Generator</h1>
            <section>
                <AppButton color="dark-accent" outlined>
                    Sign In
                </AppButton>
            </section>
        </nav>
    </header>
</template>

<script setup lang="ts">

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
    }
</style>