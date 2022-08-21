function StringFormatter() {
  function capitalizeFirst(word) {
    return (
      word.toLowerCase().charAt(0).toUpperCase() + word.toLowerCase().slice(1));
  }
  function skewerCase(word) {
    return word.replace(" ", "-");
  }

  return {
    capitalizeFirst,
    skewerCase
  }
}

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); //should print Dorothy
console.log(formatter.skewerCase("blue box")); //should print blue-box
