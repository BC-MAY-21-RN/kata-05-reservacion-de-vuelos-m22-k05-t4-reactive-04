import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {Formik} from 'formik';
import FormStyles from './FormStyles';
import Input from '../../atoms/Input';
import CustomButton from '../../atoms/CustomButton';
import Checkbox from '../../atoms/checkbox';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .required('Required')
    .matches(
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Lowercase, One Number and One Special Case Character',
    ),
  check1: Yup.boolean().oneOf([true]).required('Required'),
});

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
      validationSchema={SignupSchema}
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
        isValid,
        dirty,
        setFieldValue,
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
          <Checkbox
            name="check1"
            textCheckBox="I agree to the Terms and Privacy Policy *"
            value={values?.check1}
            handleChange={nextValue => setFieldValue('check1', nextValue)}
          />
          <Checkbox
            name="check2"
            textCheckBox="Suscribe for select product updates."
            value={values?.check2}
            handleChange={nextValue => setFieldValue('check2', nextValue)}
          />
          {errors.password && touched.password ? (
            <Text>{errors.password}</Text>
          ) : null}
          <CustomButton
            disabel={isValid && dirty}
            title="Sing Up"
            onPress={() => console.log('hola')}
          />
          <Text style={FormStyles.or}>or</Text>
          <CustomButton
            disabel={isValid && dirty}
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
