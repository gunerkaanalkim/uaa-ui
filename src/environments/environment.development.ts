export const environment = {
  production: false,
  name: 'local',
  api: {
    url: 'http://localhost:8080/uaa/api',
    endpoints: {
      whoAmI: '/authenticate/who-am-i',
      login: '/authenticate/login',
    }
  }
};
