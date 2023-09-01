import React from 'react';
import '../../css/navInfo.css'

const navInfo = () => {
    return (
        <div>
            <div className='first-nav-info'>
                Trained Aesop consultations are available to provide bespoke skin care advise. <span>Book a video consultation</span>
            </div>
            <div className='second-nav-info'>
                <p>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400 <span><svg aria-labelledby="plus-521" className="Icon_base__GKZ58 Icon_plus__raXpr Icon_dark__IcVZw ShippingBanner_ShippingBanner-openModalIcon__EAZGU" data-testid="data-testid-Icon" focusable="false" height="22" role="img" viewBox="0 0 50 50" width="22"><title id="plus-521">plus</title><g><polygon points="26.2,15.2 23.8,15.2 23.8,23.9 15,23.9 15,26.4 23.8,26.4 23.8,35.1 26.2,35.1 26.2,26.4 35,26.4 35,23.9 26.2,23.9" className="Icon_plus__raXpr"></polygon></g></svg></span></p>
            </div>
        </div>
    );
};

export default navInfo;