import { connect } from 'react-redux'
import View from './View'



const mapStateToProps = state => {
    return {
        titles: state.titles,
        isMounted: state.isMounted
    }
}

const TodoItem = connect(
    mapStateToProps,null
)(View)

export default TodoItem;

