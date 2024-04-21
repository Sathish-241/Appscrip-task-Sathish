import React, {Component} from 'react';
import './index.css';
import { AiOutlineDribbble } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { PiHeart } from "react-icons/pi";
import { TbShoppingBagMinus } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { HiChevronLeft } from "react-icons/hi2";
import { PiList } from "react-icons/pi";
import ProductItem from '../ProductItem';
import Footer from '../Footer'


class ProductsListingPage extends Component{
    state={
        productsArray:[]
    }
    
    componentDidMount(){
        this.getProductsToDisplay()
    }

    getProductsToDisplay=async()=>{

        const url="https://fakestoreapi.com/products"
        const response=await fetch(url);
        const productsList=await response.json()
        this.setState({
            productsArray:productsList,
        })
    }

    renderHeader=()=>(
        <div className='header-section'>
            <div className='header-container'>
                <div className='logo-container'>
                <PiList className='list-icon' />
                <AiOutlineDribbble className='logo-icon' />
                
                </div>
                <h1 className='header-title'>LOGO</h1>
                <div className='perticulars-container'>
                <CiSearch />
                <PiHeart />
                <TbShoppingBagMinus />
                <VscAccount className='avatar-icon' />
                <span className='language-select'>ENG</span>
                <VscChevronDown className='down-arrow'/>
                </div>
            </div>
            <div className='routes-section'>
                <ul className='routes-container'>
                    <li className='route'>SHOP</li>
                    <li className='route'>SKILLS</li>
                    <li className='route'>STORIES</li>
                    <li className='route'>ABOUT</li>
                    <li className='route'>CONTACT US</li>
                </ul>
            </div>
        </div>
    )

    renderBannerSection=()=>(
        <div className='banner-container'>
            <div className='selection-btn-container'>
                <button type='button' className='home-btn'>HOME</button>
                <button type='button' className='shop-btn'>SHOP</button>
            </div>
            <h1 className='banner-title'>DISCOVER OUR PRODUCTS</h1>
            <p className='about-products'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
    )

    renderfiltersSection=()=>(
        <ul className='filters-items-container'>
            <li className='filter-input'><input type='checkbox' className='filter-select' /><h4 className='custom-select'>CUSTOMIZBLE</h4></li>
            <li className='filter-item'>
                <div className='filters-title-container'>
                    <h4 className='filter-title'>IDEAL FOR</h4>
                    <p className='filter-for'>All</p>
                </div>
                <VscChevronDown />                
            </li>
            <li className='filter-item'>
                <div className='filters-title-container'>
                    <h4 className='filter-title'>OCCASION</h4>
                    <p className='filter-for'>All</p>
                </div>
                <VscChevronDown />                
            </li>
            <li className='filter-item'>
                <div className='filters-title-container'>
                    <h4 className='filter-title'>WORK</h4>
                    <p className='filter-for'>All</p>
                </div>
                <VscChevronDown />                
            </li>
            <li className='filter-item'>
                <div className='filters-title-container'>
                    <h4 className='filter-title'>FABRIC</h4>
                    <p className='filter-for'>All</p>
                </div>
                <VscChevronDown />                
            </li>
            <li className='filter-item'>
                <div className='filters-title-container'>
                    <h4 className='filter-title'>SEGMENT</h4>
                    <p className='filter-for'>All</p>
                </div>
                <VscChevronDown />                
            </li>
            <li className='filter-item'>
                <div className='filters-title-container'>
                    <h4 className='filter-title'>SUITABLE FOR</h4>
                    <p className='filter-for'>All</p>
                </div>
                <VscChevronDown />                
            </li>
            <li className='filter-item'>
                <div className='filters-title-container'>
                    <h4 className='filter-title'>RAW MATERIALS</h4>
                    <p className='filter-for'>All</p>
                </div>
                <VscChevronDown />                
            </li>
            <li className='filter-item'>
                <div className='filters-title-container'>
                    <h4 className='filter-title'>PATTERN</h4>
                    <p className='filter-for'>All</p>
                </div>
                <VscChevronDown />                
            </li>
        </ul>
    )

    renderLandingPageSection=()=>{
        const {productsArray}=this.state
        return(
        <div className='landing-page-container'>
            <div className='landing-page-header-container'>
                <div className='total-count-container'>
                    <h4 className='item-count'>3425 ITEMS</h4>
                    <h4 className='filter-heading'>FILTER</h4>
                    <div className='toggle-filter-container'>
                        <HiChevronLeft />
                        <h4 className='toggle-filter'>HIDE FILTER</h4>
                    </div> 
                                       
                </div>
                <div className='recomendations-container'>
                    <h4 className='recommended-title'>RECOMMENDED</h4>
                    <VscChevronDown />
                </div>                
            </div>
            <div className='products-display-section'>
                <div className='filters-container'>
                    {this.renderfiltersSection()}
                </div>
                <div className='products-display-section-container'>   
                    <ul className='products-display-container'>
                        {productsArray.map((eachItem)=>(
                            <ProductItem productDetails={eachItem} key={eachItem.id} />
                        ))}
                    </ul> 

                </div>
            </div>
        </div>
    )
}
   
    render(){

       
        return(
           <div className='app-container'>
           { this.renderHeader()}
           {this.renderBannerSection()}
           {this.renderLandingPageSection()}
           <Footer />

           

                
           </div>
        )
    }
}
export default ProductsListingPage;