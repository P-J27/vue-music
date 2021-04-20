"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var Login = function Login() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("views/login/Login"));
  });
};

var Index = function Index() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/index/Index'));
  });
};

var Find = function Find() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/index/childViews/findmusic/Find'));
  });
};

var Rank = function Rank() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/index/childViews/rank/Rank'));
  });
};

var SongDetail = function SongDetail() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/index/childViews/songDetail/SongDetail'));
  });
};

var MvDetails = function MvDetails() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("views/index/childViews/mvDetails/MvDetails"));
  });
};

var SingerDetails = function SingerDetails() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("views/index/childViews/singerDetails/SingerDetails"));
  });
};

var AlbumDetails = function AlbumDetails() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("views/index/childViews/albumDetails/AlbumDetails"));
  });
};

var routes = [{
  path: '/',
  redirect: '/index'
}, {
  path: '/login',
  name: 'Login',
  component: Login
}, {
  //首页
  path: '/index',
  component: Index,
  redirect: '/find',
  children: [{
    name: 'Find',
    path: '/find',
    component: Find
  }, //排行
  {
    name: 'Rank',
    path: '/rank',
    component: Rank
  }, {
    //歌单详情
    path: "/songDetails",
    component: SongDetail
  }, {
    //mv详情
    path: "/mvDetails",
    component: MvDetails
  }, {
    //歌手详情
    path: "/singerDetails",
    component: SingerDetails
  }, {
    //专辑详情
    path: "/albumDetails",
    component: AlbumDetails
  }]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;