const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const doubleForeach = (col, row, cb) => {
  Array(row || 0).fill().forEach((m, i) => {
    Array(col || 0).fill().forEach((n, j) => {
      cb(i, j);
    });
  });
};

export const hasOwnProperty = (obj, property) => Object.prototype.hasOwnProperty
  .call(obj, property);

export const format = (d = new Date(), f = 'DD/MMM/YYYY') => {
  const date = new Date(d);

  if (f === 'DD/MMM/YYYY') {
    const mmm = MONTHS[date.getMonth() + 1];
    const dd = date.getDate();
    const yyyy = date.getFullYear();

    return `${dd} ${mmm}, ${yyyy}`;
  }

  return new Date(date);
};

export const changeQueryParam = (params) => {
  const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${params.join('&')}`;
  window.history.pushState({ path: newurl }, '', newurl);
};

export const getQueryParam = (name) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
};
