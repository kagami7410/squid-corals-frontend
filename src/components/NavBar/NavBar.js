import React, { useEffect, useState } from 'react'
import './NavBar.css'
import CartLogo from './assets/shopping-cart-WHITE-removebg.png';
import UserIcon from './assets/user-owner-icon-white-png-removebg-preview.png'

export const NavBar = () => {


    const [border, setBorder] = useState('');


    useEffect(() => {
        setTimeout(() => {
            // setBorder('border')    
          }, 10)
      
          // Set the new X position
        }, []);



    const [basketItemCount, setBasketItemCount] = useState(0)
    return (
        <div className={`navbar-main-container ${border}`}>
                                <div className={`nav-bar-logo-container ${border}`}>
                        <div className={`title1 ${border}`}> SQUID </div>
                        <div className={`title2 ${border}`}>  CORALS</div>

                    </div>
            <div className={`nav-bar-container ${border}`}>
                <div className={`nav-bar1-container ${border}`}>
                    <div className={`nav-bar1-all-items-container`}>
                        <div className={`nav-bar1-items-container-usericon ${border}`}>
                        <img className={`usericon ${border}`} src={UserIcon} alt="Example" />

                        </div>
                        <div className={`nav-bar1-items-container-shoppingcart ${border}`}>
                        <img className={`shoppingcart ${border}`} src={CartLogo} alt="Example" />
                        <h3>Basket</h3>
                        <h3 className={`basket-total-number ${border}`}>{basketItemCount}</h3>
                            
                        </div>

                    </div>

                </div>
                <div className={`nav-bar2-container ${border}`}>

                    <div className={`nav-bar2-allitems-container ${border}`}>


                        <div className={`nav-bar2-items-container ${border}`}>
                            3D Printed
                        </div>
                        <div className={`nav-bar2-items-container ${border}`}>
                            Special Offers
                        </div>
                        <div className={`nav-bar2-items-container ${border}`}>
                            Corals
                        </div>
                        <div className={`nav-bar2-items-container ${border}`}>
                            LiveStocks
                        </div>


                    </div>

                </div>
            </div>

        </div>

    )
}

export default NavBar
