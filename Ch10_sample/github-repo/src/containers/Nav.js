import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Nav from '../components/Nav';

const mapStateToProps = state => ({ 
  categories: state.users.categories
});

const mapDispatchToProps = dispatch => ({
  onClick (path) {
    // onClick이 실행될 때 react-router-redux의 push를 사용해 페이지 이동
    dispatch(push(path));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav); 