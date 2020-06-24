<template>
  <div v-scroll="slideIn" class="profile">
    <div class="profile-header">
      <div class="profile-avatar"><img src="~/assets/img/illust_self_portrait.svg" alt="Kota Shimura" class="profile-img"></div>
    </div>
    <div class="profile-body">
      <div class="profile-name">Kota Shimura</div>
      <p class="profile-text">大学を卒業後、WEB制作会社にてフロントエンド制作業務を担当。現在は某大規模不動産サイトにフロントエンドエンジニアとして参画し、制作運用業務を担当。</p>
    </div>
  </div>
</template>

<script>
export default {
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
.profile {
  display: flex;
  justify-content: center;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  .profile-body {
    margin-left: 30px;
  }
  .profile-img {
    width: 150px;
    height: 150px;
  }
  .profile-name {
    font-size: 50px;
  }
  .profile-text {
    margin-top: 30px;
    font-size: 22px;
    line-height: 1.8;
  }
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 959px) {
  .profile {
    flex-direction: column;
    .profile-header {
      text-align: center;
    }
    .profile-body {
      margin-left: 0;
    }
    .profile-img {
      width: 120px;
      height: 120px;
    }
    .profile-name {
      margin-top: 40px;
      text-align: center;
      font-size: 42px;
    }
    .profile-text {
      margin-top: 40px;
      font-size: 20px;
    }
    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
