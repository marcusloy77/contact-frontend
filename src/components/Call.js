import { FaPhoneAlt} from 'react-icons/fa'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react'

const Call = () => {

  const [searchParams] = useSearchParams()
  const [dialedNum, setDialedNum] = useState(searchParams.get('number') || '')

  const dial = (event) => {
    setDialedNum(dialedNum + event.target.closest('.dialNumber').innerText)
  }

  const del = () => {
    setDialedNum(dialedNum.slice(0,dialedNum.length - 1))
  }

  return (
    <div className='callPage'>
      <div className='backBtn'></div>
      <div className='dialedNumber' id='dialNum'>{dialedNum}</div>
      <div className='numberListWrapper'>
        <div className="numberList">
          <div className="numberCol">
            <div className="dialNumber" onClick={dial}>1</div>
            <div className="dialNumber" onClick={dial}>4</div>
            <div className="dialNumber" onClick={dial}>7</div>
            <div className="dialNumber" onClick={dial}>*</div>
          </div>
          <div className="numberCol">
            <div className="dialNumber" onClick={dial}>2</div>
            <div className="dialNumber" onClick={dial}>5</div>
            <div className="dialNumber" onClick={dial}>8</div>
            <div className="dialNumber" onClick={dial}>0</div>
            <div className="dialNumber callBtn"><FaPhoneAlt/></div>
          </div>
          <div className="numberCol">
            <div className="dialNumber" onClick={dial}>3</div>
            <div className="dialNumber" onClick={dial}>6</div>
            <div className="dialNumber" onClick={dial}>9</div>
            <div className="dialNumber" onClick={dial}>#</div>
            <div className='dialNumber deleteBtn' onClick={del}><RiDeleteBack2Fill/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Call