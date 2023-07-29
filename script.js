import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles.scss';
import {Logo, HeadNav, HeadContacts, MainNavigation, MainBlock} from './DemoList.jsx'


const App = () => {
    return (
        <div>
            <header className='header'>
                <Logo title = {'LOGO'}/>
                <HeadNav list1 = {'Про нас'} list2 = {'Каталог'} list3 = {'Контакти'} />
                <HeadContacts phone = {'+380671111111'} email = {'test@gmail.com'}/>
            </header>
            <main className='main-container'>
                <div>
                    <MainNavigation title = {'Каталог товарів'} category1 = {'Пральні машини'} category2 = {'Холодильники'} category3 = {'Мікрохвильові печі'} category4 = {'Пилососи'} category5 = {'Міксери'} category6 = {'Телевізори'} category7 = {'Телефони'} />
                </div>
                <div>
                    <MainBlock title = {'Товари'} product1 = {'Товар №1'} product2 = {'Товар №2'} product3 = {'Товар №3'} product4 = {'Товар №4'}/>
                </div>
            </main>
        </div>
    )
}


const root = createRoot(document.getElementById('app'));


root.render(App())