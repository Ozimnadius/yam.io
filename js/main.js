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
                text: 'Как оказалось - нет! Я спокоен, ЯМ Интернешнл помогает',
                scale: {
                    timeout: 1000
                },
                logo: {
                    class: 'message__logo',
                    src: 'images/content/logo2.png',
                    timeout: 2500
                }
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
        var messageObj = createMessage(messages[count]),
            message = messages[count];

        messagesObj.append(messageObj);
        messageObj.animate();
        messageObj.addClass('active');

        if (message.scale) {
            setTimeout(function () {
                messageObj.addClass('scale');
            }, message.scale.timeout);
        }

        if (message.logo) {
            var logo = $('<div>').addClass(message.logo.class),
                logoImg = $('<img/>').attr('src', message.logo.src);

            logo.append(logoImg);

            setTimeout(function () {
                messagesObj.append(logo);
                logo.animate();
                logo.addClass('active');
            }, message.logo.timeout);
        }
    }

    var iterratorInterval = setTimeout(function tik() {

        var count = 0,
            messagesInterval = setTimeout(function tick() {
                if (count < messages.length) {
                    appendMessage(count);
                    count++;
                    var messagesInterval = setTimeout(tick, 3000);
                } else {
                    clearTimeout(messagesInterval);

                    setTimeout(function () {
                        messagesObj.html('');
                        var iterratorInterval = setTimeout(tik, 1000);
                    }, 4000);
                }
            }, 1000);

    }, 0);

};