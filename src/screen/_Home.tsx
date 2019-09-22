import React from "react"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"

import {TodoObject} from "../redux"
import {days} from "./AddTodo"

interface TodoCardProps {
	onPressRemove: (id: string) => void
	onPressEdit: (id: string) => void
}

export const TodoCard = (args: TodoObject & TodoCardProps) => {
	return (
		<TouchableOpacity style={styles.parent} onPress={() => args.onPressEdit(args.id)}>
			<View style={styles.row}>
				<Text>{args.title}</Text>
				<TouchableOpacity
					style={styles.removeButton}
					onPress={() => args.onPressRemove(args.id)}/>
			</View>
			<View style={[styles.row]}>
				{days.map((day, index) => (
					<View
						key={index}
						style={[styles.round, !!args.days[index] && styles.buttonSelected]}>
						<Text>{day}</Text>
					</View>
				))}
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	parent: {
		padding: 10
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	removeButton: {
		height: 20,
		width: 20,
		backgroundColor: 'red'
	},
	buttonSelected: {
		backgroundColor: 'blue',
	},
	round: {
		padding: 5,
		height: 50,
		width: 50,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
