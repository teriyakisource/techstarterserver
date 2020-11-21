console.log("running some stuff")

const net = require('net');

const server = net.createServer(conn => { console.log("New Client"); conn.on('data', data => {
    conn.write(data + "\n");
    console.log("Client: " + data);
});
conn.on('end', () => { console.log("client leave :(");
    });
});
server.listen(9090);
