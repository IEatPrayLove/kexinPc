<template>
  <div>
    <swiper :turnData="turnData"></swiper>
    <div class="conent">
      <table></table>
      <div class="first_floor" id="enterpriseTurn">
        <div class="star">
          <img src="./../images/star/bg.png" alt />

          <div class="star_title">明星企业</div>
          <div class="star_desc">
            <p>截止目前，园区注册企业106家</p>
            <p>2017年11月，成都市新经委成立后对全市的新经济企业开展调研工作，园区10余家企业上榜，园区新经济企业占比高达90%。2018年4月，成都市经济和信息化委员会公布成都市首批集成电路设计企业名单，园区申威科技、聚利中宇、智芯测控三家企业上榜</p>
            <p>在产业类型上，电子信息产业占比92%以上，军工、军品配套企业总计20家，产业集聚效果显著</p>
          </div>
          <div class="allLogo">
            <ul>
              <li>
                <div class="line"></div>
                <div class="detail" @click="gofamous(item)">
                  <div class="logo">
                    <img src="./../images/star/logo1.png" alt />
                  </div>
                  <div class="logoName">瓴盛科技有限公司</div>
                </div>
              </li>
              <li>
                <div class="line"></div>
                <div class="detail" @click="gofamous(item)">
                  <div class="logo">
                    <img src="./../images/star/logo2.png" alt />
                  </div>
                  <div class="logoName">北京思特奇信息技术股份有限公司</div>
                </div>
              </li>
              <li>
                <div class="line"></div>
                <div class="detail" @click="gofamous(item)">
                  <div class="logo">
                    <img src="./../images/star/logo3.png" alt />
                  </div>
                  <div class="logoName">成都申威科技有限责任公司</div>
                </div>
              </li>
              <li>
                <div class="line"></div>
                <div class="detail" @click="gofamous(item)">
                  <div class="logo">
                    <img src="./../images/star/logo4.png" alt />
                  </div>
                  <div class="logoName">北京建广资产管理有限公司</div>
                </div>
              </li>
              <li>
                <div class="line"></div>
                <div class="detail" @click="gofamous(item)">
                  <div class="logo">
                    <img src="./../images/star/logo5.png" alt />
                  </div>
                  <div class="logoName">联芯科技有限公司</div>
                </div>
              </li>
              <li>
                <div class="line"></div>
                <div class="detail" @click="gofamous(item)">
                  <div class="logo">
                    <img src="./../images/star/logo6.png" alt />
                  </div>
                  <div class="logoName">美国高通公司</div>
                </div>
              </li>
              <li>
                <div class="line"></div>
                <div class="detail" @click="gofamous(item)">
                  <div class="logo">
                    <img src="./../images/star/logo7.png" alt />
                  </div>
                  <div class="logoName">北京智路资产管理有限公司</div>
                </div>
              </li>
              <div class="line"></div>
            </ul>
            <div class="pagenation">
              <!-- <div class="page_cont">
                <button><img src="./../images/star/left.png" alt=""></button>
                <ul>
                   <li><a href="javascript:;">1</a></li>
                   <li><a href="javascript:;">2</a></li>
                   <li><a href="javascript:;">3</a></li>
                   <li><a href="javascript:;">4</a></li>
                </ul>
                <button><img src="./../images/star/right.png" alt=""></button>
              </div>-->
              <page></page>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import swiper from "../components/swiper";
import bottom from "../components/bottom";

