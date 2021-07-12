import AoolButton from './AoolButton'

AoolButton.install = app => app.component('AoolButton', AoolButton)

// 形成组件库
const AoolUI = {
  AoolButton,
  install(app) {
    app.use(AoolButton)
  }
}

export default AoolUI