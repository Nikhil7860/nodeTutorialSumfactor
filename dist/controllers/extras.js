"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const port = 5000;
const posts = [
    {
        title: 'Lorem ipsum',
        content: 'Dolor sit amet'
    }
];
const server = (0, http_1.createServer)((request, response) => {
    console.log("🚀 ~ file: app.ts:54 ~ server ~ request.url:", request.url);
    switch (request.url) {
        case '/posts': {
            if (request.method === 'GET') {
                response.end(JSON.stringify(posts));
            }
            break;
        }
        default: {
            response.statusCode = 404;
            response.end("NO RECORD FOUND");
        }
    }
});
server.listen(port, () => console.log(`Server listening on port ${port}`));
//# sourceMappingURL=extras.js.map