import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useState } from "react";

function MeetupItem(props) {
  const [itemIsFavorite,setItemIsFavorite] = useState(false)

  function toggle(){
    if(!itemIsFavorite)
      setItemIsFavorite(true);
    else
      setItemIsFavorite(false);

  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggle}>{ itemIsFavorite ? 'Remove From Favorites' : 'Add To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
