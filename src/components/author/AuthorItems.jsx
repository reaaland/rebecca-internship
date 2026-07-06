import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const AuthorItems = ({ author }) => {
 const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
      }, []);
  
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
      );
      // const filteredItems = data.filter(
      //   (item) => item.authorId === author?.authorId
      // );

      // setItems(filteredItems);
      
      setItems(data);
      setLoading(false);

          
    setTimeout(() => {
      setLoading(false);
    }, 1000); 

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (

  <div className="de_tab_content">
    <div className="tab-1">
      <div className="row">
        {loading
          ? new Array(8).fill(0).map((_, index) => (
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                key={index}
              >
                <div className="nft__item skeleton-card"></div>
              </div>
            ))
          : items.map((item) => (
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                key={item.id}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link to="">
                      <img
                        className="lazy"
                        src={author?.authorImage}
                        alt={author?.authorName}
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>

                  <div className="nft__item_wrap">
                    <Link to="/item-details">
                      <img
                        src={item.nftImage}
                        className="lazy nft__item_preview"
                        alt={item.title}
                      />
                    </Link>
                  </div>

                  <div className="nft__item_info">
                    <Link to="/item-details">
                      <h4>{item.title}</h4>
                    </Link>
                    <div className="nft__item_price">{item.price} ETH</div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  </div>
);
};

export default AuthorItems;
