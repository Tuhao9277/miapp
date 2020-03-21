import React, { Component } from 'react'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import MyHabit from './pages/My/pages/MyHabit'
import ConnectLabel from './pages/Room/connectlabel/connectLabel'
import RoomAdd from './pages/Room/add/Add'
import TypeAdd from './pages/Home/type/typeadd/TypeAdd'
import Loading from 'components/Loading/Loading';
import Home from './pages/Home/index'
import My from './pages/My'
import VoiceSet from './pages/My/pages/VoiceSet'
import PersonInfo from './pages/My/pages/PersonInfo'
import FeedBack from './pages/My/pages/FeedBack'
import Help from './pages/My/pages/Help'
import Setting from './pages/My/pages/Setting'

const Room = Loadable({
    loader:() => import(/* webpackChunkName: "room" */'./pages/Room'),
    loading: Loading,
});

const Pm = Loadable({
    loader:() => import(/* webpackChunkName: "pm" */'./pages/Item/PM/Pm'),
    loading: Loading,
});
const Light = Loadable({
    loader:() => import(/* webpackChunkName: "light" */'./pages/Item/Light/Light'),
    loading: Loading,
});
const Air = Loadable({
    loader:() => import(/* webpackChunkName: "air" */'./pages/Item/Air/Air'),
    loading: Loading,
});
class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/room" component={Room} />
                    <Route exact path="/room/connectlabel" component={ConnectLabel}/>
                    <Route path="/item/clean" component={Pm} />
                    <Route path="/item/air" component={Air} />
                    <Route path="/item/light" component={Light} />
                    <Route path="/my" component={My} />
                    <Route path="/myhabit" component={MyHabit} />
                    <Route path="/voiceset" component={VoiceSet} />
                    <Route path="/feedback" component={FeedBack} />
                    <Route path="/personal" component={PersonInfo} />
                    <Route path="/help" component={Help} />
                    <Route path="/setting" component={Setting} />
                    <Route exact path="/room/add" component={RoomAdd}/>
                    <Route path="/home/add" component={TypeAdd}></Route>
                    <Redirect from="/*" to="/home" />
                </Switch>
            </div>
        )
    }
}


export default withRouter(connect()(Main));