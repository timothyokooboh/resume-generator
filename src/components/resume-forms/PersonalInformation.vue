<template>
   <Form :validation-schema="schema" class='form'>
        <section class='name'>
            <div class="form-control">
                <label for='first_name'>First Name</label>
                <Field type="string" name='first_name' id='first_name' class='input' />
                <ErrorMessage name='first_name' class='error' />
            </div>
            <div class="form-control">
                <label for='surname'>Surname</label>
                <Field type="string" name='surname' id='surname' class='input' />
                <ErrorMessage name='surname' class='error' />
            </div>
        </section>
   </Form>
</template>

<script setup lang="ts">
    import { Form, Field, ErrorMessage } from "vee-validate"
    import * as yup from 'yup'

    const schema = yup.object({
        first_name: yup.string().required().label('first name'),
        surname: yup.string().required().label('surname')
    })

</script>

<style lang='scss' scoped>

    .form {
        max-width: 80rem;
        width: 90%;
        margin: 3rem auto;

         .name {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 2rem;

            @media (max-width: 600px) {
                display: block;
            }
        }
        .form-control {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;

            label {
                margin-bottom: .5rem;
            }

            .input {
                height: 35px;
                border: 1px solid var(--color-primary);
                outline: none;
            }

            .error {
                color: var(--color-dark-accent)
            }
        }

    }
</style>