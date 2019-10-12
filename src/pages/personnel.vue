<template>
  <div>
    <swiper :turnData="turnData"></swiper>
    <div class="conent">
      <table></table>
      <div class="first_floor" id="personelTurn">
        <div class="personel">
          <img src="./../images/pioneer/bg.png" alt />
          <h2 class="personel_title">高层次人才</h2>
          <p
            class="personel_desc"
          >园区企业共有人员920人，其中硕士以上学历382人，副高以上职称67人；拥有高层次创新创业人才23人,长江学者企业1名，国家 “千人计划”专家10名、四川省“千人计划”专家5名、成都市“蓉漂计划” 专家2名</p>
        </div>
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
    return {
      turnData: "personelTurn"
    };
  },
  components: {
    swiper,
    bottom
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
    background-color: #ffffff;
    margin: 0 auto;
    padding: 40px;
    box-sizing: border-box;
    .personel {
      width: 100%;
      img {
        width: 100%;
      }
      .personel_title {
        height: 80px;
        display: flex;
        align-items: center;
      }
      .personel_desc {
        font-size: 18px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        color: rgba(102, 102, 102, 1);
        line-height: 36px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .conent {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .first_floor {
      width: 90%;
      background-color: #ffffff;
      margin: 0 auto;
      padding: 0;
      box-sizing: border-box;
      .personel {
        width: 100%;
        img {
          width: 100%;
        }
        .personel_title {
          height: 60px;
          display: flex;
          align-items: center;
        }
        .personel_desc {
          font-size: 16px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          color: rgba(102, 102, 102, 1);
          line-height: 30px;
        }
      }
    }
  }
}
</style>
