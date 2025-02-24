interface Components {
  name: string;
  order: 'simple' | 'complex';
  tested: boolean;
  notes?: string;
}

const TSComponents: Components[] = [
  {
    name: 'AuthInitialState',
    order: 'simple',
    tested: false
  },
  {
    name: 'onInitFn',
    order: 'simple',
    tested: false
  },
  {
    name: 'useAuthHook',
    order: 'complex',
    tested: false
  },
  {
    name: 'authLoginActionCreatorFn',
    order: 'simple',
    tested: false
  },
  {
    name: 'authLogoutActionCreatorFn',
    order: 'simple',
    tested: false
  },
  {
    name: 'AuthReducer',
    order: 'complex',
    tested: false
  },
  {
    name: 'heroesData',
    order: 'simple',
    tested: false
  },
  {
    name: 'sidebarItems',
    order: 'simple',
    tested: false
  },
  {
    name: 'getHeroByID',
    order: 'complex',
    tested: false
  },
  {
    name: 'getHeroByName',
    order: 'complex',
    tested: false
  },
  {
    name: 'getHeroByPublisher',
    order: 'complex',
    tested: false
  }
];

const TSXComponents: Components[] = [
  {
    name: 'LoginPage',
    order: 'complex',
    tested: false
  },
  {
    name: 'LogoutPage',
    order: 'complex',
    tested: false
  },
  {
    name: 'OnTrueLoggedPage',
    order: 'simple',
    tested: false
  },
  {
    name: 'AuthProvider',
    order: 'complex',
    tested: false
  },
  {
    name: 'AppSidebar',
    order: 'complex',
    tested: false
  },
  {
    name: 'HeroCard',
    order: 'complex',
    tested: false
  },
  {
    name: 'HeroFullPageView',
    order: 'complex',
    tested: false
  },
  {
    name: 'HeroGrid',
    order: 'complex',
    tested: false
  },
  {
    name: 'AboutPage',
    order: 'simple',
    tested: false
  },
  {
    name: 'DCPage',
    order: 'simple',
    tested: false
  },
  {
    name: 'ErrorPage',
    order: 'simple',
    tested: false
  },
  {
    name: 'HeroPage',
    order: 'complex',
    tested: false
  },
  {
    name: 'MarvelPage',
    order: 'complex',
    tested: false
  },
  {
    name: 'SearchPage',
    order: 'complex',
    tested: false
  },
  {
    name: 'SearchQueryParamsPage',
    order: 'complex',
    tested: false
  },
  {
    name: 'HeroesApp',
    order: 'complex',
    tested: false
  }
];

const TSSimpleComponents: Components[] = [
  {
    name: 'AuthInitialState',
    order: 'simple',
    tested: true
  },
  {
    name: 'onInitFn',
    order: 'simple',
    tested: true
  },
  {
    name: 'authLoginActionCreatorFn',
    order: 'simple',
    tested: true
  },
  {
    name: 'authLogoutActionCreatorFn',
    order: 'simple',
    tested: true
  },
  {
    name: 'heroesData',
    order: 'simple',
    tested: true
  },
  {
    name: 'sidebarItems',
    order: 'simple',
    tested: false,
    notes: 'No se puede probar.'
  },
  {
    name: 'getHeroByName',
    order: 'complex',
    tested: false
  },
  {
    name: 'getHeroByPublisher',
    order: 'complex',
    tested: false
  }
];

const TSComplexComponents: Components[] = [
  {
    name: 'useAuthHook',
    order: 'complex',
    tested: false
  },

  {
    name: 'AuthReducer',
    order: 'complex',
    tested: false
  },

  {
    name: 'getHeroByID',
    order: 'complex',
    tested: false
  },
  {
    name: 'getHeroByName',
    order: 'complex',
    tested: false
  },
  {
    name: 'getHeroByPublisher',
    order: 'complex',
    tested: false
  }
];

const TSXSimpleC: Components[] = [
  {
    name: 'OnTrueLoggedPage',
    order: 'simple',
    tested: false
  },

  {
    name: 'AboutPage',
    order: 'simple',
    tested: false
  },
  {
    name: 'DCPage',
    order: 'simple',
    tested: false
  },
  {
    name: 'ErrorPage',
    order: 'simple',
    tested: false
  }
];

const TSXComplexC: Components[] = [
  {
    name: 'LoginPage',
    order: 'complex',
    tested: false
  },
  {
    name: 'LogoutPage',
    order: 'complex',
    tested: false
  },

  {
    name: 'AuthProvider',
    order: 'complex',
    tested: false
  },
  {
    name: 'AppSidebar',
    order: 'complex',
    tested: false
  },
  {
    name: 'HeroCard',
    order: 'complex',
    tested: false
  },
  {
    name: 'HeroFullPageView',
    order: 'complex',
    tested: false
  },
  {
    name: 'HeroGrid',
    order: 'complex',
    tested: false
  },

  {
    name: 'HeroPage',
    order: 'complex',
    tested: false
  },
  {
    name: 'MarvelPage',
    order: 'complex',
    tested: false
  },
  {
    name: 'SearchPage',
    order: 'complex',
    tested: false
  },
  {
    name: 'SearchQueryParamsPage',
    order: 'complex',
    tested: false
  },
  {
    name: 'HeroesApp',
    order: 'complex',
    tested: false
  }
];
