import * as yup from 'yup'

export const schemaLogin = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})