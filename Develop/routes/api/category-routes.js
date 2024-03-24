const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  const data = await Category.create(req.body);
  res.json(data);
  // create a new category
});

router.put('/:id', async (req, res) => {
  const data = await Category.update(req.body, {where: {id: req.params.id}});
  res.json(data);
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
 await Category.destroy({
    where: {
      id: req.params.id,}
  // delete a category by its `id` value
});

res.json('successfully deleted')
})

module.exports = router;
