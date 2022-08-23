let displayName : string="Jess's standing desk";
let inventoryType : string="furniture";
let trackingNumber : string="FD123455";
let createDate :Date =new Date();
let OriginalCost : number | string =425;
OriginalCost='this is so cool';

enum inventoryItemType{
    Computer='computer',
    Furniture='furniture'
}


interface inventoryItem{
    displayName:string,
    inventoryType:"computer" | "furniture",
    trackingNumber:string,
    createDate:Date,
    originalCost?:number,

    addNote?(note :string):string

}
//you can give an inline description of the structure of the object
function getInventoryItem(trackingNumber:string): inventoryItem {
    return null;
}

function saveInventoryItem(item : inventoryItem): void{

}

let inventoryItem=getInventoryItem(trackingNumber);

let updatedInventoryItem=inventoryItem;

inventoryItem.createDate=new Date();

saveInventoryItem({displayName:"Dorc",
    inventoryType:"computer",
    trackingNumber:"123",
    createDate:new Date(),
    originalCost:1500});