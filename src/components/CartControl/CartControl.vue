<template>
  <div class="cartcontrol">
    <transition name="move">
    <div class="iconfont icon-remove2" v-if="food.count > 0" @click="updateFoodCound(false)"></div>
    </transition>
    <div class="icart-count" v-if="food.count > 0">{{food.count}}</div>
    <div class="iconfont icon-add" @click="updateFoodCound(true)"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: Object
    },

    methods: {
      updateFoodCound(isAdd) {
        /*
        原因：数据是属于vuex
        1.不能在当前直接跟新数据
        2.起始值未定义， NaN
         */

        this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color rgb(0, 160, 220)
    .icon-remove2
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: $green
      &.move-enter-active, &.move-leave-active
        transition all .5s;
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .icart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: $green
</style>
