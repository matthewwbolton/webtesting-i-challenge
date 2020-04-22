module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    return { ...item, enhancement: item.enhancement + 1 };
  } else {
    return item;
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return item.durability < 5
      ? { ...item, durability: 0 }
      : { ...item, durability: item.durability - 5 };
  } else {
    return item.enhancement > 16
      ? {
          ...item,
          durability: item.durability - 10,
          enhancement: item.enhancement - 1,
        }
      : { ...item, durability: item.durability - 10 };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}

// const item = {
//   name: "",
//   durability: null,
//   enhancement: null,
// };
