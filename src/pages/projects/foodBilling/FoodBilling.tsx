import ArrowComponent from "./ArrowComponent"
import React from "react";

function BillComponent(){
    var menu=[
        {
            name:"puri",
            price:80,
            status:"not available"
        },
        {
            name:"dosa",
            price:50,
            status:"not available"
        },
        {
            name:"poha",
            price:20,
            status:"available"
        },
        {
            name:"idly",
            price:30,
            status:"available"
        },
        {
            name:"dokhla",
            price:40,
            status:"available"
        },
        {
            name:"vada",
            price:60,
            status:"available"
        }
    ];
    const [items,setItems]=React.useState([...menu]);
    function sort(event){
        var dupitems=[...items];
        dupitems.sort(
            (a,b)=>{
                let aitem="",bitem="";
                switch (event.currentTarget.id){
                    case 'Title01':
                    case 'Title02':{
                        aitem=a.name.toLowerCase();
                        bitem=b.name.toLowerCase();
                        break;
                        }
                    case 'Price01':
                    case 'Price02':{
                        aitem=a.price.toString();
                        bitem=b.price.toString();
                        break;
                    }
                    case 'Status01':
                    case 'Status02':{
                        aitem=a.status.toLowerCase();
                        bitem=b.status.toLowerCase();
                        break;
                    }
                }
                switch(event.currentTarget.id){
                    case "Title01":
                    case "Price01":
                    case "Status01":{
                        if(aitem<bitem){
                            return 1;
                        }
                        if(aitem>bitem){
                            return -1;
                        }
                        else{
                            return 0;
                            }
                    }
                    case "Title02":
                    case "Price02":
                    case "Status02":{
                        if(aitem<bitem){
                            return -1;
                        }
                        if(aitem>bitem){
                            return 1;
                        }
                        else{
                            return 0;
                            }
                    }
                }
                
            }
        )
        setItems([...dupitems]);
    }
    return(
        <div>
            <h1>SELECT ITEMS</h1>
            {/* <MenuComponent/> */}
            <h1>Food Billing</h1>
            <table>
                <thead>
                    <tr>
                        <ArrowComponent  header="Title" items={items} sort={sort}/>
                        <ArrowComponent header="Price" items={items} sort={sort}/>
                        <ArrowComponent header="Status" items={items} sort={sort}/>
                    </tr>
                </thead>
                <tbody>
                    { 
                        items.map((item,index)=>{
                            return(
                                <tr key={index}> 
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.status}</td>
                                </tr>                                           
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default BillComponent;




