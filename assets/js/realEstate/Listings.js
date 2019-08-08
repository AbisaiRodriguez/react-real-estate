import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Abisai'
    }
  }
  render () {
    return (<section className="listings">
      <section className="searchArea">
        <input type="text" name="search" />
      </section>

      <section className="sortByArea">
        <div>
          390 Results Found
        </div>
        <div className="sortOptions">
          <select name="sortBy" className="sortBy">
            <option value="priceAsc">Highest Price</option>
            <option value="priceDsc">Lowest Price</option>
          </select>
          <div className="view">
            <i className="fas fa-th-list"></i>
            <i className="fas fa-th"></i>
          </div>
        </div>

      </section>

      <section className="listingsResults">
        <div className="listing">
          <div className="listing-img">
            <span className="Address">Address</span>
            <div className="details">
              <div className="user-img"> </div>
              <div className="user-details">
                <span className="user-name">Nina Smith</span>
                <span className="post-date">05/08/2017</span>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pagination">

      </section>
  </section>)
  }
}
