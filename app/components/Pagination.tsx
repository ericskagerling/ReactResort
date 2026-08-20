import Link from "next/link";

type PaginationProps = {
  page: number;
  route: string;
  limit: number;
  rowsTotal: number;
  scroll: boolean;
};

export const Pagination = ({
  page,
  route,
  limit,
  rowsTotal,
  scroll
}: PaginationProps) => {
  const hasNextpage = rowsTotal === limit;
  const hasPreviousPage = page > 1;

  return (
    <div className="w-full p-5 flex justify-center items-center gap-5">
      {hasPreviousPage && (
        <Link
          href={`${route}?page=${page - 1}`}
          scroll={scroll}
          className="nav-button button-text"
        >
          Previous
        </Link>
      )}
      <span>{page}</span>
      {hasNextpage && (
        <Link
          href={`${route}?page=${page + 1}`}
          scroll={scroll}
          className="nav-button button-text"
        >
          Next
        </Link>
      )}
    </div>
  );
};
