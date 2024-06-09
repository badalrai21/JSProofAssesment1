## JSProofAssesment

This project provides a basic implementation of an NFT (Non-Fungible Token) minting process using JavaScript. The script demonstrates how to create (mint) NFTs with specific metadata, list all minted NFTs, and get the total count of NFTs minted. It's a simple, introductory example aimed at understanding the basic concepts of NFT creation and management in a programming context.

## Description

This project is a simple JavaScript script designed to demonstrate the basics of NFT (Non-Fungible Token) minting and management. The script begins by creating an empty array const NFTs = [] to hold the NFT objects. The mintNFT function takes parameters such as name, title, year, price, and color to create an NFT object and adds it to the NFTs array. The function logs a confirmation message upon successful minting. Next, the listNFTs function iterates over the NFTs array using a for loop, which employs the let keyword to ensure the loop variable iteration is confined to the loop scope, preventing potential errors. During each iteration, the metadata of each NFT is printed to the console. Lastly, the getTotalSupply function logs the total number of NFTs by checking the length of the NFTs array. The primary purpose of this script is educational: to provide a basic, clear example of how to create, store, and manage NFTs programmatically. It serves as a starting point for those interested in learning about NFTs and their implementation in a coding environment, offering foundational knowledge that can be built upon for more advanced projects.

## Getting Started

### Executing program

* How to run the program

1. Open GitHub Repository in Gitpod:
   * Ensure your project is on GitHub. If not, create a new repository and push your code to it.
   * Open your repository on GitHub.
    
2. Launch Gitpod:
     
  * In the URL of your repository, prefix the URL with https://gitpod.io/#.
  * For example, if your repository URL is https://github.com/username/nft-minting-script, change it to https://gitpod.io/#https://github.com/username/nft-minting-script.
  * Press Enter to open the Gitpod workspace.
    
3. Install Node.js:
  * Gitpod typically comes with Node.js pre-installed. To verify, open the terminal in Gitpod and run:
    
```
code node -v
```
  * If Node.js is not installed, you can install it by running:
```
sudo apt-get update
sudo apt-get install -y nodejs
sudo apt-get install -y npm
```

4. Create JavaScript File:
  * If not already present, create a new file named nftMinting.js in the Gitpod workspace.
  * Copy and paste the following code into the nftMinting.js file:
 
```
sudo apt-get update
sudo apt-get install -y nodejs
sudo apt-get install -y npm
```


```
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
```
## Help

You can easily run on VS Code or online platform known as GitPod which decreases the chances of errors.

## Authors

Badal Kumar Rai

[@BadalRai](https://www.linkedin.com/in/badal-kumar-rai-a0151b259/)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
