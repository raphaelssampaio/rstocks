import * as yup from 'yup'

export const schemaCode = yup.object().shape({
  code: yup.string().required(),
})