

const net = require('net');

const server = net.createServer(conn => { console.log("New Client"); conn.on('data', data => {
        // conn.write();
        console.log("Client: " + data + "\n");
        switch (data)
        {
            case "bruh\n":
                conn.write("lmao");

            default:
                conn.write("lmaaasdasddas")
        };


    });
    conn.on('end', () => {
        console.log("client leave :(");
    });
});
server.listen(9090);
