import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {MENU_DATA} from "../utils/menuMockData";
import { useParams } from "react-router";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    // useParams returns an object mapping param names to values, e.g. { resId: '23' }
    // Do not destructure a `params` property from it — that property doesn't exist.
    // Either grab the whole object or pull the specific param you need.
    const params = useParams();
    const { resId } = params; // resId corresponds to the :resId route param in App.js
    console.log("route params:", params, "resId:", resId);

    const fetchMenu = async () => {
        try{
            // const data = await fetch(
            //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.984770129477075&lng=77.74420581758022&restaurantId=66108&catalog_qa=undefined&submitAction=ENTER"
            // );
            // console.log("Data: ", data)
        
            // const json = await data.json();
        
            // console.log(json);
            // setResInfo(json.data ?? json)
            // menuMockData exports a default object `menuData` with shape { data: { cards: [...] } }
            // RestaurantMenu expects `resInfo` to be the `data` object (so resInfo.cards exists)
            console.log("Menu Data: ", MENU_DATA.data)
            setResInfo(MENU_DATA.data);
        }
        catch(error) {  
            console.error("Error fetching menu:", error);
        }
        // console.log(resInfo);
    }

    useEffect(() => {
        fetchMenu();
    }, [])
    
    if(resInfo === null) return <Shimmer />;
    
    const {name, cuisines, costForTwoMessage} = resInfo?.cards?.[2]?.card?.card?.info ?? {};
    const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log("itemCards: ", itemCards)
    return (
        <div className="menu">
            <h2>{name}</h2>
            <p>{cuisines.join(", ") } - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item) => (
                    <li key={item.card.info.id}> 
                    {item.card.info.name} - ₹{item.card.info.price / 100 || item.card.info.defaultPrice/ 100 }
                    </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default RestaurantMenu;