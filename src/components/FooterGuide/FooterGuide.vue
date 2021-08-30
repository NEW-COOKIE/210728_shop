<template>
  <div class="footer-guide">
    <span class="guide-item" :class="{no: $route.path === '/msite'}" @click="goto('/msite')">
      <span>
        <i class="iconfont icon-icon-test"></i>
      </span>
      <span>{{$t('footer_home')}}</span>
    </span>

    <span class="guide-item" :class="{no: $route.path === '/search'}" @click="goto('/search')">
      <span>
        <i class="iconfont icon-search"></i>
      </span>
      <span>{{$t('footer_search')}}</span>
    </span>

    <span class="guide-item" :class="{no: $route.path === '/order'}" @click="goto('/order')">
      <span>
        <i class="iconfont icon-emaxcitygerenxinxitubiaoji03"></i>
      </span>
      <span>{{$t('footer_order')}}</span>
    </span>

    <span class="guide-item" :class="{no: $route.path === '/profile'}" @click="goto('/profile')">
      <span>
        <i class="iconfont icon-yonghudianji"></i>
      </span>
      <span>{{$t('footer_own')}}</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'FooterGuide',
  
  methods: {
    goto(path) {
      /* 一。如果点击当前项，没有如有效果 */
      /* if(path !== this.$route.path) {
        // 编程式路由跳转
        this.$router.replace(path);
      } */

      /* 一。如果点击当前项，没有如有效果 */
      if(path !== this.$route.path) {
        // 编程式路由跳转
        this.$router.replace(path);
      }else {
        window.location = path
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
.footer-guide
  top-border-1px(#ccc)
  display flex
  position: fixed
  left: 0
  bottom: 0
  width: 100%
  height: 50px
  background white
  .guide-item
    display flex
    flex-direction column
    text-align center
    width 25%
    &.no
      color $green
    span
      margin-top 3px
      font-size 12px
      i
        font-size 24px
</style>
