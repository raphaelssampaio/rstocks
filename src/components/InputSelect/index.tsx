import FlagBr from '@assets/flagBr'
import FlagUsa from '@assets/flagUsa'
import { Input } from '@components/Input'
import { IInputProps, Select } from 'native-base'
import React, { ForwardedRef } from 'react'
import { FieldError } from 'react-hook-form'
import { TextInput, View } from 'react-native'
import styles from './styles'

interface InputSelectProps extends IInputProps {
  label?: string
  error?: string
  hint?: string
  disabled?: boolean
}

interface ControlledInputSelectProps extends Omit<InputSelectProps, 'error'> {
  control: any
  name: string
  error?: FieldError
  inputRef?: ForwardedRef<TextInput>
}

export default function InputSelect({ control,
  name,
  error,
  inputRef,
  ...rest }: ControlledInputSelectProps) {
  return (
    <View style={styles.inputContainer}>
      <Select borderColor='transparent' width={20}>
        <Select.Item
          leftIcon={<FlagBr width={24} height={24} />}
          label='BR'
          value='br'
        />
        <Select.Item
          leftIcon={<FlagUsa width={24} height={24} />}
          label='USA'
          value='usa'
        />
      </Select>
      <Input
        control={control}
        name={name}
        inputRef={inputRef}
        error={error}
        flex={1}
        borderColor='transparent'
        alignSelf='flex-end'
        marginBottom={0}
        variant='unstyled'
        keyboardType='phone-pad'
        {...rest}
      />
    </View>
  )
}