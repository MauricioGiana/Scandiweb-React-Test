import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../redux/actions';

class Home extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                {
                    this.props.categories?.map((category, i) => {
                        return (
                            <Link key={i} to={`/${category.name}`}>
                                {category.name}
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, { getCategories })(Home);
