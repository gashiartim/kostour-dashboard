import { useState } from "react";

export type IStateType = {
  color: IAttribute | undefined;
  material: IAttribute | undefined;
  size: IAttribute | undefined;
  sets: Omit<IStateType, "sets">[] | any;
  error?: string;
};

interface IAttribute {
  id: string;
  name: string;
  slug: string;
  attribute_id?: string;
  related_field?: string;
}

export function useCreateAttributeSets() {
  const [state, setState] = useState<IStateType>({
    color: {
      id: "",
      name: "",
      slug: "",
      attribute_id: "",
    },
    material: {
      id: "",
      name: "",
      slug: "",
      attribute_id: "",
    },
    size: {
      id: "",
      name: "",
      slug: "",
      attribute_id: "",
    },
    sets: [],
    error: "",
  });

  function onChange(data: any) {
    switch (data.related_field) {
      case "color":
        setState((prevState) => ({ ...prevState, color: data }));
        break;
      case "material":
        setState((prevState) => ({ ...prevState, material: data }));
        break;
      default:
        setState((prevState) => ({ ...prevState, size: data }));
    }
  }

  function onAdd(callBack?: any) {
    //checks if variation already exists
    console.log("callBack", callBack);

    const variationExists = exists({
      color: {
        ...state.color,
      },
      material: {
        ...state.material,
      },
      size: {
        ...state.size,
      },
    });

    if (variationExists) {
      return setState((prevState) => ({
        ...prevState,
        error: "This variation already exists",
      }));
    }
    setState((prevState) => ({
      ...prevState,
      sets: [
        ...prevState.sets,
        {
          color: {
            ...prevState.color,
            value: prevState.color?.id,
            attribute_id: prevState.color?.attribute_id,
            related_field: prevState.color?.related_field,
          },
          material: {
            ...prevState.material,
            value: prevState.material?.id,
            attribute_id: prevState.material?.attribute_id,
            related_field: prevState.material?.related_field,
          },
          size: {
            ...prevState.size,
            value: prevState.size?.id,
            attribute_id: prevState.size?.attribute_id,
            related_field: prevState.size?.related_field,
          },
        },
      ],
      color: undefined,
      size: undefined,
      material: undefined,
      error: "",
    }));

    if (callBack && typeof callBack === "function") {
      callBack({
        color: {
          value: state.color?.id,
          attribute_id: state.color?.attribute_id,
          related_field: state.color?.related_field,
        },
        material: {
          value: state.material?.id,
          attribute_id: state.material?.attribute_id,
          related_field: state.material?.related_field,
        },
        size: {
          value: state.size?.id,
          attribute_id: state.size?.attribute_id,
          related_field: state.size?.related_field,
        },
      });
    }
  }

  function exists(
    set: Omit<IStateType, "sets"> | any
  ): boolean | undefined | any {
    let result = undefined;
    state.sets.forEach((element: Omit<IStateType, "sets">) => {
      if (
        element.color?.id === set.color?.id &&
        element.material?.id === set.material?.id &&
        element.size?.id === set.size?.id
      ) {
        result = element;
      }
    });
    return result;
  }

  function setError(error: string) {
    setState((prevState) => ({ ...prevState, error }));
  }

  function resetForm() {
    setState({
      color: {
        id: "",
        name: "",
        slug: "",
        attribute_id: "",
      },
      material: {
        id: "",
        name: "",
        slug: "",
        attribute_id: "",
      },
      size: {
        id: "",
        name: "",
        slug: "",
        attribute_id: "",
      },
      sets: [],
      error: "",
    });
  }

  function deleteSet(set: Omit<IStateType, "sets" | "error">) {
    const variationExists = exists({
      color: {
        ...set.color,
      },
      material: {
        ...set.material,
      },
      size: {
        ...set.size,
      },
    });

    if (!variationExists) return;

    setState((prevState) => ({
      ...prevState,
      sets: prevState.sets.filter((element: Omit<IStateType, "sets">) => {
        if (
          element.color?.id !== set.color?.id ||
          element.material?.id !== set.material?.id ||
          element.size?.id !== set.size?.id
        ) {
          return element;
        }
      }),
    }));
  }

  return {
    state,
    onAdd,
    onChange,
    setError,
    resetForm,
    deleteSet,
  };
}
