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
  id: number
  provider: Provider
  shop: Shop
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
  saved: boolean
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
  isLoaderVisible : boolean,
  httpError: HttpError | null
}

export interface HttpError {
  message: string,
  status: number,
  trace: string,
  timestamp: string,
  error: string,
  path: string
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

export interface PageableProducts {
  content: Product[],
  first: boolean,
  last: boolean
  number : number,
  numberOfElements: number,
  size: 10,
  totalElements: number,
  totalPages: number,
  pageable: Pageable
  sort: PageableSort
}

export interface Pageable {
  sort: PageableSort,
  offset: number,
  pageNumber: number
  pageSize: number
  paged: number
  unpaged: number
}

export interface PageableSort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

export interface GenerateContentRequest {
  title: string
  details: string
  shortDescription: string
}

export interface GenerateContentResponse {
  choices: Choice[]
}

export interface Choice {
  index: number
  message: Message
  logprobs: any
  finish_reason: string
}

export interface Message {
  role: string
  content: string
}

export interface SearchOperator {
  name: string,
  value: string
}

export interface SearchOperatorValue {
  operator: string,
  data: string
}

export interface SearchFilterRequest {
  pageNo: number,
  pageSize: number,
  column: string,
  order: string,
  operator?: string,
  filters: SearchFilter[]
}

export interface SearchFilter {
  by: string,
  operator: string,
  value: string
}
