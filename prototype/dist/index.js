var AoolUI = (function () {
  'use strict';

  var AoolButton = {
    name: 'AoolButton',

    data() {
      return {
        count: 0
      };
    },

    template: `
    <button @click="count++">{{ count }}</button>
  `
  };

  AoolButton.install = app => app.component('AoolButton', AoolButton); // 形成组件库


  const AoolUI = {
    AoolButton,

    install(app) {
      app.use(AoolButton);
    }

  };

  return AoolUI;

}());
