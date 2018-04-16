import React from 'react';
import axios from 'axios';
import AoiListItem from './AoiListItem';

export default class ResultsList extends React.Component {
  state = {
    results: []
  }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get (`http://localhost:8000/api/getaois/`)
        .then(
            (response) => { 
                console.log(response);
                this.setState( { results: response.data.results } )
            },
            (error) => { console.log(error) })
    }

    render() {
        return (
            <div>
                <p>Results: </p>
                <ul>
                    { this.state.results.map((result) => {
                        return <AoiListItem key={ result.requestid } {...result} />;
                    })}
                </ul>
            </div>
        )
    }

}

// {props.expenses.map((expense) => {
//     return <ExpenseListItem key = {expense.id} {...expense} />;
// })}