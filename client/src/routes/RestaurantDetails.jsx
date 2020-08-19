import React, { useEffect, useContext } from 'react'
import RestaurantFinder from '../api/RestaurantFinder'
import { useParams } from 'react-router-dom'
import { RestaurantContext } from '../contexts/RestaurantContext';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';

const RestaurantDetails = () => {

  const { id } = useParams();

  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantContext);

  useEffect(() => {
    const fetchData = async () => {

      try{
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
      }catch(err){console.log(err)}
    }
    fetchData();
  }, []);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <div className="mt-3">
            <Reviews />
          </div>
        </>
      )}
    </div>
  )
}

export default RestaurantDetails
