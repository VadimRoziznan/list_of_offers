export type MainImage = {
  url_570xN: string;
}

export type ListingItem = {
  listing_id: number;
  url: string;
  MainImage: MainImage;
  title: string;
  currency_code: string
  price: string;
  quantity: number;
}

export type ListingModel = {
  items: Array<ListingItem>;
}