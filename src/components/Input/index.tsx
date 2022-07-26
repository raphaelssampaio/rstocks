import React, { ForwardedRef } from 'react'
import { Input as InputBase, IInputProps } from 'native-base'
import { Controller, FieldError } from 'react-hook-form'
import { TextInput } from 'react-native'

interface InputProps extends IInputProps {
  label?: string
  error?: string
  hint?: string
  disabled?: boolean
}

interface ControlledInputProps extends Omit<InputProps, 'error'> {
  control: any
  name: string
  error?: FieldError
  inputRef?: ForwardedRef<TextInput>
}

export function Input({
  control,
  name,
  error,
  inputRef,
  ...rest
}: ControlledInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur } }) => {
        return <InputBase
          onChangeText={onChange}
          error={error && error.message}
          ref={inputRef}
          value={value}
          onBlur={onBlur}
          borderRadius={24}
          fontFamily='EudoxusSans-Regular'
          fontSize={16}
          fontWeight='400'
          height={16}
          marginBottom={6}
          {...rest}
          autoCapitalize='none'
        />
      }}
    />
  )
}