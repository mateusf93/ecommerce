
import { Button, buttonVariants } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command';
import { HomeIcon, ArchiveIcon, GearIcon, PersonIcon } from '@radix-ui/react-icons';
import { Table } from '@/components/ui/table';




const Home = ({ children }: any) => {
  const navigate = useNavigate();
  return (
    <>
  
      <Table className="flex h-screen w-auto" >

        <Command className="bg-black text-white w-64 p-4 shadow-md h-100 w-auto" style={{ width: '12%' }} >
          <CommandList className="bg-black h-auto" >

            <Button className="flex items-center"
              style={{
                backgroundColor: 'black',
                border: 'none',
                padding: 0,
                margin: 0,
                outline: 'none',
                cursor: 'pointer',
                color: 'black',
                fontSize: 0,
                lineHeight: 0,
              }} onClick={() => {
                navigate('/');
              }}>
              <CommandItem className='bg-black'>
                <HomeIcon className="mr-1 h-6 w-5 text-white" />

              </CommandItem>
            </Button>


            <CommandSeparator style={{
              padding: 0,
              margin: 0,
            }} />

            <CommandGroup heading="Menu" className="h-auto" style={{
              padding: 0,
              margin: 0,
              height: 'auto',
            }}>

              <div className='h-7'>
                <Button className="mr-5 h-6 w-12 text-white" style={{
                  backgroundColor: 'black',
                  border: 'black',
                  padding: 0,
                  margin: 0,
                  outline: 'none',
                  cursor: 'pointer',
                  color: 'black',
                  fontSize: 0,
                  lineHeight: 0,
                }} onClick={() => {
                  console.log("clicked")
                  navigate('/products')
                }}>

                  <CommandItem className='' style={{ padding: 3 }}>
                    <ArchiveIcon className="mr-1 h-6 w-4 text-white bg-black" style={{ padding: 0 }} />
                    <span className="mr-1 h-5 w-4 text-white bg-black"> Products</span>
                  </CommandItem>

                </Button>
              </div>

              <div className='h-7'>
                <Button className="mr-5 h-6 w-12 text-white" style={{
                  backgroundColor: 'black',
                  border: 'black',
                  padding: 0,
                  margin: 0,
                  outline: 'none',
                  cursor: 'pointer',
                  color: 'black',
                  fontSize: 0,
                  lineHeight: 0,
                }} onClick={() => {
                  console.log("clicked")
                  navigate('/costumers')
                }}>

                  <CommandItem className='' style={{ padding: 3 }}>
                    <PersonIcon className="mr-1 h-6 w-4 text-white bg-black" style={{ padding: 0 }} />
                    <span className="mr-1 h-5 w-4 text-white bg-black"> Costumers</span>
                  </CommandItem>

                </Button>
              </div>

              

              <div className='h-6'>
                <Button className="mr-5 h-6 w-12 text-white" style={{
                  backgroundColor: 'black',
                  border: 'black',
                  padding: 0,
                  margin: 0,
                  outline: 'none',
                  cursor: 'pointer',
                  color: 'black',
                  fontSize: 0,
                  lineHeight: 0,
                }} onClick={() => {
                  console.log("clicked")
                  navigate('/users')
                }}>

                  <CommandItem className='' style={{ padding: 3 }}>
                    <GearIcon className="mr-1 h-6 w-4 text-white bg-black" style={{ padding: 0 }} />
                    <span className="mr-1 h-5 w-4 text-white bg-black"> Users</span>
                  </CommandItem>

                </Button>
              </div>



            </CommandGroup>



          </CommandList>




        </Command >
       
        {children}

      </Table>

    </>

  )
}

export default Home;