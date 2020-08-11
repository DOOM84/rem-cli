import Vue from 'vue'
import { addBackToTop } from 'vanilla-back-to-top'
addBackToTop({
  diameter: 36,
  scrollDuration : 2000,
  backgroundColor: 'rgb(62,119,170)',
  textColor: '#fff',
  zIndex: 1000
});
Vue.use(addBackToTop);
addBackToTop({
  scrollDuration : 300,
  backgroundColor: '#fff',
  innerHTML: '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
  textColor: '#333'
});
