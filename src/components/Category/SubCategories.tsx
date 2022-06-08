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
import { IColumn } from "../shared/Table/Table";
import CategoriesTable from "./CategoriesTable";

type Props = {
  subCategories: Array<ICategory> | undefined;
  isLoading: boolean;
};

const SubCategories = ({ subCategories, isLoading }: Props) => {
  if (!subCategories) return null;

  return (
    <LoadingBoundary isLoading={isLoading}>
      <NoDataBoundary
        condition={Boolean(subCategories.length)}
        message="No sub categories available"
      >
        <CategoriesTable
          className="mt-5"
          data={subCategories}
          isLoading={isLoading}
          columns={subCategoriesTableColumns}
        />
      </NoDataBoundary>
    </LoadingBoundary>
  );
};

export default SubCategories;

const subCategoriesTableColumns: IColumn[] = [
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
    header: "Number of Sub Categories2",
    accessor: "sub_sub_categories",
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
