export class Product {
  constructor(
    public ProductId: number,
    public ProductName: string,
    public Price: number,
    public Category: string
  ){}
}


export class ProductData {
  constructor(
    public ProductRowId: number,
    public ProductId: string,
    public ProductName: string,
    public CategoryName: string,
    public Manufacturer: string,
    public Description: string,
    public BasePrice: number,
  ){}
}


export class UserData{
  constructor(
    public data : Array<User>

  ){}
}

export class User{
  constructor(
    public id: number,
    public email: string,
    public first_name:"Janet" 
  ){}
}