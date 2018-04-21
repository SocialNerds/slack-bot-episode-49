/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/

module.exports = function(controller) {

    controller.hears(['^hello$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, "Hi there, you're on workspace: " + message.team)
    });

    controller.hears(['form'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, {
            attachments:[
                {
                    title: 'Do you want to interact with my buttons?',
                    callback_id: '123',
                    attachment_type: 'default',
                    actions: [
                        {
                            "name":"yes",
                            "text": "Yes",
                            "value": "yes",
                            "type": "button",
                        },
                        {
                            "name":"no",
                            "text": "No",
                            "value": "no",
                            "type": "button",
                        }
                    ]
                }
            ]
        })
    });

    controller.on('interactive_message_callback', function(bot, message) {
        bot.replyInteractive(message, 'interactive message :O'
        );
    });
};
