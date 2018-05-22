import  React,{Component} from 'react';

/*const Header = () =>{
    return <h1> this is header page</h1>
}*/

class Header extends Component{

    constructor(props){
        super(props)

        this.state ={
            keyword:''
        }
    }

    filterNews(keywords){
        console.log("cominfg in index"+keywords)
    }

    inputChange(event){
        console.log(event.target.value);
        this.setState({keyword:event.target.value})
        this.props.newsSearch(event.target.value)
    }

    render(){

        /*const styles={
            header:{
                background:'brown'
            },
            logo:{
                textAlign:'center'
            }
        }*/

        return(
           <header >
               <div className="logo"
                onClick = {() => {console.log("i am clicked")}}
               >Logo</div>
               <center>
                    <input onChange={this.inputChange.bind(this)}/>
                    <h1>{this.state.keyword}</h1>
               </center>
              
           </header>
        )
    }
}

export default Header;

/*
function add(a,b){
    return a+b
}

var add = (a,b) => {return a+b}
*/