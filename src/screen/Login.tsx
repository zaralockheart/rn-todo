import React from 'react'
import {ErrorOther, Field, InjectedFormProps, reduxForm} from 'redux-form'
import {SafeAreaView, Text, TouchableOpacity} from "react-native"
import TextInput from '../components/form'
import {isNotEmpty} from "../util/string_util"
import {useNavigation} from "react-navigation-hooks"

// import {useNavigation} from 'react-navigation-hooks'

interface LoginProps {
	email: string
	password: string
}

const LoginForm = (props: InjectedFormProps<LoginProps>) => {
	const {handleSubmit} = props

	const {navigate} = useNavigation();

	const validateLogin = ({email, password}: LoginProps) => {
		navigate('Home');
	}

	return (
		<SafeAreaView>
			<Text>Email:</Text>
			<Field name="email" component={TextInput}/>
			<Field name="password" component={TextInput}/>
			<TouchableOpacity onPress={handleSubmit(validateLogin)}>
				<Text>Submit</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default reduxForm<LoginProps>({
	form: 'LOGIN_FORM',
	validate(values: LoginProps, props: {} & InjectedFormProps<LoginProps, {}, string>): { [P in keyof LoginProps]?: React.ReactElement | string } & ErrorOther<string> {
		const errors: Partial<LoginProps> = {
			email: undefined,
			password: undefined,
		};
		errors.email = isNotEmpty(values.email)

		errors.password = isNotEmpty(values.password)

		return errors;
	}
})(LoginForm)
