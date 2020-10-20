const productService = require("./product-service");
const yargs = require("yargs");

// ADD PRODUCT
yargs.command({
  command: "addProduct",
  describe: "Add Product",
  builder: {
    id: {
      describe: "product id",
      demandOption: true,
      type: "string",
    },
    name: {
      describe: "product name",
      demandOption: true,
      type: "string",
    },
    category: {
      describe: "product category",
      demandOption: true,
      type: "string",
    },
    price: {
      describe: "product price",
      demandOption: true,
      type: "int",
    },
  },
  handler: (argv) => {
    const id = argv.id;
    const name = argv.name;
    const category = argv.category;
    const price = argv.price;
    productService.addProduct(id, name, category, price);
  },
});

// DELETE PRODUCT
yargs.command({
  command: "deleteProduct",
  describe: "Add Product",
  builder: {
    id: {
      describe: "product id",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    productService.deleteProduct(argv.id);
  },
});

// GET ALL THE AVAILABLE PRODUCTS
yargs.command({
  command: "getAllProduct",
  describe: "Get all Products",
  handler: () => {
    const allData = productService.readAllData();

    allData.forEach((element) => {
      console.log("id: " + element.id + " Name: " + element.name);
    });
  },
});

// GET PRODUCT BY ID
yargs.command({
  command: "getProductById",
  describe: "Get product by id",
  builder: {
    id: {
      describe: "product id",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    const data = productService.readDataById(argv.id);
    console.log("id: " + data.id + " Name: " + data.name);
  },
});

yargs.parse();
