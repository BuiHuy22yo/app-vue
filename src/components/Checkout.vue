<template>
  <div class="page-checkout">
    <div class="page-header">
      <h1 class="title">Checkout</h1>
    </div>
    <div class="page-content" v-if="getCount !== 0">
      <div class="checkout-form">
        <div class="billing-fields">
          <h3>Billing details</h3>
          <el-form ref="billingForm" :model="billingForm" :rules="rules" >
            <el-form-item label="First name" prop="firstname" required>
              <el-input v-model="billingForm.firstname" autocomplete="off" @keyup.enter.native="checkoutPlaceOrder" ></el-input>
            </el-form-item>

            <el-form-item label="Last name" prop="lastname" required>
              <el-input v-model="billingForm.lastname" autocomplete="off" @keyup.enter.native="checkoutPlaceOrder"></el-input>
            </el-form-item>
            <el-form-item label="Phone" prop="phone" required>
              <el-input v-model="billingForm.phone" autocomplete="off" type="number" @keyup.enter.native="checkoutPlaceOrder"></el-input>
            </el-form-item>
            <el-form-item label="Street address" prop="address" required>
              <el-input v-model="billingForm.address" autocomplete="off" @keyup.enter.native="checkoutPlaceOrder"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <OrderReview :data="getProducts"></OrderReview>
      </div>
      <div class="button button_checkout_place_order" @click="checkoutPlaceOrder">Place order</div>
    </div>
    <div class="page-empty" v-else>
      <div class="button return-to-shop" @click="$router.push('/product')">Return to Shop</div>
    </div>
    <ThankYou v-if="isHidden" :formData="billingForm" :orderData="orderData"></ThankYou>
  </div>
</template>
<script>

import {mapGetters} from 'vuex'
import OrderReview from '../components/Checkout/OrderReview'
import ThankYou from '../components/Checkout/Thankyou'
export default {
  name: 'Checkout',
  components: { OrderReview, ThankYou },
  data () {
    const rules = {
      firstname: [
        {
          required: true,
          message: 'First name is a required field.'
        }
      ],
      lastname: [
        {
          required: true,
          message: 'Last name is a required field.'
        }
      ],
      phone: [
        {
          required: true,
          message: 'Phone is a required field.'
        },
        {
          max: 10,
          message: 'Please enter your account in 10 characters.'
        }
      ],
      address: [
        {
          required: true,
          message: 'Street address is a required field.'
        }
      ]
    }
    return {
      loading: false,
      billingForm: {
        firstname: '',
        lastname: '',
        phone: '',
        address: ''
      },
      rules,
      isHidden: false,
      orderData: this.$store.getters['cart/getProducts']
    }
  },
  props: {
  },
  computed: {
    ...mapGetters('cart', ['getProducts', 'getCount'])
  },
  methods: {
    checkoutPlaceOrder () {
      this.$refs.billingForm.validate(valid => {
        if (!valid) return
        this.loading = true
        this.isHidden = true
        this.$store
          .dispatch(`cart/reset`)
          .then(() => {})
      })
    }
  }
}
</script>
