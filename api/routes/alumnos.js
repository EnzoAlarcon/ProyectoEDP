var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res,next) => {

  models.alumno.findAll({attributes: ["id","nombre","apellido","telefono"],
      
      /////////se agrega la asociacion
      include:[{as: 'Carrera-Relacionada', model:models.alumno_carrera, attributes:['id_carrera'], 
      include:[{as: 'Carrera', model:models.carrera, attributes: ['nombre']}]}]
      ////////////////////////////////

    }).then(alumnos => res.send(alumnos)).catch(error => { return next(error)});
});

router.post("/", (req, res) => {
  const alumno = models.alumno
    .create({ nombre: req.body.nombre, apellido: req.body.apellido, telefono: req.body.telefono })
    .then(alumno => res.status(201).send({ id: alumno.id }))
    .catch(error => {
      if (error == "SequelizeUniqueConstraintError: Validation error") {
        res.status(400).send('Bad request: existe otro alumno con el mismo nombre')
      }
      else {
        console.log(`Error al intentar insertar en la base de datos: ${error}`)
        res.sendStatus(500)
      }
    });
  models.alumno_carrera.create({id_alumno: alumno.id, id_carrera: req.body.id_carrera}); // Falta insertar correctamente la columna id_alumno
});

const findAlumno = (id, { onSuccess, onNotFound, onError }) => {
  models.alumno
    .findOne({
      attributes: ["id","nombre","apellido","telefono"],
      where: { id }
    })
    .then(alumno => (alumno ? onSuccess(alumno) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
    findAlumno(req.params.id, {
    onSuccess: alumno => res.send(alumno),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = alumno =>
  alumno
      .update({ nombre: req.body.nombre, apellido: req.body.apellido, telefono: req.body.telefono }, { fields: ["nombre","apellido","telefono"] })
      .then(() => res.sendStatus(200))
      .catch(error => {
        if (error == "SequelizeUniqueConstraintError: Validation error") {
          res.status(400).send('Bad request: existe otro profesor con el mismo nombre')
        }
        else {
          console.log(`Error al intentar actualizar la base de datos: ${error}`)
          res.sendStatus(500)
        }
      });
    findAlumno(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = alumno =>
  alumno
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findAlumno(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;
