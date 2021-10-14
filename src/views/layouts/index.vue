<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive"><router-view></router-view></keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <div class="home">
        <span class="img"><img src="../../assets/icon/icon11.png" /></span>
        <span class="text">首页</span>
      </div>
      <div class="submit">
        <span class="img"><img src="../../assets/icon/icon22.png" /></span>
        <span class="text">发布任务</span>
      </div>
      <div class="user">
        <span class="img"><img src="../../assets/icon/icon33.png" /></span>
        <span class="text">我的</span>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar';
export default {
  name: 'AppLayout',
  data() {
    return {};
  },
  components: {
    TabBar
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.app-container {
  .layout-footer {
    position: fixed;
    z-index: 99;
    bottom: 0;
    left: 0;
    width: 750px;
    height: 98px;
    background: #ffffff;
    box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
      min-width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span{
        display: block;
      }
    }
    .home {
      .img{
        width: 44px;
      }
      .text {
        display: block;
        margin: 10px auto 0;
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #1f79fe;
      }
    }
    .submit {
      .img{
        margin-top: -40px;
        width: 100px;
      }
      .text {
        position: relative;
        top: -22px;
        display: block;
        margin: 12px auto 0;
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #999999;
      }
    }
    .user {
      .img{
        width: 44px;
      }
      .text {
        display: block;
        margin: 10px auto 0;
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }
    }
  }
}
</style>
