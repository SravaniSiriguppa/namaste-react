import restaurantList from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
}

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    const {deliveryTime} = resData.info.sla;
    console.log("resData:" ,resData);
    // console.log(resData.sla)

    return (
        <div className="restaurant-card" style={styleCard}>
            <img className="restaurant-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-logo" />
            {/* <h3> {props.resName} </h3>
            <h4> {props.cuisine} </h4>
            <h4> {props.Rating} </h4> */}
            <h3> {name} </h3>
            <h4> {cuisines.join(", ")} </h4>
            <h4> {avgRating} ⭐</h4>
            <h4> {costForTwo} </h4>
            <h4> {deliveryTime} MINS</h4>
        </div>
    )
}

export default RestaurantCard;