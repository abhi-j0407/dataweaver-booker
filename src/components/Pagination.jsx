import { PropTypes } from "prop-types";

const Pagination = ({ pagination }) => {
  return <div className="pagination">{pagination.totalPages}</div>;
};

Pagination.propTypes = {
  pagination: PropTypes.object,
};

export default Pagination;
