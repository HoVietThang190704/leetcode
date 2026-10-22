const address = "1.1.1.1"

var defangIPaddr = function(address) {
  let newAddress = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      newAddress += "[.]";
    } else {
      newAddress += address[i];
    }
  }
  return newAddress;
};
console.log(defangIPaddr(address));