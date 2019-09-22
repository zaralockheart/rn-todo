import React, {useEffect, useState} from "react"
import {StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View} from "react-native"
import {WrappedFieldProps} from "redux-form"

interface InputProps extends WrappedFieldProps {
	otherProps: TextInputProps
}

const Input = (props: InputProps) => {
	const {input, meta, ...otherProps} = props
	const {onChange, value} = input
	const {error} = meta
	return (
		<View>
			<TextInput
				value={value}
				testID={input.name}
				style={styles.input}
				onChangeText={onChange}
				{...otherProps} />
			<Text>{error}</Text>
		</View>
	)
}

interface ItemProps {
	id: number,
	text: string
}

interface ListSelectorProps extends WrappedFieldProps {
	items: ItemProps[]
}

const ListSelector = (props: ListSelectorProps) => {
	const {input, items} = props
	const {onChange, value} = input

	const [selected, setSelected] = useState({} as { [key: number]: string });

	useEffect(() => {

		setSelected(value)
		onChange(value)
	}, [])

	return (
		<View style={styles.listParent}>
			{items.map((item, index) => (
				<TouchableOpacity
					style={[styles.myButton, !!selected[item.id] && styles.buttonSelected]}
					key={index}
					onPress={() => {
						let filterMap = {
							...selected
						}

						if (!!filterMap[item.id]) {
							delete filterMap[item.id]
						} else {
							filterMap[item.id] = item.text
						}

						setSelected(filterMap)
						onChange(filterMap)
					}}>
					<Text>{item.text}</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}

export {
	Input,
	ListSelector
}

const styles = StyleSheet.create({
	input: {
		borderColor: 'black',
		borderWidth: 1,
		height: 37,
		width: 250
	},
	listParent: {
		flexDirection: 'row'
	},
	myButton: {
		padding: 5,
		height: 50,
		width: 50,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	buttonSelected: {
		backgroundColor: 'blue',
	}
})
