<template>
  <div>
    <router-view></router-view>
    
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "@/components/FooterGuide/FooterGuide.vue";
export default {

  mounted() {
    //通知actions异步获取address并存到state
    this.$store.dispatch('getAddress');
    this.$store.dispatch('autoLogin');
  },

  components: {
    FooterGuide,
  },
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
