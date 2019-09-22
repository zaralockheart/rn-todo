import React from "react"
import {SafeAreaView, StyleSheet, TouchableOpacity, View, Text} from "react-native"
import {useNavigation} from "react-navigation-hooks"

export default () => {

	const {navigate} = useNavigation();

	return (
		<React.Fragment>
			<SafeAreaView>
				<View style={style.appbar}>
					<Text>Home</Text>
					<TouchableOpacity style={style.addButton} onPress={() => navigate('AddTodo')}>
						<View/>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</React.Fragment>
	)
}

const style = StyleSheet.create({
	appbar: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	addButton: {
		height: 20,
		width: 20,
		backgroundColor: 'red'
	}
})
