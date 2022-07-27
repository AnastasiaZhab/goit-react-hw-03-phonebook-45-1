import s from './Filter.module.css'

const Filter = ({ value, onChange }) => {
    return <input className={s.input} type="text" name="filter" value={value} onChange={onChange} />
};

export default Filter;