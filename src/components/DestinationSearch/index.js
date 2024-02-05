import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'
import App from './src/App'

console.log(destinationsList)
class DestinationSearch extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <input type="search" />
        <DestinationItem />
      </div>
    )
  }
}
export default DestinationSearch
