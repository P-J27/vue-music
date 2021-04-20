"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBanner = getBanner;
exports.getRecomSongList = getRecomSongList;
exports.getRecomNewMusicList = getRecomNewMusicList;
exports.getMusicList = getMusicList;
exports.getMusicUrl = getMusicUrl;
exports.getRecomSinger = getRecomSinger;
exports.getTopList = getTopList;
exports.getCatList = getCatList;
exports.getHotList = getHotList;
exports.getPlayList = getPlayList;
exports.getSingerList = getSingerList;
exports.getMvList = getMvList;
exports.getSongDetailsList = getSongDetailsList;
exports.getSongSub = getSongSub;
exports.getSongRecom = getSongRecom;
exports.getSongComm = getSongComm;
exports.getMvUrl = getMvUrl;
exports.getMvComment = getMvComment;
exports.getMvDetails = getMvDetails;
exports.getMvRecom = getMvRecom;
exports.getSingerMusic = getSingerMusic;
exports.getSingerMv = getSingerMv;
exports.getSingerSong = getSingerSong;
exports.getSingerInfo = getSingerInfo;
exports.getAlbumDetails = getAlbumDetails;
exports.getAlbumComment = getAlbumComment;
exports.getSearchContent = getSearchContent;

var _request = require("./request");

function getBanner() {
  return (0, _request.request)({
    url: "/banner"
  });
}
/**
 * 获取推荐表单
 * @param limit : 获取条数
 * @returns {AxiosPromise}
 */


function getRecomSongList(limit) {
  return (0, _request.request)({
    url: "/personalized",
    params: {
      limit: limit
    }
  });
}
/**
 * 获取推荐歌曲
 * @returns {AxiosPromise}
 */


function getRecomNewMusicList() {
  return (0, _request.request)({
    url: "/personalized/newsong"
  });
}
/**
 * 获取歌曲详情
 * @param ids : 歌曲ids 支持多个id 用,隔开
 * @returns {AxiosPromise}
 */


function getMusicList(ids) {
  return (0, _request.request)({
    url: "/song/detail",
    params: {
      ids: ids
    }
  });
}
/**
 * 获取歌曲url地址
 * @param id : 歌曲id
 * @returns {*}
 */


function getMusicUrl(id) {
  return (0, _request.request)({
    url: "/song/url",
    params: {
      id: id
    }
  });
}
/**
 * 获取推荐歌手信息
 * @param offset : 位偏移量
 * @param limit : 获取数量
 * @returns {AxiosPromise}
 */


function getRecomSinger(offset, limit) {
  return (0, _request.request)({
    url: "/top/artists?offset=".concat(offset, "&limit=").concat(limit)
  });
}
/**
 * 获取排行榜
 * @returns {AxiosPromise}
 */


function getTopList() {
  return (0, _request.request)({
    url: "/toplist"
  });
}
/**
 * 获取歌单分类
 * @returns {AxiosPromise}
 */


function getCatList() {
  return (0, _request.request)({
    url: "/playlist/catlist"
  });
}
/**
 * 获取热门歌单分类
 * @returns {AxiosPromise}
 */


function getHotList() {
  return (0, _request.request)({
    url: "/playlist/hot"
  });
}
/**
 * 获取歌单列表
 * @param order : 可选值 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
 * @param cat : tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
 * @param limit : 取出歌单数量 , 默认为 50
 * @param offset : 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
 * @returns {AxiosPromise}
 */


function getPlayList(order, cat, limit, offset) {
  return (0, _request.request)({
    url: "/top/playlist",
    params: {
      order: order,
      cat: cat,
      limit: limit,
      offset: offset
    }
  });
}
/**
 * 获取歌手列表
 * @param type : 类别
 * @param area : 语种
 * @param initial : 名称字符
 * @param limit : 获取数量
 * @param offset : 获取偏移量
 * @returns {AxiosPromise}
 */


function getSingerList(type, area, initial, limit, offset) {
  return (0, _request.request)({
    url: "/artist/list",
    params: {
      type: type,
      area: area,
      initial: initial,
      limit: limit,
      offset: offset
    }
  });
}
/**
 * 获取mv列表
 * @param area : 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部
 * @param typ : 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部
 * @param order : 排序,可选值为上升最快,最热,最新,不填则为上升最快
 * @param limit : 取出数量 , 默认为 30
 * @param offset : 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 * @returns {AxiosPromise}
 */


function getMvList(area, type, order, limit, offset) {
  return (0, _request.request)({
    url: "/mv/all",
    params: {
      area: area,
      type: type,
      order: order,
      limit: limit,
      offset: offset
    }
  });
}
/**
 * 获取歌单详情
 * @param id
 * @returns {AxiosPromise}
 */


