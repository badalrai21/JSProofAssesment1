/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _title, _year, _price, _color ) {
   const NFT_objects = {
      "name": _name,
      "title": _title,
      "year": _year,
      "price": _price,
      "color": _color
   }
   NFTs.push(NFT_objects);
   console.log("Minted Data: " + _name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i = 0; i < NFTs.length; i++) {
      console.log("\nTokenId:" + (i + 1));
      console.log("Name:\t" + NFTs[i].name);
      console.log("Title:\t" + NFTs[i].title);
      console.log("Year:\t" + NFTs[i].year);
      console.log("Price:  $" + NFTs[i].price);
      console.log("Color:\t" + NFTs[i].color);
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\n Total Number of NFTs minted: " + NFTs.length);
}

// call your functions below this line

mintNFT("Badal", "Air", 2011, 1000, "Black");
mintNFT("Will", "Fire", 2014, 5005, "Red");
mintNFT("Harry", "Water", 2003, 6040, "Orange");
mintNFT("Bean", "Sky", 2009, 9889, "Green");
mintNFT("Robert", "Earth", 2021, 3400, "Brown");

//calling function to print the NFT's metadata 
listNFTs();
//calling function to print the total number of NFT's minteed to console
getTotalSupply();
