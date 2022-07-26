import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styles from './styles'

interface ButtonProps {
  title: string
  onPress: () => void
  style?: TouchableOpacityProps['style']
}

export default function RedButton(props: ButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]} >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}