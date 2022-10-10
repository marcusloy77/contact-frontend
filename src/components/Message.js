
import { Link } from 'react-router-dom'
const Message = () => {
  return (
    <div className="messagePage">
      <div style={{fontSize: 36 + 'px'}}>This page is still in development - stay tuned for more</div>
      <Link to='/'><div className="wrapper"><div className="homeButton">Home</div></div></Link>
    </div>
  )
}

export default Message