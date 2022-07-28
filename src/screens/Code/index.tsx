import React, { useEffect } from 'react'
import { Keyboard, StatusBar, View } from 'react-native'
import SafeKeyboardScrollContainer from '@components/SafeKeyBoardScrollContainer'
import Title from '@components/Title'
import AppButton from '@components/Button'
import styles from './styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaCode } from './codeValidation'
import RedButton from '@components/RedButton'
import { InputCode } from '@components/InputCode'

interface ICodeForm {
  code: string
}

export default function Code() {
  const [keyboardIsOpen, setKeyboardIsOpen] = React.useState(false)
  const {
    control,
    formState: { errors },
  } = useForm<ICodeForm>({
    resolver: yupResolver(schemaCode),
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
          <View style={styles.content}>
            <Title
              title={`Enter authentication code`}
              text={`Enter 4-digit code we just texted to your phone number, `}
              phone={`+84 999 999 999`}
            />
            <InputCode
              control={control}
              name='code'
              error={errors.code}
            />
          </View>
          {!keyboardIsOpen && (
            <>
              <AppButton
                title='Continue'
                onPress={() => { }}
                style={styles.button}
              />
              <RedButton
                title='Resend code'
                onPress={() => { }}
              />
            </>
          )}
        </View>
      </View>
    </SafeKeyboardScrollContainer>
  )
}
