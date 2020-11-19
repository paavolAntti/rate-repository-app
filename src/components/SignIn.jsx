import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
	buttonContainer: {
        borderRadius: 5,
        margin: 10
    }
});
const initialValues = {
    username: '',
    password: '',
};
const SignInForm = ({onSubmit}) => {
    return (
        <View>
           <FormikTextInput name="username" placeholder="Username"/>
           <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
           <View style={styles.buttonContainer}>
                <Button
                    title="Sign in"
                    onPress={onSubmit}
                />
           </View>
       </View>
   );
}
const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;