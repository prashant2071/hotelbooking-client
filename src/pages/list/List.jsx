import './list.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { DateRange } from 'react-date-range'

const List = () => {
  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date);
  const [options,setOptions] = useState(location.state.options)
  const [openDate,setOpenDate] = useState()

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${moment(date[0].startDate).format('dddd, MMMM D')} --
            ${moment(date[0].endDate).format('dddd, MMMM D')}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
          </div>
          <div className="listResult">

          </div>
        </div>
      </div>
    </div>
  )
}

export default List