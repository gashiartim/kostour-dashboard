import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../Button/Button";
import { PencilIcon } from "@heroicons/react/solid";
import { useQueryClient } from "react-query";
import { categoryKeys } from "../../../lib/hooks/keys/categoryKeys";

interface Props {
  value: any;
  columnProps: any;
}

export const EditCell = ({ row }: any) => {
  const { id } = row.original;
  const { categoryId, subCategoryId } = useParams();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  function handleClick() {
    if (categoryId && !subCategoryId) {
      return navigate(`sub-category/${id}`);
    }
    if (categoryId && subCategoryId) {
      queryClient.invalidateQueries(categoryKeys.category(subCategoryId));
      return navigate(`${id}`);
    }
    navigate(`edit/${id}`);
  }

  return (
    <Button className="py-1 " onClick={handleClick}>
      <PencilIcon className="w-5" />
    </Button>
  );
};
