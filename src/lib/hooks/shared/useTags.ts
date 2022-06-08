import localforage from "localforage";
import React, { ChangeEvent, useState } from "react";

type Props = {};

export type TagStateType = {
  name: string;
  href: string;
  email?: string;
  error?: string;
  tags: Array<Omit<TagStateType, "tags">>;
};

function useTags(tags?: Array<Omit<TagStateType, "tags">>) {
  const [state, setState] = useState<TagStateType>(() => ({
    name: "",
    href: "",
    email: "",
    error: "",
    tags: tags || [],
  }));

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setState((prevState) => ({
      ...prevState,
      [event.target.name as keyof typeof state]: event.target.value,
    }));
  }

  function onAdd() {
    const { name, href } = state;
    if (!Boolean(name) || !Boolean(href)) {
      setState((prevState) => ({
        ...prevState,
        error: "Name and href are required",
      }));
      return;
    }

    setState(({ name, email, href, tags }) => {
      return {
        name: "",
        email: "",
        href: "",
        error: "",
        tags: [...tags, { name, email, href }],
      };
    });

    console.log(state);
  }

  function onClearTag(indexParam: number) {
    setState((prevState) => {
      return {
        ...prevState,
        tags: prevState.tags.filter((tag, index) => index !== indexParam),
      };
    });
  }

  function resetTags() {
    setState((prevState) => ({ ...prevState, tags: [] }));
  }

  return {
    ...state,
    onAdd,
    onChange,
    onClearTag,
    resetTags,
  };
}

export default useTags;
