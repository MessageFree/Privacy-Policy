/*global require module*/

'use strict';

var express = require('express');
var router = express.Router();
var db = require('../db/massages');

var notImplemented = (req, res) => {
  res.send(req.method + ' massages is not implemted');
};

router.get('/', db.getMassages,  (req, res) => {
  res.render('massages/index', {massages: res.massages});
});

router.post('/', db.createMassage, (req, res) => {
  res.redirect(`massages/${res.massages[0].id}`);
});

router.get('/new', (req, res) => {
  res.render('massages/new', {massage: {name: ''}});
});

router.get('/:id', db.getMassage, (req, res) => {
  res.render('massages/show', {massage: res.massages[0]});
});

router.get('/:id/edit', db.getMassage, (req, res) => {
  res.render('massages/edit', {massage: res.massages[0]});
});

router.put('/:id', db.editMassage, (req, res) => {
  res.status(303).redirect(`/massages/${req.params.id}`);
});

router.delete('/:id', db.deleteMassage, (req, res) => {
  res.redirect('./');
});

module.exports = router;
