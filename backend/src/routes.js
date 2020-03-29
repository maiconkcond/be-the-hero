const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();


/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do Back-end
 * POST: Inserir uma informação do Back-end
 * PUT: Alterar uma informação do Back-end
 * DELETE: Deletar uma informação do back-end 
 */

 /**
* Tipos de parâmetros:
* 
* Query Params: ParÂmentos nomeados enviados na rota após "?" (Filtros, Paginação)
* Route Params: Parâmetros utilizados para indentificar recursos
*/


/**
 * SQL: MySQL, SQLite, PostgreSQL, SQL Server
 * NoSQL: MongoDB, CouchDB, etc
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users) - KNEX.JS
 */

routes.post('/session', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)
module.exports = routes;