<template>
  <div class="wrapper">
    <main>
      <Catch />
      <section class="l-contents">
        <div class="contents">
          <div class="contents-header">
            <h2>Profile</h2>
          </div>
          <div class="contents-body">
            <Profile />
          </div>
        </div>
      </section>
      <section class="l-contents l-contents--policy">
        <div class="contents contents--lowbrightness">
          <div class="contents-header">
            <h2>Policy</h2>
          </div>
          <div class="contents-body">
            <Policy />
          </div>
        </div>
      </section>
      <section class="l-contents">
        <div class="contents">
          <div class="contents-header">
            <h2>Skill Set</h2>
          </div>
          <div class="contents-body">
            <SkillSet />
          </div>
        </div>
      </section>
      <section class="l-contents l-contents--contact">
        <div class="contents contents--lowbrightness">
          <div class="contents-header">
            <h2>CONTACT</h2>
          </div>
          <div class="contents-body">
            <Contact />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    Catch: () => import('~/components/Catch'),
    Profile: () => import('~/components/Profile'),
    Policy: () => import('~/components/Policy'),
    SkillSet: () => import('~/components/SkillSet'),
    Contact: () => import('~/components/Contact'),
  },
  head() {
    return {
      title: 'Kota Shimura Portfolio',
      meta: [
        { hid: 'description', name: 'description', content: 'Kota Shimura Portfolio / Frontend engineer' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Kota Shimura Portfolio' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://wabeshew.github.io/' },
        { hid: 'og:title', property: 'og:title', content: 'Kota Shimura Portfolio' },
        { hid: 'og:description', property: 'og:description', content: 'Kota Shimura Portfolio / Frontend engineer' },
        { hid: 'og:image', property: 'og:image', content: 'https://wabeshew.github.io/ogp.png' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@2abeshe2' },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@2abeshe2' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.l-contents {
  &.l-contents--policy {
    background-color: #80c8ce;
  }
  &.l-contents--contact {
    background-color: #f2bb7b;
  }
}

.contents {
  width: 920px;
  margin: 0 auto;
  padding: 80px 0 140px;
  .contents-header {
    text-align: center;
    font-size: 44px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .contents-body {
    margin-top: 60px;
  }
  &.contents--lowbrightness {
    .contents-header {
      color: #fff;
    }
  }
}

@media screen and (max-width: 959px) {
  .contents {
    width: 100%;
    padding: 80px 30px;
    .contents-header {
      font-size: 40px;
    }
  }
}
</style>
