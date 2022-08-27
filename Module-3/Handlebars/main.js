// const menuData = {
//     menu: [
//       { name: "Google", link: "http://google.com", socialNetwork: true },
//       { name: "Facebook", link: "http://facebook.com", socialNetwork: false },
//       { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
//       { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
//     ]
//   };
  
//   const source = $('#menu-template').html();
//   const template = Handlebars.compile(source);
//   const newHTML = template(menuData);
  
//   // append our new html to the page
//   $('.menu').append(newHTML);



// const renderFirst = function(){
//     const source = $('#first-template').html();
//     const template = Handlebars.compile(source);
//     let newHTML = template({ text: "This gets rendered" });
//     $('body').append(newHTML);  
//   }
  
//   const renderSecond = function(){
//     const source = $('#second-template').html();
//     const template = Handlebars.compile(source);
//     let newHTML = template({ moreText: "This also gets rendered" });
//     $('#special').append(newHTML);  
//   }
  
//   renderFirst()
//   renderSecond()



const animaleList = {animals: ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]}
const languagesList = {languages: ["French", "Spanish", "Togolese", "Javascript", "Uruk"]}

const renderAnimales = function(){
    const source = $('#animales-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template(animaleList);
    $('body').append(newHTML);  
  }
  
const renderLanguages = function(){
    const source = $('#languages-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template(languagesList);
    $('body').append(newHTML);  
  }
  
  renderAnimales()
  renderLanguages()