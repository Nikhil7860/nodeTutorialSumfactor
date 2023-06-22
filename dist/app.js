"use strict";
// import express, { Request, Response, NextFunction, Application, ErrorRequestHandler } from 'express';
// import { Server } from 'http';
// import createHttpError from 'http-errors';
// import { config } from 'dotenv';
// config();
Object.defineProperty(exports, "__esModule", { value: true });
// import cors from 'cors'
// const app: Application = express();
// // app.use(cors());
// // app.options('*', cors());
// // app.use(function (req, res, next) {
// //     res.header("Access-Control-Allow-Origin", "*");
// //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// //     next();
// // });
// // For parsing application/json
// // app.use(express.json());
// // // For parsing application/x-www-form-urlencoded
// // app.use(express.urlencoded({ extended: true }));
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.status(200).send("Hello world")
// })
// // app.use((req: Request, res: Response, next: NextFunction) => {
// //     next(new createHttpError.NotFound())
// // })
// // const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
// //     res.status(err.status || 500)
// //     res.send({
// //         status: err.status || 500,
// //         message: err.message
// //     })
// // }
// // app.use(errorHandler)
// const port: number = Number(process.env.PORT)
// const server: Server = app.listen(port, () => console.log(`server is running at port ${port}`))
const http_1 = require("http");
const port = 7800;
const server = (0, http_1.createServer)((request, response) => {
    switch (request.url) {
        case '/name': {
            if (request.method === 'GET') {
                response.end({ name: "Harry" });
            }
            break;
        }
        default:
            response.statusCode = 404;
            response.end("Can't finf the url");
    }
});
server.listen(port, () => console.log(`server is running at ${port}`));
//# sourceMappingURL=app.js.map