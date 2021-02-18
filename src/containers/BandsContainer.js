import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addBand} from '../action/bandAction' 
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  // addBand = (band) => {
  //   this.props.addBand(band)
  // }
  renderBands = () => this.props.bands.map((band,id)=> <li key={id}>{band.name}</li>)
  render() {
   
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.renderBands()}
        </ul>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch(addBand(band))
  }
} 
const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
