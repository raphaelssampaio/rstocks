import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    backgroundColor: '#3500D4',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'EudoxusSans-Regular',
    color: 'white',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    fontWeight: '700'
  },
  buttonDisabled: {
    opacity: 0.6
  }
})