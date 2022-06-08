import React from "react";
import { ICategory } from "../../api/Category";
import { DeleteCell } from "../shared/Cells/DeleteCell";
import { EditCell } from "../shared/Cells/EditCell";
import { LevelCell } from "../shared/Cells/LevelCell";
import { NumberOfSubCatCell } from "../shared/Cells/NumberOfSubCatCell";
import { StatusCell } from "../shared/Cells/StatusCell";
import { ThumbnailCell } from "../shared/Cells/ThumbnailCell";

import LoadingBoundary from "../shared/LoadingBoundary/LoadingBoundary";
import { NoDataBoundary } from "../shared/NoDataBoundary/NoDataBoundary";
import { IColumn, Table } from "../shared/Table/Table";

type Props = {
  className?: string;
  isLoading: boolean;
  data: Array<ICategory>;
  columns?: IColumn[];
};

const CategoriesTable = ({
  className,
  isLoading,
  data,
  columns = categoriesTableColumns,
}: Props) => {
  return (
    <LoadingBoundary isLoading={isLoading}>
      <NoDataBoundary condition={!isLoading && Boolean(data.length)}>
        <Table
          className={className}
          coloredHeaders
          columns={columns}
          data={data}
        />
      </NoDataBoundary>
    </LoadingBoundary>
  );
};

export default CategoriesTable;

export const categoriesTableColumns: IColumn[] = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Level",
    accessor: "level",
    Cell: LevelCell,
  },
  {
    header: "Number of Sub Categories",
    accessor: "sub_categories",
    Cell: NumberOfSubCatCell,
  },
  {
    header: "Top Category",
    accessor: "top_category",
    Cell: StatusCell,
  },
  {
    header: "Thumbnail",
    accessor: "thumbnail",
    Cell: ThumbnailCell,
  },
  {
    header: "Edit",
    accessor: "edit",
    Cell: EditCell,
  },
  {
    header: "Delete",
    accessor: "delete",
    Cell: DeleteCell,
  },
];
