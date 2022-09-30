var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res,next) => {

  models.profesores.findAll({attributes: ["id","nombre","apellido"],
      
      /////////se agrega la asociacion 
      //include:[{model:models.materia, attributes: ["id","nombre"]}]
      ////////////////////////////////

    }).then(profesor => res.send(profesor)).catch(error => { return next(error)});
});

router.post("/", (req, res) => {
  models.profesores
    .create({ nombre: req.body.nombre, apellido: req.body.apellido })
    .then(profesores => res.status(201).send({ id: profesores.id }))
    .catch(error => {
      if (error == "SequelizeUniqueConstraintError: Validation error") {
        res.status(400).send('Bad request: existe otra profesores con el mismo nombre')
      }
      else {
        console.log(`Error al intentar insertar en la base de datos: ${error}`)
        res.sendStatus(500)
      }
    });
});

const findProfesor = (id, { onSuccess, onNotFound, onError }) => {
  models.profesores
    .findOne({
      attributes: ["id", "nombre", "apellido"],
      where: { id }
    })
    .then(profesores => (profesores ? onSuccess(profesores) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
    findProfesor(req.params.id, {
    onSuccess: profesores => res.send(profesores),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = profesores =>
    profesores
      .update({ nombre: req.body.nombre, apellido: req.body.apellido }, { fields: ["nombre","apellido"] })
      .then(() => res.sendStatus(200))
      .catch(error => {
        if (error == "SequelizeUniqueConstraintError: Validation error") {
          res.status(400).send('Bad request: existe otra profesores con el mismo nombre')
        }
        else {
          console.log(`Error al intentar actualizar la base de datos: ${error}`)
          res.sendStatus(500)
        }
      });
    findProfesor(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = profesores =>
    profesores
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findProfesor(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;
