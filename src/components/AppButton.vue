<template>
    <button :class="[size, color, outlined && 'outlined']">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    const test = ref('red')
    defineProps({
        size: {
            type: String,
            default: 'md',
            validator: (size: string) => ['sm', 'md', 'lg'].includes(size)
        },
        color: {
            type: String,
            default: 'primary',
            validator: (color: string) => {
                return ['primary', 'secondary', 'tertiary', 'accent', 'dark-accent'].includes(color)
            }
        },
        outlined: {
            type: Boolean,
            required: false
        }
    })
</script>

<style lang="scss" scoped> 
    @mixin transition {
        transition: all .3s;
    }

    button {
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 3px;
    }

    .sm {
        padding: 5px 8px;
    }
    .md {
        padding: 10px 15px;
    }
    .lg {
        padding: 15px 25px;
    }

    .primary {
        background-color: var(--color-primary);
        color: #FFF;
        @include transition;

        &:hover {
            background-color: var(--color-secondary);
        }
    }

    .accent {
        background-color: var(--color-accent);
        color: #FFF;
        @include transition;

        &:hover {
            background-color: var(--color-dark-accent);
        }
    }
    .dark-accent {
        background-color: var(--color-dark-accent);
        color: #FFF;
        @include transition;

        &:hover {
            background-color: var(--color-accent);  
        }
    }

    .outlined {
        background-color: transparent;
        color: currentColor;
        border: 1px solid currentColor;
    }

</style>