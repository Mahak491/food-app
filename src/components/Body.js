import ReastrauntCard from './ReastrauntCard'
import { resList } from '../Utils/mockData';
import { useState } from 'react';

const Body = () =>{
    const [listOfRestaurants, setListOfRestraunt] = useState(resList);
    return(
    <div className='body'>
      <div className='filter'>
        <button className='filter-btn' onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}>Top Rated Restaurants</button>
      </div>  
      <div className='res-container'>
        {listOfRestaurants.map((restaurant)=>(
          <ReastrauntCard key={restaurant.data.id} resData = {restaurant}/>
        ))}
      </div>
    </div>    
    )
  }

export default Body;