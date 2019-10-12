<template>
  <div class="resouce-container">
    <swiper :turnData="turnData"></swiper>
    <div class="first-floor" id="powerTurn">
      <p>关于电子科大</p>
      <div class="first-view">
        <div>
          <img src="../images/chengdian/ceng35.png" alt />
        </div>
        <div class="sencd-child-view">
          <div>
            <p>
              <span>1956年</span>
              <span>建校</span>
            </p>
            <p>
              <span>1960年</span>
              <span>列入全国重点</span>
            </p>
            <p>
              <span>1997年</span>
              <span>首批211大学</span>
            </p>
            <p>
              <span>2001年</span>
              <span>获批985大学</span>
            </p>
          </div>
          <div>
            <p>电子科大正在大力实施三大行动，努力在“十三五”期间建成电子信息领域世界一流、理工深度融合的研究型大学，尽早建设成为“中国特色、世界一流”的双一流大学</p>
            <p>现有国家一级重点学科2个，国家级重点实验室5个，国家级特色专业建设点14个</p>
          </div>
        </div>
        <div>
          <img src="../images/chengdian/zu24.png" alt />
          <div class="three-child-view">
            <div>
              <p>电子科大在国内电子信息学科领域处于领先地位，其中：</p>
              <p>电子科学与技术全国排名第一</p>
              <p>信息与通信工程全国排名并列第一</p>
            </div>
          </div>
        </div>
        <div>
          <img src="../images/chengdian/ceng36.png" alt />
        </div>
      </div>
    </div>
    <div class="sencod-floor">
      <p>产业园区</p>
      <p>2017年9月29日上午，在电子科技大学61周年校庆之际成都市人民政府和电子科技大学共同宣布9月29日为“电子科大日”</p>
      <p>
        成都市委、市政府要求，以电子科大为核心，面向区域经济社会发展制定了“一校一带”行动计划，提出以“电子信息+”为创新引擎，建设特色性创新型大学，科学规划建设电子信息产业功能区，大力培育新经济，加快为全
        市树立标杆、提供示范
      </p>
      <div class="sencod-fix">
        <div class="fu-div">
          <img src="../images/chengdian/zu25.png" alt />
          <div class="fudong" ref="btn1">沙河科技园</div>
        </div>
        <div class="fu-div">
          <img src="../images/chengdian/zu26.png" alt />
          <div class="fudong" ref="btn2">西区科技园</div>
        </div>
        <div class="fu-div">
          <img src="../images/chengdian/zu27.png" alt />
          <div class="fudong" ref="btn3">菁蓉逆向创新基地</div>
        </div>
        <div class="fu-div">
          <img src="../images/chengdian/zu28.png" alt />
          <div class="fudong" ref="btn4">电子科大科技园（天府园）</div>
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
      turnData: "powerTurn"
    };
  },
  components: {
    swiper,
    bottom
  },
  methods: {}
};
</script>
<style  lang="less" scoped>
.resouce-container {
  .first-floor {
    width: 90%;
    margin-left: 5%;
    > p {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100px;
      font-size: 36px;
      font-family: SourceHanSansCN-Regular;
      color: rgba(51, 51, 51, 1);
    }
    .first-view {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      > div {
        width: 50%;
      }
      > div:nth-child(1) {
        height: 434px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      > div:nth-child(2) {
        height: 434px;
        display: flex;
        justify-content: space-between;

        div:nth-child(1) {
          width: 35%;
          height: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding-top: 80px;
          p {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            margin-left: 30px;
            border-left: 1px dashed #3561c6;
            span:nth-child(1) {
              box-sizing: border-box;
              font-weight: bold;
              font-size: 24px;
              padding-right: 8px;
              margin-left: 35px;
              position: relative;
            }
            span:nth-child(1)::after {
              content: "";
              position: absolute;
              width: 10px;
              height: 10px;
              background-color: #3561c6;
              border-radius: 50%;
              left: -40px;
              top: 10px;
            }
          }
        }
        div:nth-child(2) {
          width: 65%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          p {
            width: 100%;
          }
        }
      }
      > div:nth-child(3) {
        height: 415px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .three-child-view {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          div {
            p {
              font-weight: bold;
              line-height: 30px;
            }
            p:nth-child(1) {
              font-weight: normal;
            }
          }
        }
      }
      > div:nth-child(4) {
        height: 415px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .sencod-floor {
    width: 90%;
    margin-left: 5%;
    > p:nth-child(1) {
      display: flex;
      align-items: center;
      font-size: 36px;
      box-sizing: border-box;
      color: rgba(51, 51, 51, 1);
      height: 100px;
    }
    > p:nth-child(2) {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      font-size: 18px;
      font-family: SourceHanSansCN-Light;
      font-weight: 300;
      color: #666666;
      line-height: 28px;
      margin-bottom: 20px;
    }
    > p:nth-child(3) {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      font-size: 18px;
      font-family: SourceHanSansCN-Light;
      font-weight: 300;
      color: #666666;
      line-height: 28px;
    }
    .sencod-fix {
      box-sizing: border-box;
      width: 100%;
      padding-top: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .fu-div {
        position: relative;
        height: 260px;
        width: 20%;
        img {
          width: 100%;
          height: 100%;
        }
        .fudong {
          position: absolute;
          bottom: 0;
          height: 56px;
          width: 100%;
          background: #3561c6;
          opacity: 0;
          text-align: center;
          line-height: 56px;
          font-size: 18px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          color: #ffffff;
        }
      }
      .fu-div:hover {
        .fudong {
          opacity: 1;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .resouce-container {
    .first-floor {
      width: 90%;
      margin-left: 5%;
      > p {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        height: 60px;
        font-size: 20px;
        font-family: SourceHanSansCN-Regular;
        color: rgba(51, 51, 51, 1);
      }
      .first-view {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        > div {
          width: 80%;
        }
        > div:nth-child(1) {
          height: 200px;
          width: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        > div:nth-child(2) {
          height: 600px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          div:nth-child(1) {
            width: 70%;
            height: 50%;
            overflow: hidden;
            box-sizing: border-box;
            padding-top: 50px;
            p {
              width: 100%;
              height: 60px;
              display: flex;
              align-items: center;
              margin-left: 20px;
              border-left: 1px dashed #3561c6;
              span:nth-child(1) {
                box-sizing: border-box;
                font-weight: bold;
                font-size: 18px;
                padding-right: 8px;
                margin-left: 16px;
                position: relative;
              }
              span:nth-child(1)::after {
                content: "";
                position: absolute;
                width: 10px;
                height: 10px;
                background-color: #3561c6;
                border-radius: 50%;
                left: -22px;
                top: 8px;
              }
            }
          }
          div:nth-child(2) {
            width: 100%;
            height: 50%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            p {
              width: 100%;
            }
          }
        }
        > div:nth-child(3) {
          height: 200px;
          width: 100%;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .three-child-view {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            div {
              p {
                font-weight: bold;
                line-height: 30px;
              }
              p:nth-child(1) {
                font-weight: normal;
              }
            }
          }
        }
        > div:nth-child(4) {
          height: 200px;
          width: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .sencod-floor {
      width: 90%;
      margin-left: 5%;
      > p:nth-child(1) {
        display: flex;
        align-items: center;
        font-size: 26px;
        box-sizing: border-box;
        color: rgba(51, 51, 51, 1);
        height: 100px;
      }
      > p:nth-child(2) {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-size: 16px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        color: #666666;
        line-height: 28px;
        margin-bottom: 20px;
      }
      > p:nth-child(3) {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-size: 16px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        color: #666666;
        line-height: 28px;
      }
      .sencod-fix {
        box-sizing: border-box;
        width: 100%;
        padding-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .fu-div {
          position: relative;
          height: 190px;
          width: 20%;
          img {
            width: 100%;
            height: 100%;
          }
          .fudong {
            position: absolute;
            bottom: 0;
            height: 56px;
            width: 100%;
            background: #3561c6;
            opacity: 0;
            text-align: center;
            line-height: 56px;
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #ffffff;
          }
        }
        .fu-div:hover {
          .fudong {
            opacity: 1;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .resouce-container {
    .first-floor {
      width: 90%;
      margin-left: 6%;
      > p {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        height: 76px;
        font-size: 26px;
        font-family: SourceHanSansCN-Regular;
        color: rgba(51, 51, 51, 1);
      }
      .first-view {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        > div {
          width: 80%;
        }
        > div:nth-child(1) {
          height: 360px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        > div:nth-child(2) {
          height: 360px;
          display: flex;
          justify-content: space-between;

          div:nth-child(1) {
            width: 50%;
            height: 100%;
            overflow: hidden;
            box-sizing: border-box;
            padding-top: 50px;
            p {
              width: 100%;
              height: 60px;
              display: flex;
              align-items: center;
              margin-left: 20px;
              border-left: 1px dashed #3561c6;
              span:nth-child(1) {
                box-sizing: border-box;
                font-weight: bold;
                font-size: 18px;
                padding-right: 8px;
                margin-left: 16px;
                position: relative;
              }
              span:nth-child(1)::after {
                content: "";
                position: absolute;
                width: 10px;
                height: 10px;
                background-color: #3561c6;
                border-radius: 50%;
                left: -22px;
                top: 8px;
              }
            }
          }
          div:nth-child(2) {
            width: 50%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            p {
              width: 100%;
            }
          }
        }
        > div:nth-child(3) {
          height: 360px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .three-child-view {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            div {
              p {
                font-weight: bold;
                line-height: 30px;
              }
              p:nth-child(1) {
                font-weight: normal;
              }
            }
          }
        }
        > div:nth-child(4) {
          height: 360px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .sencod-floor {
      width: 90%;
      // margin-left: 9%;
      > p:nth-child(1) {
        display: flex;
        align-items: center;
        font-size: 26px;
        box-sizing: border-box;
        color: rgba(51, 51, 51, 1);
        height: 100px;
      }
      > p:nth-child(2) {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-size: 16px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        color: #666666;
        line-height: 28px;
        margin-bottom: 20px;
      }
      > p:nth-child(3) {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-size: 16px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        color: #666666;
        line-height: 28px;
      }
      .sencod-fix {
        box-sizing: border-box;
        width: 100%;
        padding-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .fu-div {
          position: relative;
          height: 190px;
          width: 20%;
          img {
            width: 100%;
            height: 100%;
          }
          .fudong {
            position: absolute;
            bottom: 0;
            height: 56px;
            width: 100%;
            background: #3561c6;
            opacity: 0;
            text-align: center;
            line-height: 56px;
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #ffffff;
          }
        }
        .fu-div:hover {
          .fudong {
            opacity: 1;
          }
        }
      }
    }
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .resouce-container {
    .first-floor {
      width: 100%;
      // margin-left: 2.5%;
      > p {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        height: 76px;
        font-size: 26px;
        font-family: SourceHanSansCN-Regular;
        color: rgba(51, 51, 51, 1);
      }
      .first-view {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        > div {
          width: 50%;
        }
        > div:nth-child(1) {
          height: 360px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        > div:nth-child(2) {
          height: 360px;
          display: flex;
          justify-content: space-between;

          div:nth-child(1) {
            width: 50%;
            height: 100%;
            overflow: hidden;
            box-sizing: border-box;
            padding-top: 50px;
            p {
              width: 100%;
              height: 60px;
              display: flex;
              align-items: center;
              margin-left: 20px;
              border-left: 1px dashed #3561c6;
              span:nth-child(1) {
                box-sizing: border-box;
                font-weight: bold;
                font-size: 18px;
                padding-right: 8px;
                margin-left: 16px;
                position: relative;
              }
              span:nth-child(1)::after {
                content: "";
                position: absolute;
                width: 10px;
                height: 10px;
                background-color: #3561c6;
                border-radius: 50%;
                left: -22px;
                top: 8px;
              }
            }
          }
          div:nth-child(2) {
            width: 50%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            p {
              width: 100%;
            }
          }
        }
        > div:nth-child(3) {
          height: 360px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .three-child-view {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            div {
              p {
                font-weight: bold;
                line-height: 30px;
              }
              p:nth-child(1) {
                font-weight: normal;
              }
            }
          }
        }
        > div:nth-child(4) {
          height: 360px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .sencod-floor {
      width: 90%;
      margin-left: 5%;
      > p:nth-child(1) {
        display: flex;
        align-items: center;
        font-size: 26px;
        box-sizing: border-box;
        color: rgba(51, 51, 51, 1);
        height: 100px;
      }
      > p:nth-child(2) {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-size: 18px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        color: #666666;
        line-height: 28px;
        margin-bottom: 20px;
      }
      > p:nth-child(3) {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-size: 18px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        color: #666666;
        line-height: 28px;
      }
      .sencod-fix {
        box-sizing: border-box;
        width: 100%;
        padding-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .fu-div {
          position: relative;
          height: 190px;
          width: 20%;
          img {
            width: 100%;
            height: 100%;
          }
          .fudong {
            position: absolute;
            bottom: 0;
            height: 56px;
            width: 100%;
            background: #3561c6;
            opacity: 0;
            text-align: center;
            line-height: 56px;
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #ffffff;
          }
        }
        .fu-div:hover {
          .fudong {
            opacity: 1;
          }
        }
      }
    }
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .resouce-container {
    .first-floor {
      width: 90%;
      margin-left: 5%;
      > p {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        height: 76px;
        font-size: 26px;
        font-family: SourceHanSansCN-Regular;
        color: rgba(51, 51, 51, 1);
      }
      .first-view {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        > div {
          width: 50%;
        }
        > div:nth-child(1) {
          height: 360px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        > div:nth-child(2) {
          height: 360px;
          display: flex;
          justify-content: space-between;

          div:nth-child(1) {
            width: 50%;
            height: 100%;
            overflow: hidden;
            box-sizing: border-box;
            padding-top: 50px;
            p {
              width: 100%;
              height: 60px;
              display: flex;
              align-items: center;
              margin-left: 20px;
              border-left: 1px dashed #3561c6;
              span:nth-child(1) {
                box-sizing: border-box;
                font-weight: bold;
                font-size: 18px;
                padding-right: 8px;
                margin-left: 16px;
                position: relative;
              }
              span:nth-child(1)::after {
                content: "";
                position: absolute;
                width: 10px;
                height: 10px;
                background-color: #3561c6;
                border-radius: 50%;
                left: -22px;
                top: 8px;
              }
            }
          }
          div:nth-child(2) {
            width: 50%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            p {
              width: 100%;
            }
          }
        }
        > div:nth-child(3) {
          height: 360px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .three-child-view {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            div {
              p {
                font-weight: bold;
                line-height: 30px;
              }
              p:nth-child(1) {
                font-weight: normal;
              }
            }
          }
        }
        > div:nth-child(4) {
          height: 360px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .sencod-floor {
      width: 90%;
      margin-left: 5%;
      > p:nth-child(1) {
        display: flex;
        align-items: center;
        font-size: 26px;
        box-sizing: border-box;
        color: rgba(51, 51, 51, 1);
        height: 100px;
      }
      > p:nth-child(2) {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-size: 18px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        color: #666666;
        line-height: 28px;
        margin-bottom: 20px;
      }
      > p:nth-child(3) {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-size: 18px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        color: #666666;
        line-height: 28px;
      }
      .sencod-fix {
        box-sizing: border-box;
        width: 100%;
        padding-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .fu-div {
          position: relative;
          height: 190px;
          width: 20%;
          img {
            width: 100%;
            height: 100%;
          }
          .fudong {
            position: absolute;
            bottom: 0;
            height: 56px;
            width: 100%;
            background: #3561c6;
            opacity: 0;
            text-align: center;
            line-height: 56px;
            font-size: 18px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #ffffff;
          }
        }
        .fu-div:hover {
          .fudong {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
