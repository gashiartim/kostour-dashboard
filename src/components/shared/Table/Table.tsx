import React, { useMemo } from "react";
import { useTable, TableProps, usePagination } from "react-table";
import cs from "classnames";
import { Button } from "../Button/Button";

export interface IColumn {
  header: string;
  accessor: string;
  Cell?: any;
  render?: any;
}

interface Props extends TableProps {
  columns: Array<IColumn>;
  data: Array<any>;
  className?: string;
  theadClassName?: string;
  tdClassName?: string;
  onRowClick?: (data: any) => void;
  coloredHeaders?: boolean;
  pagination?: boolean;
}

export const Table = ({
  columns: TableColumns,
  data: TableData,
  className,
  theadClassName,
  tdClassName,
  onRowClick,
  coloredHeaders = false,
  pagination = false,
}: Props) => {
  const columns = useMemo(() => {
    return TableColumns;
  }, []);

  const data = useMemo(() => {
    return TableData;
  }, [TableData]);

  // @ts-ignore
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    // @ts-ignore
    page,
    // @ts-ignore
    canPreviousPage,
    // @ts-ignore
    canNextPage,
    // @ts-ignore
    pageOptions,
    // @ts-ignore
    pageCount, // @ts-ignore

    gotoPage, // @ts-ignore
    nextPage, // @ts-ignore
    previousPage, // @ts-ignore
    setPageSize, // @ts-ignore
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data, // @ts-ignore
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div
      className={cs(
        "relative w-full  overflow-auto react-table h-full max-h-[80vh]",
        className
      )}
    >
      <table {...getTableProps()} className="relative w-full">
        <thead className="sticky top-0 w-full bg-white ">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className={cs({
                    "px-2 py-1 text-left text-[#888] text-sm": true,
                    theadClassName: true,
                    "bg-secondaryColor !text-white ": coloredHeaders,
                  })}
                >
                  {column.render("header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="">
          {pagination &&
            page.map((row: any, i: number) => {
              prepareRow(row);
              return (
                <tr
                  className={cs({
                    "table-row border-b border-gray-100": true,
                    "cursor-pointer hover:bg-gray-300 hover:bg-opacity-10 default-transition":
                      onRowClick,
                  })}
                  {...row.getRowProps()}
                  onClick={() => onRowClick && onRowClick(row.original)}
                >
                  {row.cells.map((cell: any) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={cs(
                          "px-2 py-1 !text-sm text-[#888]",
                          tdClassName
                        )}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          {!pagination &&
            rows.map((row: any) => {
              prepareRow(row);
              return (
                <tr
                  className={cs({
                    "table-row border-b border-gray-100": true,
                    "cursor-pointer hover:bg-gray-300 hover:bg-opacity-10 default-transition":
                      onRowClick,
                  })}
                  {...row.getRowProps()}
                  onClick={() => onRowClick && onRowClick(row.original)}
                >
                  {row.cells.map((cell: any) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={cs(
                          "px-2 py-1 !text-sm text-[#888]",
                          tdClassName
                        )}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
      {pagination && data.length > 10 && (
        <Paginagion
          gotoPage={gotoPage}
          canPreviousPage={canPreviousPage}
          previousPage={previousPage}
          canNextPage={canNextPage}
          nextPage={nextPage}
          pageCount={pageCount}
          pageOptions={pageOptions}
          pageIndex={pageIndex}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      )}
    </div>
  );
};

const Paginagion = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  canNextPage,
  nextPage,
  pageCount,
  pageOptions,
  pageIndex,
  pageSize,
  setPageSize,
}: any) => {
  return (
    <div className="items-center md:flex pagination">
      <div className="flex items-center justify-center mx-auto md:justify-start pagination">
        <Button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="px-2 py-1"
        >
          {"<<"}
        </Button>
        <Button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-2 py-1 mx-2"
        >
          {"<"}
        </Button>
        <Button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-2 py-1 mr-2"
        >
          {">"}
        </Button>
        <Button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="px-2 py-1"
        >
          {">>"}
        </Button>
      </div>
      <div className="mx-auto">
        <span className="ml-2 text-sm">
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span className="text-sm">
          | Go to page:
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            className="w-[50px]"
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className="text-sm"
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
