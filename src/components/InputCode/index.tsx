import React, { ForwardedRef } from 'react'
import { Controller, FieldError } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'
import {
  CodeFieldProps,
  CodeField,
  Cursor
} from 'react-native-confirmation-code-field'
import styles from './styles'

interface InputCodeProps extends CodeFieldProps {
  label?: string
  error?: string
  hint?: string
  disabled?: boolean
}

interface ControlledInputProps extends Omit<InputCodeProps, 'renderCell' | 'error'> {
  control: any
  name: string
  error?: FieldError
  inputRef?: ForwardedRef<TextInput>
}

export function InputCode({
  control,
  name,
  inputRef,
  ...props
}: ControlledInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur } }) => {
        return (
          <CodeField
            ref={inputRef}
            {...props}
            value={value}
            onChangeText={onChange}
            cellCount={4}
            onBlur={onBlur}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View key={index} style={[styles.container, !!symbol && styles.blueContainer]}>
                <Text
                  style={styles.text}>
                  {symbol || (isFocused && <Cursor />)}
                </Text>
              </View>
            )}
          />
        )
      }}
    />
  )
}

