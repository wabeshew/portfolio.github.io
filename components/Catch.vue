<template>
  <section class="l-catch">
    <div class="catch">
      <div class="catch-header">
        <div class="catch-name">KOTA<br>SHIMURA</div>
        <div class="catch-text">Front-end Engineer</div>
      </div>
      <div class="catch-body">
        <Glasses />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Glasses: () => import('~/components/Glasses'),
  },
};
</script>

<style lang="scss" scoped>
.l-catch {
  background-color: #56b395;
}

.catch {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 920px;
  margin: 0 auto;
  padding: 185px 0;
  .catch-name {
    position: relative;
    color: #fff;
    font-size: 80px;
    font-weight: bold;
    line-height: 1;
  }
  .catch-text {
    margin-top: 10px;
    font-size: 40px;
    font-weight: bold;
  }
}

@media screen and (max-width: 959px) {
  .catch {
    align-items: initial;
    flex-direction: column-reverse;
    justify-content: center;
    width: 100%;
    height: 100vh;
    min-height: 540px;
    padding: 0 30px;
    .catch-header {
      margin-top: 40px;
    }
    .catch-name {
      font-size: 40px;
    }
    .catch-text {
      font-size: 30px;
    }
  }
}
</style>
