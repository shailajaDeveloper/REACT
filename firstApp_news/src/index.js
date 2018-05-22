
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NewsList from './components/mews_list'
import Header from './components/header';
import JSON from './db.json';


class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            news :JSON,
            filtered:JSON
        }
    }

    filterNews(keyword){
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword)>=0
        })

        this.setState({filtered:filtered})
    }
    render(){
        return(
            <div>
            <Header newsSearch={(data)=>this.filterNews(data)}/>
            <h1> Welcome to first React</h1>
            <NewsList news={this.state.filtered}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))










/*
class based
function based


function add(a,b){
    return a+b
}

var add = (a,b)  =>{return a+b};

*/