function getSongDetailsList(id) {
  return (0, _request.request)({
    url: "/playlist/detail",
    params: {
      id: id
    }
  });
}
/**
 * 获取歌单收藏者列表
 * @param id : 歌单id
 * @param limit : 获取数量 默认为 20
 * @param offset : 偏移量
 * @returns {AxiosPromise}
 */


function getSongSub(id, limit, offset) {
  return (0, _request.request)({
    url: "/playlist/subscribers",
    params: {
      id: id,
      limit: limit,
      offset: offset
    }
  });
}
/**
 * 获取相关推荐歌单
 * @param id : 歌单id
 * @returns {AxiosPromise}
 */


function getSongRecom(id) {
  return (0, _request.request)({
    url: "/related/playlist",
    params: {
      id: id
    }
  });
}
/**
 * 获取歌单评论
 * @param id : 歌单id
 * @param limit : 获取数量 默认为 20默认为 20
 * @param offset : 偏移量
 * @returns {AxiosPromise}
 */


function getSongComm(id, limit, offset) {
  return (0, _request.request)({
    url: "/comment/playlist",
    params: {
      id: id,
      limit: limit,
      offset: offset
    }
  });
}
/**
 * 传入 mv id,可获取 mv 播放地址
 * @param id : mvid
 * @param r : 分辨率 ,默认1080,可从 /mv/detail 接口获取分辨率列表
 * @returns {AxiosPromise}
 */


function getMvUrl(id, r) {
  return (0, _request.request)({
    url: "/mv/url",
    params: {
      id: id,
      r: r
    }
  });
}
/**
 * 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 mv 的所有评论 ( 不需要 登录 )
 * @param id : mvid
 * @param limit : 取出数量 , 默认为 20
 * @param offset : 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @returns {AxiosPromise}
 */


function getMvComment(id, limit, offset) {
  return (0, _request.request)({
    url: "/comment/mv",
    params: {
      id: id,
      limit: limit,
      offset: offset
    }
  });
}
/**
 * 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间等数据
 * @param id : mvid
 * @returns {AxiosPromise}
 */


function getMvDetails(mvid) {
  return (0, _request.request)({
    url: "/mv/detail",
    params: {
      mvid: mvid
    }
  });
}
/**
 * 调用此接口 , 传入 mvid 可获取相似 mv
 * @param id : mvid
 * @returns {AxiosPromise}
 */


function getMvRecom(mvid) {
  return (0, _request.request)({
    url: "/simi/mv",
    params: {
      mvid: mvid
    }
  });
}
/**
 * 获取歌手的信息与热门歌曲  (所有歌曲需要登录后获取)
 * @param id : 歌手id
 * @returns {AxiosPromise}
 */


function getSingerMusic(id) {
  return (0, _request.request)({
    url: "/artists",
    params: {
      id: id
    }
  });
}
/**
 * 调用此接口 , 传入歌手 id, 可获得歌手 mv 信息 , 具体 mv 播放地址可调 用/mv传入此接口获得的 mvid 来拿到
 * @param id : 歌手id
 * @returns {AxiosPromise}
 */


function getSingerMv(id) {
  return (0, _request.request)({
    url: "/artist/mv",
    params: {
      id: id
    }
  });
}
/**
 * 调用此接口 , 传入歌手 id, 可获得歌手专辑内容
 * @param id : 歌手id
  * @param limit 获取数量
 * @param offset 偏移量
 * @returns {AxiosPromise}
 */


function getSingerSong(id, limit, offset) {
  return (0, _request.request)({
    url: "/artist/album",
    params: {
      id: id,
      limit: limit,
      offset: offset
    }
  });
}
/**
 * 获取歌手描述
 * @param id : 歌手id
 * @returns {AxiosPromise}
 */


function getSingerInfo(id) {
  return (0, _request.request)({
    url: "/artist/desc",
    params: {
      id: id
    }
  });
}
/**
 * 获取专辑详情
 * @param id : 专辑id
 * @returns {AxiosPromise}
 */


function getAlbumDetails(id) {
  return (0, _request.request)({
    url: "/album",
    params: {
      id: id
    }
  });
}
/**
 * 获取专辑热门评论 不传入limit 与 offset
 * @param id : 专辑id
 * @returns {AxiosPromise}
 */


function getAlbumComment(id, limit, offset) {
  return (0, _request.request)({
    url: "/comment/album",
    params: {
      id: id,
      limit: limit,
      offset: offset
    }
  });
}
/**
 *
 * @param keywords : 关键字 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 搜索获取的 mp3url 不能直接用 , 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
 * @param limit : 返回数量 , 默认为 30
 * @param offset : 偏移数量, 用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param type : 搜索类型 , 默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
 * @returns {AxiosPromise}
 */


function getSearchContent(keywords, limit, offset, type) {
  return (0, _request.request)({
    url: "/cloudsearch",
    params: {
      keywords: keywords,
      limit: limit,
      offset: offset,
      type: type
    }
  });
}