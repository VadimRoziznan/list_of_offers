import React from 'react'
import { ListingModel } from '../models/listaingModel'
import './listing.css'


export const Listing = ({ items }: ListingModel) => {

  const handleTruncateText = (text: string, length: number) => {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
   }
   
   const handleCurrencySymbols = (currency: string): string => {
    if (!currency) return '';
    const currencyList: Record<string, string> = {
      USD: '$',
      EUR: '€',
    }
    return currencyList[currency] || currency;
   }

   const handleBackground = (quantity: number) => {
    return quantity > 20 ? 'level-high' : quantity > 10 && quantity <= 20 ? 'level-medium' : 'level-low';
   }
   
   return (
    <div className="item-list">
      {items.map((item) => {
        if (!item.listing_id || !item.MainImage || !item.url || !item.title || !item.currency_code || !item.price || !item.quantity) {
          return null;
        }
        return (
          <div key={item.listing_id} className="item">
            <div className="item-image">
                <a href={item.url}>
                  <img src={item.MainImage.url_570xN}/>
                </a>
            </div>
            <div className="item-details">
              <p className="item-title">{handleTruncateText(item.title, 50)}</p>
              <p className="item-price">{handleCurrencySymbols(item.currency_code)}{item.price}</p>
              <p className={`item-quantity ${handleBackground(item.quantity)}`}>{item.quantity} left</p>
            </div>
          </div>
        );
      })}
    </div>
)}