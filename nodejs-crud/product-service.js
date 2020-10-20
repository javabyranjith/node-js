const chalk = require("chalk");
const fs = require("fs");

const addProduct = (id, name, category, price) => {
  const existingData = readAllData();
  console.log("Existing data: " + JSON.stringify(existingData));

  const foundAlready = existingData.filter((e) => e.id === id);

  if (foundAlready.length === 0) {
    existingData.push({
      id: id,
      name: name,
      category: category,
      price: price,
    });

    insertData(existingData);
  } else {
    console.log(chalk.red("Id " + id + " present already!!"));
  }
};

const deleteProduct = (id) => {
  const existingData = readAllData();
  const removedData = existingData.filter((e) => e.id != id);

  if (existingData.length > removedData.length) {
    console.log(chalk.green("Data removed for id" + id));
    insertData(removedData);
  } else {
    console.log(chalk.red("Id " + id + " not found. Nothing removed!!!"));
  }
};

const readAllData = () => {
  try {
    const data = fs.readFileSync("product-data.json");
    const dataToStr = data.toString();
    return JSON.parse(dataToStr);
  } catch (e) {
    return [];
  }
};

const readDataById = (id) => {
  const data = fs.readFileSync("product-data.json");
  const found = JSON.parse(data).find((e) => e.id === id);
  return found;
};

const insertData = (dataToInsert) => {
  const dataToInsertJson = JSON.stringify(dataToInsert);
  fs.writeFileSync("product-data.json", dataToInsertJson);
  console.log(chalk.green("Data added!!"));
};

module.exports = {
  addProduct: addProduct,
  deleteProduct: deleteProduct,
  readAllData: readAllData,
  readDataById: readDataById,
};
