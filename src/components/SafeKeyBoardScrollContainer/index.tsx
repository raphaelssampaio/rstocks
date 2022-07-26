import React from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, View } from 'react-native'
import styles from './styles'

interface IProps {
  children: React.ReactNode
}
export default function SafeKeyboardScrollContainer({ children }: IProps) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardAvoidingView}
        enabled>
        <ScrollView
          contentContainerStyle={styles.scrollview}
          alwaysBounceVertical={false}
          keyboardShouldPersistTaps='always'>
          <View style={styles.screensContainer}>
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
