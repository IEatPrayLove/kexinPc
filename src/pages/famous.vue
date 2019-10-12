<template>
  <div>
    <div class="conent">
      <div class="first_floor">
        <div class="bread">
          当前位置：
          <a href="javascript:;" @click="goenterprise()">明星企业</a>>
          <span>企业详情</span>
               
        </div>
      </div>
    </div>
     <div v-for="item in aaaaa" :key="item" style="text-align:center;width:100%">
                    <p style="font-size:50px;text-align:center;margin-top:100px;color:red">{{item.title}}</p>
                    <img :src="item.img" style="padding-top:50px;width:40%">
                    <br>
                    <p v-html="item.the_secondary_title" style="width:80%;margin-left:10%; font-size:20px;padding-top:50px;padding-bottom:100px;color:gray;text-align:left"></p>
                </div>
    <bottom></bottom>
  </div>
</template>
<script>
import swiper from "../components/swiper.vue";
import bottom from "../components/bottom.vue";
import data from "../data/data.js"

import page from "../components/page.vue";
export default {
  data() {
      return {
        aaaaa: [
        {
                    "id":1,
                    "title":"聚利中宇",
                    "the_secondary_title":"由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”由国际知名硅基微波毫米波及太赫兹集成电路芯片研究专家、该领域国内领军人物、“省千人计划”获选者熊永忠教授创建。 与西北工业大学合作，共建“微波毫米波及太赫兹射频集成电路联合实验室”",
                    "img": require('../images/star/1111111.jpg')
            }
    ]
      }
  },
  components: {
    swiper,
    bottom,
    page
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
    console.log(this.aaaaa);
  },
  methods:{
        goenterprise(){
      this.$router.push({
        path:'/enterprise'
      })
    }
  }
};
</script>
<style lang="less" scoped>
/deep/.conent {
  width: 100%;
  background-color: #f5f5f5;
  .main-header {
    .header-nav {
      a {
        color: #000 !important;
      }
    }
  }
  .first_floor {
    width: 90%;
    margin: 0 auto;
    margin-top: 60px;
    .bread {
      display: flex;
      align-items: center;
      width: 100%;
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
    .policy {
      width: 100%;
      margin: 0 auto;
      padding: 40px 60px 60px 60px;
      box-sizing: border-box;
      background-color: #ffffff;
      .title {
        width: 70%;
        font-size: 36px;
        font-family: SourceHanSansCN-Bold;
        font-weight: bold;
        color: rgba(255, 54, 54, 1);
        text-align: center;
        margin: 0 auto;
        margin-bottom: 103px;
        letter-spacing: 1px;
      }
      .claim {
        width: 100%;
        font-size: 18px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        color: rgba(102, 102, 102, 1);
        line-height: 36px;
      }
      .news {
        .news_title {
          font-size: 24px;
          text-align: center;
        }
        .news_tit {
          color: #666666;
          text-align: center;
          font-weight: 300;
          color: rgba(102, 102, 102, 1);
          line-height: 48px;
        }
        .detail {
          font-size: 24px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          color: rgba(102, 102, 102, 1);
          line-height: 48px;
        }
      }
    }
    .page {
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
    }
  }
}
</style>

