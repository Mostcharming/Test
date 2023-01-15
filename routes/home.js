const { data } = require('../bincom_test_db');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const pollingUnitResults = data.announced_pu_results;
  const pollingUnitUniqueID = '8';

  const results = pollingUnitResults.filter(
    (p) => p.polling_unit_uniqueid === pollingUnitUniqueID
  );
  const { length: count } = results;

  res.render('index', { results, pollingUnitUniqueID, count });
});

module.exports = router;
