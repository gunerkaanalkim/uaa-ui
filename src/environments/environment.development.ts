export const environment = {
  production: false,
  name: 'local',
  api: {
    services: {
      auth: 'http://localhost:8080/uaa/api',
      integrator: 'http://localhost:8081/integrator/api'
    },
    endpoints: {
      whoAmI: '/authenticate/who-am-i',
      login: '/authenticate/login',
      getAllShops: '/shop/get-all-without-page',
      createShop: '/shop',
      getAllProviders: '/provider/get-all-without-page',
      createProvider: '/provider',
      getAllBrands: '/integration/get-all-brands',
      getAllCategories: '/integration/get-all-categories',
      getProductsByBrand: '/integration/get-products-by-brand',
      getProductsByCategory: '/integration/get-products-by-category',
      saveProductImages: '/integration/save-product-images',
      saveProductVariants: '/integration/save-product-variants',
      saveProductVariantOptions: '/integration/save-product-variant-options',
      addToProductDb : '/integration/add-to-product-db',
      generateContent : '/integration/chat-gpt/generate-content',
      createProduct: '/product',
      deleteProduct: '/product/delete-by-product-id',
      getAllProducts: '/product/get-all',
      getProductImages: '/product/images',
      filter: '/product/filter',

    }
  }
};
