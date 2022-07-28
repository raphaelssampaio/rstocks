import * as yup from 'yup'

export const schemaPhone = yup.object().shape({
  phone: yup.string().required(),
})