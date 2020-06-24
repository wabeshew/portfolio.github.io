<template>
  <div class="glasses">
    <div class="glasses-lens">
      <div class="glasses-lens-inner">
        <div class="glasses-eyes" :style="{ transform: 'translate('+ mh +'px, '+ mv +'px)'}"></div>
      </div>
    </div>
    <div class="glasses-lens">
      <div class="glasses-lens-inner">
        <div class="glasses-eyes" :style="{ transform: 'translate('+ mh +'px, '+ mv +'px)'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mh: 0,
      mv: 0,
    };
  },
  mounted() {
    window.addEventListener('mousemove', this.moveReflection);
  },
  methods: {
    moveReflection(evt, el) {
      // 中心から端までの距離を、余分に大きくとった背景画像の分（ここでは20÷2=10px）に割り当てる
      this.mh = (evt.clientX - window.innerWidth / 2) / window.innerWidth * (80 / 2); // 0.0 ~ 10.0
      this.mv = (evt.clientY - window.innerHeight / 2) / window.innerHeight * (80 / 2);
    },
  },
};
</script>

<style lang="scss" scoped>
.glasses {
  position: relative;
  display: flex;
  &::before {
    content: "";
    position: absolute;
    top: 100px;
    left: 50%;
    display: block;
    width: 60px;
    height: 20px;
    background-color: #fff;
    transform: translateX(-50%);
  }
  .glasses-lens {
    position: relative;
    width: 230px;
    height: 230px;
    border: 25px solid #fff;
    border-radius: 115px;
    overflow: hidden;
    &:not(:first-child) {
      margin-left: 40px;
    }
    .glasses-lens-inner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .glasses-eyes {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #333;
    &::before {
      content: "";
    }
  }
}

@media screen and (max-width: 959px) {
  .glasses {
    justify-content: center;
    &::before {
      top: 60px;
      width: 30px;
      height: 14px;
    }
    .glasses-lens {
      position: relative;
      flex-shrink: 0;
      width: 144px;
      height: 144px;
      border: 15px solid #fff;
      border-radius: 144px;
      overflow: hidden;
      &:not(:first-child) {
        margin-left: 27px;
      }
    }
    .glasses-eyes {
      width: 60px;
      height: 60px;
      border-radius: 30px;
    }
  }
}

@media screen and (max-width: 767px) {
  .glasses {
    justify-content: center;
    &::before {
      top: calc((100vw - 60px) / 5.25);
      width: calc((100vw - 60px) / 10.5);
      height: calc((100vw - 60px) / 24.2);
    }
    .glasses-lens {
      position: relative;
      flex-shrink: 0;
      width: calc((100vw - 60px) / 2.19);
      height: calc((100vw - 60px) / 2.19);
      border: calc((100vw - 60px) / 21) solid #fff;
      border-radius: calc((100vw - 60px) / 2.19);
      overflow: hidden;
      &:not(:first-child) {
        margin-left: calc((100vw - 60px) / 11.7);
      }
    }
    .glasses-eyes {
      width: calc((100vw - 60px) / 5.25);
      height: calc((100vw - 60px) / 5.25);
      border-radius: calc(((100vw - 60px) / 5.25) / 2);
    }
  }
}
</style>
