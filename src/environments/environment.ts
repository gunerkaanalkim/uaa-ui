export const environment = {
  production: false,
  name: 'local',
  api: {
    services: {
      auth: 'http://localhost:8080/uaa/api',
      integrator: 'http://localhost:8081/integrator/api'
    },
    endpoints: {
      product: {
        getAll: "/product/get-all",
        getAllWithoutPage: '/product/get-all-without-page',
        getById: `/product/get`,
        filter: '/product/filter',
        create: '/product/save',
        createAll: '/product/save-all',
        edit: '/product/update',
        destroy: '/product/delete-by-product-id',
        destroyAll: '/product/delete-all',
        getProductImages: '/product/images',
      },
      shop: {
        getAll: "/shop/get-all",
        getAllWithoutPage: '/shop/get-all-without-page',
        getById: `/shop/get`,
        filter: '/shop/filter',
        create: '/shop/save',
        createAll: '/shop/save-all',
        edit: '/shop/update',
        destroy: '/shop/delete-by-product-id',
        destroyAll: '/shop/delete-all',
        getProductImages: '/shop/images',
      },
      user: {
        getAll: "/user/get-all",
        getAllWithoutPage: '/user/get-all-without-page',
        getById: `/user/get`,
        filter: '/user/filter',
        create: '/user/save',
        createAll: '/user/save-all',
        edit: '/user/update',
        destroy: '/user/delete',
        destroyAll: '/user/delete-all',
        assignRole: '/user/assign-role',
        revokeRole: '/user/revoke-role',
        getAssignedRole: '/user/get-assigned-role'
      },
      permission: {
        getAll: "/permission/get-all",
        getAllWithoutPage: '/permission/get-all-without-page',
        getById: `/permission/get`,
        filter: '/permission/filter',
        create: '/permission/save',
        createAll: '/permission/save-all',
        edit: '/permission/update',
        destroy: '/permission/delete',
        destroyAll: '/permission/delete-all',
      },
      realm: {
        getAll: "/realm/get-all",
        getAllWithoutPage: '/realm/get-all-without-page',
        getById: `/realm/get`,
        filter: '/realm/filter',
        create: '/realm/save',
        createAll: '/realm/save-all',
        edit: '/realm/update',
        destroy: '/realm/delete',
        destroyAll: '/realm/delete-all',
      },
      role: {
        getAll: "/role/get-all",
        getAllWithoutPage: '/role/get-all-without-page',
        getById: `/role/get`,
        filter: '/role/filter',
        create: '/role/save',
        createAll: '/role/save-all',
        edit: '/role/update',
        destroy: '/role/delete',
        destroyAll: '/role/delete-all',
        getAssignedPermissionsOfRole: '/role/get-assigned-permissions',
        assignPermission: '/role/assign-permission',
        assignAllPermission: '/role/assign-all-permissions',
        revokePermission: '/role/revoke-permission',
        revokeAllPermission: '/role/revoke-all-permissions',
      },
      provider: {
        getAll: "/provider/get-all",
        getAllWithoutPage: '/provider/get-all-without-page',
        getById: `/provider/get`,
        filter: '/provider/filter',
        create: '/provider/save',
        createAll: '/provider/save-all',
        edit: '/provider/update',
        destroy: '/provider/delete-by-product-id',
        destroyAll: '/provider/delete-all',
        getProductImages: '/provider/images',
      },
      integration: {
        getAllBrands: '/integration/get-all-brands',
        getAllCategories: '/integration/get-all-categories',
        getProductsByBrand: '/integration/get-products-by-brand',
        getProductsByCategory: '/integration/get-products-by-category',
        saveProductImages: '/integration/save-product-images',
        saveProductVariants: '/integration/save-product-variants',
        saveProductVariantOptions: '/integration/save-product-variant-options',
        addToProductDb : '/integration/add-to-product-db',
        generateContent : '/integration/chat-gpt/generate-content',
      }
    }
  }
};
