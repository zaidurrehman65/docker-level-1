import Icon from "./Icon";

function FilterBar({ searchValue, onSearchChange, searchPlaceholder, filters }) {
  return (
    <div className="filter-bar">
      <div className="filter-search">
        <Icon name="search" size={15} />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
        />
      </div>

      {filters.map((filter) => (
        <div className="filter-select" key={filter.label}>
          <Icon name="filter" size={13} />
          <select value={filter.value} onChange={(e) => filter.onChange(e.target.value)}>
            {filter.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default FilterBar;
