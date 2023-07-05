import {CDN_URL} from '../Utils/Constant'

const ReastrauntCard = (props) =>{
    const{resData} = props;
  
    const{
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime
    } = resData?.data
  
    return (
      <div className='res-card'>
        <img className='res-logo'
        alt="food-image" src={CDN_URL +
        cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo/100} FOR TWO</h4>
        <h4>{deliveryTime}minutes</h4>
      </div>
    )
  }

export default ReastrauntCard; 