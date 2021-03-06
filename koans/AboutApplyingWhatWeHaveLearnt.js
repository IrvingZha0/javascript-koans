var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];
      var productsNoNuts = products.filter(function(product) {
                                      return product.containsNuts !== true;
                                    });
      var produ = function (ingredients) {
        _ingredients.all()
      }

      function isNotMushroom(ingredient) {
        return ingredient !== "mushrooms";
         // var result = ingredient === "mushrooms" ;
         // console.log(result);
         //  return result;
      }

      console.log(productsNoNuts);
      console.log(productsNoNuts[0].ingredients);
      console.log("test" + _(productsNoNuts[0].ingredients).all(isNotMushroom));
      // productsICanEat = productsNoNuts.ingredients.filter(function(ingredient) {
      //   return ingredient === ''
      // })
      productsICanEat = productsNoNuts.filter(function(product) {
        return _(product.ingredients).all(isNotMushroom);
      });
      //   (productsNoNuts).filter(function(product) {
      //      return _(product.ingredients).all(isMushroom) === false;
      //   })

      // console.log(productsICanEat);
      // /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  // it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
  //  console.log( _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]));
  //   var multiplesOfThree = _.range(0, 1000, 3);
  //   var multiplesOfFive = _.range(0, 1000, 5);
  //   console.log(multiplesOfFive);
  //   console.log(multiplesOfThree);
  //    var result = _.union([1,2,3],[2,3,4]);
  //    console.log(result);
  //   var union = _.chain().union(multiplesOfThree, multiplesOfFive);
  //   var sum = union.chain().reduce();    /* try chaining range() and reduce() */
  //   console.log(sum);
  //   expect(233168).toBe(sum);
  // });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
