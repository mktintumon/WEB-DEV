let obj = {
    name: "Adam",
    address: {
      country: "USA",
      state: {
        stateName: "New York",
        pincode: 123456,
      },
    },
  };
  

  // In this spread operator will not work and dont change values
  // PROBLEM resolved using 2 methods -> shallow or deep copy

  // let obj2 = {...obj}
  // obj2.address.country = "usa";


  // SHALLOW COPY
  let obj2 = {...obj , address : {...obj.address , state : {...obj.address.state}}  } 
  obj2.address.country = "usa";
  
  obj.address.country = "India";
  obj.address.state.pincode = 222222
  

  // DEEP COPY
  // let obj2 = JSON.parse(JSON.stringify(obj)); 
  // obj2.address.country = "Russian"
  
  console.log(obj);
  console.log(obj2);