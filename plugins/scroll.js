import Vue from 'vue';

Vue.directive('scroll', {
  inserted(el, binding) {
    const f = function() {
      if (binding.value(el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});
