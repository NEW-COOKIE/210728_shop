<template>
  <div>
    <ShopHeader></ShopHeader>

    <div class="tab">
      <div class="tab-item">
        <router-link to = '/shop/goods' replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to = '/shop/rations' replace>评鉴</router-link>
      </div>
      <div class="tab-item">
        <router-link to = '/shop/inof' replace>商家</router-link>
      </div>
    </div>

    <router-view>

    </router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import ShopHeader from '@/components/ShopHeader/ShopHeader.vue'
  export default {
    mounted() {
      this.$store.dispatch('getInfo');
      this.$store.dispatch('getGoods');
      this.$store.dispatch('getRatings');
    },

    components: {
      ShopHeader: ShopHeader,
    },

    template: '<ShopHeader>'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>
