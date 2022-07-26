import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import SafeKeyboardScrollContainer from '@components/SafeKeyBoardScrollContainer'
import SmallIcon from '@assets/smallIcon'
import Title from '@components/Title'
import AppButton from '@components/Button'
import SignInComponent from '@components/SignInComponent'
import styles from './styles'
import NavigationService from '@router/NavigationService'
import { LoginRouteNames } from '@router/routeNames'

export default function SignUp() {
  return (
    <SafeKeyboardScrollContainer>
      <View style={styles.content}>
        <StatusBar
          animated
          barStyle='dark-content'
          showHideTransition='none'
        />
        <View style={styles.screensContainer}>
          <View style={styles.insideView}>
            <SmallIcon />
            <Text style={styles.iconTitle}>RStock</Text>
          </View>
          <View style={styles.content}>
            <Title
              title='Getting Started'
              text='Create an account to continue!'
            />
            <AppButton
              title='Start'
              onPress={() => { }}
              disabled
            />
          </View>
          <SignInComponent onPress={() => NavigationService.navigate(LoginRouteNames.LOGIN_SCREEN)} />
        </View>
      </View>
    </SafeKeyboardScrollContainer>
  )
}
