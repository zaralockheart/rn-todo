import React from "react"
import {SafeAreaView, Text, TouchableOpacity} from "react-native"
import {ErrorOther, Field, InjectedFormProps, reduxForm} from "redux-form"
import _ from "lodash"
import {useNavigation, useNavigationParam} from "react-navigation-hooks"

import {Input, ListSelector} from '../components/form'
import {useDispatch} from "react-redux"
import {addTodo, editTodo} from "../redux"
import {isNotEmpty} from "../util/main"

export const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

interface TodoFormProps {
	title: string
	subtitle: string
	days: { [key: number]: string }
}

const AddTodo = (props: InjectedFormProps<TodoFormProps>) => {

	const {goBack} = useNavigation()

	const dispatch = useDispatch();

	const id = useNavigationParam('id')

	const save = (obj: TodoFormProps) => {

		if (id) {
			dispatch(editTodo({
				id,
				days: obj.days,
				title: obj.title,
				subtitle: obj.subtitle
			}))
		} else {
			dispatch(addTodo({
				days: obj.days,
				title: obj.title,
				subtitle: obj.subtitle
			}))
		}

		goBack()
	}

	return (
		<SafeAreaView>
			<Field
				name="title"
				component={Input}
				placeholder={'What is is about?'}
			/>
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

const AddTodoForm = reduxForm<TodoFormProps>({
	form: 'TODO_FORM',
	enableReinitialize: true,
	validate(values: TodoFormProps): { [P in keyof TodoFormProps]?: React.ReactElement | string } & ErrorOther<string> {
		const errors: Partial<{ [x in keyof TodoFormProps]: string }> = {
			title: undefined,
			days: undefined
		};

		errors.title = isNotEmpty(values.title, 'Title is required')
		errors.days = _.isEmpty(values.days) ? 'Required at least on day' : undefined

		return errors;
	}
})(AddTodo)

export default () => {
	const subtitle = useNavigationParam('subtitle')
	const title = useNavigationParam('title')
	const days = useNavigationParam('days')

	return (
		<AddTodoForm
			initialValues={{
				title,
				subtitle,
				days
			}}/>
	)
}

