import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Abisai'
    }
  }
  render () {
    return (<section className="filter">
      Filter
    </section>)
  }
}
