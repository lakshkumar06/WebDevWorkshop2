import React from "react";
import { Link } from 'react-router-dom';
import styles from './ItemCard.module.css';


const ItemCard = ({item}) => {
    return(
        <div>
        <div className={styles.itemCard}>
            <img src='image.png'></img>
            <div className={styles.ItemDetails}>
                <p className={styles.cardPrice}>${item.price}</p>
                <p className={styles.cardDescription}>${item.description}n</p>
            </div>
        </div>
        </div>
    )
}

export default ItemCard;