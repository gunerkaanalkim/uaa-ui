export const appFeatureKey = 'state';

export interface UserInfo {
  name: string,
  surname: string,
  username: string
}

export interface AuthenticationResponse {
  token: string,
  userInfo: UserInfo
}

export interface InitialStateType {
  authenticationResponse: AuthenticationResponse,
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

export interface User {
  id: number
  name: string,
  surname: string,
  username: string
  email: string
  password?: string
  realm: Realm
}

export interface PageableUsers {
  content: User[],
  first: boolean,
  last: boolean
  number: number,
  numberOfElements: number,
  size: 10,
  totalElements: number,
  totalPages: number,
  pageable: Pageable
  sort: PageableSort
}

export interface Permission {
  id: number
  controller: string,
  title: string,
  description: string
  url: string,
  isAssigned?: boolean
  groupName: string
}

export interface PageablePermissions {
  content: Permission[],
  first: boolean,
  last: boolean
  number: number,
  numberOfElements: number,
  size: 10,
  totalElements: number,
  totalPages: number,
  pageable: Pageable
  sort: PageableSort
}

export interface Role {
  id: number
  name: string,
  code: string,
}

export interface PageableRoles {
  content: Role[],
  first: boolean,
  last: boolean
  number: number,
  numberOfElements: number,
  size: 10,
  totalElements: number,
  totalPages: number,
  pageable: Pageable
  sort: PageableSort
}

export interface AssignPermissionToRoleRequest {
  permissionId: number,
  roleId: number
}

export interface RolePermission {
  role: Role,
  permission: Permission
}

export interface AssignRoleToUserRequest {
  userId: number
  roleId: number
}

export interface RoleUser {
  role: Role,
  user: User
}

export interface Realm {
  id: number
  name?: string
  code?: string
  description?: string
}

export interface PageableRealms {
  content: Realm[],
  first: boolean,
  last: boolean
  number: number,
  numberOfElements: number,
  size: 10,
  totalElements: number,
  totalPages: number,
  pageable: Pageable
  sort: PageableSort
}

export interface SelectDatasource {
  label: string,
  value: string
}
