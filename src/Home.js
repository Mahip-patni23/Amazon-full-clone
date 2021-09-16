import React from 'react'
import './Home.css';
import Product from './Product';
import {banners} from './banners';
import { useState, useEffect } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {useGlobalContext} from './Context';


function Home() {
  const {closeSubmenu, isSubmenuOpen} = useGlobalContext();
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if(index<0){
        setIndex(banners.length-1)
      }else if(index >= banners.length)
      {
        setIndex(0);
      }
    }, [index, banners])


    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(index+1);
      }, 5000)
      return () => clearInterval(interval);
    }, [index])

    return (
        <div className={`home ${isSubmenuOpen && "home_dark_background"}`} onMouseOver={closeSubmenu}>
            <div className="home_container">
                {
                  banners.map((banner, bannerIndex) => {
                    const {image, id} = banner;
                    let position = 'nextslide';
                    if(bannerIndex===index)
                    {
                      position = 'activeslide';
                    }
                    if(bannerIndex === index-1 || (index===0 && bannerIndex===banners.length-1))
                    {
                      position = 'lastslide';
                    }
                    return <img key={id} className={`home_image ${position}`} src={image} alt="banner"/>
                  })
                }

                <button className="btn prev_btn"  onClick={() => setIndex(index-1)}>
                  <ChevronLeftIcon fontSize="large"></ChevronLeftIcon>
                </button>
                <button className="btn next_btn"  onClick={() => setIndex(index+1)}>
                  <ChevronRightIcon fontSize="large" ></ChevronRightIcon>
                </button>

                
                <div className="home_row">
                  <Product
                     id="12321341"
                     title="HP Chromebook x360 14-inch (35.56 cms) Thin & Light Touchscreen Laptop (AMD 3015CE/4GB/64GB eMMC Storage/Chrome OS/Mineral Silver/1.49 kg), 14a-cb0007AU"
                     price={180.32}
                     rating={4}
                     image="https://m.media-amazon.com/images/I/81hoonPUdxL._SL1500_.jpg"
                  />

                  <Product
                     id="49538095"
                     title="FCS Ultrathin 0.125 mm Edge to Edge Full Screen Coverage Flexible Watch Screen Protector TPU Membrane for Amazfit GTS 2 Mini (Clear, 2)"
                     price={149.99}
                     rating={3}
                     image="https://m.media-amazon.com/images/I/513--URmZRS._AC_AA220_.jpg"
                  />

                  <Product
                     id="49538094"
                     title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue with Apple AirPods Pro"
                     price={999.99}
                     rating={5}
                     image="https://m.media-amazon.com/images/I/71E+LakZrTL._SL1500_.jpg"
                  />

                  <Product
                     id="4903851"
                     title="Oboe Screen Protector Cases Compatible with Amazfit Bip U Pro/ BIP U/ GTS 2 Mini/Bip S /Bip S Lite /Bip /Bip Lite Watch Soft Metal Color TPU Shockproof Cover Thin Bumper Shell Protector (Black)"
                     price={599.99}
                     rating={4}
                     image="https://m.media-amazon.com/images/I/51kZc8x5vSS._AC_AA220_.jpg"
                  />
               </div>

               <div className="home_row">
                  <Product
                     id="4903850"
                     title="AGARO HD-1120 2000 Watts Professional Hair Dryer with AC Motor, Concentrator, Diffuser, Comb, Hot and Cold Air, 2 Speed 3 Temperature Settings with Cool..."
                     price={209.19}
                     rating={3}
                     image="https://m.media-amazon.com/images/I/71rMdHAZD5S._SL1500_.jpg"
                  />
                  <Product
                    id="23445930"
                    title="MuscleBlaze Beginner's Whey Protein Supplement (Chocolate, 1 kg / 2.2 lb, 33 Servings) with Shaker, 650 ml (Combo Pack)"
                    price={100.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61ymf-cY8WL._SL1500_.jpg"
                  />
                  <Product
                    id="3254354345"
                    title="Villain Perfume For Men 100 Ml - Eau De Parfum - Premium Long Lasting Fragrance Spray - Woody & Spicy"
                    price={80.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71N+33GFefL._SL1500_.jpg"
                  />
                  <Product
                    id="3254354349"
                    title="Amazfit Bip U Pro NYSE Listed Smart Watch with SpO2, Built-in GPS, Built-in Alexa, Electronic Compass, 60+ Sports Modes, 5ATM, Fitness Tracker, HR, Sleep, Stress Monitor, 1.43 Color Display (Black)"
                    price={4999.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61xCuOwThNL._AC_AA220_.jpg"
                  />
               </div>

               <div className="home_row">
                  <Product
                    id="90829332"
                    title="BenQ 31.5 inch(80.01 cm) Gaming Monitor - Eye Care Technology, 4K, HDR - EW3270U (Black)"
                    price={230.88}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61Lgm86L29S._SL1000_.jpg"
                  />
                  <Product
                    id="90829333"
                    title="realme Smart Watch S with 1.3 inch (3.3 cm) TFT-LCD Touchscreen, 15 Days Battery Life, SpO2 & Heart Rate Monitoring, IP68 Water Resistance, Black"
                    price={3999.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/614SBqXrTES._AC_AA220_.jpg"
                  />
                  <Product
                    id="90829337"
                    title="boAt Airdopes 171 TWS Earbuds with 13 Hours Battery, IPX4, Bluetooth V5.0, Voice Assistant and Dual Tone Finish with Mic(Active Black)"
                    price={1399.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61A48m3XfSS._AC_AA220_.jpg"
                  />
               </div>

               <div className="home_row">
                  <Product
                    id="90829332"
                    title="Spigen Rugged Armor TPU Back Cover Case for iPhone XR - Matte Black"
                    price={1099.98}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61QpwqsUH6L._AC_AA220_.jpg"
                  />
                  <Product
                    id="90829332"
                    title="Samsung Galaxy Z Fold3 5G (Phantom Black, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={1094.98}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71MmJNwZcML._SL1500_.jpg"
                  />
                  <Product
                    id="90829332"
                    title="Samsung Galaxy Note 20 (Mystic Bronze, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={799.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81v6FUkT5CL._SL1500_.jpg"
                  />
                  <Product
                    id="90829332"
                    title="ROG Strix GA35, 8 Cores 3rd Gen AMD Ryzen 7-3700X Gaming Desktop (16GB RAM/1TB HDD + 512GB SSD/Window 10/8GB NVIDIA GeForce RTX 2070 Super Graphics/with..."
                    price={610.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61Fw78HXVaS._SL1500_.jpg"
                  />
                  
              </div>
              <div className="home_row">
                <Product
                    id="90829337"
                    title="boAt Airdopes 171 TWS Earbuds with 13 Hours Battery, IPX4, Bluetooth V5.0, Voice Assistant and Dual Tone Finish with Mic(Active Black)"
                    price={1399.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61A48m3XfSS._AC_AA220_.jpg"
                  />
                  <Product
                    id="90829332"
                    title="BenQ 31.5 inch(80.01 cm) Gaming Monitor - Eye Care Technology, 4K, HDR - EW3270U (Black)"
                    price={230.88}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61Lgm86L29S._SL1000_.jpg"
                  />
                  <Product
                    id="90829333"
                    title="realme Smart Watch S with 1.3 inch (3.3 cm) TFT-LCD Touchscreen, 15 Days Battery Life, SpO2 & Heart Rate Monitoring, IP68 Water Resistance, Black"
                    price={3999.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/614SBqXrTES._AC_AA220_.jpg"
                  />
                  <Product
                    id="90829337"
                    title="boAt Airdopes 171 TWS Earbuds with 13 Hours Battery, IPX4, Bluetooth V5.0, Voice Assistant and Dual Tone Finish with Mic(Active Black)"
                    price={1399.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61A48m3XfSS._AC_AA220_.jpg"
                  />
              </div>

              <div className="home_row">
                <div className="home_row_blank">
                </div>
              </div>
            </div> 
        </div>
    )
}

export default Home
