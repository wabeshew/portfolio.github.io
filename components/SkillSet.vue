<template>
  <ul class="l-skill">
    <li v-for="item in items" :key="item.name">
      <SkillSetItem :name="item.name" :percent="item.percent" />
    </li>
  </ul>
</template>

<script>
export default {
  components: {
    SkillSetItem: () => import('~/components/SkillSetItem'),
  },
  data() {
    return {
      items: [
        {
          name: 'HTML',
          percent: 90,
        },
        {
          name: 'CSS',
          percent: 90,
        },
        {
          name: 'JavaScript',
          percent: 70,
        },
        {
          name: 'Sass',
          percent: 80,
        },
        {
          name: 'Git',
          percent: 80,
        },
        {
          name: 'npm-scripts',
          percent: 60,
        },
        {
          name: 'WordPress',
          percent: 60,
        },
      ],
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
.l-skill {
  display: flex;
  flex-wrap: wrap;
  >li {
    width: calc(100% / 2 - 60px);
    &:not(:nth-child(odd)) {
      margin-left: 60px;
    }
    &:nth-child(n + 3) {
      margin-top: 60px;
    }
  }
}

@media screen and (max-width: 959px) {
  .l-skill {
    flex-direction: column;
    >li {
      width: 100%;
      &:not(:nth-child(odd)) {
        margin-left: 0;
      }
      &:nth-child(n + 3) {
        margin-top: 0;
      }
      &:not(:first-child) {
        margin-top: 60px;
      }
    }
  }
}
</style>
