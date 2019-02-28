/**
 * @author hui
 * @date 2019/2/13
 * @Description: userMsg用户基础信息 | liveIDList 用户喜欢的音乐id列表
*/
export default {
  namespace: 'users',
  state: {
    userMsg:{
      id:262606203
    },
    liveIDList:[]
  },
  reducers: {
    'userMsg'(state, action) {
      return {
        ...state,
        users:action.data
      };
    },
    'userLiveIDList'(state, action){
      return{
        ...state,
        liveList:action.data
      }
    }
  },
  effects: {
    //用户基础信息
    *getUserMsg({ data}, { put,select }) {
        //获取当前state中的数据 users
        const num = yield select(state => state.users)
        //or yield select(({users}) =>users) | yield select(_ =>_.users)


        yield put({
        type: 'userMsg',
        users:data
      });
    },

    //用户喜欢的音乐id列表
    *getUserLiveIDList({data}, { put }) {
      yield put({
        type: 'userLiveIDList',
        data:data
      });
    }
  }
};