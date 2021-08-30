/*
使用mock提供的mock接口数据
 */

import Mock from 'mockjs';
import date from './data.json'; //的都json数据（已经解析好）

//定义mock接口
Mock.mock('/api/goods', {code: 0, date: date.goods})
Mock.mock('/api/ratings', {code: 0, date: date.ratings})
Mock.mock('/api/info', {code: 0, date: date.info})

