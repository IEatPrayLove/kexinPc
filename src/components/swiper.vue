<template>
  <div>
    <!-- banner -->
    <div class="swiper-container" id="indexSwp">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="w-100 h-100" src="../images/public/swiper.png" alt />
        </div>
        <div class="swiper-slide">
          <img class="w-100 h-100" src="../images/public/swiper1.png" alt />
        </div>
        <div class="swiper-slide">
          <img class="w-100 h-100" src="../images/public/swiper2.png" alt />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>

    <!-- 跳转按钮 -->
    <!-- <a class="go-next" href="javascript:;" id="turn" @click="turnTo">
      <img src="../images/public/click-top.png" alt />
    </a> -->
    <!-- <a class="go-next" href="#1l" >
      <img src="../images/public/click-top.png" alt="">
    </a>-->
  </div>
</template>
<script>
import Swiper from "swiper/dist/js/swiper.js";
export default {
  data() {
    return {};
  },
  mounted() {
    var swiper = new Swiper("#indexSwp", {
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  methods: {
    turnTo() {
      console.log(111111);
      $("html,body").animate(
        {
          scrollTop: 875
        },
        1000
      );
      return false; //防止默认事件行为
    }
  },
  props: ["turnData"]
};
</script>
<style  lang="less" scoped>
#indexSwp {
  width: 100%;
  height: 872px;
}
.swiper-pagination {
  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    border: 1px solid #fff;
    background-color: transparent;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: rgba(255, 255, 255, 1);
  }
}
.go-next {
  width: 26px;
  border-radius: 50%;
  margin: auto;
  position: absolute;
  bottom: 0px;
  left: 50%;
  z-index: 2;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  #indexSwp {
    height: 300px;
    .swiper-wrapper {
      .swiper-slide {
        height: 100% !important;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  #indexSwp {
    height: 400px;
    .swiper-wrapper {
      .swiper-slide {
        height: 100% !important;
      }
    }
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  #indexSwp {
    height: 500px;
    .swiper-wrapper {
      .swiper-slide {
        height: 100% !important;
      }
    }
  }
}
@media (min-width: 1200px) {
}
</style>
