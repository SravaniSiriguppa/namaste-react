import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router";

const Body = () => {
    // Local state variable - super powerful variable
    const [ listOfRestaurants, setListOfRestaurant ] = useState([]);
    const [ filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [ searchText, setSearchText ] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
                const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.984770129477075&lng=77.74420581758022&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                    // ATP - "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.680722&lng=77.599488&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json = await data.json();
                console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

                // Find the first card that contains the restaurants array (safe traversal)
                // const cards = json?.data?.cards || [];
                // let restaurants = [];
                // for (const c of cards) {
                //     const r = c?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                //     if (Array.isArray(r)) {
                //         restaurants = r;
                //         break;
                //     }
                // }

                // Normalize shape: API returns items as { info: { ... } }, while our mock uses { data: { ... } }
                // const normalized = restaurants.map((item) => {
                //     if (item?.info) return { data: item.info };
                //     return item;
                // });

                // Filter out malformed entries and set state
                // const filtered = normalized.filter((r) => r?.info);
                // Show all fetched restaurants (don't deduplicate)
                // setListOfRestaurant(filtered);
                // setFilteredRestaurants(filtered);

                setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

    // Conditional Rendering
    if(listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter"> 
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
                    <button className="search-btn" onClick={
                        () => {
                            const filteredRestaurants = listOfRestaurants.filter( res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                            setFilteredRestaurants(filteredRestaurants);
                        }
                    } >Search</button>
                </div>
                <button className="filter-btn" onClick={
                    () => {
                        // Update the displayed list (filteredRestaurants), not the source list
                        const filteredList = listOfRestaurants.filter(res => {
                            // per repo data shape, rating lives under res.info.avgRating
                            const raw = res?.info?.avgRating;
                            const num = parseFloat(raw);
                            return !isNaN(num) && num > 4;
                        });
                        setFilteredRestaurants(filteredList);
                    }
                }> Top Rated Restaurants</button>
            </div>
            <div className="restaurant-conatiner"> 
                {
                    filteredRestaurants.map((restaurant) => ( 
                        <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant}  /></Link>
                    // <RestaurantCard key={restaurant.info.id} resData={restaurant}  />
                 )
                  )
                }
                {/* {restaurantList.map(r => (
      <RestaurantCard
        key={r.data?.id ?? r.id ?? r.name}   // key here
        resData={r}
      />
    ))} */}
                {/* <RestaurantCard resData = {restaurantList[0]} />
                <RestaurantCard resData = {restaurantList[1]} />
                <RestaurantCard resData = {restaurantList[2]} />
                <RestaurantCard resData = {restaurantList[3]} />
                <RestaurantCard resData = {restaurantList[4]} />
                <RestaurantCard resData = {restaurantList[5]} /> */}
                {/* <RestaurantCard resName="Meghana Foods" cuisine="South Indian, North Indian" Rating="4.5 ⭐"/>
                <RestaurantCard resName="Indian Spice" cuisine="Indian, Chinese, Italian" Rating="4.0 ⭐"/>
                <RestaurantCard resName="Taco Bell" cuisine="Mexican" Rating="4.2 ⭐"/>
                <RestaurantCard resName="Sushi Place" cuisine="Japanese" Rating="4.8 ⭐"/>
                <RestaurantCard resName="Curry House" cuisine="Indian" Rating="4.1 ⭐"/>
                <RestaurantCard resName="Noodle Bar" cuisine="Chinese" Rating="4.3 ⭐"/>
                <RestaurantCard resName="Meghana Foods" cuisine="South Indian, North Indian" Rating="4.5 ⭐"/>
                <RestaurantCard resName="Indian Spice" cuisine="Indian, Chinese, Italian" Rating="4.0 ⭐"/> */}
            </div>
        </div>
    )
}

export default Body;