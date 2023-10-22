import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input type="text" className={css.filterInput} value={filter} onChange={onChange} />
    </label>
  );
};
