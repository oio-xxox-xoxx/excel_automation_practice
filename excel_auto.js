const xlsx = require("xlsx");
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
let virtualDB = [
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
  {
    usercode: uuidv4(),
    username: faker.internet.userName(),
    postcode: uuidv4(),
    item_serial: uuidv4(),
  },
];

const workbook = xlsx.utils.book_new();
const worksheet = xlsx.utils.json_to_sheet(virtualDB);
xlsx.utils.book_append_sheet(workbook, worksheet, "sheet1");
xlsx.writeFile(workbook, path.join(__dirname, "주문내역.xlsx"));
