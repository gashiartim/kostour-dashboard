type CreateFormDataTypes = {
  createFormData: (data: object, skip?: Array<string>) => FormData | undefined;
};

export function useCreateFormData(): CreateFormDataTypes {
  /**
   *
   * @param data an objects of datas that need to be put into a formData object
   * @param skip an array of keys(string) of properties that dont need to be included in formdata obj
   * @returns the formdata obj
   */
  const createFormData = (
    data: object,
    skip?: Array<string>
  ): FormData | undefined => {
    const formData = new FormData();

    // console.log(data);

    for (const key in data) {
      let indexKey = key as keyof typeof data;

      if (!skip?.includes(indexKey) && Array.isArray(data[indexKey])) {
        // console.log("data[indedKey]", data[indexKey]);

        Array(...(data[indexKey] as any[])).forEach((data, index) => {
          formData.append(`${indexKey}[]`, data);
        });
      }
      if (data[indexKey] || typeof data[indexKey] === "boolean") {
        if (!skip?.includes(key) && !Array.isArray(data[indexKey])) {
          formData.append(key, data[indexKey]);
        }
      }
    }

    return formData;
  };

  return { createFormData };
}
