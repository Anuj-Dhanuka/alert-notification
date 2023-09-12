// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children, className} = props
  console.log(props)

  return (
    <div className="notification-bg-container">
      <div className="notification-icon-description-container">
        {children[1]}
        <div className="notification-description-container">
          <h1 className={`notification-heading ${className}`}>{children[0]}</h1>
          <p className="notification-description">{children[2]}</p>
        </div>
      </div>

      <GrFormClose className="notification-cross-icon" />
    </div>
  )
}

export default Notification
