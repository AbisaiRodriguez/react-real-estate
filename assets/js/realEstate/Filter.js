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
      <h4>Filter</h4>
      <select name="neighborhood" className="filters neighborhood">
        <option>Ridgewood</option>
      </select>
      <select name="houseType" className="filters houseType">
        <option>Ranch</option>
      </select>
      <select name="bedrooms" className="filters bedrooms">
        <option>2 BR</option>
      </select>
      <div className="filters price">
        <span className="title">Price</span>
        <input type="text" name="min-price" className="minPrice" />
        <input type="text" name="max-price" className="maxPrice" />
      </div>
      <div className="filters floorSpace">
        <span className="title">Floor Space</span>
        <input type="text" name="min-floorSpace" className="minFloorSpace" />
        <input type="text" name="max-floorSpace" className="maxFloorSpace" />
      </div>
    </section>)
  }
}
