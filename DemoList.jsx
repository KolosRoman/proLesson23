import React from 'react';



export const Logo = ({title}) => {
    return (
    <p className='header-logo'>{title}</p>
    )
}

export const HeadNav = ({list1, list2, list3}) => {
     return (
        <ul className='header-menu'>
            <li className='header-menu-item'>{list1}</li>
            <li className='header-menu-item'>{list2}</li>
            <li className='header-menu-item'>{list3}</li>
        </ul>
     )   
}

export const HeadContacts = ({phone, email}) => {
    return (
        <ul className='header-contacts'>
            <li className='header-contacts-item'>{phone}</li>
            <li className='header-contacts-item'>{email}</li>
        </ul>
    )
}

export const MainNavigation = ({title, category1, category2, category3, category4, category5, category6, category7}) => {
    return (
        <div className='main-nav-container'>
        <p className='main-nav-title'>{title}</p>
        <ul className='main-nav-block'>
            <li className='main-nav-item'>{category1}</li>
            <li className='main-nav-item'>{category2}</li>
            <li className='main-nav-item'>{category3}</li>
            <li className='main-nav-item'>{category4}</li>
            <li className='main-nav-item'>{category5}</li>
            <li className='main-nav-item'>{category6}</li>
            <li className='main-nav-item'>{category7}</li>
        </ul>
    </div>
    )
}

export const MainBlock = ({title, product1, product2, product3, product4}) => {
    return (
        <div className='main-product-container'>
            <h1 className='main-product-title'>{title}</h1>
            <ul className='main-product-block'>
                <li className='main-product-card'>
                    <p className='main-product-item'>{product1}</p>
                </li>
                <li className='main-product-card'>
                    <p className='main-product-item'>{product2}</p>
                </li>
                <li className='main-product-card'>
                    <p className='main-product-item'>{product3}</p>
                </li>
                <li className='main-product-card'>
                    <p className='main-product-item'>{product4}</p>
                </li>
            </ul>
        </div>
    )
}