// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import './index.css'
import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="alert-notification-bg-container">
    <h1 className="alert-notification-title">Alert Notifications</h1>
    <Notification className="success-text">
      Success
      <AiFillCheckCircle className="success-icon-style" />
      You can access all the files in the folder
    </Notification>

    <Notification className="error-text">
      Error
      <RiErrorWarningFill className="error-icon-style" />
      Sorry, you are not authorized to have access to delete the file
    </Notification>

    <Notification className="warning-text">
      Warning
      <MdWarning className="warning-icon-style" />
      Viewers of this file can see comments and suggestions
    </Notification>

    <Notification className="info-text">
      Info
      <MdInfo className="info-icon-style" />
      Anyone on the internet can view these files
    </Notification>
  </div>
)

export default AlertNotifications
