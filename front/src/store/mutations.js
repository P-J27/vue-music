export default {
    //Login
    setIsLogin(state, flag) {
        state.isLogin = flag;
    },
    //设置关键字
    setSearch(state, keyword) {
        state.keywords = keyword
    },
    //add歌曲到播放列表
    setMusicDetailsList(state,music) {
        var flag = true;
        state.musicDetails = music;
        state.musicDetailsList.forEach(item => {
            if (item.id == music.id) {
                flag = false;
            }
            // 重复检验
        })
        if (flag) {
            state.musicDetailsList.unshift(music);

        }


    },
    //播放歌曲id
    setPlayerMusicId(state, musicId) {
        state.playerMusicId = musicId;
    },
    //切换播放模式
    changePlayerMode(state, op) {
        state.playerMode = op
    },
    //清空列表
    clearMusicDetailsList(state, list) {
        state.musicDetailsList = list;
    },
    //设置清空列表状态
    setclearListFlag(state, flag) {
        state.clearListFlag = flag
    },
    //是否播放
    setIsPlayer(state, flag) {
        state.isPlayer = flag;
    },
    //删除列表音乐(无版权)
    removeMusicList(state, musicId) {
        for (let [i, musicObj] of state.musicDetailsList.entries()) {
            if (musicObj.id == musicId) {
                state.musicDetailsList.splice(i, 1);

            }
        }
    }

}