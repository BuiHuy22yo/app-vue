import { isArray, isEmpty } from 'lodash'

export const isFalsyIngoreZero = value => {
  return !value && value !== 0
}

export const isNotEmptyArray = array => {
  return isArray(array) && !isEmpty(array)
}
