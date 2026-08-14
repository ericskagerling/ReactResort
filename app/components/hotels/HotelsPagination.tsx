import { Button } from "../Button";

type HotelsPaginationProps = {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export const HotelsPagination = ({ page, totalPages, onPageChange }: HotelsPaginationProps) => (
  <>
    <Button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
      Previous
    </Button>
    <span>{page} / {totalPages}</span>
    <Button
      disabled={page === totalPages}
      onClick={() => onPageChange(page + 1)}
    >
      Next
    </Button>
  </>
);
