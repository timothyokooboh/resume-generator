<template>
    <section>
        <h1>Briefly write a professional summary</h1>
        <ckeditor 
            :editor="ClassicEditor" 
            :config="editorConfig"
            v-model="professional_summary"
        />
        
    </section>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup'
import { ref } from 'vue'
import { component as ckeditor } from '@ckeditor/ckeditor5-vue';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

const editorConfig = {
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo' ],
        height: '500px'
    }

const professional_summary = ref('')

const schema = yup.object({
    professional_summary: yup.string().label('professional summary')
})
</script>

<style lang="scss" scoped>
    h1 {
        color: var(--color-primary);
    }
</style>

<style lang="scss">
    .ck-editor__editable {
        min-height: 150px;
    }
</style>