var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var OriginalCost = 425;
OriginalCost = 'this is so cool';
var inventoryItemType;
(function (inventoryItemType) {
    inventoryItemType["Computer"] = "computer";
    inventoryItemType["Furniture"] = "furniture";
})(inventoryItemType || (inventoryItemType = {}));
//you can give an inline description of the structure of the object
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
var updatedInventoryItem = inventoryItem;
inventoryItem.createDate = new Date();
saveInventoryItem({ displayName: "Dorc",
    inventoryType: "computer",
    trackingNumber: "123",
    createDate: new Date(),
    originalCost: 1500 });
