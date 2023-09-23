export const useFilter = (data) => {
  function filterData(title) {
    let a = filterRestro.filter((data) =>
      data.name.toLowerCase().includes(title.toLowerCase())
    );
    console.log(a);
    return a;
  }

  return filterData(data);
};
