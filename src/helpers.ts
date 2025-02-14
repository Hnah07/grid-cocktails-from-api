import slugify from "slugify";

export const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const slugit = (str: string) => {
  return slugify(str, { lower: true });
};
