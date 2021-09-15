const { embed } = require('../utils/functions')
const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');

module.exports = class HarnadClient extends AkairoClient {
    constructor(config = {}) {
        super(
            { ownerID: '375993904446701568' },
            {
                allowedMentions: {
                    parse: ['everyone', 'roles', 'users'],
                    repliedUser: false
                },
                partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
                presence: {
                    status: 'online',
                    activities: [
                        {
                            name: 'Administrer le JDR',
                            type: 'PLAYING',
                            url: 'https://github.com/Kaosbeing/FETHRP'
                        }
                    ]
                },
                intents: 32767
            }
        );

        this.commandHandler = new CommandHandler(this, {
            allowMention: true,
            prefix: config.prefix,
            defaultCooldown: 500,
            directory: './src/commands/'
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: './src/listeners'
        })

        this.utils = {
            embed: embed
        }

        this.commandHandler.loadAll();
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();
    }
}