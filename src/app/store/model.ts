export const appFeatureKey = 'state';

export interface UserInfo {
  name: string,
  surname: string,
  username: string
}

export interface UserDetails {
  token: string,
  userInfo: UserInfo
}

export interface Shop {
  createdBy?: string
  createdDate?: number
  lastModifiedBy?: string
  lastModifiedDate?: string
  description: string
  etsyAccountId: string
  title: string
  id: number
}

export interface Provider {
  createdBy?: string
  createdDate?: number
  lastModifiedBy?: string
  lastModifiedDate?: string
  providerAlias: string
  title: string
  id: number
}

export interface Brand {
  id: any
  providerAlias: string
  brandId: number
  brandName: string
  slug: string
}

export interface ProductResponse {
  products: Product[]
  currentPage: number
  lastPage: number,
  perPage: number
  total: number
}

export interface Product {
  providerAlias: string
  productId: number
  title: string
  currency: string
  price: string
  weight: string
  status: string
  isFeatured: number
  isVerified: number
  stockCount: number
  titleSlug: string
  productColor: string
  details: string
  shortDescription: any
  stockCode: string
  gender: string
  barcode: string
  featureImage: string
  brand: string
  brandId: string
  productTypeId: string
}

export interface InitialStateType {
  userDetails: UserDetails,
  shops: Shop[],
  isLoaderVisible : boolean
}

export interface Pagination {
  currentPage: number
  lastPage: number,
  perPage: number
  total: number
}
