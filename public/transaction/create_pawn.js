// const fs = require("fs");

// fs.readFile("../../src/DATA-transaction.json", "utf-8", (err, data) => {
//   if (err) {
//     return console.log("lỗi kìa");
//   }
//   console.log(data);
// });

document.getElementById('save-pawn').addEventListener('click', (event) => {
  event.preventDefault();
  console.log("xxxx");
  // for customer
  let CCCDNum = document.getElementById("CCCD-num").value;
  let FirstName = document.getElementById("first-name").value;
  let LastName = document.getElementById("last-name").value;
  let PhoneNumber = document.getElementById("phone-number").value;
  let Country = document.getElementById("country").value;
  let City = document.getElementById("city").value;
  let Address = document.getElementById("street-address").value;

  // for asset
  let TypeAsset = document.getElementById("types-of-assets").value;
  let AssetName = document.getElementById("collateral").value;
  // let AssetName = document.getElementById("collateral").value;

  let newTransaction = {
    id: CCCDNum,
    customer: FirstName + " " + LastName,
    loan: "1000000000000000000000000",
    interest_rate: "100%",
    date_created: "03/11/1988",
    expiration_date: "03/11/1988",
    status: Country,
  };

  // Convert the transaction object to a JSON string
  let dataStr = JSON.stringify(newTransaction, null, 2);

  // Create a blob with the data
  let blob = new Blob([dataStr], { type: "application/json" });

  // Create a URL for the blob
  let url = window.URL.createObjectURL(blob);

  // Create a hidden anchor element to trigger the download
  let a = document.createElement("a");
  a.href = url;
  a.download = "DATA-transaction.json"; // Name of the file

  // Append the anchor to the body and trigger the download
  document.body.appendChild(a);
  a.click();

  // Remove the anchor element from the body
  document.body.removeChild(a);

  // fs.writeFile(
  //   "../../src/data.txt",
  //   `${newTransaction}`,
  //   (err) => {
  //     if (err) {
  //       return console.log("lại lỗi nè");
  //     }

  //   }
  // );

  // fetch('../../src/DATA-transaction.json', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(newTransaction),
  // })
  // .then(response => response.json())
  // .then(data => {
  //   console.log('Transaction saved:', data);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });
});


// fs.writeFile("../../src/DATA-transaction.json", `${newTransaction}`, (err) => {
//   if (err) {
//     return console.log("lại lỗi nè");
//   }
// });

// let transaction = [];

// document
//   .getElementById("customerForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

    // let customerName = document.getElementById("customerName").value;
//     let pawnItem = document.getElementById("pawnItem").value;
//     let amount = document.getElementById("amount").value;

//     count++;

//     let newCustomer = {
//       id: count,
//       name: customerName,
//       item: pawnItem,
//       amount: amount,
//     };

//     customers.push(newCustomer);
//     displayCustomers();

//     // Reset form
//     document.getElementById("customerForm").reset();
//   });
