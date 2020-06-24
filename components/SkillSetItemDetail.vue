<template>
  <div v-scroll="setPercentClass" class="skill_detail">
    <div class="skill_detail-header">
      <div class="skill_detail-name">{{ name }}</div>
      <div class="skill_detail-percent">{{ percent }}%</div>
    </div>
    <div class="skill_detail-body">
      <div class="skill_detail-bar js-skill_detail-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
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
  mounted() {
    this.setPercentClass(this.$el);
  },
  methods: {
    setPercentClass(el) {
      const top = el.getBoundingClientRect().top + el.clientHeight / 2;
      if (top - window.innerHeight < 0) {
        el.classList.add('is-p' + this.percent);
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.skill_detail {
  .skill_detail-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .skill_detail-body {
    margin-top: 10px;
  }
  .skill_detail-name {
    font-size: 22px;
    letter-spacing: 2px;
  }
  .skill_detail-percent {
    font-size: 22px;
    letter-spacing: 2px;
  }
  .skill_detail-bar {
    width: 100%;
    height: 11px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 100%;
      border-radius: 6px;
      background-color: #aaa;
      transition: width 0.5s ease-out 0.3s;
    }
  }
  &.is-p10 {
    .skill_detail-bar {
      &::after {
        width: 10%;
      }
    }
  }
  &.is-p20 {
    .skill_detail-bar {
      &::after {
        width: 20%;
      }
    }
  }
  &.is-p30 {
    .skill_detail-bar {
      &::after {
        width: 30%;
      }
    }
  }
  &.is-p40 {
    .skill_detail-bar {
      &::after {
        width: 40%;
      }
    }
  }
  &.is-p50 {
    .skill_detail-bar {
      &::after {
        width: 50%;
      }
    }
  }
  &.is-p60 {
    .skill_detail-bar {
      &::after {
        width: 60%;
      }
    }
  }
  &.is-p70 {
    .skill_detail-bar {
      &::after {
        width: 70%;
      }
    }
  }
  &.is-p80 {
    .skill_detail-bar {
      &::after {
        width: 80%;
      }
    }
  }
  &.is-p90 {
    .skill_detail-bar {
      &::after {
        width: 90%;
      }
    }
  }
  &.is-p100 {
    .skill_detail-bar {
      &::after {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 959px) {
  .skill_detail {
    .skill_detail-body {
      margin-top: 10px;
    }
    .skill_detail-name {
      font-size: 18px;
    }
    .skill_detail-percent {
      font-size: 18px;
    }
    .skill_detail-bar {
      height: 8px;
    }
  }
}
</style>
