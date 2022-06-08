import React from "react";
import { Button } from "../Button/Button";
import { TrashIcon } from "@heroicons/react/solid";
import { useDeleteCategory } from "../../../lib/hooks/mutations/category/useDeleteCategory";
import { useConfirmation } from "../../../lib/context/ConfirmationContext/ConfirmationContext";
import { useLocation } from "react-router-dom";

const mutations = {
  "/categories": useDeleteCategory,
};

export const DeleteCell = ({ row }: any) => {
  const { id } = row.original;
  const { confirm } = useConfirmation();
  const { pathname } = useLocation();

  const key = pathname.split("/")[1];

  // const { mutate } = mutations[("/" + key) as keyof typeof mutations]();

  async function handleClick() {
    try {
      await confirm({ text: "Are you sure?" });
      // mutate(id);
    } catch (error: any) {}
  }

  return (
    <Button className="py-1 bg-red-500 hover:bg-red-600" onClick={handleClick}>
      <TrashIcon className="w-5" />
    </Button>
  );
};
