import { PropTypes } from "prop-types";

const Pagination = ({ pagination, setPagination }) => (
  <div className="pagination">
    <button
      onClick={() =>
        setPagination({
          ...pagination,
          ...(pagination.currentPage > 1 && {
            currentPage: pagination.currentPage - 1,
          }),
        })
      }
    >
      &larr;
    </button>
    {Array.from(Array(pagination.totalPages).keys()).map((item) => (
      <p
        key={item}
        className={`${item + 1 === pagination.currentPage && "active"} item`}
        onClick={() =>
          setPagination({
            ...pagination,
            currentPage: item + 1,
          })
        }
      >
        {item + 1}
      </p>
    ))}
    <button
      onClick={() =>
        setPagination({
          ...pagination,
          ...(pagination.currentPage < pagination.totalPages && {
            currentPage: pagination.currentPage + 1,
          }),
        })
      }
    >
      &rarr;
    </button>
  </div>
);

Pagination.propTypes = {
  pagination: PropTypes.object,
  setPagination: PropTypes.func,
};

export default Pagination;
