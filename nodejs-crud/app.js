const productService = require("./product-service");
const yargs = require("yargs");
const { argv } = require("yargs");

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

yargs.parse();
