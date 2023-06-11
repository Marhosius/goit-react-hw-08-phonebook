import css from './Filter.module.css';
import { useDispatch } from "react-redux";
import { filterChange } from "store/slice";

export const Filter = () => {
    const dispatch = useDispatch()
    const onInputChange = (event) => {
        const { value } = event.target;
        dispatch(filterChange(value));
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

export default Filter