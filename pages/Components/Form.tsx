import React from 'react';
import { Formik } from 'formik';
import { Flex, VStack, Text, Input, Button, InputRightElement, InputGroup } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Form() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <Flex >
            <Formik
                
                initialValues={{  name: '', email: '', password: '' }}
                onSubmit={(values) => { console.log(values); }}
                validate={values => {
                    const errors = {email: '', password: '', name : ''};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (values.password.length < 7) {
                        errors.password = "Password must be minimum 8 characters"
                    }
                    return errors;
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>

                        <VStack spacing={4} >
                            <Input
                                w={'80vw'}
                                type="name"
                                name="name"
                                placeholder='Name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                variant='flushed'
                                color={'black'}
                                focusBorderColor='black'
                            />
                            <Text color={'red'}>{errors.name && touched.name && errors.name}</Text>
                            <Input
                                w={'80vw'}

                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                variant='flushed'
                                color={'black'}
                                focusBorderColor='black'
                            />
                            <Text color={'red'}>{errors.email && touched.email && errors.email}</Text>
                            <InputGroup size='md'>
                                <Input
                                    w={'80vw'}
                                    type={show ? 'text' : 'password'}
                                    name="password"
                                    placeholder='Password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    variant='flushed'
                                    color={'black'}
                                    focusBorderColor='black'
                                />
                                <InputRightElement width='2rem'>
                                    <Button variant='ghost' onClick={handleClick}>
                                        {show ? <ViewIcon color={'white'}></ViewIcon> : <ViewOffIcon color={'white'}></ViewOffIcon>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Text color={'red'}>{errors.password && touched.password && errors.password}</Text>
                        </VStack>
                    </form>
                )}
            </Formik>
        </Flex >
    )
}