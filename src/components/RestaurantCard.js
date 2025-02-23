import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
  
    // Check if resData exists
    if (!resData || !resData.info) {
      return <div>No restaurant data available</div>;
    }
  
    // Destructure the required fields
    const {
      name,
      cloudinaryImageId,
      cuisines,
      avgRating,
      sla: {slaString},
    } = resData?.info;
  
    return (
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{slaString}</h4>
      </div>
    );
  };

export default RestaurantCard;