import page from "../components/page";
export default {
  data() {
    return {
      turnData: "enterpriseTurn"
    };
  },
  components: {
    swiper,
    bottom,
    page
  },
  methods:{
    gofamous(item){
      this.$router.push({
        path:'/famous'
      })
    }
  }
};
</script>
<style  lang="less" scoped>
.detail:hover{ 
  background-color: rgba(55, 141, 220,.3)
}
.conent {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .first_floor {
    width: 90%;
    background-color: #ffffff;
    margin: 0 auto;
    margin-top: 40px;
    .star {
      width: 90%;
      margin: 0 auto;
      padding-top: 40px;
      img {
        width: 100%;
      }
      .star_title {
        width: 100%;
        height: 80px;
        font-size: 36px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        display: flex;
        align-items: center;
      }
      .star_desc {
        width: 100%;
        font-size: 18px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        color: rgba(102, 102, 102, 1);
        line-height: 36px;
        p {
          margin-bottom: 10px;
        }
      }
      .allLogo {
        width: 100%;
        ul {
          width: 100%;
          li {
            margin-top: 2px;
            list-style: none;
            border-top: 1px solid rgba(51, 51, 51, 0.3);
            .detail {
              width: 100%;
              .logo {
                width: 224px;
                height: 98px;
                display: inline-block;
                vertical-align: middle;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .logoName {
                font-size: 24px;
                font-family: SourceHanSansCN-Light;
                font-weight: 300;
                color: rgba(102, 102, 102, 1);
                display: inline-block;
                letter-spacing: 4px;
              }
            }
          }
          li:last-child {
            border-bottom: 1px solid rgba(51, 51, 51, 0.3);
          }
        }
        .pagenation {
          padding-top: 38px;
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
      background-color: #ffffff;
      margin: 0 auto;
      margin-top: 40px;
      .star {
        width: 90%;
        margin: 0 auto;
        img {
          width: 100%;
        }
        .star_title {
          width: 100%;
          height: 80px;
          font-size: 30px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          display: flex;
          align-items: center;
        }
        .star_desc {
          width: 100%;
          font-size: 16px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          color: rgba(102, 102, 102, 1);
          line-height: 32px;
          p {
            margin-bottom: 10px;
          }
        }
        .allLogo {
          width: 100%;
          ul {
            width: 100%;
            li {
              list-style: none;
              border-top: 1px solid rgba(51, 51, 51, 0.3);
              height: 50px;
              line-height: 50px;
              .detail {
                width: 100%;
                height: 100%;
                .logo {
                  display: none !important;
                  width: 30%;
                  height: 100%;
                  display: inline-block;
                  vertical-align: middle;
                  img {
                    height: 94%;
                  }
                }
                .logoName {
                  width: 90%;
                  font-size: 16px;
                  font-family: SourceHanSansCN-Light;
                  font-weight: 300;
                  color: rgba(102, 102, 102, 1);
                  display: inline-block;
                  letter-spacing: 4px;
                }
              }
            }
            li:last-child {
              border-bottom: 1px solid rgba(51, 51, 51, 0.3);
            }
          }
          .pagenation {
            padding-top: 38px;
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
      background-color: #ffffff;
      margin: 0 auto;
      margin-top: 40px;
      .star {
        width: 90%;
        margin: 0 auto;
        padding-top: 40px;
        img {
          width: 100%;
        }
        .star_title {
          width: 100%;
          height: 80px;
          font-size: 30px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          display: flex;
          align-items: center;
        }
        .star_desc {
          width: 100%;
          font-size: 16px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          color: rgba(102, 102, 102, 1);
          line-height: 32px;
          p {
            margin-bottom: 10px;
          }
        }
        .allLogo {
          width: 100%;
          ul {
            width: 100%;
            li {
              list-style: none;
              border-top: 1px solid rgba(51, 51, 51, 0.3);
              height: 100px;
              .detail {
                width: 100%;
                height: 100%;
                .logo {
                  width: 30%;
                  height: 100%;
                  display: inline-block;
                  vertical-align: middle;
                  img {
                    height: 94%;
                  }
                }
                .logoName {
                  width: 68%;
                  font-size: 20px;
                  font-family: SourceHanSansCN-Light;
                  font-weight: 300;
                  color: rgba(102, 102, 102, 1);
                  display: inline-block;
                  letter-spacing: 4px;
                }
              }
            }
            li:last-child {
              border-bottom: 1px solid rgba(51, 51, 51, 0.3);
            }
          }
          .pagenation {
            padding-top: 38px;
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
      background-color: #ffffff;
      margin: 0 auto;
      margin-top: 40px;
      .star {
        width: 90%;
        margin: 0 auto;
        padding-top: 40px;
        img {
          width: 100%;
        }
        .star_title {
          width: 100%;
          height: 80px;
          font-size: 30px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          display: flex;
          align-items: center;
        }
        .star_desc {
          width: 100%;
          font-size: 16px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          color: rgba(102, 102, 102, 1);
          line-height: 32px;
          p {
            margin-bottom: 10px;
          }
        }
        .allLogo {
          width: 100%;
          ul {
            width: 100%;
            li {
              list-style: none;
              border-top: 1px solid rgba(51, 51, 51, 0.3);
              height: 100px;
              .detail {
                width: 100%;
                height: 100%;
                .logo {
                  width: 30%;
                  height: 100%;
                  display: inline-block;
                  vertical-align: middle;
                  img {
                    height: 94%;
                  }
                }
                .logoName {
                  width: 68%;
                  font-size: 20px;
                  font-family: SourceHanSansCN-Light;
                  font-weight: 300;
                  color: rgba(102, 102, 102, 1);
                  display: inline-block;
                  letter-spacing: 4px;
                }
              }
            }
            li:last-child {
              border-bottom: 1px solid rgba(51, 51, 51, 0.3);
            }
          }
          .pagenation {
            padding-top: 38px;
          }
        }
      }
    }
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
}
</style>
