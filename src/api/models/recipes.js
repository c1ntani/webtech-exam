const db = require("./db");
const Ingredients = require("./ingredients");
const Steps = require("./steps");

var initRecipes = [
  {
    name: "Pulled chicken & black bean chilli",
    category: "premium",
    ingredients: [
      {
        entry: "2 tbsp sunflower oil",
        type: "sunflower oil",
      },
      {
        entry: "2 onions, sliced",
        type: "onions",
      },
      {
        entry: "4 boneless, skinless chicken thighs",
        type: "chicken",
      },
      {
        entry: "garlic cloves, finely chopped",
        type: "garlic",
      },
      {
        entry: "1 tbsp oregano",
        type: "oregano",
      },
      {
        entry: "1 tsp cumin seeds",
        type: "seeds",
      },
      {
        entry: "3 tbsp chipotle in adobo or 1 tsp chipotle paste",
        type: "chipotle",
      },
      {
        entry: "350g passata",
        type: "passata",
      },
      {
        entry: "1⁄2 lime, juiced",
        type: "lime",
      },
      {
        entry:
          "cooked rice or tortillas, coriander, feta, lime wedges and chopped red onion, to serve (optional)",
        type: "rice",
      },
    ],
    steps: [
      {
        step_id: 1,
        text: "Heat the oil in a shallow saucepan or casserole dish with a lid. Tip in the onions and cook over a medium-low heat for 5 mins until softened. Add the chicken and turn up the heat to medium. Stir in the garlic, a small pinch of sugar, the oregano, cumin seeds and some seasoning. Cook for a couple of minutes, then add the chipotle and cook for a few minutes more. Pour in the passata, 100ml water and add the stock. Season and bring to a simmer.",
      },
      {
        step_id: 2,
        text: "Cover with a lid and cook for 40-50 mins, stirring occasionally until the chicken is tender. Shred the chicken into the sauce using two forks, then stir through the beans. Simmer for 5 mins more, then turn off the heat. Squeeze in the lime juice. Can be kept chilled for three days and frozen for up to two months. Defrost thoroughly and reheat. Serve with rice or tortilla wraps, and some coriander, feta, lime wedges and red onion on the side, if you like.",
      },
    ],
  },

  {
    name: "Slow cooker pulled chicken",
    category: "premium",
    ingredients: [
      {
        entry: "2 tbsp vegetable or rapeseed oil",
        type: "rapeseed oil",
      },
      {
        entry: "10-12 boneless, skinless chicken thighs",
        type: "chicken",
      },
      {
        entry: "2 red onions, halved and sliced",
        type: "onions",
      },
      {
        entry: "2 garlic cloves, crushed",
        type: "garlic",
      },
      {
        entry: "2 tsp paprika",
        type: "paprika",
      },
      {
        entry: "2 tbsp chipotle paste",
        type: "chipotle",
      },
      {
        entry: "250ml passata",
        type: "passata",
      },
      {
        entry: "100g barbecue sauce",
        type: "barbecue sauce",
      },
      {
        entry: "1 tbsp light brown soft sugar",
        type: "sugar",
      },
      {
        entry: "1 lime, juiced",
        type: "lime",
      },
    ],
    steps: [
      {
        step_id: 1,
        text: "Heat the slow cooker to low and heat 1 tbsp oil in a pan. Brown the chicken in batches, transferring it to the slow cooker as you go. Add the remaining oil to the pan and fry the onions for 5 mins, or until just softened, then stir in the garlic and paprika and cook for another minute. Tip into the slow cooker, then swirl 100ml water around the pan and pour this in as well.",
      },
      {
        step_id: 2,
        text: "Add the chipotle, passata, barbecue sauce, sugar and lime juice, then season and stir. Cover and cook for 6-8 hrs until the chicken is really tender. Using two forks, shred the chicken through the sauce. Serve in buns, taco shells, jacket potatoes or over rice, with coriander leaves, chillies and guacamole, if you like.",
      },
    ],
  },

  {
    name: "Five-bean chilli",
    category: "premium",
    ingredients: [
      {
        entry: "1½ tbsp rapeseed oil",
        type: "rapeseed oil",
      },
      {
        entry: "1 onion, sliced",
        type: "onion",
      },
      {
        entry: "2 peppers, sliced",
        type: "peppers",
      },
      {
        entry: "2 garlic cloves, crushed",
        type: "garlic",
      },
      {
        entry: "1 tbsp ground cumin",
        type: "cumin",
      },
      {
        entry: "1 tbsp ground coriander",
        type: "coriander",
      },
      {
        entry: "2 tsp hot smoked paprika",
        type: "paprika",
      },
      {
        entry: "400g can chopped tomatoes",
        type: "tomatoes",
      },
      {
        entry: "400g can mixed beans, drained",
        type: "beans",
      },
      {
        entry: "pinch of sugar",
        type: "sugar",
      },
      {
        entry: "250g brown rice",
        type: "rice",
      },
      {
        entry: "½ small bunch coriander, chopped",
        type: "coriander",
      },
    ],
    steps: [
      {
        step_id: 1,
        text: "Heat the oil in a casserole dish and fry the onion and peppers for 10 mins over a medium heat until the onion is golden brown. Add the garlic and spices, and fry for 1 min. Pour in the tomatoes, both cans of beans, 50ml water, then add the sugar and season. Simmer, stirring regularly, for 15-20 mins until thickened.",
      },
      {
        step_id: 2,
        text: "Meanwhile, cook the rice following pack instructions. Serve the chilli on the rice and scatter over the coriander. Top with a spoonful of soured cream, or guacamole, if you like.",
      },
    ],
  },

  {
    name: "Cheesy celeriac, leek & rosemary gratin",
    category: "free",
    ingredients: [
      {
        entry: "25g butter",
        type: "butter",
      },
      {
        entry:
          "2 leeks, outer layer removed, washed of any grit and sliced into rings",
        type: "leeks",
      },
      {
        entry: "small handful rosemary leaves, roughly chopped",
        type: "rosemary leaves",
      },
      {
        entry: "1 bay leaf",
        type: "leaf",
      },
      {
        entry: "300ml double cream",
        type: "double cream",
      },
      {
        entry: "300ml milk",
        type: "milk",
      },
      {
        entry: "1 celeriac (about 500g), peeled, quartered and thinly sliced",
        type: "celeriac",
      },
      {
        entry: "100g cheddar or gruyère, coarsely grated",
        type: "cheddar",
      },
    ],
    steps: [
      {
        step_id: 1,
        text: "Heat the butter in a saucepan. Add the leeks, rosemary and bay leaf, then cover and cook very gently over a medium-low heat for 15-20 mins until the leeks are soft. Pour over the milk and almost all of the cream, then season and bring to the boil. Remove from the heat and leave to cool a little, then scoop out the bay leaf.",
      },
      {
        step_id: 2,
        text: "Pour a little of the leek mixture into an ovenproof gratin dish. Arrange a layer of celeriac in the dish, then season. Spoon over some more of the leek mixture and scatter with a little cheese. Repeat the process, alternating between layers of the leek mixture, cheese and celeriac slices, then finish with a drizzle of cream and the last of the cheese. Can be prepared up to a day ahead and kept in the fridge.",
      },
      {
        step_id: 3,
        text: "Heat oven to 180C/160C fan/gas 4. Bake the gratin for 1 hr-1 hr 15 mins until the top is golden and the celeriac is tender when poked with a knife. If the gratin is browning a little too much, cover the dish in foil. Can be chilled, then reheated in a microwave or oven on a low heat with a drizzle more cream.",
      },
    ],
  },

  {
    name: "Beetroot & red onion tarte tatin",
    category: "free",
    ingredients: [
      {
        entry: "400g beetroot, cut into wedges",
        type: "beetroot",
      },
      {
        entry: "1 red onion, cut into wedges",
        type: "onion",
      },
      {
        entry: "3 tbsp olive oil",
        type: "olive oil",
      },
      {
        entry: "2 tbsp rice wine vinegar",
        type: "vinegar",
      },
      {
        entry: "2 tbsp soft brown sugar",
        type: "soft brown sugar",
      },
      {
        entry: "2 star anise",
        type: "star anise",
      },
      {
        entry: "flour, for rolling",
        type: "flour",
      },
      {
        entry: "500g block puff pastry (we used vegan Jus-Rol)",
        type: "block puff",
      },
      {
        entry: "1 orange, zested",
        type: "orange",
      },
      {
        entry: "peppery green salad, to serve",
        type: "green salad",
      },
    ],
    steps: [
      {
        step_id: 1,
        text: "Heat oven to 200C/180C fan/gas 6. In a bowl, toss the beetroot and onion in 2 tbsp of the oil, the vinegar and sugar. Add the star anise and season well. Heat the rest of the oil in a large, ovenproof non-stick frying pan, then nestle in the veg so that they cover the surface of the pan. Cover with foil and cook in the oven for 45 mins.",
      },
      {
        step_id: 2,
        text: "On a well-floured surface, roll the pastry to a thickness of 0.5cm and cut out a circle the same size as your frying pan. Carefully take the pan out of the oven, remove the foil and wiggle the beets and onion around in the pan to make a compact layer. Put the pastry on top, tucking it in all around the edges, then return the pan to the oven and bake for 35 mins or until the pastry has puffed up and is a deep golden brown.",
      },
      {
        step_id: 3,
        text: "Slide a palate knife around the edge of the tart, then put a plate on top of the pastry, serving side down. Flip the pan over to turn the tart out onto the plate – be careful not to burn yourself with the handle. Top with the orange zest and a sprinkle of sea salt, then serve with a peppery salad on the side.",
      },
    ],
  },

  {
    name: "Winter warmer hearty risotto",
    category: "free",
    ingredients: [
      {
        entry: "1 medium butternut squash",
        type: "medium butternut squash",
      },
      {
        entry: "2 tbsp olive oil",
        type: "olive oil",
      },
      {
        entry: "pinch of nutmeg, or pinch of cinnamon",
        type: "nutmeg",
      },
      {
        entry: "1 red onion, finely chopped",
        type: "red onion",
      },
      {
        entry: "1 vegetable stock cube",
        type: "vegetable",
      },
      {
        entry: "2 garlic cloves, crushed",
        type: "garlic cloves",
      },
      {
        entry: "500g risotto rice (we used arborio)",
        type: "risotto rice",
      },
      {
        entry: "100g frozen peas",
        type: "frozen peas",
      },
      {
        entry: "320g sweetcorn, drained",
        type: "sweetcorn",
      },
      {
        entry: "2 tbsp grated parmesan (or vegetarian alternative)",
        type: "grated parmesan",
      },
    ],
    steps: [
      {
        step_id: 1,
        text: "Heat oven to 200C/180C fan/gas 6. Peel the butternut squash, slice it in half, then scoop out and discard the seeds.",
      },
      {
        step_id: 2,
        text: "Cut the flesh of the butternut squash into small cubes and put in a mixing bowl. Drizzle 1 tbsp olive oil over the squash, and season with black pepper, and nutmeg or cinnamon. Transfer the squash to a roasting tin and roast in the oven for about 25 mins until cooked through, then set aside.",
      },
      {
        step_id: 3,
        text: "Heat the remaining oil in a large saucepan over a low heat. Add the onion and cover the pan with a tight-fitting lid. Allow the onion to cook without colouring for 5-10 mins, stirring occasionally.",
      },
      {
        step_id: 4,
        text: "In a measuring jug, make up 1.5 litres of stock from boiling water and the stock cube. Stir well until the stock cube has dissolved. When the onion is soft, remove the lid and add the garlic to the onion pan. Leave it to cook for 1 min more.",
      },
      {
        step_id: 5,
        text: "Rinse the rice under cold water. Turn up the heat on the pan and add the rice to the onion and garlic, stirring well for 1 min. Pour a little of the hot stock into the pan and stir in until the liquid is absorbed by the rice.",
      },
      {
        step_id: 6,
        text: "Gradually add the rest of the stock to the pan, a little at a time, stirring constantly, waiting until each addition of stock is absorbed before adding more. Do this until the rice is cooked through and creamy – you may not need all the stock. This should take 15-20 mins. Take the roasting tin out of the oven – the squash should be soft and cooked.",
      },
      {
        step_id: 7,
        text: "Add the squash, peas and sweetcorn to the risotto and gently stir it in. Season to taste. Take the risotto pan off the heat and stir in the Parmesan and herbs. Put the lid back on the pan and let the risotto stand for 2-3 mins before serving.",
      },
    ],
  },
];

