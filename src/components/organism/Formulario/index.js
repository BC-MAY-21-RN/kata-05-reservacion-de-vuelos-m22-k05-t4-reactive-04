import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import FormStyles from './FormStyles';
import Input from '../../atoms/Input';
import CustomButton from '../../atoms/CustomButton';
import Checkbox from '../../atoms/checkbox';

/*const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});*/

const Formulario = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        check1: false,
        check2: false,
      }}
      //validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValidating,
      }) => (
        <ScrollView style={FormStyles.container}>
          <Input
            title="First Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {errors.name && touched.name ? <Text>{errors.name}</Text> : null}
          <Input
            title="Email *"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
          <Input
            title="Password *"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secure
          />
          <Text style={FormStyles.conditions}>
            Use 8 or more characters with a mix of letters, numers and symbols
          </Text>
          <Checkbox textCheckBox="I agree to the Terms and Privacy Policy *" />
          <Checkbox textCheckBox="Suscribe for select product updates." />
          {errors.password && touched.password ? (
            <Text>{errors.password}</Text>
          ) : null}
          <CustomButton
            valid={isValidating}
            onPress={handleChange}
            title="Sing Up"
          />
          <Text style={FormStyles.or}>or</Text>
          <CustomButton
            valid={isValidating}
            onPress={handleChange}
            title="Sing Up with Google"
            google
          />
          <View style={FormStyles.row}>
            <Text>Already have an account? </Text>
            <Pressable>
              <Text style={FormStyles.link}>Log In</Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

export default Formulario;
