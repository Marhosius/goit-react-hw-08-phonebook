import PropTypes from "prop-types";
import css from '../phonebook.module.css';

export const Filter = ({ onFilterChange }) => {
    const onInputChange = (event) => {
        const { value } = event.target;
        onFilterChange(value);
    }

    return (
        <form className={css.phonebookFilterWrap}>
            <label htmlFor="id-filter" className={css.phonebookFilterLabel}>Find contacts by name</label>
            <input
                className={css.phonebookFilterInput}
                onChange={onInputChange}
                id="id-filter"
                type="text"
                name="filter"
            />
        </form>
    )
}

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired
}

export default Filter