// constructor
const Recipes = function(recipes) {
    this.Name = recipes.Name;
    this.Category = recipes.Category;
};

Recipes.create = async (newRecipes, result) => {
  const sql = `INSERT INTO recipes (Name, Category) VALUES (?, ?)`;
  db.run(sql, [newRecipes.Name, newRecipes.Category], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    const sqlNew = `SELECT * from recipes order by Id DESC limit 1`;
    db.get(sqlNew, [], (err, resNew) => {

      getRecipes();
      result(null, { status: true, message: "A new recipes has been craeted.", data: resNew });
    })
  });
};

Recipes.findById = (recipesId, result) => {
  const sql = `SELECT * FROM recipes WHERE Id = ${recipesId}`;
  db.all(sql, [], (err, items) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (items.length > 0) {
      result(null, { status: true, message: "Get recipes with recipes id "+recipesId, data: items, count: items.length });
      return;
    }

    // not found Items with the recipesNo
    result({ kind: "not_found" }, null);
  });
};


Recipes.findByIdWithRole = (recipesId, role, result) => {
  const sql = `SELECT * FROM recipes WHERE Id = ${recipesId} AND Category = '${role}'`;
  db.all(sql, [], (err, items) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (items.length > 0) {
      result(null, { status: true, message: "Get recipes with recipes id "+recipesId, data: items, count: items.length });
      return;
    }

    // not found Items with the recipesNo
    result({ kind: "not_found" }, null);
  });
};

