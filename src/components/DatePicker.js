import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import { setActualDate} from '../actions/filters';

class DatePicker extends React.Component {
   
    state = {
        date: moment(),
        calendarFocused: true
    }

    onDateChange = (date) => {
        if(date){
            this.setState(() => ({date}))
            this.props.dispatch(setActualDate(date.valueOf()))
        }
    }

    onNextMonthClick = (month) =>{

    }

    onPrevMonthClick = (month) => {

    }

    highlightDays = (day) => {
        return this.props.filters.freeDates.some((date) => day.isSame(moment(date), 'day'))
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused:focused}))

        setTimeout(() => {
            this.setState(() => ({calendarFocused:true}))
        }, 1)
        
    }


    render(){
        return(
        <SingleDatePicker
            date={this.state.date}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            onNextMonthClick={this.onNextMonthClick}
            onPrevMonthClick={this.onPrevMonthClick}
            isDayHighlighted={this.highlightDays}
            keepOpenOnDateSelect={true}
            numberOfMonths={2}
            orientation='horizontal'
            anchorDirection='right'
            id='1'
        />
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(DatePicker)