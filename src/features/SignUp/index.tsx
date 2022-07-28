import React, { useEffect } from 'react'
import { Keyboard, StatusBar, Text, View } from 'react-native'
import SafeKeyboardScrollContainer from '@components/SafeKeyBoardScrollContainer'
import SmallIcon from '@assets/smallIcon'
import Title from '@components/Title'
import AppButton from '@components/Button'
import SignInComponent from '@components/SignInComponent'
import styles from './styles'
import NavigationService from '@router/NavigationService'
import { LoginRouteNames } from '@router/routeNames'
import { Input } from '@components/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaSignup } from './signupValidation'
import { Icon } from 'native-base'
import VisibleOn from '@assets/visibleOn'
import VisibleOff from '@assets/visibleOff'

interface ISignupForm {
  email: string
  fullname: string
  password: string
}

export default function SignUp() {
  const [show, setShow] = React.useState(false)
  const [keyboardIsOpen, setKeyboardIsOpen] = React.useState(false)
  const {
    control,
    formState: { errors },
  } = useForm<ISignupForm>({
    resolver: yupResolver(schemaSignup),
    mode: 'onSubmit',
  })

  useEffect(() => {
    const keyboardDidShow = () => setKeyboardIsOpen(true)
    const keyboardDidHide = () => setKeyboardIsOpen(false)
    const showSubscription = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    const hideSubscription = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

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
            <Input
              control={control}
              name='fullname'
              placeholder='Full name'
              error={errors.fullname}
            />
            <Input
              control={control}
              name='email'
              placeholder='Email address'
              error={errors.email}
            />
            <Input
              control={control}
              name='password'
              placeholder='Password'
              secureTextEntry={!show}
              InputRightElement={
                <Icon as={show ? <VisibleOn /> : <VisibleOff />}
                  style={styles.iconMargin}
                  onPress={() => setShow((oldState: boolean) => !oldState)}
                />}
              error={errors.password}
            />
          </View>
          {!keyboardIsOpen && (
            <>
              <AppButton
                title='Start'
                onPress={() => { }}
                disabled
              />
              <SignInComponent onPress={() => NavigationService.navigate(LoginRouteNames.LOGIN_SCREEN)} />
            </>
          )}
        </View>
      </View>
    </SafeKeyboardScrollContainer>
  )
}
