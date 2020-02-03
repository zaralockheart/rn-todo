import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {TodoObject} from '../redux'
import {days} from './AddTodo'

interface TodoCardProps {
  onPressRemove: (id: string) => void
  onPressEdit: (id: string) => void
}

export const TodoCard = (args: TodoObject & TodoCardProps) => {
  return (
    <TouchableOpacity
      style={styles.parent}
      onPress={() => args.onPressEdit(args.id)}>
      <View style={styles.row}>
        <View>
          <Text>Title</Text>
          <Text>{args.title}</Text>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => args.onPressRemove(args.id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, {backgroundColor: 'white'}]}>
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
    margin: 10,
    backgroundColor: 'yellow',
    elevation: 10,
    borderRadius: 10,
  },
  row: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  removeButton: {
    height: 20,
  },
  buttonSelected: {
    backgroundColor: 'blue',
  },
  round: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
