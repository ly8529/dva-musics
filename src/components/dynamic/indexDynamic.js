import React, {Component} from 'react';
import { NavBar, SearchBar } from 'antd-mobile';
import { connect } from 'dva';
import DynamicList from './dynamicList';

/**
 * @author hui
 * @date 2019/2/18
 * @Description: 朋友圈
 */
class IndexDynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {}

    //保存当前歌曲字段
    getCurrent = (data) => {
        let live = this.props.liveList.filter(itemL =>itemL.id === data.id).length > 0 ? true : false;

        this.props.dispatch({
            type: 'playMusic/getPlayMusicCurrent',
            data: {
                ...data,
                live: live,
                isPlay:true
            }
        });
    }

    render() {
        return (
            <div className="m-dis">
                {/*top*/}
                <NavBar
                    mode="light"
                    icon={<i style={{fontSize:23}} className="icon-dis-ly"/>}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={<span onClick={() => {
                        this.props.history.push('playMusic')
                    }}><i className="icon-m-bfz"/></span>}
                ><SearchBar placeholder="Search" maxLength={8}/></NavBar>

                <div className="m-dis-t">
                    <DynamicList getCurrent={this.getCurrent}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, dispatch) => {
    return {
        playMusicList: state.playMusic.playMusicList,
        liveList: state.users.liveList
    }
}
export default connect(mapStateToProps)(IndexDynamic);
