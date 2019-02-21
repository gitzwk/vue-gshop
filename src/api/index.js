/*
包含N个接口请求函数的模块
 */

import ajax from './ajax'
// data默认传值为空数组,type默认为GET方法,url根据后台数据请求接口
// export const repAddress = () => ajax(url,data,type)
// 1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情)
export const repAddress = (geohash) => ajax(`/position/${geohash}`)
// 2、获取食品分类列表](#2 获取食品分类列表)
export const repFoodtype= () => ajax('index_category')
// 3、根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表)
export const repShops= (longitude,latitude) => ajax('shops',{longitude,latitude})
// 4、根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表)
// 5、获取一次性验证码](#5 获取一次性验证码)
// 6、用户名密码登陆](#6 用户名密码登陆)
// 7、发送短信验证码](#7 发送短信验证码)
// 8、手机号验证码登陆](#8 手机号验证码登陆)
// 9、根据会话获取用户信息](#9 根据会话获取用户信息)
// 10、用户登出](#10 用户登出)

