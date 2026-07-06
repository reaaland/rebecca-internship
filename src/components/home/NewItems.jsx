import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewItems = () => {
  const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [time, setTime] = useState(Date.now());
  
    useEffect(() => {
      getData();
    }, []);

    useEffect(() => {
  const interval = setInterval(() => {
    setTime(Date.now());
  }, 1000);

  return () => clearInterval(interval);
}, []);
  
    const getData = async () => {
        try {
          const { data } = await axios.get(
            "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
          );
        setCollections(data);
     
    setTimeout(() => {
      setLoading(false);
    }, 1000); 

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function PrevArrow(props) {
  const { onClick } = props;

  return (
    <button className="custom-prev" onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </button>
  );
}

function NextArrow(props) {
  const { onClick } = props;

  return (
    <button className="custom-next" onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </button>
  );
}

const getCountdown = (expirationDate) => {
  const difference = expirationDate - time;

  if (difference <= 0) {
    return null;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  return `${hours}h ${minutes}m ${seconds}s`;
};

 return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-lg-12">
            <Slider {...settings}>
              {collections.map((collection, index) => (
                <div key={index} >
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link to={`/author/${collection.authorId}`}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={`Creator: ${collection.authorName}`}
                      > 
                        <img className="lazy" src={collection.authorImage} alt="" />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>

                    {getCountdown(collection.expiryDate) && (
                  <div className="de_countdown">
                    {getCountdown(collection.expiryDate)}
                  </div>
                )}

                   <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                      </div>
                    </div>

                    <Link to="/item-details">
                      <img
                        src={collection.nftImage}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="nft__item_info">
                    <Link to="/item-details">
                      <h4>{collection.title}</h4>
                    </Link>

                    <div className="nft__item_price">{collection.price} ETH</div>

                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>{collection.likes}</span>
                    </div>
                  </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewItems;
