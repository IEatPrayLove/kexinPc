<template>
  <div>
    <div class="conent">
      <div class="first_floor">
        <div class="bread">
          当前位置：
          <a href="javascript:;" @click="goinvestment()">产业招商</a>>
          <span>产业招商</span>
        </div>
        <img src="./../images/index/investment/apartment/house.png" alt />
        <img src="./../images/index/investment/apartment/house_detail.png" alt />
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import swiper from "../components/swiper";
import bottom from "../components/bottom";
export default {
  data() {
    return {};
  },
  components: {
    swiper,
    bottom
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
  },
  methods:{
    goinvestment(){
      this.$router.push({
        path:'/investment'
      })
    }
  }
};
</script>
<style  lang="less" scoped>
.conent {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .first_floor {
    width: 90%;
    margin: 0 auto;
    padding: 40px 60px 60px 60px;
    .bread {
      display: flex;
      align-items: center;
      height: 80px;
      font-size: 18px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      a {
        color: rgba(153, 153, 153, 1);
        text-decoration: none;
        height: 18px;
      }
      span {
        font-weight: bold;
        color: #333333;
      }
    }
    img {
      display: block;
      margin: 0 auto;
      width: 80%;
    }
  }
}
</style>




                        