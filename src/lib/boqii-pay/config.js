const config = {
  dev: {
    SHOP_API: '//stest.boqii.com/apidemo.php',
    VET_API: '//stest.boqii.com/vetapi.php'
  },
  test: {
    SHOP_API: '//stest.boqii.com/apidemo.php',
    VET_API: '//stest.boqii.com/vetapi.php'
  },
  production: {
    SHOP_API: '//s.boqii.com/apidemo.php',
    VET_API: '//s.boqii.com/vetapi.php'
  }
}

export default function (env) {
  return config[env]
}
