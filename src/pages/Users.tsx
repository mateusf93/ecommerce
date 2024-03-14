import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Search, PlusCircle } from 'lucide-react'
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "../components/ui/label";
import { useEffect, useState } from "react";
import  Home  from "./Home";


const Users =()=> {
    return (
        <Home>
        <div className="flex flex-col flex-1 p-6 max-w-4xl space-y-4">
          <h1 className="text-3xl font-bold">Users</h1>
          <div className="flex items-center justify-between">
            <form className="flex items-center gap-2">
              <Input name="id" placeholder="User ID" className="w-auto"></Input>
              <Input name="name" placeholder="UserName" className="w-auto"></Input>
              <Button type="submit" variant="link">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </form>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="w-4 h-4 mr-2" />
                  New User
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>New User</DialogTitle>
                  <DialogDescription>Add a new User</DialogDescription>
                </DialogHeader>
                <form className="space-y-6">
                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="name"> User</Label>
                    <Input className="col-span-3" id="name" />
                  </div>
                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="price">User name</Label>
                    <Input className="col-span-3" id="price" />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div className="border rounded-lg p-2">
            <Table>
             
              <TableBody>
              
              </TableBody>
            </Table>
          </div>
        </div>
        </Home>
    )

}

export default Users