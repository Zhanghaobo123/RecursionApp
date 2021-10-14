<!-- home -->
<template>
  <div class="index-container">
    <div class="warpper">
      <div class="index-top">
        <div class="index-tit"></div>
        <div class="index-head"><div class="text">首页</div></div>
        <div class="index-banner">
          <swiper :options="swiperOption" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide><img src="../../assets/images/banner.png" /></swiper-slide>
            <swiper-slide><img src="../../assets/images/banner.png" /></swiper-slide>
            <swiper-slide><img src="../../assets/images/banner.png" /></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <!--            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
          </swiper>
        </div>
      </div>
      <div class="option-wra">
        <div class="option-head">
          <div class="option-all-type">
            <div class="list" @click="BindOptionAllTypeFn(1)" :class="OptionAllType == 1 ? 'active' : ''">全国</div>
            <div class="list" @click="BindOptionAllTypeFn(2)" :class="OptionAllType == 2 ? 'active' : ''">区域</div>
          </div>
          <div class="option-country-type" v-show="OptionAllType == 1">
            <div class="list" @click="BindOptionCountryTypeFn(1)" :class="OptionCountryType == 1 ? 'active' : ''"><span>最新</span></div>
            <div class="list" @click="BindOptionCountryTypeFn(2)" :class="OptionCountryType == 2 ? 'active' : ''"><span>绑卡</span></div>
            <div class="list" @click="BindOptionCountryTypeFn(3)" :class="OptionCountryType == 3 ? 'active' : ''"><span>注册</span></div>
            <div class="list" @click="BindOptionCountryTypeFn(4)" :class="OptionCountryType == 4 ? 'active' : ''"><span>信用卡</span></div>
            <div class="list-active-wra"><img src="../../assets/icon/icon3.png" class="img" :class="ListActiveClass" /></div>
          </div>
        </div>
        <div class="option-content option-content1" v-show="OptionAllType == 1">
          <!--          <ul v-show="OptionCountryType == 1">
            <li class="list list-new">
              <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
              <div class="text-wra">
                <p>农行领劵</p>
                <p>+7</p>
              </div>
              <div class="status-wra">
                <div class="status-time">00:12:35</div>
                <p class="status-num">
                  任务量:
                  <span>30</span>
                  /200
                </p>
              </div>
            </li>
            <li class="list list-new">
              <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
              <div class="text-wra">
                <p>此处限制10个字符</p>
                <p class="last">+7</p>
              </div>
              <div class="status-wra">
                <div class="status-button"><img src="../../assets/images/img1.png" /></div>
                <p class="status-num">
                  任务量:
                  <span>30</span>
                  /200
                </p>
              </div>
            </li>
            <li class="list list-new">
              <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
              <div class="text-wra">
                <p>农行领劵农行领劵农行领劵</p>
                <p>+7</p>
              </div>
              <div class="status-wra">
                <div class="status-time">00:12:35</div>
                <p class="status-num">
                  任务量:
                  <span>30</span>
                  /200
                </p>
              </div>
            </li>
          </ul>
          <ul v-show="OptionCountryType == 2">
            <div class="option-null">
              <img src="../../assets/images/null.png" />
              <p>暂无数据</p>
            </div>
          </ul>
          <ul v-show="OptionCountryType == 3">
            <div class="option-null">
              <img src="../../assets/images/null.png" />
              <p>暂无数据</p>
            </div>
          </ul>
          <ul v-show="OptionCountryType == 4">
            <li class="list list-new">
              <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
              <div class="text-wra">
                <p>此处限制10个字符</p>
                <p class="last">+7</p>
              </div>
              <div class="status-wra">
                <div class="status-button"><img src="../../assets/images/img1.png" /></div>
                <p class="status-num">
                  任务量:
                  <span>30</span>
                  /200
                </p>
              </div>
            </li>
            <li class="list list-new">
              <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
              <div class="text-wra">
                <p>农行领劵</p>
                <p>+7</p>
              </div>
              <div class="status-wra">
                <div class="status-button"><img src="../../assets/images/img2.png" /></div>
                <p class="status-num">
                  任务量:
                  <span>30</span>
                  /200
                </p>
              </div>
            </li>
            <li class="list list-new">
              <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
              <div class="text-wra">
                <p>农行领劵农行领劵农行领劵</p>
                <p>+7</p>
              </div>
              <div class="status-wra">
                <div class="status-button"><img src="../../assets/images/img2.png" /></div>
                <p class="status-num">
                  任务量:
                  <span>30</span>
                  /200
                </p>
              </div>
            </li>
            <li class="list list-new">
              <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
              <div class="text-wra">
                <p>农行领劵</p>
                <p>+7</p>
              </div>
              <div class="status-wra">
                <div class="status-button"><img src="../../assets/images/img2.png" /></div>
                <p class="status-num">
                  任务量:
                  <span>30</span>
                  /200
                </p>
              </div>
            </li>
            <li class="list list-new">
              <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
              <div class="text-wra">
                <p>农行领劵</p>
                <p>+7</p>
              </div>
              <div class="status-wra">
                <div class="status-button"><img src="../../assets/images/img2.png" /></div>
                <p class="status-num">
                  任务量:
                  <span>30</span>
                  /200
                </p>
              </div>
            </li>
            <li class="list list-new">
              <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
              <div class="text-wra">
                <p>农行领劵农行领</p>
                <p>+7</p>
              </div>
              <div class="status-wra">
                <div class="status-button"><img src="../../assets/images/img1.png" /></div>
                <p class="status-num">
                  任务量:
                  <span>30</span>
                  /200
                </p>
              </div>
            </li>
          </ul> -->
          <swiper class="swiper2-wra" ref="swiper2" :options="swiperOption2" @swiper="onSwiper2" @slideChange="onSlideChange2()">
            <swiper-slide class="slide2-wra">
              <li class="list list-new">
                <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
                <div class="text-wra">
                  <p>农行领劵</p>
                  <p>+7</p>
                </div>
                <div class="status-wra">
                  <div class="status-time">00:12:35</div>
                  <p class="status-num">
                    任务量:
                    <span>30</span>
                    /200
                  </p>
                </div>
              </li>
              <li class="list list-new">
                <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
                <div class="text-wra">
                  <p>此处限制10个字符</p>
                  <p class="last">+7</p>
                </div>
                <div class="status-wra">
                  <div class="status-button"><img src="../../assets/images/img1.png" /></div>
                  <p class="status-num">
                    任务量:
                    <span>30</span>
                    /200
                  </p>
                </div>
              </li>
              <li class="list list-new">
                <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
                <div class="text-wra">
                  <p>农行领劵农行领劵农行领劵</p>
                  <p>+7</p>
                </div>
                <div class="status-wra">
                  <div class="status-time">00:12:35</div>
                  <p class="status-num">
                    任务量:
                    <span>30</span>
                    /200
                  </p>
                </div>
              </li>
            </swiper-slide>
            <swiper-slide class="slide2-wra">
              <div class="option-null">
                <img src="../../assets/images/null.png" />
                <p>暂无数据</p>
              </div>
            </swiper-slide>
            <swiper-slide class="slide2-wra">
              <div class="option-null">
                <img src="../../assets/images/null.png" />
                <p>暂无数据</p>
              </div>
            </swiper-slide>
            <swiper-slide class="slide2-wra">
              <li class="list list-new">
                <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
                <div class="text-wra">
                  <p>此处限制10个字符</p>
                  <p class="last">+7</p>
                </div>
                <div class="status-wra">
                  <div class="status-button"><img src="../../assets/images/img1.png" /></div>
                  <p class="status-num">
                    任务量:
                    <span>30</span>
                    /200
                  </p>
                </div>
              </li>
              <li class="list list-new">
                <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
                <div class="text-wra">
                  <p>农行领劵</p>
                  <p>+7</p>
                </div>
                <div class="status-wra">
                  <div class="status-button"><img src="../../assets/images/img2.png" /></div>
                  <p class="status-num">
                    任务量:
                    <span>30</span>
                    /200
                  </p>
                </div>
              </li>
              <li class="list list-new">
                <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
                <div class="text-wra">
                  <p>农行领劵农行领劵农行领劵</p>
                  <p>+7</p>
                </div>
                <div class="status-wra">
                  <div class="status-button"><img src="../../assets/images/img2.png" /></div>
                  <p class="status-num">
                    任务量:
                    <span>30</span>
                    /200
                  </p>
                </div>
              </li>
              <li class="list list-new">
                <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
                <div class="text-wra">
                  <p>农行领劵</p>
                  <p>+7</p>
                </div>
                <div class="status-wra">
                  <div class="status-button"><img src="../../assets/images/img2.png" /></div>
                  <p class="status-num">
                    任务量:
                    <span>30</span>
                    /200
                  </p>
                </div>
              </li>
              <li class="list list-new">
                <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
                <div class="text-wra">
                  <p>农行领劵</p>
                  <p>+7</p>
                </div>
                <div class="status-wra">
                  <div class="status-button"><img src="../../assets/images/img2.png" /></div>
                  <p class="status-num">
                    任务量:
                    <span>30</span>
                    /200
                  </p>
                </div>
              </li>
              <li class="list list-new">
                <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
                <div class="text-wra">
                  <p>农行领劵农行领</p>
                  <p>+7</p>
                </div>
                <div class="status-wra">
                  <div class="status-button"><img src="../../assets/images/img1.png" /></div>
                  <p class="status-num">
                    任务量:
                    <span>30</span>
                    /200
                  </p>
                </div>
              </li>
            </swiper-slide>
          </swiper>
        </div>
        <div class="option-content option-content2" v-show="OptionAllType == 2">
          <ul>
            <li class="list list-new">
              <div class="list-wra">
                <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
                <div class="text-wra">
                  <p>农行领劵农行领</p>
                  <p>+7</p>
                </div>
                <div class="status-wra">
                  <div class="status-button"><img src="../../assets/images/img1.png" /></div>
                  <p class="status-num">
                    任务量:
                    <span>30</span>
                    /200
                  </p>
                </div>
              </div>
              <div class="list-wra"><p>试玩区域：吉林省.双辽市</p></div>
            </li>
            <li class="list list-new">
              <div class="list-wra">
                <div class="img-wra"><img src="../../assets/images/bjt.png" /></div>
                <div class="text-wra">
                  <p>农行领劵农行领</p>
                  <p>+7</p>
                </div>
                <div class="status-wra">
                  <div class="status-time">00:12:35</div>
                  <p class="status-num">
                    任务量:
                    <span>30</span>
                    /200
                  </p>
                </div>
              </div>
              <div class="list-wra"><p>试玩区域：吉林省.双辽市</p></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        // 设置分页器
        pagination: {
          el: '.swiper-pagination',
          // 设置点击可切换
          clickable: true
        },
        // 设置自动轮播
        autoplay: {
          delay: 5000 // 5秒切换一次
        },
        // 设置轮播可循环
        loop: true
      },
      swiperOption2: {
        slidesPerView: 1,
        // 设置自动轮播
        // autoplay: {
        //   delay: 5000 // 5秒切换一次
        // },
        // 设置轮播可循环
        loop: false,
        on:{

        }
      },
      OptionAllType: 1,
      OptionCountryType: 1,
      ListActiveClass: ''
    };
  },
  computed: {
    swiper() {}
  },
  mounted() {},
  methods: {
    //全国/区域选择
    BindOptionAllTypeFn(type) {
      this.OptionAllType = type;
    },
    //全国下面选项选择
    BindOptionCountryTypeFn(type) {
      this.OptionCountryType = type;
      if (type == 1) {
        this.ListActiveClass = 'wz1';
        this.$refs.swiper2.$swiper.slideTo(0, 150, true)
      }
      if (type == 2) {
        this.ListActiveClass = 'wz2';
        this.$refs.swiper2.$swiper.slideTo(1, 150, true)
      }
      if (type == 3) {
        this.ListActiveClass = 'wz3';
        this.$refs.swiper2.$swiper.slideTo(2, 150, true)
      }
      if (type == 4) {
        this.ListActiveClass = 'wz4';
        this.$refs.swiper2.$swiper.slideTo(3, 150, true)
      }
    },

    onSwiper() {},
    onSlideChange() {},
    onSwiper2() {},
    onSlideChange2() {
      let type = this.$refs.swiper2.swiperInstance.activeIndex + 1;
      this.BindOptionCountryTypeFn(type)
    }
  }
};
</script>
<style lang="scss" scoped>
.index-container {
  position: absolute;
  width: 100%;
  height: calc(100% - 98px);
  .warpper {
    height: 100%;
  }
  .index-top {
    background: url(../../assets/images/bj.png) no-repeat;
    background-size: 100% 320px;
    .index-tit{
      height: 88px;
    }
    .index-head {
      width: 750px;
      height: 88px;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        font-size: 32px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .index-banner {
      margin: 20px auto 0;
      width: 690px;
      height: 240px;
    }
  }
  .option-wra {
    height: calc(100% - 368px - 88px);
    .option-head {
      margin-top: 20px;
      .option-all-type {
        margin: 0 auto;
        width: 690px;
        height: 88px;
        background-color: #ffffff;
        border-radius: 8px 8px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid #f2f2f2;
        .list {
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 88px;
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          color: #999999;
          &.active {
            font-size: 28px;
            font-family: PingFangSC-Medium, PingFang SC;
            color: #1f79fe;
          }
        }
      }
      .option-country-type {
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;
        width: 690px;
        height: 88px;
        background-color: #ffffff;
        border-radius: 0px 0px 8px 8px;
        .list {
          width: 25%;
          height: 100%;
          line-height: 88px;
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          display: flex;
          justify-content: center;
          span {
            position: relative;
            z-index: 2;
          }
          &.active {
            position: relative;
            font-size: 32px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #333333;
            z-index: 1;
            // &::after {
            //   content: '';
            //   z-index: 1;
            //   position: absolute;
            //   bottom: -10px;
            //   left: 50%;
            //   transform: translateX(-50%);
            //   width: 40px;
            //   height: 20px;
            //   background: url(../../assets/icon/icon3.png) no-repeat;
            //   background-size: 100% 100%;
            // }
          }
        }
        .list-active-wra {
          position: absolute;
          width: 100%;
          top: 50%;
          .img {
            position: relative;
            left: 12.5%;
            width: 40px;
            margin-left: -20px;
            transition: all 0.15s linear;
            -webkit-backface-visibility: hidden;
            -webkit-perspective: 1000;
            &.wz1 {
              left: 12.5%;
            }
            &.wz2 {
              left: 37.5%;
            }
            &.wz3 {
              left: 62.5%;
            }
            &.wz4 {
              left: 87.5%;
            }
          }
        }
      }
    }
    .option-content {
      position: relative;
      height: calc(100% - 198px);
      margin-top: 20px;
      // ul {
      //   height: 100%;
      //   overflow-y: scroll;
      //   -webkit-overflow-scrolling: touch;
      // }
      .swiper2-wra {
        height: 100%;
      }
      .slide2-wra {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }
      .option-null {
        width: 240px;
        margin: 120px auto 0;
        img {
          width: 100%;
        }
        p {
          margin-top: 20px;
          text-align: center;
          height: 28px;
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #bcbbbb;
          line-height: 28px;
        }
      }
      .list {
        margin: 0 auto 20px;
        padding: 0 20px;
        width: 690px;
        height: 140px;
        background: #ffffff;
        border-radius: 8px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .img-wra {
          width: 100px;
          height: 100px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .text-wra {
          position: relative;
          margin-left: 20px;
          height: 100px;
          display: flex;
          flex-direction: column;
          p {
            height: 28px;
            font-size: 28px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            line-height: 28px;
            &:first-child {
              max-width: 290px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            &:last-child {
              position: absolute;
              left: 0;
              bottom: 0;
              height: 32px;
              font-size: 20px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #ff7d00;
              line-height: 32px;
            }
          }
        }
        .status-wra {
          position: relative;
          margin-left: auto;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          .status-time {
            height: 28px;
            font-size: 28px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #333333;
            line-height: 28px;
          }
          .status-button {
            width: 160px;
            height: 48px;
          }
          .status-num {
            position: absolute;
            min-width: 250px;
            text-align: right;
            right: 0;
            bottom: 0;
            height: 24px;
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            line-height: 24px;
            span {
              color: #1f79fe;
            }
          }
        }
      }
    }
    .option-content2 {
      height: calc(100% - 128px);
      .list {
        margin: 0 auto 20px;
        padding: 0 20px;
        width: 690px;
        height: 206px;
        background: #ffffff;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        .list-wra {
          &:first-child {
            margin: 0 auto;
            width: 650px;
            height: 140px;
            background: #ffffff;
            border-radius: 8px;
            display: flex;
            align-items: center;
            border-bottom: 2px solid #f2f2f2;
          }
          &:last-child {
            width: 100%;
            height: 64px;
            display: flex;
            align-items: center;
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
