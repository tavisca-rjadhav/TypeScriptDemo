import { Customer } from './app.customer';
import { Order } from './app.order';

export const Products = [
  {ProductId:101, ProductName:'Laptop', Price:20000, Catgory:'ECT'},
  {ProductId:102, ProductName:'Iron', Price:2000, Catgory:'ECL'},
  {ProductId:103, ProductName:'Lays', Price:20, Catgory:'FOD'}
];

export const Categories =[
  'ECT', 'ECL', 'FOD'
];


export  const Customers = new Array<Customer>();
Customers.push(new Customer(101, "ABC", "Pune", "test@gmail.com", 9745823121));
Customers.push(new Customer(102, "PQR", "Mumbai", "test1@gmail.com", 9745823122));
Customers.push(new Customer(103, "XYZ", "Pune", "test2@gmail.com", 9745823123));

export const Orders = new Array<Order>();
Orders.push(new Order(201, "order1", "10/02/2020", 101, 2, 200 ))
Orders.push(new Order(202, "order2", "15/02/2020", 102, 5, 400 ))
Orders.push(new Order(203, "order3", "20/02/2020", 101, 10, 200 ))
Orders.push(new Order(204, "order4", "25/02/2020", 103, 2, 500 ))