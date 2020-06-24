<template>
  <ul class="l-policy">
    <li v-for="item in items" :key="item.name">
      <PolicyItem :img="item.img" :title="item.title" :text="item.text" />
    </li>
  </ul>
</template>

<script>
export default {
  components: {
    PolicyItem: () => import('~/components/PolicyItem'),
  },
  data() {
    return {
      items: [
        {
          img: 'icon_no_spaghetti.svg',
          title: '未来の自分たちを楽にする',
          text: '誰が読んでも理解できるような可読性が高いシンプルなコード、機能追加や改善が行い易い保守性、再利用性の高いコードを書くことを強く意識し、未来の自分たちに負債を残さないように心がけています。',
        },
        {
          img: 'icon_maximum_effect.svg',
          title: '最小工数で最大の効果',
          text: 'エンジニア観点から想定工数やリスクを考慮した上で、状況に合わせた別アプローチの実装提案も積極的に行なっています。',
        },
        {
          img: 'icon_tech_pick.svg',
          title: '状況に即した技術選定',
          text: '常にアンテナを張り新しい技術・情報は積極的に取り入れつつ、環境や状況に応じて取り入れる粒度やタイミングなどを見極めながら適切に取り入れます。',
        },
      ],
    };
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
