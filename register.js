function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("Chris",20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item) {
        case "eggs": this.add(1 * quantity); break;
        case "milk": this.add(1.50 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(1.99 * quantity); break;
        }
        return true;
    },
    voidLastTransaction: function() {
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    
    applyStaffDiscount: function(employee) {
        this.total -= this.total * (employee.discountPercent / 100);
    },
    
};
//scan items
cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);

//discounts
cashRegister.applyStaffDiscount(me);

//total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));