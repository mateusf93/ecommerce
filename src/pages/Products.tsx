import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Search, PlusCircle } from 'lucide-react'
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "../components/ui/label";
import { useEffect, useState } from "react";
import  Home  from "./Home";
interface Products {
  name: string;
  description: string;
  price: number;
  quantity: number;
  category:string
}

const Products = () => {
  const [contentList, setContentList] = useState([]);

  const [product, setProduct] = useState<Products>({
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    category:''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSaveClick = () => {
    fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to save product');
      }
      console.log('Product saved successfully');
      // Add any other actions you want to perform after the product is saved
    })
    .catch(error => {
      console.error('Error saving product:', error);
    });
  };


  useEffect(() => {
    fetch('http://localhost:8080/products?sort=id',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        const content = data.content;
        setContentList(content);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  

  const renderTableHeader = () => {
    if (contentList.length === 0) return null;

    const columnNames = Object.keys(contentList[0]);

    return (
      <TableHeader>
        {columnNames.map((columnName, index) => (
          <TableHead key={index}>{columnName}</TableHead>
        ))}
      </TableHeader>
    );
  };

  return (
    <Home>
      <div className="flex flex-col flex-1 p-6 max-w-4xl space-y-4">
        <h1 className="text-3xl font-bold">Products</h1>
        <div className="flex items-center justify-between">
          <form className="flex items-center gap-2">
            <Input name="id" placeholder="Product ID" className="w-auto"></Input>
            <Input name="name" placeholder="Product Name" className="w-auto"></Input>
            <Button type="submit" variant="link">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </form>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="w-4 h-4 mr-2" />
                New Product
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Product</DialogTitle>
                <DialogDescription>Add a new product to your catalog</DialogDescription>
              </DialogHeader>
              <form className="space-y-6">
                <div className="grid grid-cols-4 items-center text-right gap-3">
                  <Label htmlFor="name"> Product Name</Label>
                  <Input className="col-span-3"
                      id="name"
                      name="name"
                      value={product.name}
                      onChange={handleChange}
                    /> 
                  <Label htmlFor="name"> Product Description</Label>
                  <Input
                      className="col-span-3"
                      id="description"
                      name="description"
                      value={product.description}
                      onChange={handleChange}
                    />
                  <Label htmlFor="price">Price</Label>
                  <Input
                      className="col-span-3"
                      id="price"
                      name="price"
                      type="number"
                      value={product.price.toString()}
                      onChange={handleChange}
                    />
                  <Label htmlFor="name"> Quantity</Label>
                  <Input
                      className="col-span-3"
                      id="quantity"
                      name="quantity"
                      type="number"
                      value={product.quantity.toString()}
                      onChange={handleChange}
                    />
                  <Label htmlFor="name"> Category</Label>
                  <Input
                      className="col-span-3"
                      id="category"
                      name="category"
                      value={product.category}
                      onChange={handleChange}
                    />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" onClick={handleSaveClick}>Save</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="border rounded-lg p-2">
          <Table>
            {renderTableHeader()}
            <TableBody>
              {contentList.map((item: any, index: number) => (
                <TableRow key={index}>
                 {Object.values(item).map((value:any, index:number) => (
                <TableCell key={index}>{value}</TableCell>
              ))}
              </TableRow>))}
            </TableBody>
          </Table>
        </div>
      </div>
      </Home>

  );
};

export default Products;


