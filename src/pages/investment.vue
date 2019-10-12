<template>
  <div>
    <swiper :turnData="turnData"></swiper>
    <div class="conent">
      <table></table>
      <div class="first_floor" id="policylist" name="policylist">
        <h1 class="policy_title" id="txt">产业政策</h1>
        <div class="policy">
          <ul class="policy_content">
            <li class="policy_item" v-for="item in policy" :key="item">
              <router-link class="policy_a" to="policy">
                <div class="policy_list">{{item}}</div>
                <span>
                  <img src="./../images/chanye/right.png" alt />
                </span>
              </router-link>
            </li>
          </ul>
        </div>
        <page></page>
      </div>
      <div class="sencod_floor" id="valuelist" name="valuelist">
        <div class="area_container">
          <div class="area_content area_value1">
            <h2 class="title">区位价值</h2>
            <div class="cont">
              <div class="cont_1">
                <div class="cont_title">成都：全国重要的“五中心一枢纽”</div>
                <div class="cont_desc">四川省省会，面积1.68万平方公里，实际管理人口2030万。全国重要的五中心一枢纽，正加紧建设全面体现新发展理念的城市</div>
              </div>
              <div class="cont_2">
                <ul>
                  <li v-for="item in keyword" :key="item">{{item}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="area_pic area_first">
            <img src="../../src/images/index/investment/bg2.png" alt />
            <div>
              <h3 class="area_title">2018年 成都市GDP突破1.5万亿，比上年增长8.0%</h3>
              <p
                class="area_desc"
              >成都市着力重塑城市产业经济地理，以高质量发展为取向，大力转变经济工作zu方式，规划建设66个产业功能区和28个产业生态圈，构建以五大先进制造业、五大现代服务业和新经济为支撑的现代产业体系</p>
            </div>
          </div>
          <div class="area_pic">
            <img src="../../src/images/index/investment/zu25.png" alt />
          </div>
          <div class="area_content area_value2">
            <div class="cont_1 contPadding1">
              <div class="cont_title">天府新区——再造一个新成都</div>
              <div class="cont_desc">
                <p>1951年，中国西部最大的城市中心广场——天府广场竣工，成就了成都市的政治、经济、文化和商业中心</p>

                <p>1964年，跨国防、科技、工业、交通领域的三线基地建设，正式提出西南以四川为重点迈开步伐</p>

                <p>2010年，成都市人民政府整体南迁，政治中心向南转移</p>

                <p>2014年，成都天府新区成为国家级天府新区，战略性新兴产业、现代制造业和高端服务业聚集效应明显，再造一座新成都</p>
              </div>
            </div>
          </div>
          <div class="area_content area_value3">
            <div class="cont_1 contPadding2">
              <div class="cont_title">千亿级电子信息生态圈</div>
              <div class="cont_desc">
                <p>双流区2025发展规划———打造千亿级电子信息产业生态圈，力争到2020年，电子信息产值超过1200亿、本地配套率60%以上</p>
              </div>
            </div>
          </div>
          <div class="area_pic">
            <img src="../../src/images/index/investment/zu26.png" alt />
          </div>
          <div class="area_pic">
            <img src="../../src/images/index/investment/zu27.png" alt />
          </div>
          <div class="area_content area_value4">
            <div class="cont_1 contPadding3">
              <div class="cont_title">城市配套</div>
              <div class="cont_desc">
                <p>天府怡心湖城市规划——成都三大产能湖之一；规划面积8.4平方公里；“产城湖一体”的湖滨新城；电子信息产城新标杆</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="three_floor" id="atmoslist" name="atmoslist">
        <div class="atmos_wrapper">
          <div class="atmos_title">产业氛围</div>
          <div class="atmos">
            <div class="atmos_desc">
              <div class="atmos_desc_title">成都市电子信息产业规模7366亿元</div>
              <div class="atmos_desc_content">
                <p>重点围绕集成电路、电子元器件、网络通信、光电显示、云计算、物联网等产业，先后引进京东方、深天马、中国电子、格罗方德、紫光、德州仪器、富士康、IBM、英特尔、戴尔、联想、华为、腾讯等一批重点企业。全球重要的电子信息产业基地和国内电子信息产业重要增长极</p>

                <p>2020年，成都全市电子信息产业主营业务收入突破1万亿元</p>

                <p>2022年打造成为全球电子信息高端研发制造基地和世界软件名城</p>
              </div>
            </div>
            <div class="atmos_logo">
              <ul>
                <li>
                  <img src="../../src/images/index/investment/zu28.png" alt />
                </li>
                <li>
                  <img src="../../src/images/index/investment/zu29.png" alt />
                </li>
                <li>
                  <img src="../../src/images/index/investment/zu30.png" alt />
                </li>
                <li>
                  <img src="../../src/images/index/investment/zu31.png" alt />
                </li>
                <li>
                  <img src="../../src/images/index/investment/zu32.png" alt />
                </li>
                <li>
                  <img src="../../src/images/index/investment/zu33.png" alt />
                </li>
                <li>
                  <img src="../../src/images/index/investment/zu34.png" alt />
                </li>
                <li>
                  <img src="../../src/images/index/investment/cete.png" alt />
                </li>
                <li>
                  <img src="../../src/images/index/investment/cete1.png" alt />
                </li>
              </ul>
            </div>
          </div>
          <div class="atmo_pic">
            <div class="atmo_pic_cont">
              <p>双流重点发展集成电路、新型显示、智能终端、信息安全、物联网、大数据和云计算、打造中西部一流的电子信息产业集群基地，力争2020年形成千亿级电子信息产业生态圈</p>
              <h4>电子信息产业代表企业</h4>
              <p>中国电子、中电熊猫、中国电科、瓴盛科技、紫光、海威华芯、嘉纳海威、雷电微晶、申威科技、新易盛、储翰科技、优博创、澜起科技、华大半导体...</p>
            </div>
          </div>
          <!-- <div class="atmo_detail"> -->
            <!-- <div class="detail">
              <div class="detail_left">
                <p>园区企业数量：106家</p>
                <p>2018年园区产值：10亿</p>
                <p>高层次人才：23人</p>
                <p>主板上市公司：3家</p>
              </div>
              <div class="vertical_line"></div>
              <div class="detail_right">
                <p>入驻企业数量：45家</p>
                <p>园区人员：1000人</p>
                <p>/</p>
                <p>新三板公司：7家</p>
              </div>
            </div> -->
            <!-- <div class="carousel"> -->
              <!-- <div class="swiper-container carousel_pic" id="investSwp">
                <ul class="swiper-wrapper">
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo1.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo1.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo1.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo1.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo2.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo2.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo2.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo2.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo3.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo3.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo3.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo3.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo4.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo4.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo4.png" alt />
                  </li>
                  <li class="swiper-slide">
                    <img src="./../images/index/investment/lunbo4.png" alt />
                  </li>
                </ul>
              </div>
              <div class="swiper-button-prev leftBtn"></div>
              <div class="swiper-button-next rightBtn"></div> -->
              <!-- <div class="leftBtn">
                <img src="./../images/index/investment/left.png" alt />
              </div>
              <div class="rightBtn">
                <img src="./../images/index/investment/right.png" alt />
              </div>-->
            <!-- </div> -->
          <!-- </div> -->
        </div>
      </div>
      <div class="four_floor" id="investlist" name="investlist">
        <div class="invest_wrapper">
          <div class="invest_title">产业招商</div>
          <div class="invest_pic">
            <ul>
              <li>
                <router-link to="apartment">
                  <img src="./../images/index/investment/zu37.png" alt />
                  <p>AB户型</p>
                </router-link>
                <div class="invest_pic_hover">
                  <img src="./../images/index/investment/zu37.png" alt />
                </div>
              </li>
              <li>
                <router-link to="apartment">
                  <img src="./../images/index/investment/zu38.png" alt />
                  <p>C户型</p>
                </router-link>
                <div class="invest_pic_hover">
                  <img src="./../images/index/investment/zu38.png" alt />
                </div>
              </li>
              <li>
                <router-link to="apartment">
                  <img src="./../images/index/investment/zu39.png" alt />
                  <p>D1户型</p>
                </router-link>
                <div class="invest_pic_hover">
                  <img src="./../images/index/investment/zu39.png" alt />
                </div>
              </li>
              <li>
                <router-link to="apartment">
                  <img src="./../images/index/investment/zu40.png" alt />
                  <p>D户型</p>
                </router-link>
                <div class="invest_pic_hover">
                  <img src="./../images/index/investment/zu40.png" alt />
                </div>
              </li>
            </ul>
          </div>
          <div class="invest_rest">
            <!-- <div class="invest_logo">
              <img src="./../images/index/investment/logo.png" alt />
            </div> -->
            <!-- <div class="vertical_line2"></div> -->
            <div class="introduce">
              <div class="intro_title">招商方向</div>
              <div class="intro_content">
                <p>
                  1、
                  <strong>主导产业</strong>：电子信息类科技型企业，国企、央企及上市公司
                </p>
                <p>
                  2、
                  <strong>可租可售</strong>：租赁：200——5000㎡不等，租金：清水45元/㎡/月、装修带家具60元/㎡/月，第二年起每年递增6%，租期1年-3年不等
                  <br />
                </p>
                <p style="margin-left:118px;">购买：500-10000㎡不等，售价：9800元/㎡起</p>
                <p>3、物业管理费6元/㎡/月，水电费按实际标准支付</p>
                <p>
                  4、
                  <strong>产权办理条件</strong>：在双流区成立独立法人公司一年以上，并达到税收300元
                </p>
                <p>
                  5、
                  <strong>招商电话</strong>：62151000
                </p>
              </div>
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
import Swiper from "../../node_modules/swiper/dist/js/swiper";
import bottom from "../components/bottom";
import page from "../components/page";

export default {
  data() {
    return {
      policy: [
        "— （川财企〔2017〕4号）四川省中小企业发展专项017〕4号）四川省中小企业发展专项017〕4号）四川省中小企业发展专项资金管理暂行办法",
        "— （川财企〔2017〕4号）四川省中小企业发展专项资金管理暂行办法",
        "— （川财企〔2017〕4号）四川省中小企业发展专项资金管理暂行办法",
        "— （川财企〔2017〕4号）四川省中小企业发展专项017〕4号）四川省中小企业发展专项017〕4号）四川省中小企业发展专项资金管理暂行办法",
        "— （川财企〔2017〕4号）四川省中小企业发展专项017〕4号）四川省中小企业发展专项017〕4号）四川省中小企业发展专项资金管理暂行办法",
        "— （川财企〔2017〕4号）四川省中小企业发展专项017〕4号）四川省中小企业发展专项017〕4号）四川省中小企业发展专项资金管理暂行办法"
      ],
      keyword: [
        "国际综合交通通信",
        "科技中心",
        "经济中心",
        "文创中心",
        "对外交通中心",
        "金融中心"
      ],
      turnData: "policylist"
    };
  },
  created() {
    this.$nextTick(() => {
      this.getlocal();
    });
  },
  mounted() {},
  components: {
    swiper,
    bottom,
    page
  },
  mounted() {
    var swiper = new Swiper("#investSwp", {
      slidesPerView: 4,
      // spaceBetween: 10,
      slidesPerGroup: 4,
      // loopFillGroupWithBlank: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    let that = this;
    that.$nextTick(function() {
      window.addEventListener("scroll", that.handleScroll);
    });

    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });

    // this.aaa();
    this.$axios({
      method: "post",
      url: "http://hx.com/api/home/attract",
      data: ""
    }).then(res => {
      console.log(res);
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
    // aaa(){
    //   Vue.axios.get('hx.com/api/home/attract').then((response) => {
    //     console.log(response)
    //   })
    // }
    //   getNewsList(){
    //     this.axios.get('hx.com/api/home/attract').then((response)=>{
    //       // this.newsList=response.data.data;
    //       alert(response);
    //     }).catch((response)=>{
    //       console.log(response);
    //     })
    // }
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
    background-color: #ffffff;
    margin: 0 auto;
    margin-top: 40px;
    box-sizing: border-box;
    padding: 0 40px 40px 40px;
    .policy_title {
      width: 100%;
      height: 80px;
      font-size: 36px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: #333333;
      display: flex;
      align-items: center;
    }
    .policy {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 35px;
      .policy_content {
        width: 100%;
        height: 240px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        box-sizing: border-box;
        .policy_item {
          width: 46%;
          height: 70px;
          font-size: 24px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          color: #666666;
          border-bottom: 2px solid rgba(0, 0, 0, 0.2);
          list-style: none;
          display: flex;
          align-items: center;
          .policy_a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .policy_list {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 90%;
              cursor: pointer;
            }
            span {
              cursor: pointer;
              width: 8px;
              height: 16px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
  .sencod_floor {
    width: 90%;
    background-color: #ffffff;
    margin: 0 auto;
    margin-top: 40px;
    box-sizing: border-box;
    padding: 0 40px 40px 40px;
    .area_container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .area_value1 {
        width: 50%;
        height: 444px;
        padding-right: 60px;
        box-sizing: border-box;
        .area_content {
          width: 100%;
        }
        .title {
          height: 80px;
          display: flex;
          align-items: center;
          font-size: 36px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #333333;
        }
        .cont {
          width: 100%;
          .cont_1 {
            width: 100%;
            height: 163px;
            .cont_title {
              height: 80px;
              font-size: 24px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 18px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 36px;
            }
          }
          .cont_2 {
            border-top: 2px dashed rgba(51, 51, 51, 0.2);
            width: 100%;
            font-size: 18px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #333333;
            ul {
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-wrap: wrap;
              li {
                list-style: none;
                margin-top: 40px;
                font-weight: 700;
              }
            }
          }
        }
      }
      .area_first {
        width: 50%;
        height: 444px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        div {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          h3 {
            width: 100%;
            font-size: 24px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #ffffff;
            text-align: center;
          }
          p {
            width: 100%;
            font-size: 18px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #ffffff;
            padding: 0 80px;
            line-height: 30px;
          }
        }
      }
      .area_pic {
        width: 50%;
        height: 444px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .area_value2 {
        width: 50%;
        height: 444px;
        box-sizing: border-box;
        padding: 0 40px 40px 40px;
        .contPadding1 {
          width: 100%;
          height: 100%;
          .cont_title {
            height: 80px;
            font-size: 24px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #333333;
            display: flex;
            align-items: center;
          }
          .cont_desc {
            width: 100%;
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #666666;
            line-height: 36px;
            p {
              margin-bottom: 32px;
            }
          }
        }
      }
      .area_value3 {
        width: 50%;
        height: 444px;
        .contPadding2 {
          width: 100%;
          .cont_title {
            height: 80px;
            font-size: 24px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #333333;
            display: flex;
            align-items: center;
          }
          .cont_desc {
            width: 100%;
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #666666;
            line-height: 36px;
            p {
              margin-bottom: 32px;
            }
          }
        }
      }
      .area_value4 {
        width: 50%;
        height: 444px;
        box-sizing: border-box;
        padding: 0 40px 40px 40px;
        .contPadding3 {
          width: 100%;
          height: 100%;
          .cont_title {
            height: 80px;
            font-size: 24px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #333333;
            display: flex;
            align-items: center;
          }
          .cont_desc {
            width: 100%;
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #666666;
            line-height: 36px;
            p {
              margin-bottom: 32px;
            }
          }
        }
      }
    }
  }
  .three_floor {
    width: 90%;
    background-color: #ffffff;
    margin: 0 auto;
    margin-top: 40px;
    .atmos_wrapper {
      padding: 0 40px 40px 40px;
      box-sizing: border-box;
      width: 100%;
      .atmos_title {
        height: 80px;
        font-size: 36px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: #333333;
        display: flex;
        align-items: center;
      }
      .atmos {
        width: 100%;
        height: 450px;
        display: flex;
        .atmos_desc {
          width: 50%;
          .atmos_desc_title {
            height: 80px;
            font-size: 24px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #333333;
            display: flex;
            align-items: center;
          }
          .atmos_desc_content {
            width: 100%;
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #666666;
            line-height: 36px;
            p {
              padding-top: 20px;
            }
          }
        }
        .atmos_logo {
          width: 50%;
          ul {
            display: flex;
            padding-left: 40px;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
              list-style: none;
              width: 30%;
              img {
                width: 100%;
              }
            }
          }
        }
      }
      .atmo_pic {
        height: 424px;
        width: 100%;
        background: url(/static/img/bg.a1766c4.png);
        .atmo_pic_cont {
          width: 50%;
          height: 100%;
          float: right;
          padding: 60px 40px 0 20px;
          box-sizing: border-box;
          p {
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #ffffff;
            line-height: 36px;
          }
          h4 {
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #ffffff;
            line-height: 36px;
            font-weight: bold;
            margin: 40px 0 10px 0;
          }
        }
      }
      .atmo_detail {
        width: 100%;
        height: 230px;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .detail {
          width: 30%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .detail_left {
            width: 40%;
            height: 100%;
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #808080;
            line-height: 48px;
            border-right: 2px dashed rgba(51, 51, 51, 0.2);
          }
          .detail_right {
            width: 40%;
            height: 100%;
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #808080;
            line-height: 48px;
          }
        }
        .carousel {
          width: 64%;
          height: 161px;
          margin-top: 15px;
          position: relative;
          overflow: hidden;
          .carousel_pic {
            width: 1036px;
            ul {
              display: flex;
              justify-content: space-between;
              li {
                list-style: none;
                margin-left: 13px !important;
                margin-right: 13px !important;
                width: 22.5% !important;
              }
            }
          }
        }
      }
    }
  }
  .four_floor {
    width: 90%;
    height: 767px;
    background-color: #ffffff;
    margin: 40px auto;
    box-sizing: border-box;
    padding: 0 40px 40px 40px;
    .invest_wrapper {
      width: 100%;
      .invest_title {
        height: 80px;
        font-size: 36px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: #333333;
        display: flex;
        align-items: center;
      }
      .invest_pic {
        width: 100%;
        ul {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          li {
            list-style: none;
            width: 20%;
            a {
              text-decoration: none;
              width: 100%;
              img {
                width: 100%;
              }
              p {
                width: 100%;
                height: 60px;
                font-size: 24px;
                font-family: SourceHanSansCN-Regular;
                font-weight: 400;
                color: #333333;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
            .invest_pic_hover {
              display: none;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              z-index: 999;
              margin: 0 auto;
              background: red;
              width: 700px;
              height: 405px;
              img {
                width: 100%;
                height: auto;
              }
            }
          }
        }
      }
      .invest_rest {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        .invest_logo {
          width: 25%;
          height: 100%;
          border-right: 2px solid rgba(51, 51, 51, 0.2);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 40%;
            height: auto;
          }
        }
        .introduce {
          height: 100%;
          width: 75%;
          box-sizing: border-box;
          // padding-left: 3%;
          .intro_title {
            height: 60px;
            font-size: 24px;
            font-family: SourceHanSansCN-Bold;
            font-weight: bold;
            color: #333333;
            display: flex;
            align-items: center;
          }
          .intro_content {
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #808080;
            line-height: 30px;
            p {
              margin-bottom: 15px;
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
      margin-top: 40px;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .policy_title {
        width: 100%;
        height: 60px;
        font-size: 24px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: #333333;
        display: flex;
        align-items: center;
      }
      .policy {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 35px;
        .policy_content {
          width: 100%;
          height: 420px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          box-sizing: border-box;
          .policy_item {
            width: 100%;
            height: 70px;
            font-size: 14px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #666666;
            border-bottom: 2px solid rgba(0, 0, 0, 0.2);
            list-style: none;
            display: flex;
            align-items: center;
            .policy_a {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              .policy_list {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 90%;
                cursor: pointer;
              }
              span {
                cursor: pointer;
                width: 8px;
                height: 16px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
    .sencod_floor {
      width: 90%;
      background-color: #ffffff;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .area_container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .area_value1 {
          width: 100%;
          // height: 340px;
          height: auto;
          padding-right: 0;
          box-sizing: border-box;
          .area_content {
            width: 100%;
          }
          .title {
            height: 60px;
            display: flex;
            align-items: center;
            font-size: 26px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #333333;
          }
          .cont {
            width: 100%;
            .cont_1 {
              width: 100%;
              height: 163px;
              .cont_title {
                height: 60px;
                font-size: 16px;
                font-family: SourceHanSansCN-Regular;
                font-weight: 400;
                color: #333333;
                display: flex;
                align-items: center;
              }
              .cont_desc {
                width: 100%;
                font-size: 14px;
                font-family: SourceHanSansCN-Light;
                font-weight: 300;
                color: #666666;
                line-height: 24px;
              }
            }
            .cont_2 {
              border-top: 2px dashed rgba(51, 51, 51, 0.2);
              width: 100%;
              font-size: 12px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              ul {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                li {
                  list-style: none;
                  margin-top: 10px;
                  margin-right: 20px;
                  font-weight: 700;
                }
              }
            }
          }
        }
        .area_first {
          width: 50%;
          height: 340px !important;
          position: relative;
          display: none;
          img {
            width: 100%;
            height: 100%;
          }
          div {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            h3 {
              width: 100%;
              font-size: 18px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #ffffff;
              text-align: center;
            }
            p {
              width: 100%;
              font-size: 14px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #ffffff;
              padding: 0 80px;
              line-height: 26px;
            }
          }
        }
        .area_pic {
          width: 50%;
          height: 340px;
          display: none;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .area_value2 {
          width: 100%;
          // height: 350px;
          height: auto;
          box-sizing: border-box;
          padding: 0;
          .contPadding1 {
            width: 100%;
            height: 100%;
            .cont_title {
              height: 60px;
              font-size: 18px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 14px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 24px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
        .area_value3 {
          width: 80%;
          // height: 170px;
          height: auto;
          .contPadding2 {
            width: 100%;
            .cont_title {
              height: 60px;
              font-size: 18px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 14px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
        .area_value4 {
          width: 80%;
          // height: 120px;
          height: auto;
          box-sizing: border-box;
          padding: 0;
          .contPadding3 {
            width: 100%;
            height: 100%;
            .cont_title {
              height: 60px;
              font-size: 18px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 14px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
      }
    }
    .three_floor {
      width: 90%;
      background-color: #ffffff;
      margin: 0 auto;
      margin-top: 40px;
      .atmos_wrapper {
        padding: 0 40px 40px 40px;
        box-sizing: border-box;
        width: 100%;
        .atmos_title {
          height: 60px;
          font-size: 26px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #333333;
          display: flex;
          align-items: center;
        }
        .atmos {
          width: 100%;
          height: auto;
          display: flex;
          flex-wrap: wrap;
          .atmos_desc {
            width: 100%;
            height: auto;
            .atmos_desc_title {
              height: 60px;
              font-size: 16px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .atmos_desc_content {
              width: 100%;
              font-size: 14px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                padding-top: 10px;
              }
            }
          }
          .atmos_logo {
            display: none;
            width: 100%;
            height: auto;
            ul {
              display: flex;
              padding-left: 40px;
              flex-wrap: wrap;
              justify-content: space-between;
              li {
                list-style: none;
                width: 50%;
                img {
                  width: 100%;
                }
              }
            }
          }
        }
        .atmo_pic {
          height: 300px;
          width: 100%;
          background: url(/static/img/bg.a1766c4.png);
          .atmo_pic_cont {
            width: 100%;
            height: 100%;
            float: right;
            padding: 12px 30px 0 20px;
            box-sizing: border-box;
            p {
              font-size: 14px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #ffffff;
              line-height: 24px;
            }
            h4 {
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #ffffff;
              line-height: 36px;
              font-weight: bold;
              margin: 16px 0 10px 0;
            }
          }
        }
        .atmo_detail {
          width: 100%;
          height: auto;
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .detail {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            .detail_left {
              width: 100%;
              height: 100%;
              font-size: 14px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 24px;
              border-right: none;
            }
            .detail_right {
              width: 100%;
              height: 100%;
              font-size: 14px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 24px;
            }
          }
          .carousel {
            width: 100%;
            height: 161px;
            margin-top: 15px;
            position: relative;
            overflow: hidden;
            .carousel_pic {
              width: 1036px;
              ul {
                display: flex;
                justify-content: space-between;
                li {
                  list-style: none;
                  margin-left: 13px !important;
                  margin-right: 13px !important;
                  width: 22.5% !important;
                }
              }
            }
          }
        }
      }
    }
    .four_floor {
      width: 90%;
      height: 700px;
      background-color: #ffffff;
      margin: 40px auto;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .invest_wrapper {
        width: 100%;
        .invest_title {
          height: 60px;
          font-size: 24px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #333333;
          display: flex;
          align-items: center;
        }
        .invest_pic {
          width: 100%;
          ul {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            li {
              list-style: none;
              width: 20%;
              a {
                text-decoration: none;
                width: 100%;
                img {
                  width: 100%;
                }
                p {
                  width: 100%;
                  height: 30px;
                  font-size: 16px;
                  font-family: SourceHanSansCN-Regular;
                  font-weight: 400;
                  color: #333333;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
              .invest_pic_hover {
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                z-index: 999;
                margin: 0 auto;
                background: red;
                width: 700px;
                height: 405px;
                img {
                  width: 100%;
                  height: auto;
                }
              }
            }
          }
        }
        .invest_rest {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 40px;
          .invest_logo {
            width: 100%;
            height: 80px;
            border-right: none;
            display: flex;
            justify-content: center;
            img {
              width: 20%;
              height: auto;
            }
          }
          .introduce {
            height: 300px;
            width: 100%;
            box-sizing: border-box;
            padding-left: 3%;
            .intro_title {
              height: 40px;
              font-size: 20px;
              font-family: SourceHanSansCN-Bold;
              font-weight: bold;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .intro_content {
              font-size: 18px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 30px;
              p {
                margin-bottom: 8px;
                font-size: 14px;
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
      margin-top: 40px;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .policy_title {
        width: 100%;
        height: 60px;
        font-size: 24px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: #333333;
        display: flex;
        align-items: center;
      }
      .policy {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 35px;
        .policy_content {
          width: 100%;
          height: 420px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          box-sizing: border-box;
          .policy_item {
            width: 100%;
            height: 70px;
            font-size: 14px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #666666;
            border-bottom: 2px solid rgba(0, 0, 0, 0.2);
            list-style: none;
            display: flex;
            align-items: center;
            .policy_a {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              .policy_list {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 90%;
                cursor: pointer;
              }
              span {
                cursor: pointer;
                width: 8px;
                height: 16px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
    .sencod_floor {
      width: 90%;
      background-color: #ffffff;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .area_container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .area_value1 {
          width: 100%;
          height: 340px;
          // padding-right: 60px;
          box-sizing: border-box;
          .area_content {
            width: 100%;
          }
          .title {
            height: 60px;
            display: flex;
            align-items: center;
            font-size: 26px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #333333;
          }
          .cont {
            width: 100%;
            .cont_1 {
              width: 100%;
              height: 163px;
              .cont_title {
                height: 60px;
                font-size: 16px;
                font-family: SourceHanSansCN-Regular;
                font-weight: 400;
                color: #333333;
                display: flex;
                align-items: center;
              }
              .cont_desc {
                width: 100%;
                font-size: 14px;
                font-family: SourceHanSansCN-Light;
                font-weight: 300;
                color: #666666;
                line-height: 24px;
              }
            }
            .cont_2 {
              border-top: 2px dashed rgba(51, 51, 51, 0.2);
              width: 100%;
              font-size: 12px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              ul {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                li {
                  list-style: none;
                  margin-top: 10px;
                  margin-right: 20px;
                  font-weight: 700;
                }
              }
            }
          }
        }
        .area_first {
          width: 50%;
          height: 340px !important;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          div {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            h3 {
              width: 100%;
              font-size: 18px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #ffffff;
              text-align: center;
            }
            p {
              width: 100%;
              font-size: 14px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #ffffff;
              padding: 0 80px;
              line-height: 26px;
            }
          }
        }
        .area_pic {
          width: 50%;
          height: 340px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .area_value2 {
          width: 100%;
          height: 260px;
          box-sizing: border-box;
          padding: 0;
          .contPadding1 {
            width: 100%;
            height: 100%;
            .cont_title {
              height: 60px;
              font-size: 18px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 14px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 24px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
        .area_value3 {
          width: 100%;
          height: 170px;
          .contPadding2 {
            width: 100%;
            .cont_title {
              height: 60px;
              font-size: 18px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 14px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
        .area_value4 {
          width: 100%;
          height: 120px;
          box-sizing: border-box;
          padding: 0;
          .contPadding3 {
            width: 100%;
            height: 100%;
            .cont_title {
              height: 60px;
              font-size: 18px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 14px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
      }
    }
    .three_floor {
      width: 90%;
      background-color: #ffffff;
      margin: 0 auto;
      margin-top: 40px;
      .atmos_wrapper {
        padding: 0 40px 40px 40px;
        box-sizing: border-box;
        width: 100%;
        .atmos_title {
          height: 60px;
          font-size: 26px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #333333;
          display: flex;
          align-items: center;
        }
        .atmos {
          width: 100%;
          // height: 450px;
          display: flex;
          .atmos_desc {
            width: 100%;
            .atmos_desc_title {
              height: 60px;
              font-size: 16px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .atmos_desc_content {
              width: 100%;
              font-size: 14px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                padding-top: 10px;
              }
            }
          }
          .atmos_logo {
            width: 50%;
            ul {
              display: flex;
              padding-left: 40px;
              flex-wrap: wrap;
              justify-content: space-between;
              li {
                list-style: none;
                width: 50%;
                img {
                  width: 100%;
                }
              }
            }
          }
        }
        .atmo_pic {
          height: 300px;
          width: 100%;
          background: url(/static/img/bg.a1766c4.png);
          .atmo_pic_cont {
            width: 50%;
            height: 100%;
            float: right;
            padding: 12px 30px 0 20px;
            box-sizing: border-box;
            p {
              font-size: 14px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #ffffff;
              line-height: 24px;
            }
            h4 {
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #ffffff;
              line-height: 36px;
              font-weight: bold;
              margin: 16px 0 10px 0;
            }
          }
        }
        .atmo_detail {
          width: 100%;
          height: auto;
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .detail {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .detail_left {
              width: 40%;
              height: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 36px;
              border-right: none;
            }
            .detail_right {
              width: 40%;
              height: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 36px;
            }
          }
          .carousel {
            width: 100%;
            height: 161px;
            margin-top: 15px;
            position: relative;
            overflow: hidden;
            .carousel_pic {
              width: 1036px;
              ul {
                display: flex;
                justify-content: space-between;
                li {
                  list-style: none;
                  margin-left: 13px !important;
                  margin-right: 13px !important;
                  width: 22.5% !important;
                }
              }
            }
          }
        }
      }
    }
    .four_floor {
      width: 90%;
      height: 520px;
      background-color: #ffffff;
      margin: 40px auto;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      // height: 400px;
      .invest_wrapper {
        width: 100%;
        .invest_title {
          height: 60px;
          font-size: 24px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #333333;
          display: flex;
          align-items: center;
        }
        .invest_pic {
          width: 100%;
          ul {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            li {
              list-style: none;
              width: 20%;
              a {
                text-decoration: none;
                width: 100%;
                img {
                  width: 100%;
                }
                p {
                  width: 100%;
                  height: 30px;
                  font-size: 16px;
                  font-family: SourceHanSansCN-Regular;
                  font-weight: 400;
                  color: #333333;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
              .invest_pic_hover {
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                z-index: 999;
                margin: 0 auto;
                background: red;
                width: 700px;
                height: 405px;
                img {
                  width: 100%;
                  height: auto;
                }
              }
            }
          }
        }
        .invest_rest {
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 40px;
          .invest_logo {
            width: 25%;
            height: 100%;
            border-right: 2px solid rgba(51, 51, 51, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 80%;
              height: auto;
            }
          }
          .introduce {
            height: 100%;
            width: 70%;
            box-sizing: border-box;
            padding-left: 3%;
            .intro_title {
              height: 40px;
              font-size: 20px;
              font-family: SourceHanSansCN-Bold;
              font-weight: bold;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .intro_content {
              font-size: 18px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 30px;
              p {
                margin-bottom: 8px;
                font-size: 14px;
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
      margin-top: 40px;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .policy_title {
        width: 100%;
        height: 60px;
        font-size: 30px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: #333333;
        display: flex;
        align-items: center;
      }
      .policy {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 35px;
        .policy_content {
          width: 100%;
          height: 240px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          box-sizing: border-box;
          .policy_item {
            width: 46%;
            height: 70px;
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #666666;
            border-bottom: 2px solid rgba(0, 0, 0, 0.2);
            list-style: none;
            display: flex;
            align-items: center;
            .policy_a {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              .policy_list {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 90%;
                cursor: pointer;
              }
              span {
                cursor: pointer;
                width: 8px;
                height: 16px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
    .sencod_floor {
      width: 90%;
      background-color: #ffffff;
      margin: 0 auto;
      margin-top: 40px;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .area_container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .area_value1 {
          width: 50%;
          height: 340px;
          padding-right: 60px;
          box-sizing: border-box;
          .area_content {
            width: 100%;
          }
          .title {
            height: 6 0px;
            display: flex;
            align-items: center;
            font-size: 30px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #333333;
          }
          .cont {
            width: 100%;
            .cont_1 {
              width: 100%;
              height: 163px;
              .cont_title {
                height: 60px;
                font-size: 20px;
                font-family: SourceHanSansCN-Regular;
                font-weight: 400;
                color: #333333;
                display: flex;
                align-items: center;
              }
              .cont_desc {
                width: 100%;
                font-size: 16px;
                font-family: SourceHanSansCN-Light;
                font-weight: 300;
                color: #666666;
                line-height: 30px;
              }
            }
            .cont_2 {
              border-top: 2px dashed rgba(51, 51, 51, 0.2);
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              ul {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                li {
                  list-style: none;
                  margin-top: 20px;
                  margin-right: 20px;
                  font-weight: 700;
                }
              }
            }
          }
        }
        .area_first {
          width: 50%;
          height: 340px !important;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          div {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            h3 {
              width: 100%;
              font-size: 20px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #ffffff;
              text-align: center;
            }
            p {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #ffffff;
              padding: 0 80px;
              line-height: 26px;
            }
          }
        }
        .area_pic {
          width: 50%;
          height: 340px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .area_value2 {
          width: 50%;
          height: 340px;
          box-sizing: border-box;
          padding: 0 40px 40px 40px;
          .contPadding1 {
            width: 100%;
            height: 100%;
            .cont_title {
              height: 60px;
              font-size: 22px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 24px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
        .area_value3 {
          width: 50%;
          height: 340px;
          .contPadding2 {
            width: 100%;
            .cont_title {
              height: 60px;
              font-size: 22px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
        .area_value4 {
          width: 50%;
          height: 340px;
          box-sizing: border-box;
          padding: 0 40px 40px 40px;
          .contPadding3 {
            width: 100%;
            height: 100%;
            .cont_title {
              height: 60px;
              font-size: 22px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
      }
    }
    .three_floor {
      width: 90%;
      background-color: #ffffff;
      margin: 0 auto;
      margin-top: 40px;
      .atmos_wrapper {
        padding: 0 40px 40px 40px;
        box-sizing: border-box;
        width: 100%;
        .atmos_title {
          height: 60px;
          font-size: 30px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #333333;
          display: flex;
          align-items: center;
        }
        .atmos {
          width: 100%;
          // height: 450px;
          display: flex;
          .atmos_desc {
            width: 50%;
            .atmos_desc_title {
              height: 60px;
              font-size: 18px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .atmos_desc_content {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                padding-top: 10px;
              }
            }
          }
          .atmos_logo {
            width: 50%;
            ul {
              display: flex;
              padding-left: 40px;
              flex-wrap: wrap;
              justify-content: space-between;
              li {
                list-style: none;
                width: 50%;
                img {
                  width: 100%;
                }
              }
            }
          }
        }
        .atmo_pic {
          height: 300px;
          width: 100%;
          background: url(/static/img/bg.a1766c4.png);
          .atmo_pic_cont {
            width: 50%;
            height: 100%;
            float: right;
            padding: 20px 30px 0 20px;
            box-sizing: border-box;
            p {
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #ffffff;
              line-height: 28px;
            }
            h4 {
              font-size: 18px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #ffffff;
              line-height: 36px;
              font-weight: bold;
              margin: 16px 0 10px 0;
            }
          }
        }
        .atmo_detail {
          width: 100%;
          height: auto;
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
          .detail {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .detail_left {
              width: 40%;
              height: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 36px;
              border-right: none;
            }
            .detail_right {
              width: 40%;
              height: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 36px;
            }
          }
          .carousel {
            width: 100%;
            height: 161px;
            margin-top: 15px;
            position: relative;
            overflow: hidden;
            .carousel_pic {
              width: 1036px;
              ul {
                display: flex;
                justify-content: space-between;
                li {
                  list-style: none;
                  margin-left: 13px !important;
                  margin-right: 13px !important;
                  width: 22.5% !important;
                }
              }
            }
          }
        }
      }
    }
    .four_floor {
      width: 90%;
      height: 600px;
      background-color: #ffffff;
      margin: 40px auto;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .invest_wrapper {
        width: 100%;
        .invest_title {
          height: 60px;
          font-size: 30px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #333333;
          display: flex;
          align-items: center;
        }
        .invest_pic {
          width: 100%;
          ul {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            li {
              list-style: none;
              width: 20%;
              a {
                text-decoration: none;
                width: 100%;
                img {
                  width: 100%;
                }
                p {
                  width: 100%;
                  height: 60px;
                  font-size: 20px;
                  font-family: SourceHanSansCN-Regular;
                  font-weight: 400;
                  color: #333333;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
              .invest_pic_hover {
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                z-index: 999;
                margin: 0 auto;
                background: red;
                width: 700px;
                height: 405px;
                img {
                  width: 100%;
                  height: auto;
                }
              }
            }
          }
        }
        .invest_rest {
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 40px;
          .invest_logo {
            width: 25%;
            height: 100%;
            border-right: 2px solid rgba(51, 51, 51, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 80%;
              height: auto;
            }
          }
          .introduce {
            height: 100%;
            width: 75%;
            box-sizing: border-box;
            padding-left: 3%;
            .intro_title {
              height: 60px;
              font-size: 20px;
              font-family: SourceHanSansCN-Bold;
              font-weight: bold;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .intro_content {
              font-size: 18px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 30px;
              p {
                margin-bottom: 10px;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .conent {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .first_floor {
      width: 90%;
      margin: 0 auto;
      margin-top: 40px;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .policy_title {
        width: 100%;
        height: 60px;
        font-size: 30px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: #333333;
        display: flex;
        align-items: center;
      }
      .policy {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 35px;
        .policy_content {
          width: 100%;
          height: 240px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          box-sizing: border-box;
          .policy_item {
            width: 46%;
            height: 70px;
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #666666;
            border-bottom: 2px solid rgba(0, 0, 0, 0.2);
            list-style: none;
            display: flex;
            align-items: center;
            .policy_a {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              .policy_list {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 90%;
                cursor: pointer;
              }
              span {
                cursor: pointer;
                width: 8px;
                height: 16px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
    .sencod_floor {
      width: 90%;
      background-color: #ffffff;
      margin: 0 auto;
      margin-top: 40px;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .area_container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .area_value1 {
          width: 50%;
          height: 340px;
          padding-right: 60px;
          box-sizing: border-box;
          .area_content {
            width: 100%;
          }
          .title {
            height: 6 0px;
            display: flex;
            align-items: center;
            font-size: 30px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #333333;
          }
          .cont {
            width: 100%;
            .cont_1 {
              width: 100%;
              height: 163px;
              .cont_title {
                height: 60px;
                font-size: 20px;
                font-family: SourceHanSansCN-Regular;
                font-weight: 400;
                color: #333333;
                display: flex;
                align-items: center;
              }
              .cont_desc {
                width: 100%;
                font-size: 16px;
                font-family: SourceHanSansCN-Light;
                font-weight: 300;
                color: #666666;
                line-height: 30px;
              }
            }
            .cont_2 {
              border-top: 2px dashed rgba(51, 51, 51, 0.2);
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              ul {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                li {
                  list-style: none;
                  margin-top: 20px;
                  margin-right: 20px;
                  font-weight: 700;
                }
              }
            }
          }
        }
        .area_first {
          width: 50%;
          height: 340px !important;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          div {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            h3 {
              width: 100%;
              font-size: 20px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #ffffff;
              text-align: center;
            }
            p {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #ffffff;
              padding: 0 80px;
              line-height: 26px;
            }
          }
        }
        .area_pic {
          width: 50%;
          height: 340px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .area_value2 {
          width: 50%;
          height: 340px;
          box-sizing: border-box;
          padding: 0 40px 40px 40px;
          .contPadding1 {
            width: 100%;
            height: 100%;
            .cont_title {
              height: 60px;
              font-size: 22px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 24px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
        .area_value3 {
          width: 50%;
          height: 340px;
          .contPadding2 {
            width: 100%;
            .cont_title {
              height: 60px;
              font-size: 22px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
        .area_value4 {
          width: 50%;
          height: 340px;
          box-sizing: border-box;
          padding: 0 40px 40px 40px;
          .contPadding3 {
            width: 100%;
            height: 100%;
            .cont_title {
              height: 60px;
              font-size: 22px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
      }
    }
    .three_floor {
      width: 90%;
      background-color: #ffffff;
      margin: 0 auto;
      margin-top: 40px;
      .atmos_wrapper {
        padding: 0 40px 40px 40px;
        box-sizing: border-box;
        width: 100%;
        .atmos_title {
          height: 60px;
          font-size: 30px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #333333;
          display: flex;
          align-items: center;
        }
        .atmos {
          width: 100%;
          // height: 450px;
          display: flex;
          .atmos_desc {
            width: 50%;
            .atmos_desc_title {
              height: 60px;
              font-size: 18px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .atmos_desc_content {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                padding-top: 10px;
              }
            }
          }
          .atmos_logo {
            width: 50%;
            ul {
              display: flex;
              padding-left: 40px;
              flex-wrap: wrap;
              justify-content: space-between;
              li {
                list-style: none;
                width: 30%;
                img {
                  width: 100%;
                }
              }
            }
          }
        }
        .atmo_pic {
          height: 300px;
          width: 100%;
          background: url(/static/img/bg.a1766c4.png);
          .atmo_pic_cont {
            width: 50%;
            height: 100%;
            float: right;
            padding: 20px 30px 0 20px;
            box-sizing: border-box;
            p {
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #ffffff;
              line-height: 28px;
            }
            h4 {
              font-size: 18px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #ffffff;
              line-height: 36px;
              font-weight: bold;
              margin: 16px 0 10px 0;
            }
          }
        }
        .atmo_detail {
          width: 100%;
          height: auto;
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
          .detail {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .detail_left {
              width: 40%;
              height: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 36px;
              border-right: none;
            }
            .detail_right {
              width: 40%;
              height: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 36px;
            }
          }
          .carousel {
            width: 50%;
            height: 161px;
            margin-top: 15px;
            position: relative;
            overflow: hidden;
            .carousel_pic {
              width: 1036px;
              ul {
                display: flex;
                justify-content: space-between;
                li {
                  list-style: none;
                  margin-left: 13px !important;
                  margin-right: 13px !important;
                  width: 22.5% !important;
                }
              }
            }
          }
        }
      }
    }
    .four_floor {
      width: 90%;
      height: 660px;
      background-color: #ffffff;
      margin: 40px auto;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .invest_wrapper {
        width: 100%;
        .invest_title {
          height: 60px;
          font-size: 30px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #333333;
          display: flex;
          align-items: center;
        }
        .invest_pic {
          width: 100%;
          ul {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            li {
              list-style: none;
              width: 20%;
              a {
                text-decoration: none;
                width: 100%;
                img {
                  width: 100%;
                }
                p {
                  width: 100%;
                  height: 60px;
                  font-size: 20px;
                  font-family: SourceHanSansCN-Regular;
                  font-weight: 400;
                  color: #333333;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
              .invest_pic_hover {
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                z-index: 999;
                margin: 0 auto;
                background: red;
                width: 700px;
                height: 405px;
                img {
                  width: 100%;
                  height: auto;
                }
              }
            }
          }
        }
        .invest_rest {
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 40px;
          .invest_logo {
            width: 25%;
            height: 100%;
            border-right: 2px solid rgba(51, 51, 51, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 80%;
              height: auto;
            }
          }
          .introduce {
            height: 100%;
            width: 75%;
            box-sizing: border-box;
            padding-left: 3%;
            .intro_title {
              height: 60px;
              font-size: 20px;
              font-family: SourceHanSansCN-Bold;
              font-weight: bold;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .intro_content {
              font-size: 18px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 30px;
              p {
                margin-bottom: 10px;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1600px) {
  .conent {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .first_floor {
      width: 90%;
      margin: 0 auto;
      margin-top: 40px;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .policy_title {
        width: 100%;
        height: 60px;
        font-size: 30px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: #333333;
        display: flex;
        align-items: center;
      }
      .policy {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 35px;
        .policy_content {
          width: 100%;
          height: 240px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          box-sizing: border-box;
          .policy_item {
            width: 46%;
            height: 70px;
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #666666;
            border-bottom: 2px solid rgba(0, 0, 0, 0.2);
            list-style: none;
            display: flex;
            align-items: center;
            .policy_a {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              .policy_list {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 90%;
                cursor: pointer;
              }
              span {
                cursor: pointer;
                width: 8px;
                height: 16px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
    .sencod_floor {
      width: 90%;
      background-color: #ffffff;
      margin: 0 auto;
      margin-top: 40px;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .area_container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .area_value1 {
          width: 50%;
          height: 340px;
          padding-right: 60px;
          box-sizing: border-box;
          .area_content {
            width: 100%;
          }
          .title {
            height: 6 0px;
            display: flex;
            align-items: center;
            font-size: 30px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #333333;
          }
          .cont {
            width: 100%;
            .cont_1 {
              width: 100%;
              height: 163px;
              .cont_title {
                height: 60px;
                font-size: 20px;
                font-family: SourceHanSansCN-Regular;
                font-weight: 400;
                color: #333333;
                display: flex;
                align-items: center;
              }
              .cont_desc {
                width: 100%;
                font-size: 16px;
                font-family: SourceHanSansCN-Light;
                font-weight: 300;
                color: #666666;
                line-height: 30px;
              }
            }
            .cont_2 {
              border-top: 2px dashed rgba(51, 51, 51, 0.2);
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              ul {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                li {
                  list-style: none;
                  margin-top: 20px;
                  margin-right: 20px;
                  font-weight: 700;
                }
              }
            }
          }
        }
        .area_first {
          width: 50%;
          height: 340px !important;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          div {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            h3 {
              width: 100%;
              font-size: 20px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #ffffff;
              text-align: center;
            }
            p {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #ffffff;
              padding: 0 80px;
              line-height: 26px;
            }
          }
        }
        .area_pic {
          width: 50%;
          height: 340px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .area_value2 {
          width: 50%;
          height: 340px;
          box-sizing: border-box;
          padding: 0 40px 40px 40px;
          .contPadding1 {
            width: 100%;
            height: 100%;
            .cont_title {
              height: 60px;
              font-size: 22px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 24px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
        .area_value3 {
          width: 50%;
          height: 340px;
          .contPadding2 {
            width: 100%;
            .cont_title {
              height: 60px;
              font-size: 22px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
        .area_value4 {
          width: 50%;
          height: 340px;
          box-sizing: border-box;
          padding: 0 40px 40px 40px;
          .contPadding3 {
            width: 100%;
            height: 100%;
            .cont_title {
              height: 60px;
              font-size: 22px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .cont_desc {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                margin-bottom: 6px;
              }
            }
          }
        }
      }
    }
    .three_floor {
      width: 90%;
      background-color: #ffffff;
      margin: 0 auto;
      margin-top: 40px;
      .atmos_wrapper {
        padding: 0 40px 40px 40px;
        box-sizing: border-box;
        width: 100%;
        .atmos_title {
          height: 60px;
          font-size: 30px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #333333;
          display: flex;
          align-items: center;
        }
        .atmos {
          width: 100%;
          // height: 450px;
          display: flex;
          .atmos_desc {
            width: 50%;
            .atmos_desc_title {
              height: 60px;
              font-size: 18px;
              font-family: SourceHanSansCN-Regular;
              font-weight: 400;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .atmos_desc_content {
              width: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #666666;
              line-height: 30px;
              p {
                padding-top: 10px;
              }
            }
          }
          .atmos_logo {
            width: 50%;
            ul {
              display: flex;
              padding-left: 40px;
              flex-wrap: wrap;
              justify-content: space-between;
              li {
                list-style: none;
                width: 30%;
                img {
                  width: 100%;
                }
              }
            }
          }
        }
        .atmo_pic {
          height: 300px;
          width: 100%;
          background: url(/static/img/bg.a1766c4.png);
          .atmo_pic_cont {
            width: 50%;
            height: 100%;
            float: right;
            padding: 20px 30px 0 20px;
            box-sizing: border-box;
            p {
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #ffffff;
              line-height: 28px;
            }
            h4 {
              font-size: 18px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #ffffff;
              line-height: 36px;
              font-weight: bold;
              margin: 16px 0 10px 0;
            }
          }
        }
        .atmo_detail {
          width: 100%;
          height: auto;
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
          .detail {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .detail_left {
              width: 40%;
              height: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 36px;
              border-right: none;
            }
            .detail_right {
              width: 40%;
              height: 100%;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 36px;
            }
          }
          .carousel {
            width: 50%;
            height: 161px;
            margin-top: 15px;
            position: relative;
            overflow: hidden;
            .carousel_pic {
              width: 1036px;
              ul {
                display: flex;
                justify-content: space-between;
                li {
                  list-style: none;
                  margin-left: 13px !important;
                  margin-right: 13px !important;
                  width: 22.5% !important;
                }
              }
            }
          }
        }
      }
    }
    .four_floor {
      width: 90%;
      height: 680px;
      background-color: #ffffff;
      margin: 40px auto;
      box-sizing: border-box;
      padding: 0 40px 40px 40px;
      .invest_wrapper {
        width: 100%;
        .invest_title {
          height: 60px;
          font-size: 30px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #333333;
          display: flex;
          align-items: center;
        }
        .invest_pic {
          width: 100%;
          ul {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            li {
              list-style: none;
              width: 20%;
              a {
                text-decoration: none;
                width: 100%;
                img {
                  width: 100%;
                }
                p {
                  width: 100%;
                  height: 60px;
                  font-size: 20px;
                  font-family: SourceHanSansCN-Regular;
                  font-weight: 400;
                  color: #333333;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
              .invest_pic_hover {
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                z-index: 999;
                margin: 0 auto;
                background: red;
                width: 700px;
                height: 405px;
                img {
                  width: 100%;
                  height: auto;
                }
              }
            }
          }
        }
        .invest_rest {
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0;
          .invest_logo {
            width: 25%;
            height: 100%;
            border-right: 2px solid rgba(51, 51, 51, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 200px;
              height: auto;
            }
          }
          .introduce {
            height: 100%;
            width: 75%;
            box-sizing: border-box;
            // padding-left: 3%;
            .intro_title {
              height: 60px;
              font-size: 20px;
              font-family: SourceHanSansCN-Bold;
              font-weight: bold;
              color: #333333;
              display: flex;
              align-items: center;
            }
            .intro_content {
              font-size: 18px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #808080;
              line-height: 30px;
              p {
                margin-bottom: 10px;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
