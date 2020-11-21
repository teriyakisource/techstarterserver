

const net = require('net');

const server = net.createServer(conn => { console.log("New Client"); conn.on('data', data => {
        // conn.write();
        console.log("Client: " + data + "\n");

        if(data.includes("bruh"))
        {
            console.log("YES!!!")
            conn.write("lmao")
        }




    });
    conn.on('end', () => {
        console.log("client leave :(");
    });
});
server.listen(9090);