Recipes.findByIdAndUpdate = (recipesId, name, category, result) => {
  const sql = `UPDATE recipes SET Name='${name}', Category='${category}' WHERE Id = ${recipesId};`;
  db.all(sql, [], (err, items) => {
    console.log("items: ", items)
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, { status: true, message: "Update recipes with recipes id "+recipesId });
    return;
  });
};

Recipes.getAllFreeRecipes = (result) => {
  const sql = `SELECT * FROM recipes WHERE Category = "free"`;
  db.all(sql, [], (err, items) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (items.length > 0) {
      result(null, { status: true, message: "Get recipes with catagory is free", data: items, count: items.length });
      return;
    }

    // not found Items with the recipesNo
    result({ kind: "not_found" }, null);
  });
};

Recipes.getAllPremiumRecipes = (result) => {
  const sql = `SELECT * FROM recipes WHERE Category = "premium"`;
  db.all(sql, [], (err, items) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (items.length > 0) {
      result(null, { status: true, message: "Get recipes with catagory is premium", data: items, count: items.length });
      return;
    }

    // not found Items with the recipesNo
    result({ kind: "not_found" }, null);
  });
};

Recipes.deleteById = async (Id, result) => {
  const sql = `DELETE from recipes WHERE Id = (?)`;
  db.run(sql, Id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, { status: err, message: err });
      return;
    }
    
    result(null, { status: true, message: `Recipes - ${Id}. Recipe was deleted successfully!` });
  });
};

