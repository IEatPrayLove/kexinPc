<template>
  <div>
    <swiper :turnData="turnData"></swiper>
    <div class="conent">
      <table></table>
      <div class="first_floor" id="contactTurn">
        <h2 class="contact_title">联系我们</h2>
        <div class="detail">
          <div class="deimg">
            <img class="qr" src="./../images/callUs/QR.png" />
          </div>
          <div class="phone">
            <div class="top_cont">
              <p>HOT LINE:</p>
              <p>028-62151000</p>
            </div>
            <div class="bottom_cont">
              <p>地址：成都天府新区·华府大道四段</p>
              <p>运营商：成都科杏投资发展有限公司</p>
            </div>
          </div>
        </div>
        <!-- <div class="map"></div> -->
        <div class="baidumap" id="allmap"></div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=3bVHdeo2ZZaZO4QczC63d0kMsbA55ZSD"></script>
<script>
import swiper from "../components/swiper";
import bottom from "../components/bottom";
export default {
  name: "pm-distribution",
  data() {
    return {
      turnData: "contactTurn"
    };
  },
  components: {
    swiper,
    bottom
  },

  mounted() {
    this.baiduMap();
  },
  methods: {
    baiduMap() {
      var map = new BMap.Map("allmap"); // 创建地图实例

      var point = new BMap.Point(103.823007, 30.656063); // 创建点坐标
      map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.ScaleControl());
      map.addControl(new BMap.OverviewMapControl());
      map.addControl(new BMap.MapTypeControl());
      //map.setMapStyle({ style: 'midnight' }) //地图风格

      var marker = new window.BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中

      //提示信息
      var infoWindow = new BMap.InfoWindow("成都科杏投资发展有限公司");
      // 鼠标移上标注点要发生的事
      marker.addEventListener("mouseover", function() {
        this.openInfoWindow(infoWindow);
      });

      // 鼠标移开标注点要发生的事
      marker.addEventListener("mouseout", function() {
        //this.closeInfoWindow(infoWindow)
      });
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
    background-color: #fafafa;
    margin: 40px auto;
    box-sizing: border-box;
    .contact_title {
      height: 80px;
      font-size: 36px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
    }
    .detail {
      display: flex;
      margin: 40px auto;
      justify-content: center;
      align-items: center;
      .deimg {
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid rgba(51, 51, 51, 1);
        width: 20%;
        .qr {
          width: 40%;
        }
      }
      .phone {
        background: url("./../images/callUs/bg.png");
        width: 70%;
        height: 160px;
        margin-left: 80px;
        box-sizing: border-box;
        padding: 20px;
        .top_cont {
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          height: 50%;
          p:nth-child(1) {
            height: 27px;
            font-size: 36px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            color: #fff;
            display: inline-block;
          }
          p:nth-child(2) {
            height: 27px;
            font-size: 36px;
            font-family: SourceHanSansCN-Medium;
            font-weight: 500;
            color: #fff;
            display: inline-block;
          }
        }
        .bottom_cont {
          height: 50%;
          font-size: 24px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #fff;
          display: flex;
          align-items: center;
          p {
            height: 100%;
            line-height: 80px;
            margin-right: 40px;
          }
        }
      }
    }
    .baidumap {
      width: 100%;
      height: 517px;
      margin: auto;
      .BMap_cpyCtrl {
        display: none !important;
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
      background-color: #fafafa;
      margin: 40px auto;
      box-sizing: border-box;
      .contact_title {
        height: 80px;
        font-size: 36px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
      }
      .detail {
        display: flex;
        margin: 40px auto;
        justify-content: center;
        align-items: center;
        .deimg {
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 0;
          width: 20%;
          .qr {
            width: 100%;
          }
        }
        .phone {
          background: url("./../images/callUs/bg.png");
          width: 80%;
          height: 160px;
          margin-left: 10px;
          box-sizing: border-box;
          padding: 20px;
          .top_cont {
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            height: 50%;
            p:nth-child(1) {
              height: 27px;
              font-size: 16px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #fff;
              display: inline-block;
            }
            p:nth-child(2) {
              height: 27px;
              font-size: 16px;
              font-family: SourceHanSansCN-Medium;
              font-weight: 500;
              color: #fff;
              display: inline-block;
            }
          }
          .bottom_cont {
            height: 50%;
            font-size: 14px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #fff;
            display: flex;
            align-items: center;
            p {
              height: 100%;
              line-height: 80px;
              margin-right: 2px;
            }
          }
        }
      }
      .baidumap {
        width: 100%;
        height: 517px;
        margin: auto;
        .BMap_cpyCtrl {
          display: none !important;
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
      background-color: #fafafa;
      margin: 40px auto;
      box-sizing: border-box;
      .contact_title {
        height: 80px;
        font-size: 36px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
      }
      .detail {
        display: flex;
        margin: 40px auto;
        justify-content: center;
        align-items: center;
        .deimg {
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px solid rgba(51, 51, 51, 1);
          width: 20%;
          .qr {
            width: 80%;
          }
        }
        .phone {
          background: url("./../images/callUs/bg.png");
          width: 70%;
          height: 160px;
          margin-left: 80px;
          box-sizing: border-box;
          padding: 20px;
          .top_cont {
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            height: 50%;
            p:nth-child(1) {
              height: 27px;
              font-size: 24px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #fff;
              display: inline-block;
            }
            p:nth-child(2) {
              height: 27px;
              font-size: 24px;
              font-family: SourceHanSansCN-Medium;
              font-weight: 500;
              color: #fff;
              display: inline-block;
            }
          }
          .bottom_cont {
            height: 50%;
            font-size: 14px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #fff;
            display: flex;
            align-items: center;
            p {
              height: 100%;
              line-height: 80px;
              margin-right: 2px;
            }
          }
        }
      }
      .baidumap {
        width: 100%;
        height: 517px;
        margin: auto;
        .BMap_cpyCtrl {
          display: none !important;
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
      background-color: #fafafa;
      margin: 40px auto;
      box-sizing: border-box;
      .contact_title {
        height: 80px;
        font-size: 36px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
      }
      .detail {
        display: flex;
        margin: 40px auto;
        justify-content: center;
        align-items: center;
        .deimg {
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px solid rgba(51, 51, 51, 1);
          width: 20%;
          .qr {
            width: 80%;
          }
        }
        .phone {
          background: url("./../images/callUs/bg.png");
          width: 70%;
          height: 160px;
          margin-left: 80px;
          box-sizing: border-box;
          padding: 20px;
          .top_cont {
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            height: 50%;
            p:nth-child(1) {
              height: 27px;
              font-size: 24px;
              font-family: SourceHanSansCN-Light;
              font-weight: 300;
              color: #fff;
              display: inline-block;
            }
            p:nth-child(2) {
              height: 27px;
              font-size: 24px;
              font-family: SourceHanSansCN-Medium;
              font-weight: 500;
              color: #fff;
              display: inline-block;
            }
          }
          .bottom_cont {
            height: 50%;
            font-size: 14px;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #fff;
            display: flex;
            align-items: center;
            p {
              height: 100%;
              line-height: 80px;
              margin-right: 40px;
            }
          }
        }
      }
      .baidumap {
        width: 100%;
        height: 517px;
        margin: auto;
        .BMap_cpyCtrl {
          display: none !important;
        }
      }
    }
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
}
</style>

