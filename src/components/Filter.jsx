import { Component } from "react";
import PropTypes from "prop-types";
import css from "./phonebook.module.css";

export class Filter extends Component {
    onInputChange = (event) => {
        const { value } = event.target;
        this.props.onFilterChange(value);
    }
    render() {
        return (
            <form className={css.phonebookFilterWrap}>
                <label htmlFor="id-filter" className={css.phonebookFilterLabel}>Find contacts by name</label>
                <input
                    className={css.phonebookFilterInput}
                    onChange={this.onInputChange}
                    id="id-filter"
                    type="text"
                    name="filter"
                />
            </form>
        )
    }
}

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired
}

export default Filter