/**
 * 通过路由名称获取路由页面标题
 * pathname: 路由名
 */
export default function getPageTitle(pathname) {

  if (pathname.startsWith('/example')) {
    return ['example', '首页'];
  }

  return ['首页'];
}
