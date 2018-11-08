import React, {Component} from 'react';
import Pagination from './Pagination';

import City from './City';

class CitiesList extends Component {
    state = {
        pageOfItems: []
    };

    onPageChanged = pageOfItems => {
        this.setState({pageOfItems: pageOfItems});
    };

    render() {
        let {list, remove} = this.props;
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col w-50">Город</th>
                        <th scope="col w-50">Область</th>
                    </tr>
                    </thead>
                    <tbody>


                    {this.state.pageOfItems.map(city => {
                        return (
                            <City
                                key={city.id}
                                city={city}
                                remove={remove}
                            />
                        )
                    })}
                    </tbody>
                </table>

                <Pagination
                    items={list}
                    onChangePage={this.onPageChanged}
                />

            </div>
        )
    }

};
export default CitiesList;