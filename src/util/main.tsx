export const isNotEmpty = (
  input: String,
  message: string = 'Required'
): string | undefined => (!input ? message : undefined)

export const returnFilter = (
  oldMap: {[key: number]: string},
  selectedIdentifier: number,
  selectedValue: string
): {[key: number]: string} => {
  let filterMap = {
    ...oldMap
  }

  if (!!filterMap[selectedIdentifier]) {
    delete filterMap[selectedIdentifier]
  } else {
    filterMap[selectedIdentifier] = selectedValue
  }

  return filterMap
}
