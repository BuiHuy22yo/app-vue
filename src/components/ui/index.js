import Vue from 'vue'
import AppTempVar from './AppTempVar.vue'
import AppInputFile from './Input/AppInputFile.vue'
import AppDatePicker from './Input/AppDatePicker.vue'
import AppInputSeacrh from './Input/AppInputSearch.vue'
import AppInputNumber from './Input/AppInputNumber.vue'
import SpinnerLoading from './Spinner/Loading.vue'
import AppInfiniteLoading from './AppInfiniteLoading'

Vue.component('app-temp-var', AppTempVar)

Vue.component('app-input-file', AppInputFile)
Vue.component('app-date-picker', AppDatePicker)
Vue.component('app-input-search', AppInputSeacrh)
Vue.component('app-input-number', AppInputNumber)

Vue.component('app-spinner-loading', SpinnerLoading)
Vue.component('app-infinite-loading', AppInfiniteLoading)
