const { Router } = require("express");
const bookRouter = require("../book");

const routes = Router();

routes.use('/book', bookRouter);

export default routes;