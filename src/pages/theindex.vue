<template>
  <div class="container-box">
    <swiper :turnData="turnData"></swiper>
    <div class="index-container">
      <div class="index-left">
        <!-- 1L -->
        <div id="homeTurn" class="first-floor">
          <p class="first-title">产业招商</p>
          <div class="first-main">
            <div></div>
            <a class="main-part" @click="goto('investment','policylist')">
              <table></table>
              <p class="hr-black"></p>
              <p class="main-title">产业政策</p>
              <div class="main-img">
                <img class="w-100 h-100" src="../images/index/1lpart1.png" alt />
              </div>
              <div class="zezhao">
                <p></p>
                <p>产业政策</p>
                <div>
                  <p></p>
                  <p>查看详情</p>
                </div>
                <p class="zezhao-hr"></p>
              </div>
            </a>
            <a class="main-part" @click="goto('investment','valuelist')">
              <table></table>
              <p class="hr-black"></p>
              <p class="main-title">区位价值</p>
              <div class="main-img">
                <img class="w-100 h-100" src="../images/index/1lpart2.png" alt />
              </div>
              <div class="zezhao">
                <p></p>
                <p>区位价值</p>
                <div>
                  <p></p>
                  <p>查看详情</p>
                </div>
                <p class="zezhao-hr"></p>
              </div>
            </a>
            <a class="main-part" @click="goto('investment','atmoslist')">
              <table></table>
              <p class="hr-black"></p>
              <p class="main-title">产业氛围</p>
              <div class="main-img">
                <img class="w-100 h-100" src="../images/index/1lpart3.png" alt />
              </div>
              <div class="zezhao">
                <p></p>
                <p>产业氛围</p>
                <div>
                  <p></p>
                  <p>查看详情</p>
                </div>
                <p class="zezhao-hr"></p>
              </div>
            </a>
            <a class="main-part" @click="goto('investment','investlist')">
              <table></table>
              <p class="hr-black"></p>
              <p class="main-title">产业招商</p>
              <div class="main-img">
                <img class="w-100 h-100" src="../images/index/1lpart4.png" alt />
              </div>
              <div class="zezhao">
                <p></p>
                <p>产业招商</p>
                <div>
                  <p></p>
                  <p>查看详情</p>
                </div>
                <p class="zezhao-hr"></p>
              </div>
            </a>
          </div>
        </div>

        <!-- 2L -->
        <div class="second-floor w-100">
          <div class="second_left">
            <div>
              <p>产业服务</p>
              <!-- <span>-查看详情</span> -->
              <router-link tag="span" to="investment">-查看详情</router-link>
            </div>
          </div>
          <div class="second_right">
            <div class="right_part">
              <div class="right_name">
                <div>
                  <img src="../images/index/1·1.png" alt />
                </div>
                <p>公共技术平台</p>
              </div>
              <div class="right_desc" @click="goto('service','servicelist')">
                <p>工信部核芯空间、西南集成电路开放测试实验室......</p>
              </div>
            </div>

            <div class="right_part">
              <div class="right_name">
                <div>
                  <img src="../images/index/5·5.png" alt />
                </div>
                <p>金融资本</p>
              </div>
              <div class="right_desc" @click="goto('service','servicelist')">
                <p>科创贷、Fa服务、Vc基金、Pe基金......</p>
              </div>
            </div>

            <div class="right_part">
              <div class="right_name">
                <div>
                  <img src="../images/index/3·3.png" alt />
                </div>
                <p>市场拓展</p>
              </div>
              <div class="right_desc" @click="goto('service','servicelist')">
                <p>流片级代理服务、芯片分销服务、PCB代工服务、测试服务、设备租赁服务、MPW流片代理服务......</p>
              </div>
            </div>
            <div class="right_part">
              <div class="right_name">
                <div>
                  <img src="../images/index/4·4.png" alt />
                </div>
                <p>人才培育</p>
              </div>
              <div class="right_desc" @click="goto('service','servicelist')">
                <p>人才招聘、人才培训、实习实训......</p>
              </div>
            </div>

            <div class="right_part">
              <div class="right_name">
                <div>
                  <img src="../images/index/2·2.png" alt />
                </div>
                <p>政策扶持</p>
              </div>
              <div class="right_desc" @click="goto('service','servicelist')">
                <p>资质申报、项目申报、人才补贴、研发资助......</p>
              </div>
            </div>
            <div class="right_part">
              <div class="right_name">
                <div>
                  <img src="../images/index/6·6.png" alt />
                </div>
                <p>综合保障</p>
              </div>
              <div class="right_desc" @click="goto('service','servicelist')">
                <p>工商注册、财务服务、知识产权、双创活动......</p>
              </div>
            </div>
          </div>
        </div>

        <div class="three-floor">
          <div class="three-left">
            <div>
              <p>新闻资讯</p>
              <span @click="goto('science','news_jump')">-查看更多</span>
            </div>
          </div>
          <div class="three-right">
            <router-link tag="p" to="news_detail">
              <p>— 中外媒体走进启迪控股 共话“一带一路”科技创新</p>
              <span>2019-06-12</span>
            </router-link>
            <router-link tag="p" to="news_detail">
              <p>— 电子科大科技园与中国建行在雄安新区签署战略合作协...</p>
              <span>2019-06-11</span>
            </router-link>
            <router-link tag="p" to="news_detail">
              <p>— 河北省省长许勤率团访问清华大学</p>
              <span>2019-06-10</span>
            </router-link>
            <router-link tag="p" to="news_detail">
              <p>— 王济武：立足上海，服务和带动长三角协同创新</p>
              <span>2019-06-09</span>
            </router-link>
          </div>
          <div class="three-img">
            <img src="../images/index/zu28.png" alt />
          </div>
        </div>
      </div>

      <!-- <div class="index-right" @click="goTop">
        <img src="../images/public/index-righticon.png" alt />
      </div>-->
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
      turnData: "homeTurn"
    };
  },
  components: {
    swiper,
    bottom
  },
  mounted() {},
  methods: {
    goTop() {
      $("html").animate(
        {
          scrollTop: "0"
        },
        1000
      );
      return false; //防止默认事件行为
    },
    goto(page, selectId) {
      var path = page;
      var selectId = selectId;
      localStorage.setItem("toId", selectId);
      this.$router.push({ path: path });
    }
  }
};
</script>


