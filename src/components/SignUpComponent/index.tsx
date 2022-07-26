import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

interface SignUpProps {
  onPress: () => void
}

export default function SignUpComponent(props: SignUpProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Don't have an account? `}</Text>
      <TouchableOpacity onPress={props.onPress}><Text style={styles.buttonText}>Sign up</Text></TouchableOpacity>
    </View>
  )
}