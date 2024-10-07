const convertISOToDate = (isoString: any) => {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${month}/${day}/${year}`;
};

export { convertISOToDate };
