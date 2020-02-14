import faker from "faker";

export const generateTasks = () => {
  const todoItems = [],
    progressItems = [],
    doneItems = [];
  for (let index = 0; index < 5; index++) {
    todoItems.push({
      title: faker.fake("{{address.city}}, {{address.country}}")
    });
  }

  for (let index = 0; index < 3; index++) {
    progressItems.push({
      title: faker.fake("{{address.city}}, {{address.country}}")
    });
  }

  for (let index = 0; index < 10; index++) {
    doneItems.push({
      title: faker.fake("{{address.city}}, {{address.country}}")
    });
  }

  return { todoItems, progressItems, doneItems };
};
