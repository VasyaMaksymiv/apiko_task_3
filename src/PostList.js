import React, {Component} from "react"
import ButtonMore from './ButtonMore'
import data from './data'

const posts = data

class PostList extends Component{
    
    state = { count: 10 }
    
    handleCount=()=>{ this.setState({ count: this.state.count + 10 }) }

    render(){

     const PostItemsList = posts.map((item, index) => {
        return (
            (index < this.state.count) ? <div className='listItems'  key={item.id} >
            <h3 className='post_h3' >{item.title}</h3>
            <p className='post_p' >{item.body}</p>
            </div>: '')
            })

    return(
            
            <div>
            {PostItemsList}
            {(this.state.count < posts.length) ? <ButtonMore onClick={this.handleCount} /> : '' }
            </div>
        )
    }
}

export default PostList