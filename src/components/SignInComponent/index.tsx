import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

interface SignInProps {
  onPress: () => void
}

export default function SignInComponent(props: SignInProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Already have an account ? `}</Text>
      <TouchableOpacity onPress={props.onPress}><Text style={styles.buttonText}>Sign in</Text></TouchableOpacity>
    </View>
  )
}