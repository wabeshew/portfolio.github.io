<template>
  <ul class="l-contact">
    <li><a href="https://twitter.com/2abeshe2" class="contact"><img src="~/assets/img/icon_twitter.svg" alt=""></a></li>
  </ul>
</template>

<style lang="scss" scoped>
.l-contact {
  display: flex;
  align-items: center;
  justify-content: center;
  >li {
    &:not(:first-child) {
      margin-left: 30px;
    }
  }
}

.contact {
  display: block;
  width: 65px;
  height: 65px;
  background-color: #fff;
  border-radius: calc(65px / 2);
  &:hover {
    opacity: 0.8;
  }
}

@media screen and (max-width: 959px) {
  .contact {
    width: 50px;
    height: 50px;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
