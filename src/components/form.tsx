import React, {useEffect, useState} from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native'
import {WrappedFieldProps} from 'redux-form'
import {returnFilter} from '../util/main'

interface InputProps extends WrappedFieldProps {
  otherProps: TextInputProps
  // Refer https://github.com/redux-form/redux-form/issues/4509#issuecomment-529830947
  normalizeInput: (value: any) => any
}

const Input = ({
  normalizeInput = (value: any) => value,
  ...props
}: InputProps) => {
  const {input, meta, ...otherProps} = props
  const {error} = meta

  const [value, setValue] = React.useState(input.value)

  return (
    <View>
      <TextInput
        value={value}
        testID={input.name}
        style={styles.input}
        onChangeText={params => {
          const value = normalizeInput(params)
          input.onChange(value)
          setValue(value)
        }}
        {...otherProps}
      />
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

interface ItemProps {
  id: number
  text: string
}

interface ListSelectorProps extends WrappedFieldProps {
  items: ItemProps[]
}

const ListSelector = (props: ListSelectorProps) => {
  const {input, items} = props
  const {onChange, value} = input

  const [selected, setSelected] = useState({} as {[key: number]: string})

  useEffect(() => {
    setSelected(value)
    onChange(value)
  }, [])

  return (
    <View style={styles.listParent}>
      {items.map((item, index) => (
        <TouchableOpacity
          style={[
            styles.myButton,
            !!selected[item.id] && styles.buttonSelected,
          ]}
          key={index}
          onPress={() => {
            let filterMap = returnFilter(selected, item.id, item.text)

            setSelected(filterMap)
            onChange(filterMap)
          }}>
          <Text>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export {Input, ListSelector}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: '100%',
    borderRadius: 10,
    padding: 10,
  },
  listParent: {
    flexDirection: 'row',
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
    backgroundColor: '#CEE8CE',
  },
  error: {
    color: 'red',
  },
})
