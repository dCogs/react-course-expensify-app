import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setTextFilter } from '../actions/filters';
import { sortByDate } from '../actions/filters';
import {sortByAmount } from '../actions/filters';
import { setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(sendEndDate(endDate));
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    render () {
        return (
            <div>
                <input type="text" value={ this.props.filters.text} onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value));
                    console.log(e.target.value)
                }} />
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    if (e.target.value === "date") {
                        this.props.dispatch(sortByDate(e.target.value));
                    }
                    if (e.target.value === "amount") {
                        this.props.dispatch(sortByAmount(e.target.value));
                    }
                    console.log(e.target.value)
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate = {this.props.filters.startDate}
                    startDateId = {'startDateId'}
                    endDate = {this.props.filters.endDate}
                    endDateId = {'endDateId'}
                    onDatesChange = {this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilters);  