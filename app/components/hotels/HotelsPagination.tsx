type HotelsPaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const HotelsPagination = ({
  page,
  totalPages,
  onPageChange,
}: HotelsPaginationProps) => (
  <div className="w-full p-5 flex justify-center items-center gap-5">
    <button
      disabled={page === 1}
      onClick={() => onPageChange(page - 1)}
      className="nav-button button-text"
    >
      Previous
    </button>
    <span>
      {page} / {totalPages}
    </span>
    <button
      disabled={page === totalPages}
      onClick={() => onPageChange(page + 1)}
      className="nav-button button-text"
    >
      Next
    </button>
  </div>
);
