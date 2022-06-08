import React from "react";
import { Button } from "../Button/Button";
import { TrashIcon } from "@heroicons/react/solid";
import { useConfirmation } from "../../../lib/context/ConfirmationContext/ConfirmationContext";
import { useParams } from "react-router-dom";
import { IStateType } from "../../../lib/hooks/shared/useCreateAttributeSets";

interface Props {
  row: { original: Omit<IStateType, "sets"> };
  deleteSet: (set: Omit<IStateType, "sets" | "error">) => void;
}

export const LocalSetDeleteCell = (props: Props) => {
  const { confirm } = useConfirmation();

  console.log("deleteSet", props);

  async function handleClick() {
    try {
      await confirm({ text: "Are you sure?" });
      props.deleteSet(props.row.original);
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
