import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBinoculars, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <div className='header'>
      <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBinoculars} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">Alifetime of discount?</h1>
        <p className="headerDescription">
          Get rewarded on the travel - unlock the instant saving of 10% or
          more with hotel booking  account
        </p>
        <button className="headerBtn">Sign in / Register</button>
      </div>
    </div>
  )
}

export default Header