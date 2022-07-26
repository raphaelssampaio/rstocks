import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import SafeKeyboardScrollContainer from '@components/SafeKeyBoardScrollContainer'
import SmallIcon from '@assets/smallIcon'
import Title from '@components/Title'
import AppButton from '@components/Button'
import SignUpComponent from '@components/SignUpComponent'
import { OnboardRouteNames } from '@router/routeNames'
import NavigationService from '@router/NavigationService'
import styles from './styles'
import { Input } from '@components/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaLogin } from './loginValidation'
import { Icon } from 'native-base'
import VisibleOn from '@assets/visibleOn'
import VisibleOff from '@assets/visibleOff'

interface ILoginForm {
  email: string
  password: string
}

export default function Login() {
  const [show, setShow] = React.useState(false)
  const {
    control,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schemaLogin),
    mode: 'onChange',
  })

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
            <Text style={styles.iconTitle}>RStocks</Text>
          </View>
          <View style={styles.content}>
            <Title
              title={`Let’s Sign You In`}
              text={`Welcome back, you’ve been missed!`}
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
          <AppButton
            title='Login'
            onPress={() => { }}
          />
          <SignUpComponent
            onPress={() => NavigationService.navigate(OnboardRouteNames.SIGN_UP)}
          />
        </View>
      </View>
    </SafeKeyboardScrollContainer>
  )
}
