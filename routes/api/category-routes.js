const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll(
    {
      include: {
        model: Product,
        attributes: ['product_name']
      }
    }
  )
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['category_id']
    }
  })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404).json({ message: 'No Category found with that ID.' });
        return;
      }
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404).json({ message: 'No Category found with that ID.' });
        return;
      }
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

//---------------------------------old-code before help-----------------------------------------

// const router = require('express').Router();
// const { Category, Product } = require('../../models');


// router.get('/', (req, res) => {
//   Category.findAll(
//     {
//     include: Product
//   }
//   ).then(cats => { 
//     res.json(cats);
//   });
// });

// router.get('/:id', (req, res) => {
//   Category.findAll({
//     where: {
//       id: req.params.id
//     },
//     include: Product
//   }).then(cat => {
//     res.json(cat);
//   });
// });

// router.post('/', (req, res) => {
//   Category.create(
//     {
//       category_name: req.body.name
//     }
//   ).then(new_cat => {
//     res.json(new_cat)
//   })
// });

// router.put('/:id', (req, res) => {
//   Category.update({
//     category_name: req.body.name
//   },
//   {
//     where: {
//       id: req.params.id
//     },
//   }).then(upcat => {
//     res.json("category updated")
//   })
// });

// router.delete('/:id', (req, res) => {
//   Category.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(del => {
//     res.json("successfully deleted category")
//   })
// });

// module.exports = router;
