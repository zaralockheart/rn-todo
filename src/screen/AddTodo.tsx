import React from "react"
import {SafeAreaView, Text, TouchableOpacity} from "react-native"
import {ErrorOther, Field, InjectedFormProps, reduxForm} from "redux-form"

import {Input, ListSelector} from '../components/form'
import {useNavigation} from "../config/navigation"
import _ from "lodash"

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

interface TodoFormProps {
	title: string
	days: Map<number, String>
}

const AddTodo = (props: InjectedFormProps<TodoFormProps>) => {

	const {goBack} = useNavigation();

	const save = (obj: any) => {
		console.log('obj', obj)

		goBack()
	}

	return (
		<SafeAreaView>
			<Field
				name="title"
				component={Input}
				placeholder={'What is is about?'}/>
			<Field
				name="subtitle"
				component={Input}
				placeholder={'Any more details?'}/>
			<Field
				name="days"
				component={ListSelector}
				items={days.map((day, index) => ({
					id: index,
					text: day,
				}))}/>
			<TouchableOpacity
				disabled={props.invalid}
				onPress={props.handleSubmit(save)}>
				<Text>Save</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default reduxForm<TodoFormProps>({
	form: 'TODO_FORM',
	validate(values: TodoFormProps, props: {} & InjectedFormProps<TodoFormProps, {}, string>): { [P in keyof TodoFormProps]?: React.ReactElement | string } & ErrorOther<string> {
		const errors: Partial<{ [x in keyof TodoFormProps]: string }> = {
			title: undefined,
			days: undefined
		};

		errors.days = _.isEmpty(values.days) ? 'Required at least on day' : undefined

		return errors;
	}
})(AddTodo)
