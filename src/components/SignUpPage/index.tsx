import axios from 'axios';
import Wave from 'components/Wave';
import { Formik } from 'formik';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import * as Yup from 'yup';
import {
    ArrowLeft,
    Button,
    Container,
    Content,
    Form,
    Input,
    Label,
    SuccessMessage,
    Title
} from './styles';

const SignUpPage: React.FC = () => {
    const [success, setSuccess] = useState(false);

    const initialValues: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    } = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    let validate = Yup.object().shape({
        name: Yup.string()
            .required('required field')
            .max(20, 'most 20 caracters'),
        email: Yup.string().required('required field').email('invalid email'),
        password: Yup.string()
            .required('required field')
            .min(4, 'minimum 4 caracters'),
        confirmPassword: Yup.string()
            .required('required field')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const onSubmit = async (values: any, { resetForm, setSubmitting }) => {
        await axios
            .post('http://localhost:3000/users', values)
            .then(function (response) {
                resetForm();

                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 3000);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <Container>
            <Content>
                <Title>
                    <Link href="/" passHref>
                        <ArrowLeft />
                    </Link>
                    <span>Sign up</span>
                </Title>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validate}
                >
                    {({
                        handleSubmit,
                        handleBlur,
                        handleChange,
                        values,
                        touched,
                        errors,
                        isSubmitting
                    }) => (
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                        >
                            <Label>Name</Label>
                            <Input
                                placeholder="your name"
                                name="name"
                                onChange={handleChange('name')}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && (
                                <span>{errors.name}</span>
                            )}
                            <Label>Email</Label>
                            <Input
                                placeholder="your best email"
                                onChange={handleChange('email')}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && (
                                <span>{errors.email}</span>
                            )}
                            <Label>Password</Label>
                            <Input
                                placeholder="your password"
                                onChange={handleChange('password')}
                                onBlur={handleBlur}
                                value={values.password}
                                type="password"
                            />
                            {errors.password && touched.password && (
                                <span>{errors.password}</span>
                            )}
                            <Label>Re-type Password</Label>
                            <Input
                                placeholder="your password"
                                onChange={handleChange('confirmPassword')}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                type="password"
                            />
                            {errors.confirmPassword &&
                                touched.confirmPassword && (
                                    <span>{errors.confirmPassword}</span>
                                )}
                            <Button type="submit">
                                {isSubmitting ? (
                                    <p>Submitting...</p>
                                ) : (
                                    <p>Submit</p>
                                )}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Content>
            <AnimatePresence exitBeforeEnter>
                {success && (
                    <SuccessMessage
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        exit={{ y: 100, opacity: 0 }}
                    />
                )}
            </AnimatePresence>
            <Wave />
        </Container>
    );
};

export default SignUpPage;
