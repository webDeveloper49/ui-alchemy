import {createSlice} from "@reduxjs/toolkit";
export const billgenerationSlice=createSlice({
    name:"billgeneration",
    initialState:{
        menuCard:[{
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
        }],
        bill_items:[],
        amount:"",
        billStatus:""
    },
    reducers:{
        billGeneration:(state,action)=>{
            console.log(action.payload)
            state.menuCard.forEach((menuitem:any,index)=>{//item={name,price,status}
                
                if(menuitem.name===action.payload){
                    //check whether in bill items
                    const checkbill=state.bill_items.some((billitem:any)=>billitem.name===action.payload)
                    console.log('reducer menuCard map item',menuitem.name,index)
                    if(!checkbill){
                        state.bill_items.push({...menuitem,quantity:1})
                    }else{
                        const billItemIndex = state.bill_items.findIndex((item:any)=>item.name===action.payload)
                        state.bill_items[billItemIndex]['quantity'] += 1
                    }
                }
            })
        },
        sortItems:(state,action)=>{//event.currentTarget.id
            state.bill_items.sort(
                (a,b)=>{
                    let aitem="",bitem="";
                    switch (action.payload){
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
                        default:
                            break;
                    }
                    switch(action.payload){
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
                        default:
                            break
                    }
                    return aitem.localeCompare(bitem)
            })
        }
    }
})
export const {billGeneration,sortItems}=billgenerationSlice.actions;
export default billgenerationSlice.reducer;