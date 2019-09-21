import React from "react"
import {TextInput, TextInputProps, StyleSheet, View, Text} from "react-native"
import {WrappedFieldProps} from "redux-form"

interface InputProps extends WrappedFieldProps {
	otherProps: TextInputProps
}

export default (props: InputProps) => {
	const {input, meta, ...otherProps} = props
	const {onChange} = input
	const {error} = meta
	return (
		<View>
			<TextInput testID={input.name} style={styles.input} onChangeText={onChange} {...otherProps} />
			<Text>{error}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		borderColor: 'black',
		borderWidth: 1,
		height: 37,
		width: 250
	}
})
