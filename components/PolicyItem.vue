<template>
  <div v-scroll="slideIn" class="policy">
    <div class="policy-header"><img :src="imgsrc" :alt="title" class="policy-img"></div>
    <div class="policy-title">{{ title }}</div>
    <p class="policy-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imgsrc: require('@/assets/img/' + this.img),
    };
  },
  mounted() {
    this.slideIn(this.$el);
  },
  methods: {
    slideIn(el) {
      const top = el.getBoundingClientRect().top + el.clientHeight / 2;
      if (top - window.innerHeight < 0) {
        el.classList.add('is-visible');
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.l-policy {
  display: flex;
  >li {
    width: calc(100% / 3);
    &:not(:first-child) {
      margin-left: 60px;
    }
  }
}

.policy {
  color: #fff;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  .policy-header {
    text-align: center;
  }
  .policy-img {
    width: 120px;
    height: 120px;
  }
  .policy-title {
    margin-top: 50px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 2px;
  }
  .policy-text {
    margin-top: 40px;
    text-align: justify;
    line-height: 1.8;
  }
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 959px) {
  .l-policy {
    flex-direction: column;
    >li {
      width: 100%;
      &:not(:first-child) {
        margin-top: 80px;
        margin-left: 0;
      }
    }
  }
}
</style>
