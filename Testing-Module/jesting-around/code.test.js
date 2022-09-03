const {functions, PictureManager} = require('./code')
const utils = new functions();

test("add should return sum of a + b", () => {
    let sum = utils.add(1, 2)
    expect(sum).toBe(3)
})

test("pythagoras simple check", ()=>{
    let result = utils.calculateHyp(3, 4);
    expect(result).toBe(5);
})

test("should remove all BUGs from list of code", () => {
    let code = ["great code", "good code", "BUG", "async await awesome code", "BUG", "BUG", "general code"]
    let bugFreeCode = utils.removeBugs(code)
    expect(bugFreeCode).not.toContain("BUG")
    expect(bugFreeCode).toContain("good code") //this is just an example, there are other ways to check
})

test("should remove all LOW priority object from the array", () => {
    let array = [{text: "bla",
                    priority: "HIGH"},
                    {text: "bla",
                    priority: "LOW"},
                    {text: "bla",
                    priority: "HIGH"},
                    {text: "bla",
                    priority: "LOW"},]
                    
    let newArray = utils.clearLowPriority(array);
    
    expect(new Set(newArray.map(e => e.priority)).size).toBe(1);
    expect(newArray[0].priority).toBe("HIGH");
})



test("addPicture should add a picture URL to the pictureURLs array", function () {
  //sanity 
  const picManager = new PictureManager()
  expect(picManager.pictureURLs.length).toBe(0)
  
  picManager.addPicture("some_url")
  expect(picManager.pictureURLs.length).toBe(1)           //test
  expect(picManager.pictureURLs).toContain("some_url")    //double check 
})


test("removePicture should remove a picture URL to the pictureURLs array", function () {
    const picManager = new PictureManager()    
    picManager.addPicture("some_url")
    picManager.removePicture("bla");
    expect(picManager.pictureURLs.length).toBe(1)
    expect(picManager.pictureURLs).toContain("some_url");    //double check  
    picManager.removePicture("some_url");
    expect(picManager.pictureURLs.length).toBe(0); 
  })