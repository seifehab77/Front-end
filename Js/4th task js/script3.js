var arr = [
    function std(_name, _gender, _age) {

        let des = "20"
        this.name = _name
        this.gender = _gender
        this.age = _age
        this.print = function() {
            return `
                <h1>${this.name}</h1>
                <h1>${this.gender}</h1>
                <h1>${this.age}</h1>
            `
        }
        this.getDes = function() {
            return des
        }
        this.setdes = function(x) {
            return des = x
        }

    } 
]
var arr = ["ahmed", "male", 20];
arr.push("seif", "male", 25)
console.log(arr)


function product(_id, _productName, _unitprice) {
    this.id = _id;
    this.productName = _productName;
    this.unitprice = _unitprice;
}

var products = [{
        id: 5,
        productName: "Logitech Mouse",
        unitprice: 35
    },
    {
        id: 6,
        productName: "Logitech Keyboard",
        unitprice: 40
    }
];

products.push({
    id: 8,
    productName: "Microsoft Mouse",
    unitprice: 58
});

products.push(new product(7, "Microsoft Keyboard", 43));


console.log(products);

function std(_name, _gender, _age) {

    let des = "20"
    this.name = _name
    this.gender = _gender
    this.age = _age
    this.print = function() {
        return `
                <h1>${this.name}</h1>
                <h1>${this.gender}</h1>
                <h1>${this.age}</h1>
            `
    }
    this.getDes = function() {
        return des
    }
    this.setdes = function(x) {
        return des = x
    }

}
var arr = []
arr.push(new std("seiff", "male", 25))
console.log(arr)