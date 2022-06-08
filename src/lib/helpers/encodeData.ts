export function encodeData(data: any) {
  let formBody: any = [];

  for (const key in data) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(data[key]);

    formBody.push(encodedKey + "=" + encodedValue);
  }

  formBody = formBody.join("&");

  return formBody;
}
