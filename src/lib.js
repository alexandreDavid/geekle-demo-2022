import * as components from './components'

const install = (app) => {
  Object.entries(components).forEach(([name, cmp]) => {
    app.component(name, cmp)
  })
}

export default install