<style  lang="less" scoped>

.container-box {
  width: 100%;
  overflow: hidden;
  .index-container {
    display: flex;
    padding: 0;
    width: 100%;
    overflow: hidden;
    .index-left {
      width: 100%;
      .first-floor {
        width: 100%;
        .first-title {
          font-size: 24px;
          width: 100%;
          height: 80px;
          line-height: 80px;
          text-align: left;
          margin-left: 70px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
        }
        .first-main {
          width: 100%;
          display: flex;
          justify-content: space-between;
          div:nth-child(1) {
            // width: 50px;
            // height: 450px;
            // background-color: #f5f5f5;
            // margin-left: 0;
          }
          .main-part {
            width: 430px;
            height: 450px;
            margin: 0 1%;
            background-color: #f5f5f5;
            display: block;
            position: relative;
            .hr-black {
              margin-top: 37px;
              margin-left: 30px;
            }
            .main-title {
              font-size: 24px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              margin-top: 15px;
              margin-left: 30px;
            }
            .main-img {
              width: 430px;
              height: 330px;
              margin-top: 35px;
            }
            .zezhao {
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0);
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              right: 0;
              display: none;
              cursor: pointer;
              p:nth-child(1) {
                width: 22px;
                height: 3px;
                background: #ffffff;
                margin-top: 37px;
                margin-left: 30px;
              }
              p:nth-child(2) {
                font-size: 24px;
                font-family: SourceHanSansCN-Regular;
                font-weight: 400;
                color: #fff;
                margin-top: 15px;
                margin-left: 30px;
              }
              div {
                margin-left: 31px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                margin-top: 290px;
                p:nth-child(1) {
                  width: 22px;
                  height: 3px;
                  background: #fff;
                  margin-top: 10px;
                }
                p:nth-child(2) {
                  font-size: 18px;
                  font-family: SourceHanSansCN-Regular;
                  font-weight: 400;
                  color: #fff;
                  line-height: 24px;
                  margin-left: 5px;
                }
              }
              p:nth-child(4) {
                width: 370px;
                border: 1px solid #ffffff;
                margin-top: 18px;
                margin-left: 30px;
              }
            }
          }
          .main-part:hover .zezhao {
            background-color: rgba(0, 0, 0, 0.5) !important;
            display: block;
          }
        }
      }
      .second-floor {
        width: 100%;
        height: 490px;
        margin-top: 50px;
        background-color: #f5f5f5;
        display: flex;
        justify-content: space-between;
        .second_left {
          width: 20%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            p {
              font-size: 36px;
              font-weight: bold;
            }
            span {
              box-sizing: border-box;
              padding-top: 6px;
              font-size: 18px;
              font-weight: bold;
              cursor: pointer;
              display: block;
            }
          }
        }
        .second_right {
          box-sizing: border-box;
          width: 80%;
          height: 100%;
          padding-top: 8px;
          .right_part {
            float: left;
            width: 30%;
            height: 181px;
            padding: 0;
            position: relative;
            margin: 1%;
            background: #fff;
            .right_name {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              div {
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                img {
                  width: 66px;
                  height: 76px;
                }
              }
              p {
                box-sizing: border-box;
                padding-left: 10px;
                width: 50%;
                height: 100%;
                line-height: 1;
                font-size: 24px;
                font-family: SourceHanSansCN-Regular;
                font-weight: bold;
                color: #333333;
                display: flex;
                justify-content: flex-start;
                align-items: center;
              }
            }
            .right_desc {
              box-sizing: border-box;
              cursor: pointer;
              display: none;
              width: 100%;
              height: 100%;
              font-size: 18px;
              font-family: SourceHanSansCN-Light;
              color: #ffffff;
              line-height: 36px;
              background: #3561c6;
              text-align: start;
              padding: 50px 6px 0 6px;
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              right: 0;
              p {
                width: 100%;
                font-weight: 500;
              }
            }
          }
          .right_part:hover .right_desc {
            display: block;
          }
        }
      }
      .three-floor {
        width: 100%;
        height: 514px;
        margin-top: 50px;
        background-color: #f5f5f5;
        display: flex;
        justify-content: space-between;
        .three-left {
          width: 20%;
          // height: 514px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            p {
              font-size: 36px;
              font-weight: bold;
            }
            span {
              font-size: 18px;
              font-weight: bold;
              display: block;
              cursor: pointer;
              padding-top: 6px;
            }
          }
        }
        .three-right {
          box-sizing: border-box;
          width: 60%;
          height: 100%;
          padding: 80px 0;
          >p {
            width: 100%;
            height: 80px;
            display: flex;
            color: #666666;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #BABABA;
            p {
              font-size: 24px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              cursor: pointer;
            }
            span {
              display: flex;
              align-items: center;
              width: 100px;
              height: 100%;
              font-size: 16px;
            }
          }
          >p:nth-child(1) {
            border-top: 1px solid #BABABA;
          }
          >p:hover {
            color: #3561C6;
          }  
        }
        .three-img {
          width: 20%;
          height: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            // width: 457px;
            // height: 426px;
            padding: 0;
            margin: 0;
            height: 90%;
            width: 90%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
          }
        }
      }
    }
    .index-right {
      width: 50px;
      height: 1664px;
      background-color: #3561c6;
      margin-left: 20px;
      cursor: pointer;
      img {
        margin: auto auto;
        z-index: 999;
        position: fixed;
        top: 352px;
      }
    }
  }
  #indexSwp {
    width: 100%;
    height: 1080px;
  }
  .bottom {
    width: 100%;
    .four-floor {
      width: 100%;
      p {
        font-size: 36px;
        text-align: center;
        margin-top: 29px;
      }
      .four-zhong {
        height: 67px;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-top: 30px;
        margin-bottom: 30px;
        div {
          width: 181px;
          height: 67px;
          margin: 0 12px;
          text-align: center;
        }
      }
      .four-top {
        width: 100%;
        height: 200px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        line-height: 200px;
        div:nth-child(1) {
          width: 30%;
          height: 100%;
        }
        div:nth-child(2) {
          width: 50%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        div:nth-child(3) {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          width: 30%;
          height: 100%;
        }
      }
      .four-last {
        height: 54px;
        width: 100%;
        border-top: 2px solid #f5f5f5;
        z-index: 99999;
        p {
          text-align: center;
          line-height: 54px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .container-box {
    .index-container {
      .index-left {
        .first-floor {
          .first-title {
            height: 46px;
            line-height: 46px;
            font-size: 20px;
            margin-left: 16px;
          }
          .first-main {
            width: 100%;
            div:nth-child(1) {
            }
            .main-part {
              height: 146px;
              width: 20%;
              .hr-black {
                margin: 8px 0 0 8px;
              }
              .main-title {
                font-size: 12px;
                margin: 8px 0 0 8px;
              }
              .main-img {
                width: 100%;
                height: 100px;
                margin-top: 10px;
              }
              .zezhao {
                p:nth-child(1) {
                  margin: 14px 0 0 14px;
                }
                p:nth-child(2) {
                  font-size: 16px;
                  margin: 10px 0 0 14px;
                }
                div {
                  p:nth-child(1) {
                  }
                  p:nth-child(2) {
                  }
                }
                p:nth-child(4) {
                }
              }
            }
          }
        }
        .second-floor {
          height: 220px;
          .second_left {
            div {
              p {
                font-size: 16px;
              }
              span {
                font-size: 12px;
              }
            }
          }
          .second_right {
            height: 90%;
            .right_part {
              height: 50%;
              .right_name {
                height: 94px;
                line-height: 94px;
                div {
                  img {
                    width: 30px;
                    height: 32px;
                  }
                }
                p {
                  font-size: 12px;
                  flex-wrap: wrap;
                  overflow: hidden;
                }
              }
            }
            .right_desc {
              padding: 30px 6px 0 6px !important;
              font-size: 12px !important;
              line-height: 26px !important;
            }
          }
        }
        .three-floor {
          margin-top: 20px;
          flex-wrap: wrap;
          height: auto;
          .three-left {
            width: 100%;
            height: 40px;
            justify-content: flex-start;
            div {
              p {
                font-size: 20px;
                margin-left: 20px;
              }
              span {
                display: none;
              }
            }
          }
          .three-right {
            width: 100%;
            padding: 0;
            >p {
              height: 50px;
              border: none;
              p {
                font-size: 12px;
                width: 100%;
                margin-left: 20px;
              }
              span {
                display: none;
              }
            }
          }
          .three-img {
            display: none;
          }
        }
      }
    }
  }

}

@media (min-width: 768px) and (max-width: 992px) {
  .container-box {
    .index-container {
      .index-left {
        .first-floor {
          .first-title {
            height: 60px;
            line-height: 60px;
            font-size: 20px;
            margin-left: 36px;
          }
          .first-main {
            width: 100%;
            div:nth-child(1) {
            }
            .main-part {
              height: 260px;
              width: 20%;
              .hr-black {
                margin: 14px 0 0 14px;
              }
              .main-title {
                font-size: 16px;
                margin: 10px 0 0 14px;
              }
              .main-img {
                width: 100%;
                height: 172px;
                margin-top: 20px;
              }
              .zezhao {
                p:nth-child(1) {
                  margin: 14px 0 0 14px;
                }
                p:nth-child(2) {
                  font-size: 16px;
                  margin: 10px 0 0 14px;
                }
                div {
                  p:nth-child(1) {
                  }
                  p:nth-child(2) {
                  }
                }
                p:nth-child(4) {
                }
              }
            }
          }
        }
        .second-floor {
          height: 400px;
          .second_left {
            div {
              p {
                font-size: 30px;
              }
              span {
                font-size: 16px;
              }
            }
          }
          .second_right {
            .right_part {
              .right_name {
                height: 180px;
                line-height: 180px;
                div {
                  img {
                    width: 50px;
                    height: 54px;
                  }
                }
                p {
                  font-size: 12px;
                }
              }
            }
            .right_desc {
              font-size: 16px !important;
              line-height: 30px !important;
            }
          }
        }
        .three-floor {
          height: 260px;
          .three-left {
            div {
              p {
                font-size: 20px;
              }
              span {
                font-size: 12px;
              }
            }
          }
          .three-right {
            padding: 20px 0;
            >p {
              height: 50px;
              p {
                font-size: 12px;
              }
              span {
                font-size: 12px;
              }
            }
          }
          .three-img {
          }
        }
      }
    }
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container-box {
    .index-container {
      .index-left {
        .first-floor {
          .first-title {
            height: 60px;
            line-height: 60px;
            font-size: 20px;
            margin-left: 36px;
          }
          .first-main {
            width: 100%;
            div:nth-child(1) {
              // width: 30px;
              // height: 300px;
            }
            .main-part {
              height: 300px;
              width: 20%;
              .hr-black {
                margin: 24px 0 0 20px;
              }
              .main-title {
                font-size: 20px;
                margin: 10px 0 0 20px;
              }
              .main-img {
                width: 100%;
                height: 216px;
                margin-top: 20px;
              }
              .zezhao {
                p:nth-child(1) {
                  margin: 24px 0 0 20px;
                }
                p:nth-child(2) {
                  font-size: 20px;
                  margin: 10px 0 0 20px;
                }
                div {
                  p:nth-child(1) {
                  }
                  p:nth-child(2) {
                  }
                }
                p:nth-child(4) {
                }
              }
            }
          }
        }
        .second-floor {
          height: 400px;
          .second_left {
            div {
              p {
                font-size: 30px;
              }
              span {
                font-size: 16px;
              }
            }
          }
          .second_right {
            .right_part {
              .right_name {
                height: 180px;
                line-height: 180px;
                div {
                  img {
                    width: 50px;
                    height: 54px;
                  }
                }
                p {
                  font-size: 12px;
                }
              }
            }
            .right_desc {
              font-size: 16px !important;
              line-height: 30px !important;
            }
          }
        }
        .three-floor {
          height: 300px;
          .three-left {
            div {
              p {
                font-size: 28px;
              }
              span {
                font-size: 14px;
              }
            }
          }
          .three-right {
            padding: 40px 0;    
            >p {
              height: 56px;
              p {
                font-size: 18px;
              }
            }
          }
          .three-img {
          }
        }
      }
    }
  }
}
@media screen and(min-width: 450px) {
  .container-box>.index-container>.index-left>.second-floor>.second_right>.right_part>.right_name>div{
    width: 30%;
  }
  .container-box>.index-container>.index-left>.second-floor>.second_right>.right_part>.right_name>p{
    width: 70%;
  }
  }

</style>




