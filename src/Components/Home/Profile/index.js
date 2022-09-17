import './index.scss'
import haresh from '../../../assets/images/haresh.jpg'
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="bg"></div>
      <img className="solid-img" src={haresh} alt="" />
    </div>
  )
}
export default Profile
