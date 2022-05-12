import dayjs from 'dayjs'
import { round } from 'lodash'
import { isFalsyIngoreZero } from './lib'

export const formatDateYMD = date => {
  return date ? dayjs(date).format('YYYY-MM-DD') : ''
}

export const formatDateYMDChart = date => {
  return date && date !== '0000-00-00' ? dayjs(date).format('YYYY/MM/DD') : ''
}

export const formatNumberJP = (number, precision = 0) => {
  return !isFalsyIngoreZero(number) ? round(Number(number), precision).toLocaleString('ja-JP') : ''
}

export const formatDateTime = date => {
  return date ? dayjs(date).format('YYYY/MM/DD HH:mm') : ''
}

export const formatQuantityJP = (number, precision = 1) => {
  return !isFalsyIngoreZero(number) ? round(Number(number), precision).toLocaleString('ja-JP') : ''
}

export const formatDateDefault = date => {
  return date ? dayjs(date).add(1, 'month').toDate() : ''
}
