export type FieldValidatoreType = (value: string) => string | undefined

export const required: FieldValidatoreType = (value)=> {
  if (value) return undefined

  return 'Field is requered '
}

export const maxLengthCreator = (maxLength: number): FieldValidatoreType => (value) => {
  if (value?.length > maxLength) return `Max length is ${maxLength} symbols`

  return undefined
}