"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: '3.7.31.207',
    user: 'mojo',
    password: 'SPICE$#WAY$$RAI@#',
    database: 'stagspicescreen',
});
connection.connect((error) => {
    if (error) {
        console.error('Failed to connect to the database:', error);
        return;
    }
    console.log('Connected to the database.');
});
const sqlQuery = 'SELECT * FROM your_table_name';
connection.query(sqlQuery, (error, results) => {
    if (error) {
        console.error('Error executing the query:', error);
        return;
    }
    console.log('Query results:', results);
});
connection.end((error) => {
    if (error) {
        console.error('Error closing the connection:', error);
        return;
    }
    console.log('Connection closed.');
});
//# sourceMappingURL=connect.js.map