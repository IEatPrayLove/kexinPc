<template>
  <div class="bottom">
    <div class="four-floor">
      <p>园区企业</p>
      <div class="four-zhong">
        <div>
          <img class="img1" src="../images/public/1.png" alt />
        </div>
        <div>
          <img class="img1" src="../images/public/2.png" alt />
        </div>
        <div>
          <img class="img1" src="../images/public/3.png" alt />
        </div>
        <div>
          <img class="img1" src="../images/public/4.png" alt />
        </div>
        <div>
          <img class="img1" src="../images/public/5.png" alt />
        </div>
        <div>
          <img class="img1" src="../images/public/6.png" alt />
        </div>
        <div>
          <img class="img1" src="../images/public/7.png" alt />
        </div>
        <div>
          <img class="img1" src="../images/public/8.png" alt />
        </div>
        <div>
          <img class="img1" src="../images/public/9.png" alt />
        </div>
      </div>
      <div class="four-top">
        <div>
          <img src="../images/public/logo.png" alt />
        </div>
        <div>
          <li>首页</li>
          <li>成电资源</li>
          <li>产业科技公园</li>
          <li>产业招商</li>
          <li>产业服务</li>
          <li>明星企业</li>
          <li>高层次人才</li>
          <li>联系我们</li>
        </div>
        <div>
          <a href>
            <img src="../images/public/zu2.png" alt />
          </a>
          <a href>
            <img src="../images/public/zu3.png" alt />
          </a>
          <a href>
            <img src="../images/public/zu4.png" alt />
          </a>
        </div>
      </div>
      <div class="four-last">
        <p>2014 Copyright UETS National Science Park Copyright - 蜀ICP备18010813号-1</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style  lang="less" scoped>
.bottom {
  .four-floor {
    width: 100%;
    margin-top: 30px;
    > p {
      width: 100%;
      font-size: 36px;
      text-align: center;
    }
    .four-zhong {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 30px 0;
      div {
        width: 10%;
        height: 80px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      
      }
    }
    .four-top {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      div:nth-child(1) {
        width: 20%;
        img {
          width: 170px;
          height: 40px;
        }
      }
      div:nth-child(2) {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          font-size: 18px;
          list-style: none;
        }
      }
      div:nth-child(3) {
        width: 30%;
        display: flex;
        justify-content: center;
        a {
          margin: 0 40px;
        }
        img {
          width: 40px;
        }
      }
    }
    .four-last {
      height: 54px;
      width: 100%;
      border-top: 2px solid #f5f5f5;
      z-index: 99999;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .bottom {
    .four-floor {
      width: 100%;
      margin-top: 10px;
      > p {
        width: 100%;
        font-size: 22px;
        text-align: left;
        margin-left: 20px;
      }
      .four-zhong {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 10px 0;
        padding: 0 5%;
        div {
          width: 30%;
          height: 80px;
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .four-top {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 20px;
        div:nth-child(1) {
          width: 100%;
          text-align: center;
          img {
            width: 170px;
            height: 40px;
          }
        }
        div:nth-child(2) {
          margin-top: 20px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          li {
            font-size: 12px;
            list-style: none;
            margin: 4px 10px;
            color: #aaa;
          }
        }
        div:nth-child(3) {
          width: 30%;
          display: flex;
          justify-content: center;
          margin: 12px 0;
          a {
            margin: 0 40px;
          }
          img {
            width: 40px;
          }
        }
      }
      .four-last {
        height: 54px;
        width: 100%;
        box-sizing: border-box;
        border-top: 2px solid #f5f5f5;
        z-index: 99999;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        p {
          text-align: center;
          font-size: 12px;
          line-height: 20px;
          color: #aaa;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .bottom {
    .four-floor {
      width: 100%;
      margin-top: 10px;
      margin-left: 2%;
      > p {
        width: 100%;
        font-size: 26px;
        text-align: center;
      }
      .four-zhong {
        // height: 68px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 10px 0;
        div {
          width: 30%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          .img1{
            height: 80px;
          }
        }
      }
      .four-top {
        width: 90%;
        margin-left: 5%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        div:nth-child(1) {
          width: 15%;
          img {
            width: 110px;
            height: 40px;
          }
        }
        div:nth-child(2) {
          width: 60%;
          display: flex;
          justify-content: space-between;
          align-items: center ;
          li {
            font-size: 12px;
            list-style: none;
          }
        }
        div:nth-child(3) {
          width: 20%;
          display: flex;
          justify-content: center;
          a {
            margin: 0 10px;
          }
          img {
            width: 40px;
          }
        }
      }
      .four-last {
        height: 54px;
        width: 100%;
        border-top: 2px solid #f5f5f5;
        z-index: 99999;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          text-align: center;
        }
      }
    }
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .bottom {
    .four-floor {
      width: 100%;
      margin-top: 20px;
      > p {
        width: 100%;
        font-size: 30px;
        text-align: center;
      }
      .four-zhong {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 20px 0;
        div {
          width: 30%;
          height: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
          .img1 {
            height: 140px;
          }
        }
      }
      .four-top {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        div:nth-child(1) {
          width: 20%;
          img {
            width: 170px;
            height: 40px;
          }
        }
        div:nth-child(2) {
          width: 50%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          li {
            font-size: 12px;
          }
        }
        div:nth-child(3) {
          width: 30%;
          display: flex;
          justify-content: center;
          a {
            margin: 0 20px;
          }
          img {
            width: 40px;
          }
        }
      }
      .four-last {
        height: 40px;
        width: 100%;
        border-top: 2px solid #f5f5f5;
        z-index: 99999;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-size: 14px;
        }
      }
    }
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .bottom {
    .four-floor {
      width: 100%;
      margin-top: 20px;
      > p {
        width: 100%;
        font-size: 30px;
        text-align: center;
      }
      .four-zhong {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 20px 0;
        div {
          width: 30%;
          height: 180px;
          display: flex;
          justify-content: center;
          align-items: center;
          .img1 {
            height: 160px;
          }
        }
      }
      .four-top {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        div:nth-child(1) {
          width: 20%;
          img {
            width: 170px;
            height: 40px;
          }
        }
        div:nth-child(2) {
          width: 50%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          li {
            font-size: 12px;
          }
        }
        div:nth-child(3) {
          width: 30%;
          display: flex;
          justify-content: center;
          a {
            margin: 0 20px;
          }
          img {
            width: 40px;
          }
        }
      }
      .four-last {
        height: 40px;
        width: 100%;
        border-top: 2px solid #f5f5f5;
        z-index: 99999;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-size: 14px;
        }
      }
    }
  }
}
</style>

