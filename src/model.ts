let displayName : string="Jess's standing desk";
let inventoryType : string="furniture";
let trackingNumber : string="FD123455";
let createDate :Date =new Date();
let OriginalCost : number =425;

interface inventoryItem{
    displayName:string,
    inventoryType:string,
    trackingNumber:string,
    createDate:Date,
    originalCost:number
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

saveInventoryItem(inventoryItem);