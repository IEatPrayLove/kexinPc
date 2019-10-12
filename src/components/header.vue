<template>
  <div class="main-header">
    <div class="header-logo">
      <img src="../images/public/logo.png" alt />
    </div>
    <div class="header-nav">
      <!-- <a href="">首页</a> -->
      <router-link tag="a" to="/">首页</router-link>
      <router-link tag="a" to="power">成电资源</router-link>
      <router-link tag="a" to="science">产业科技公园</router-link>
      <router-link tag="a" to="investment">产业招商</router-link>
      <router-link tag="a" to="service">产业服务</router-link>
      <router-link tag="a" to="enterprise">明星企业</router-link>
      <router-link tag="a" to="personnel">高层次人才</router-link>
      <router-link tag="a" to="contact">联系我们</router-link>
  </div>
  <div class="header-nav1">
    <ul>
      <img src="../images/index/sanheng.png">
      <li>
      <router-link tag="a" to="/">首页</router-link>
      </li>
      <li>
        <router-link tag="a" to="power">成电资源</router-link>
      </li>
      <li>
        <router-link tag="a" to="science">产业科技公园</router-link>
      </li>
      <li>
        <router-link tag="a" to="investment">产业招商</router-link>
      </li>
      <li>
        <router-link tag="a" to="service">产业服务</router-link>
      </li>
      <li>
        <router-link tag="a" to="enterprise">明星企业</router-link>
      </li>
      <li>
        <router-link tag="a" to="personnel">高层次人才</router-link>
      </li>
      <li>
        <router-link tag="a" to="contact">联系我们</router-link>
      </li>
    </ul>
  </div>
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
   
  }
};
</script>


<style lang="less" scoped>
.main-header {
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-logo {
    width: 172px;
    height: 40px;
    margin-left: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .header-nav1{
    display: none
  }
  .header-nav {
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      text-decoration: none;
      display: block;
      font-size: 16px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
      margin-left: 40px;
    }
    a:hover {
      color: #fff;
      opacity: 1;
    }
    a.router-link-exact-active {
      color: #fff;
      opacity: 1;
    }
    a:nth-child(8) {
      margin-right: 50px;
    }
  }
}
@media screen and (max-width: 768px) {
  .main-header {
    display: flex;
    flex-wrap: wrap;
    .header-logo {
      margin-left: 10px;
      img {
        height: 40px;
        width: 160px;
      }
    }
    .header-nav1{
      display: block;
      text-decoration: underline;
      width: 150px;
      text-align: center;
      height: 30px;
      line-height: 30px;
      text-decoration: none;
      margin-top: -15px;
      margin-right: 10px;
      img{
        height: 30px;
        width: 40px;
        margin-top: 10px
      }
      
      a{
        color: black;
      }
      ul>li{
          list-style: none;
          color: white;
          display: none;
          background-color: rgba(255, 255, 255, .8);
          height: 50px;
          line-height: 50px;
          text-decoration: none;
          a{
            color: black;
          }
      }
      ul:hover li{
        width: 100%;
        display: block;
        color: black;
        text-decoration: none;
        background-color: rgba(233, 233, 233, .8)
      }
    }
    .header-nav {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      display: none;
      a {
        width: 100%;
        height: 30px;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .main-header {
    .header-logo {
      img {
        height: 80%;
        width: 80%;
      }
    }
    .header-nav {
      a {
        margin-left: 10px;
        font-size: 12px;
      }
    }
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .main-header {
    .header-logo {
      margin-left: 20px;
      img {
        height: 90%;
        width: 90%;
      }
    }
    .header-nav {
      a {
        font-size: 14px;
        margin-left: 20px;
      }
    }
  }
}
@media (min-width: 1200px)  {
  .main-header {
    .header-logo {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .header-nav {
      a {
        margin-left: 40px;
        font-size: 16px;
      }
    }
  }
}
</style>
