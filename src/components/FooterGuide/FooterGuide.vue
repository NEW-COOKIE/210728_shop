<template>
  <div class="footer-guide">
    <span class="guide-item" :class="{no: $route.path === '/msite'}" @click="goto('/msite')">
      <span>
        <i class="iconfont icon-icon-test"></i>
      </span>
      <span>首页</span>
    </span>

    <span class="guide-item" :class="{no: $route.path === '/search'}" @click="goto('/search')">
      <span>
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </span>

    <span class="guide-item" :class="{no: $route.path === '/order'}" @click="goto('/order')">
      <span>
        <i class="iconfont icon-emaxcitygerenxinxitubiaoji03"></i>
      </span>
      <span>订单</span>
    </span>

    <span class="guide-item" :class="{no: $route.path === '/profile'}" @click="goto('/profile')">
      <span>
        <i class="iconfont icon-yonghudianji"></i>
      </span>
      <span>个人</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'FooterGuide',
  
  methods: {
    goto(path) {
      // 编程式路由跳转
      this.$router.replace(path);
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
  height: 100px
  .guide-item
    display flex
    flex-direction column
    text-align center
    width 25%
    &.no
      color $green
    span
      margin-top 3px
      font-size 24px
      i
        font-size 50px
</style>
