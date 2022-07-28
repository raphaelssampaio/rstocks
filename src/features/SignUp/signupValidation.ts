import * as yup from 'yup'

export const schemaSignup = yup.object().shape({
  email: yup.string().email().required(),
  fullname: yup.string().required(),
  password: yup.string().required(),
})