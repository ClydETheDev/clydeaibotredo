const { Manager } = require('lavacord');
const nodes = [{
    host: 'ether.lunarnodes.xyz',
    port: 6969,
    password: 'lunarnodes.xyz'
}];

module.exports = async (client) => {
    client.manager = new Manager(client, nodes, {
        user: client.user.id,
        shards: 1,
    });

    client.manager.on('ready', node => console.log(`Node ${node.id} is ready!`));
    client.manager.on('error', (node, error) => console.log(`Node ${node.id} had an error: ${error.message}`));

    await client.manager.connect();
};
