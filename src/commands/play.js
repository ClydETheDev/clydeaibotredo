const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
    name: 'play',
    description: 'Play a song from YouTube',
    async execute(message, args) {
        const query = args.join(' ');
        if (!query) return message.channel.send('You need to provide a song name or URL!');

        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('You need to join a voice channel first!');

        const node = message.client.manager.idealNodes[0];
        const player = message.client.manager.players.get(message.guild.id);

        if (!player) {
            // Create player if it doesn't exist
            const newPlayer = await message.client.manager.join({
                guild: message.guild.id,
                channel: channel.id,
                node: node.id,
            });
            newPlayer.on('error', console.error);
            newPlayer.on('end', () => message.client.manager.leave(message.guild.id));
            message.client.manager.players.set(message.guild.id, newPlayer);
        }

        const searchResult = await node.rest.resolve(query);
        if (!searchResult || !searchResult.tracks.length) return message.channel.send('No tracks found!');

        const track = searchResult.tracks[0];
        player.queue.add(track);
        if (!player.playing && !player.paused && !player.queue.length) player.play();

        message.channel.send(`Now playing: ${track.info.title}`);
    },
};
