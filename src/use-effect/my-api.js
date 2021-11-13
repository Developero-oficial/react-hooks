const data = [
  {label: 'A'},
  {label: 'B'},
  {label: 'C'},
  {label: 'D'},
  {label: 'E'},
];

export const myApi = {
  fakeFetch() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  },
};
