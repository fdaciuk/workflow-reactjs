'use strict'

import React, { PureComponent } from 'react'
import { hot, setConfig } from 'react-hot-loader'
setConfig({ logLevel: 'debug' })

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      title: '...',
      Component: 'div'
    }
  }

  getTitle () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('My app with async / await!')
      }, 2000)
    })
  }

  async componentDidMount () {
    const title = await import('components/title') // eslint-disable-line

    this.setState({
      title: await this.getTitle(),
      Component: title.default
    })
  }

  render () {
    return (
      <div>
        <this.state.Component>{this.state.title}</this.state.Component>
      </div>
    )
  }
}

export default hot(module)(App)
