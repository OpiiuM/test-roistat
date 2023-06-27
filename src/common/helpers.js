const sortAlphabetic = (key) => {
  return (a, b) => {
    return a[key].toLowerCase().localeCompare(b[key].toLowerCase());
  };
};

export const deepSortEmployees = (company, key) => {
  company.forEach((emp) => {
    if (emp.employees.length > 0) {
      emp.employees = deepSortEmployees(emp.employees, key);
    }
  });

  return company.toSorted(sortAlphabetic(key));
};

export const phoneNumber = (number) => {
  return number.replaceAll(/\D/g, '').length === 11;
};

export const getUserById = (id, user) => {
  if (user.id === id) {
    return user;
  } else if (user.employees) {
    let result = null;

    for (let i = 0; result === null && i < user.employees.length; i++) {
      result = getUserById(id, user.employees[i]);
    }

    return result;
  }

  return null;
};
