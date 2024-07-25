export const environment = {
  production: false,
  name: 'local',
  realmId: 1,
  api: {
    services: {
      auth: 'http://localhost:8080/uaa/api',
      integrator: 'http://localhost:8081/integrator/api'
    },
    endpoints: {
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
      authenticate : {
        whoAmI: '/authenticate/who-am-i',
        login: '/authenticate/login',
      }
    }
  }
};
