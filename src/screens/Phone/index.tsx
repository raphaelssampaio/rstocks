import React, { useEffect } from 'react'
import { Keyboard, StatusBar, View } from 'react-native'
import SafeKeyboardScrollContainer from '@components/SafeKeyBoardScrollContainer'
import Title from '@components/Title'
import AppButton from '@components/Button'
import styles from './styles'
import { Input } from '@components/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaPhone } from './phoneValidation'

interface IPhoneForm {
  phone: string
}

export default function Phone() {
  const [keyboardIsOpen, setKeyboardIsOpen] = React.useState(false)
  const {
    control,
    formState: { errors },
  } = useForm<IPhoneForm>({
    resolver: yupResolver(schemaPhone),
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
              title={`Set up 2-step verification`}
              text={`Enter your phone number so we can text you an authentication code`}
            />
            <Input
              control={control}
              name='phone'
              error={errors.phone}
            />
          </View>
          {!keyboardIsOpen && (
            <AppButton
              title='Continue'
              onPress={() => { }}
            />
          )}
        </View>
      </View>
    </SafeKeyboardScrollContainer>
  )
}
