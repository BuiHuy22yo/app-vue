import Vue from 'vue';
import dayjs from 'dayjs';
import { round } from 'lodash';
import { isFalsyIngoreZero } from '@/utils/lib';

export const estimateTypes = value => {
  const types = [
    { name: '新規(入札時)', value: '1' },
    { name: '修正(再見積)', value: '2' },
    { name: '最終(契約時)', value: '3' },
    { name: '最終(決裁時)', value: '4' },
    { name: '最終(精算時)', value: '5' },
  ];

  return types.find(item => item.value === value)?.name ?? '';
};

Vue.filter('formatDate', (date, format = 'YYYY/MM/DD') => {
  return date && date !== '0000-00-00' ? dayjs(date).format(format) : '';
});

Vue.filter('formatNumber', (number, locale = 'ja-JP', precision = 0) => {
  return !isFalsyIngoreZero(number) ? round(Number(number), precision).toLocaleString(locale) : '';
});

Vue.filter('formatNumberJP', (number, precision = 0) => {
  return !isFalsyIngoreZero(number) ? round(Number(number), precision).toLocaleString('ja-JP') : '';
});

Vue.filter('formatQuantityJP', number => {
  return !isFalsyIngoreZero(number) ? number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : '';
});

Vue.filter('truncateText', function (text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  } else {
    return text;
  }
});

Vue.filter('estimateTypes', estimateTypes);

// Assessment
Vue.filter('formatNumberAsessment', (value, showZero = false) => {
  if (showZero) {
    return Number(value)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return Number(value)
    ? Number(value)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : '';
});

Vue.filter('formatQuantityAsessment', value => {
  return Number(value)
    ? Number(value)
        .toFixed(1)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : '';
});

Vue.filter('formatDiffAsessment', value => {
  return Number(value)
    ? `(${Number(value)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')})`
    : '';
});

Vue.filter('formatRateAsessment', (value, showZero = false) => {
  if (showZero) {
    return (
      Number(value)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '%'
    );
  }
  return Number(value)
    ? Number(value)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '%'
    : '';
});

// Add character when value < 0
Vue.filter('formatDiffCharacter', (value, showZero = true) => {
  if (showZero) {
    if (value < 0) {
      return `▲${Number(Math.abs(value))
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    }
    return Number(value)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return Number(value)
    ? `▲${Number(Math.abs(value))
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
    : '';
});

Vue.filter('formatRateCharacter', (value, showZero = true) => {
  if (showZero) {
    if (value < 0) {
      return `▲${Number(Math.abs(value))
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}%`;
    }
    return (
      Number(value)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '%'
    );
  }
  return Number(value)
    ? `▲${Number(Math.abs(value))
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}%`
    : '';
});
