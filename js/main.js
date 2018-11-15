window.onload = function () {
    var messages = [
            {
                class: 'message message_grey',
                img: 'images/content/message.png',
                text: '...российская типография успешно работает на пластинах <br>\n' +
                    '                                                    FUJIFILM СТ-М',
                link: 'yam.ru/news/65'
            },
            {
                class: 'message',
                text: 'Вы давно перешли? нам подойдет?'
            },
            {
                class: 'message',
                text: 'Все отлично, лазер меньше садится, тиражи держит, проявка чистая.'
            },
            {
                class: 'message',
                text: 'Произведено в Китае?'
            },
            {
                class: 'message',
                text: 'Нет, в Голландии, я был на заводе. Все серьезно.'
            },
            {
                class: 'message',
                text: 'Китай же дешевле?!'
            },
            {
                class: 'message',
                text: 'Как оказалось - нет! Я спокоен, ЯМ Интернешнл помогает'
            }
        ],
        messagesObj = $('.messages');

    function createMessage(item) {
        var message = $('<div>').addClass(item.class);

        if (item.img) {
            var imgDiv = $('<div>').addClass('message__img'),
                img = $('<img/>').addClass('message__img-img').attr('src', item.img);
            imgDiv.append(img);
            message.append(imgDiv);
        }

        var text = $('<div>').addClass('message__text').html(item.text);
        message.append(text);

        if (item.link) {
            var link = $('<div>').addClass('message__link').text(item.link);
            message.append(link);
        }

        return message;

    }

    function appendMessage(count) {
        var messageObj = createMessage(messages[count]);
        messagesObj.append(messageObj);
        messageObj.animate()
        messageObj.addClass('active');
    }

    var count = 0,
        messagesInterval = setTimeout(function tick() {
            if (count < messages.length) {
                appendMessage(count);
                count++;
                var messagesInterval = setTimeout (tick, 3000);
            } else {
                clearTimeout(messagesInterval);
            }
        }, 1000);

    for (key in messages) {

    }
};