import React from "react";
import { Button } from "../Button/Button";
import { TrashIcon } from "@heroicons/react/solid";
import { useConfirmation } from "../../../lib/context/ConfirmationContext/ConfirmationContext";
import { useParams } from "react-router-dom";

export const SetDeleteCell = ({ row }: any) => {
  const { confirm } = useConfirmation();
  const { productId } = useParams();

  const { id: set_id } = row.original;

  // const { mutate } = useDeleteProductSet();

  async function handleClick() {
    try {
      if (!set_id || !productId) {
      }
      await confirm({ text: "Are you sure?" });
      // mutate({ product_id: productId as string, set_id });
    } catch (error: any) {}
  }

  return (
    <Button
      className="py-1 bg-red-500 hover:bg-red-600"
      onClick={handleClick}
      type="button"
    >
      <TrashIcon className="w-5" />
    </Button>
  );
};
