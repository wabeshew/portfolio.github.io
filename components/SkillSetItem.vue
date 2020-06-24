<template>
  <div v-scroll="slideIn" class="skill">
    <div class="skill-icon"><img :src="imgsrc" :alt="name" class="skill-img"></div>
    <div class="skill-detail">
      <SkillSetItemDetail :name="name" :percent="percent" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SkillSetItemDetail: () => import('~/components/SkillSetItemDetail'),
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      imgsrc: require('@/assets/img/icon_' + this.name + '.svg'),
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
.skill {
  display: flex;
  align-items: center;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  .skill-detail {
    flex: 1;
    margin-left: 20px;
  }
  .skill-img {
    width: 65px;
    height: 65px;
  }
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 959px) {
  .skill {
    .skill-detail {
      margin-left: 10px;
    }
    .skill-img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
