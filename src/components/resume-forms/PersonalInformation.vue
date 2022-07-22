<template>
    <section class='personal-info'>
        <h1>Tell us your name and contact details</h1>
        <Form :validation-schema="schema" class='form'>
            <section class='name'>
                <div class="form-control">
                    <label for='first_name'>First Name</label>
                    <Field 
                        type="string" 
                        name='first_name' 
                        id='first_name' 
                        placeholder='e.g. John' 
                        class='input' 
                        v-model='state.first_name'
                    />
                    <ErrorMessage name='first_name' class='error' />
                </div>
                <div class="form-control">
                    <label for='surname'>Surname</label>
                    <Field 
                        type="string" 
                        name='surname' 
                        id='surname' 
                        placeholder='e.g. Doe' 
                        class='input' 
                        v-model='state.surname'
                    />
                    <ErrorMessage name='surname' class='error' />
                </div>
            </section>

            <section class='address'>
                <div class='form-control'>
                    <label for='city'>City</label>
                    <Field 
                        name='city' 
                        type='string' 
                        placeholder='e.g. Ikoyi' 
                        id='city' 
                        class='input' 
                        v-model='state.city'
                    />
                    <ErrorMessage name='city' class='error' />
                </div>
                <div class='form-control'>
                    <label for='country'>Country</label>
                    <Field 
                        name='country' 
                        type='string' 
                        placeholder='e.g. Nigeria' 
                        id='country' 
                        class='input' 
                        v-model='state.country'
                    />
                    <ErrorMessage name='country' class='error' />
                </div>
                <div class='form-control'>
                    <label for='postal_code'>Postal Code</label>
                    <Field 
                        name='postal_code' 
                        type='string' 
                        placeholder='e.g. 100288' 
                        id='postal_code' 
                        class='input' 
                        v-model='state.postal_code'
                    />
                    <ErrorMessage name='postal_code' class='error' />
                </div>
            </section>

            <section class='contact'>
                <div class='form-control'>
                    <label for='phone_number'>Phone Number</label>
                    <Field 
                        name='phone_number' 
                        type='tel' 
                        placeholder='e.g 08176581345' 
                        id='phone_number' 
                        class='input' 
                        v-model='state.phone_number'
                    />
                    <ErrorMessage name='phone_number' class='error' />
                </div>
                <div class='form-control'>
                    <label for='email'>Email</label>
                    <Field 
                        name='email' 
                        type='email' 
                        placeholder='e.g.johndoe@gmail.com' 
                        id='email' 
                        class='input' 
                        v-model='state.email'
                    />
                    <ErrorMessage name='email' class='error' />
                </div>
            </section>
        </Form>
    </section>
</template>

<script setup lang="ts">
    import { Form, Field, ErrorMessage } from "vee-validate"
    import * as yup from 'yup'
    import { reactive } from "vue";

    const state = reactive({
        first_name: '',
        surname: '',
        city: '',
        country: '',
        postal_code: '',
        phone_number: '',
        email: ''
    })

    const schema = yup.object({
        first_name: yup.string().required().label('first name'),
        surname: yup.string().required().label('surname'),
        city: yup.string(),
        country: yup.string(),
        postal_code: yup.string().label('postal code'),
        phone_number: yup.string().label('phone number'),
        email: yup.string().email()
    })

</script>

<style lang='scss' scoped>
    @mixin breakPoint {
        @media (max-width: 600px) {
            display: block;
        }
    }

    .personal-info {
        h1 {
            color: var(--color-primary);
        }
    }

    .form {
        section:not(:first-of-type) {
            margin-top: 1.5rem;
        }

        .name {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 2rem;
            @include breakPoint
        }
         .address{
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            column-gap: 1rem;
            @include breakPoint
        }

        .contact {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 2rem;
            @include breakPoint
        }
        .form-control {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;

            label {
                margin-bottom: .5rem;
            }

            .error {
                color: var(--color-dark-accent);
                padding-block-start: .5rem;
            }
        }

    }
</style>