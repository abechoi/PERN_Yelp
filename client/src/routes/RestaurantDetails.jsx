import React, { useEffect, useContext } from 'react'
import RestaurantFinder from '../api/RestaurantFinder'
import { useParams } from 'react-router-dom'
import { RestaurantContext } from '../contexts/RestaurantContext';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
import StarRating from '../components/StarRating';

const RestaurantDetails = () => {

  const { id } = useParams();

  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantContext);

  useEffect(() => {
    const fetchData = async () => {

      try{
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response.data.data)
        setSelectedRestaurant(response.data.data);
      }catch(err){console.log(err)}
    }
    fetchData();
  }, []);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">{selectedRestaurant.restaurant.name}</h1>
          <div className="text-center">
            <StarRating rating={selectedRestaurant.restaurant.avg_rating}/>
            <span className="text-warning m;-1">
              {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews}/>
          </div>
          <AddReview />
        </>
      )}
    </div>
  )
}

export default RestaurantDetails