const getAllRecipes = (result) => {
  const sql = `SELECT * FROM recipes`;
  db.all(sql, [], (err, recipes) => {
    if (err) {
      console.log("error: ", err);
      return;
    }

    if (recipes.length > 0) {
      result(null, { status: true, message: "Get recipes with catagory", data: recipes, count: recipes.length });
      return;
    }

    console.log("Recipes: ", recipes.length);
  });
}

const initRecipesTable = () => {
  const sql = `CREATE TABLE IF NOT EXISTS recipes (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT,
    Category TEXT,
    CreatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)`;

    db.run(sql, (err, res) => {
        if (err) {
          console.log("error: ", err.message);
          return;
        }
    
        getRecipes();
        console.log("Created Recipes Table");
    });
}

const getRecipes = () => {
  const sql = `SELECT * FROM recipes`;
  db.all(sql, [], (err, recipes) => {
    if (err) {
      console.log("error: ", err);
      return;
    }

    if(recipes.length == 0){
      initialRecipesRecords();
    }

    console.log("Recipes: ", recipes.length);
  });
}

const dropTable = () => {
  const sql = `DROP TABLE recipes`;
  db.all(sql, [], (err, recipes) => {
    if (err) {
      console.log("error: ", err);
      return;
    }

    console.log("Recipes: ", recipes);
  });
}

// dropTable();
initRecipesTable();

const initialRecipesRecords = () => {
  var newArr = [];

  var bar = new Promise((resolve, reject) => {
    initRecipes.forEach(async(element, index, array) => {
      // Create a Recipes
      const recipes = {
          Name: element.name,
          Category: element.category,
      };
  
      // Save Recipes in the database
      await Recipes.create(recipes, async(err, recipesData) => {
        if (err)
          return next(
            new Error(
              err.message || "Some error occurred while creating the Recipes."
            )
          );
              
  
        newArr.push({data: element, recid: recipesData.data.Id})
        if(index === array.length - 1) resolve();
      });
    });
  })

  bar.then(() => {
    getAllRecipes((err, data) => {
      if (err)
      return next(
        new Error(
          err.message || "Some error occurred while getting the Recipes."
        )
      );

      
      data.data.forEach(async(responseData) => {
        initRecipes.forEach(async(elementNew, index, array) => {
          if(elementNew.name === responseData.Name){
            await Ingredients.craeteMulti( elementNew.ingredients, responseData.Id,
              async(err, ingredientsData) => {
                if (err)
                  return next(
                    new Error(
                      err.message ||
                        "Some error occurred while creating the ingredients."
                    )
                  );
        
                if (ingredientsData.status === true) {
                  await Steps.craeteMulti(elementNew.steps, responseData.Id, (err, stepsData) => {
                    if (err)
                      return next(
                        new Error(
                          err.message ||
                            "Some error occurred while creating the steps."
                        )
                      );
        
                    if (stepsData.status === true) {
                      console.log("💚 Successfully created the recipes");
                    }
                  });
                }
              }
            );
          }
          });
      });
    })
  });
};

module.exports = Recipes; 