import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

interface ButtonProps {
  title: string
  onPress: () => void
  disabled?: boolean
  style?: object
}

export default function AppButton(props: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.disabled && styles.buttonDisabled, props.style]}
      disabled={props.disabled}
    >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}