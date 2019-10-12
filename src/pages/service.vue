<template>
  <div>
    <swiper :turnData="turnData"></swiper>
    <div class="conent">
      <table></table>
      <div class="first_floor" id="serviceTurn">
        <div class="service" id="servicelist">
          <h1 class="service_title">产业服务</h1>
          <ul class="service_item">
            <li class="sign">
              <div>
                <div>
                  <img src="./../images/index/1·1.png" alt />
                </div>
                <h3 class="sign_title">金融资本</h3>
                <p class="sign_desc">建立包括科创贷、VC、PE等覆盖企业发展全生命周期的资金支持体系</p>
                <router-link tag="button" to="service_detail">查看更多</router-link>
              </div>
            </li>
            <li class="sign">
              <div>
                <div>
                  <img src="./../images/index/5·5.png" alt />
                </div>
                <h3 class="sign_title">技术创新</h3>
                <p class="sign_desc">建立企业资源库及校内专家及技术资源库，在企业与学校之间搭建起高效、便捷的沟通桥梁</p>
                <router-link tag="button" to="service_detail">查看更多</router-link>
              </div>
            </li>
            <li class="sign">
              <div>
                <div>
                  <img src="./../images/index/3·3.png" alt />
                </div>
                <h3 class="sign_title">政策扶持</h3>
                <p class="sign_desc">专业服务科技企业，优先申报科技项目与资金的政策对接平台</p>
                <router-link tag="button" to="service_detail">查看更多</router-link>
              </div>
            </li>
            <li class="sign">
              <div>
                <div>
                  <img src="./../images/index/4·4.png" alt />
                </div>
                <h3 class="sign_title">综合保障</h3>
                <p class="sign_desc">为入园企业提供工商、财税、物业等系列服务，整合科技创新人才、技术、政府资源，定期举办各类沙龙活动、专题培训</p>
                <router-link tag="button" to="service_detail">查看更多</router-link>
              </div>
            </li>
            <li class="sign">
              <div>
                <div>
                  <img src="./../images/index/2·2.png" alt />
                </div>
                <h3 class="sign_title">市场拓展</h3>
                <p class="sign_desc">根据入园企业产业特性和市场需求，为入园企业提供市场信息和业务对接，助力企业开拓市场、合作共赢</p>
                <router-link tag="button" to="service_detail">查看更多</router-link>
              </div>
            </li>
            <li class="sign">
              <div>
                <div>
                  <img src="./../images/index/6·6.png" alt />
                </div>
                <h3 class="sign_title">人才培育</h3>
                <p
                  class="sign_desc"
                >为入园企业提供人才储备和培养的平台，重点整合学校人才资源、培训机构、社会机构，形成园区专属人才资源库，与电子科大各大院系实现定制人才培养，优先实现优质人才输送</p>
                <router-link tag="button" to="service_detail">查看更多</router-link>
              </div>
            </li>
          </ul>
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
      turnData: "serviceTurn"
    };
  },
  created() {
    this.$nextTick(() => {
      this.getlocal();
    });
  },
  components: {
    swiper,
    bottom
  },
  mounted() {
    let that = this;
    that.$nextTick(function() {
      window.addEventListener("scroll", that.handleScroll);
    });
  },
  destroyed() {
    localStorage.setItem("toId", "");
  },
  methods: {
    getlocal() {
      //找到锚点id
      let selectId = localStorage.getItem("toId");
      let toElement = document.getElementById(selectId);
      //如果对应id存在，就跳转
      if (selectId) {
        toElement.scrollIntoView();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.conent {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .first_floor {
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 0 40px 40px 40px;
    .service {
      width: 100%;
      .service_title {
        height: 80px;
        font-size: 36px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        display: flex;
        align-items: center;
      }
      .service_item {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        .sign {
          width: 28%;
          height: 482px;
          background: rgba(245, 245, 245, 1);
          list-style: none;
          margin: 20px 2%;
          display: flex;
          justify-content: center;
          align-items: center;
          > div {
            width: 70%;
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            > div {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 50px;
                height: 60px;
              }
            }
            .sign_title {
              width: 100%;
              height: 24px;
              font-size: 24px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              text-align: center;
            }
            .sign_desc {
              width: 100%;
              font-size: 18px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #747474;
              line-height: 36px;
              box-sizing: border-box;
            }
            button {
              width: 138px;
              height: 48px;
              border: 2px solid #3561c6;
              background: #f5f5f5;
              font-size: 18px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #3561c6;
            }
          }
        }
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
      margin: 0 auto;
      background-color: #ffffff;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .service {
        width: 100%;
        .service_title {
          height: 80px;
          font-size: 24px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          display: flex;
          align-items: center;
        }
        .service_item {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          .sign {
            width: 100%;
            height: 470px;
            background: rgba(245, 245, 245, 1);
            list-style: none;
            margin: 20px 2%;
            display: flex;
            justify-content: center;
            align-items: center;
            > div {
              width: 70%;
              height: 80%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              > div {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                  width: 50px;
                  height: 60px;
                }
              }
              .sign_title {
                width: 100%;
                height: 24px;
                font-size: 20px;
                font-family: SourceHanSansCN-Regular;
                font-weight: 400;
                color: #333333;
                text-align: center;
              }
              .sign_desc {
                width: 100%;
                font-size: 16px;
                font-family: SourceHanSansCN-Light;
                font-weight: 300;
                color: #747474;
                line-height: 30px;
                box-sizing: border-box;
              }
              button {
                width: 138px;
                height: 48px;
                border: 2px solid #3561c6;
                background: #f5f5f5;
                font-size: 18px;
                font-family: SourceHanSansCN-Light;
                font-weight: 300;
                color: #3561c6;
              }
            }
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .conent {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .first_floor {
      width: 90%;
      margin: 0 auto;
      background-color: #ffffff;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .service {
        width: 100%;
        .service_title {
          height: 80px;
          font-size: 24px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          display: flex;
          align-items: center;
        }
        .service_item {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          .sign {
            width: 46%;
            height: 470px;
            background: rgba(245, 245, 245, 1);
            list-style: none;
            margin: 20px 2%;
            display: flex;
            justify-content: center;
            align-items: center;
            > div {
              width: 70%;
              height: 80%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              > div {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                  width: 50px;
                  height: 60px;
                }
              }
              .sign_title {
                width: 100%;
                height: 24px;
                font-size: 20px;
                font-family: SourceHanSansCN-Regular;
                font-weight: 400;
                color: #333333;
                text-align: center;
              }
              .sign_desc {
                width: 100%;
                font-size: 16px;
                font-family: SourceHanSansCN-Light;
                font-weight: 300;
                color: #747474;
                line-height: 30px;
                box-sizing: border-box;
              }
              button {
                width: 138px;
                height: 48px;
                border: 2px solid #3561c6;
                background: #f5f5f5;
                font-size: 18px;
                font-family: SourceHanSansCN-Light;
                font-weight: 300;
                color: #3561c6;
              }
            }
          }
        }
      }
    }
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .conent {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .first_floor {
      width: 90%;
      margin: 0 auto;
      background-color: #ffffff;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .service {
        width: 100%;
        .service_title {
          height: 60px;
          font-size: 30px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          display: flex;
          align-items: center;
        }
        .service_item {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          .sign {
            width: 28%;
            height: 470px;
            background: rgba(245, 245, 245, 1);
            list-style: none;
            margin: 20px 2%;
            display: flex;
            justify-content: center;
            align-items: center;
            > div {
              width: 70%;
              height: 80%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              > div {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                  width: 50px;
                  height: 60px;
                }
              }
              .sign_title {
                width: 100%;
                height: 24px;
                font-size: 20px;
                font-family: SourceHanSansCN-Regular;
                font-weight: 400;
                color: #333333;
                text-align: center;
              }
              .sign_desc {
                width: 100%;
                font-size: 16px;
                font-family: SourceHanSansCN-Light;
                font-weight: 300;
                color: #747474;
                line-height: 30px;
                box-sizing: border-box;
              }
              button {
                width: 138px;
                height: 48px;
                border: 2px solid #3561c6;
                background: #f5f5f5;
                font-size: 18px;
                font-family: SourceHanSansCN-Light;
                font-weight: 300;
                color: #3561c6;
              }
            }
          }
        }
      }
    }
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
}
</style>
