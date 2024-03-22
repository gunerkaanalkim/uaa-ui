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
        getById: `/product`,
        filter: '/product/filter',
        create: '/product',
        createAll: '/product/save-all',
        edit: '/product',
        destroy: '/product/delete-by-product-id',
        destroyAll: '/product/delete-all',
        getProductImages: '/product/images',
      },
      shop: {
        getAll: "/shop/get-all",
        getAllWithoutPage: '/shop/get-all-without-page',
        getById: `/shop`,
        filter: '/shop/filter',
        create: '/shop',
        createAll: '/shop/save-all',
        edit: '/shop',
        destroy: '/shop/delete-by-product-id',
        destroyAll: '/shop/delete-all',
        getProductImages: '/shop/images',
      },
      provider: {
        getAll: "/provider/get-all",
        getAllWithoutPage: '/provider/get-all-without-page',
        getById: `/provider`,
        filter: '/provider/filter',
        create: '/provider',
        createAll: '/provider/save-all',
        edit: '/provider',
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
      },
      authenticate : {
        whoAmI: '/authenticate/who-am-i',
        login: '/authenticate/login',
      }
    }
  }
};
