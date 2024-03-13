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
  images: ProductImage[],
  variants: ProductVariant[],
}

export interface ProductImage {
  imagePath: string,
  productId: number
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

export interface Category {
  id: any
  providerAlias: string
  categoryId: number
  title: string
  slug: string
  weight: string
}

export interface ProductVariant {
  id: any
  product: any
  stockCode: any
  barcode: string
  stockCount: number
  stockId: number
  options: ProductVariantOption[]
}

export interface ProductVariantOption {
  id: any
  product: any
  optionValue: string
  optionId: string
  optionVariantId: any
  optionTitle: any
}

