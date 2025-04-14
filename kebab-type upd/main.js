"use strict";

const russianTexts20 = [
  "Люля-кебаб - это сочные мясные шашлычки, приготовленные на гриле. Они подаются с лавашем,  свежими овощами и ароматным томатным соусом с зеленью.",
  "Шашлык - популярное блюдо, состоящее из маринованного мяса, нанизанного на шампуры и жареного на углях. Отлично подходит для пикников, природы.",
  "Долма - это виноградные листья, фаршированные с рисом и мясом. Это блюдо имеет насыщенный вкус и часто подается с соусом.",
  "Утром я наслаждаюсь чашкой горячего кофе. Его аромат наполняет мою комнату, дом, придавая мне бодрость и энергию на весь день.",
  "Зимний вечер - время уюта и тепла. Снег мягко падает за окном, а я читаю любимую книгу под теплым пледом.",
  "Летний дождь приносит свежесть, комфорт и прохладу. Капли стучат по крыше, а воздух наполняется приятным ароматом влажной земли и травы.",
  "Солнечный день радует всех своим теплом. Люди гуляют в парке, дети играют на улице, а природа расцветает яркими красками лета.",
  "Вечером я очень люблю гулять по нашему городу. Уличные огни так сверкают, музыка звучит, а атмосфера наполняется романтикой и спокойствием.",
  "Путешествия расширяют горизонты и открывают нам новые культуры разных народов. Каждая страна дарит уникальные впечатления и незабываемые воспоминания о приключениях.",
  "Друзья - это те, кто поддерживает нас в самые трудные времена. Важно ценить дружбу и делиться радостью и горестями вместе.",
];

const englishTexts20 = [
  "The ocean is vast and mysterious, home to countless species. Its waves crash against shores, creating a soothing, rhythmic sound.",
  "On a rainy day, droplets fall from the sky. People often seek shelter, enjoying warm drinks and cozy blankets indoors.",
  "A summer picnic is a delightful experience. Friends gather outdoors, sharing delicious food, laughter, and stories under the warm sun.",
  "Reading a book transports you to different worlds. Each page reveals new adventures, characters, and emotions that captivate your imagination.",
  "Traveling abroad opens your mind to diverse cultures. Exploring new places enriches your understanding of the world and creates memories.",
  "Baking cookies fills the home with aromas. Mixing ingredients together creates joy, and sharing them brings happiness to everyone involved.",
  "Gardening is a rewarding hobby that connects you with nature. Planting seeds and watching them grow nurtures  appreciation for life.",
  "A winter evening is magical with snowflakes falling. Warm lights glow in homes, creating a cozy atmosphere perfect for relaxation.",
  "Listening to music can uplift your spirits, evoke deep emotions. It transcends language barriers and connects people through shared experiences.",
  "Learning a new language opens doors to communication. It enhances cultural understanding and provides opportunities for travel, friendship, personal growth.",
];

const russianEnglishTexts20 = [
  "В modern мире ecology beginning important темой. Устойчивое развитие и careful отношение к ресурсам planet – это not trend, а необходимость.",
  "Искусство reflects общество, его mood and experiences. Современные artists часто обращаются к current topics, создавая dialogues и осмысляя important issues.",
  "Развитие technologies меняет communication and education. Virtual реальность и искусственный intelligence открывают new horizons, но также требуют обсуждения ethical issues.",
  "Для людей психическое health важно in stress cases. Opened обсуждение и access к услугам contribute well-being и более здоровому обществу.",
  "Известно, что globalization создает interdependence стран. Cooperation в борьбе against changes климата important, но конфликты require diplomatic подхода и взаимопонимания.",
  "Дружба и familiar values are основой for крепких отношений. Совместные мгновения с близкими и friends позволяют exchange ценностями and experience.",
  "Известное that friendship адаптируется к жизненным circumstances, что important for семейных values. Она requires времени и усилий, но gives freedom.",
  "Artificial intelligence становится неотъемлемой part our жизни. Automation процессов повышает efficiency but также raises опасения по поводу job рабочих places.",
  "Каждый of us can внести own вклад в защиту environmental среды. Sinple действия can значительно reduce негативное воздействие на nature.",
  "На today охранение biodiversity - еще одна important задача. Destruction естественных сред обитания leads к вымиранию многих kinds plants и animals.",
];

const russianTexts40 = [
  "Шашлык это не просто армянское традиционное блюдо, а ритуал, объединяющий людей. Мясо, маринованное в специях, обжаривается на углях, наполняя воздух аппетитным ароматом. Каждый кусочек - это история дружбы и праздника, где смех и разговоры звучат под звуки трескающегося огня и веселья.",
  "Но Раскольникову вдруг стало невыносимо тяжело, как никогда ещё. Всё разом нахлынуло на него: и исчезнувшая надежда, и заточение на много лет в каторге, и разлука с теми, кого он любил… Вдруг он увидел Соню, стоящую прямо рядом с ним.",
  "Лес весной наполняется жизнью. Почки на деревьях распускаются, а цветы пробиваются сквозь землю, радуя глаз яркими красками. Птицы возвращаются с юга. Прогулка по лесу дарит нам ощущение спокойствия и умиротворения, позволяя забыть о повседневных заботах и насладиться истинной красотой природы.",
  "Хинкали - грузинское блюдо, представляющее собой большие пельмени с мясной начинкой и бульоном внутри. Их готовят из тонкого теста, подают горячими, посыпанными черным перцем. Хинкали едят руками, откусывая верхушку и выпивая бульон. Это не только вкусно, но и символ грузинского гостеприимства.",
  "В тихом городке, среди зелёных холмов, жил художник. Он создавал по истине удивительные, уникальные картины, запечатлевая красоту природы. Каждый штрих его кисти отражал душу. Люди приходили со всех концов света, чтобы увидеть его работы и вдохновиться его талантом и страстью.",
  "Чтение книги - это путешествие в другой мир. Каждая страница открывает новые горизонты, погружая в захватывающие истории и судьбы героев. Книги учат нас сопереживать, мечтать и размышлять о жизни. Они становятся верными спутниками в одиночестве, источником вдохновения для творчества и самопознания.",
  "На старом чердаке стояла забытая книга. Пыльный переплет скрывал множество историй о интересных, захватывающих приключениях и любви. Открыв её, читатель погрузился в мир фантазий, где герои боролись с трудностями и искали своё счастье. Каждая страница дарила новые эмоции и вдохновение.",
  "Вечером, когда город погружался в тишину, одинокая среди всего неба звезда сияла ярче всех. Она напоминала о надежде и мечтах, которые всегда живут в сердцах людей. Каждый мог заглянуть в её свет и найти утешение в своих мыслях и желаниях.",
  "Приготовление люля-кебаба требует мастерства и терпения. Мясо выбирают с жирком для сочности, а специи добавляют особый вкус. На столе его обычно сопровождают соусом и зеленью. Это блюдо идеально подходит для дружеских встреч и семейных праздников, создавая атмосферу уюта и радости.",
  "Летний вечер наполнил воздух ароматом цветов и свежей травы. Дети играли на улице, смеясь и радуясь этой жизни. Солнце медленно садилось за горизонт, окрашивая небо в яркие, теплые оттенки. Этот момент был полон счастья, тепла и беззаботности, оставляя приятные воспоминания.",
];

const englishTexts40 = [
  "As autumn arrives, trees transform into vibrant hues of red, orange, and yellow. Leaves crunch underfoot, creating a symphony of sound. The crisp air invigorates the senses, inviting long walks, cozy evenings by the fire with warm drinks and blankets.",
  "Nestled on a quiet, leafy street, the cafe exudes warmth and charm. The aroma of freshly brewed coffee fills the air, mingling with sweet pastries. Patrons chat softly, immersed in their books. It’s a perfect spot for relaxation and inspiration.",
  "Under a vast, shimmering expanse of stars, the night sky captivates dreamers. Each twinkling light tells a story of distant worlds. The cool breeze whispers secrets, while constellations guide wandering thoughts. It’s a moment of wonder and reflection for all.",
  "Each morning begins with a gentle, soothing alarm, signaling the start of a new, promising day. Stretching and yawning, I brew coffee, savoring its rich aroma. Breakfast follows, fueling my body. With a smile, I embrace the day’s possibilities ahead.",
  "Gardening is a therapeutic, rewarding journey, connecting individuals to nature. Planting seeds and nurturing them fosters patience and care. As flowers bloom and vegetables grow, joy fills the heart. It’s a rewarding experience that brings beauty and sustenance to life.",
  "Rain patters softly against the windowpane, creating a soothing, gentle melody. The world outside transforms into a watercolor painting, blurred and dreamy. Cozy blankets invite snuggles on the couch, while hot tea warms hands. It’s a perfect day for introspection.",
  "As dusk falls, vibrant city lights flicker to life, illuminating bustling streets. The energy is palpable; laughter and music fill the air. People gather in parks and restaurants, sharing stories and experiences. The vibrant atmosphere creates unforgettable memories for all.",
  "True friendship transcends time and distance, creating unbreakable bonds between souls. Shared laughter, tears, and adventures weave a beautiful tapestry of memories. True friends stand together, offering unwavering support and love that enriches life’s journey immeasurably, making it truly worthwhile.",
  "Winter blankets the landscape in pure white snow, transforming it into a magical wonderland. Children laugh as they build snowmen and engage in snowball fights. Warm cocoa awaits indoors, offering comfort after a day of adventures outside, creating cherished memories.",
  "The ocean stretches endlessly, its waves crashing rhythmically against the shore. Sunlight dances on the water's surface, creating a shimmering spectacle. Seagulls glide gracefully overhead, while children joyfully build sandcastles. The salty breeze refreshes the spirit, inviting all to explore.",
];

const russianEnglishTexts40 = [
  "Сегодня we посетили the park, где много зелени и flowers. The sun was shining brightly, и мы принесли с собой snacks and drinks. Мы spent the whole day playing games, enjoying nature и общались with friends. It was отличный день!",
  "Спорт играет so important роль в обществе, способствуя физическому развитию и social interaction. Участие в team sports, таких как футбол и basketball, enhances teamwork skills. Кроме того, регулярные тренировки помогают prevent diseases и promote a healthy lifestyle среди our молодежи.",
  "В modern мире популярна мысль, что new формы медиа always вызывали moral панику, например, the printing press, газеты, television - все это когда-то осуждалось как threat умственным способностям и moral устоям потребителей. То же самое applies и к электронным technologies.",
  "Интернет - один из greatest инструментов, that у нас есть на сегодняшний day. Миллиарды бит of information, неограниченное number способов подключения, games для просмотра, videos для изучения. There is что-то для everyone. Сейчас мы чаще, чем когда-либо, communicate на Вконтакте.",
  "Исследования show, что люди, которые value хобби, live дольше, имеют крепкие браки и better приспосабливаются к new образу life. Хобби plays важную role в благополучии many людей. Например, в Великобритании, около 7 million of женщин заинтересованы в knitting или sewing.",
  "Фигурное катание, undoubtedly, особый вид sport. Он славится artistic beauty. Есть три types фигурного катания: singles, парное и ice dance. Очень важны mandatory движения. It can be said, что такие движения просто necessary. Участники также perform движения по своему choice.",
  "Люди engage in спортом по разным reasons. Одни бегают по mornings трусцой, чтобы stay fit. Другие отправляются hiking подышать свежим air или почувствовать themselves один на едине с nature. Третьи тренируются, striving to обогнать rivals и испытать упоительную joy победы.",
  "Китай is третья по величине country мира. Эта страна is located в Центральной и Eastern Asia и граничит with many странами. С востока is washed by такими водами как Желтое, East China Sea и Южно-Китайское море of the Pacific Ocean.",
  "Все countries of the world стремятся взаимодействовать with each other. В соответствии with this возрастает importance иностранного language для преодоления барьеров в understanding. Знание foreign languages открывает doors не только для an entire nation, но и для an individual гражданина.",
  "Этим утром я заварил strong coffee, проверил my emails и начал готовиться к urgent project. В lunchtime I встретил друга, он предложил join его own startup — идея sounded гениально! Вечером устроили cozy movie night с pizza. День был truly special!",
];

const russianTexts60 = [
  "Хинкали часто подают с различными соусами и зеленью, что придаёт им ещё больше вкусовых оттенков. В Грузии существует множество уникальных и вкусных вариаций хинкали в зависимости от региона. Их можно готовить не только с мясом, но и с овощами или сыром. Это вкусное блюдо символизирует гостеприимство и богатство грузинской кухни, вызывая у всех, кто его пробует, неподдельное удовольствие и наслаждение.",
  "Время перемен, когда природа одевается в золотые и багряные цвета - осень. Листья падают с деревьев, создавая под ногами хрустящую ковровую дорожку. Воздух наполняется свежестью, а вечера становятся уютнее и теплее. Люди начинают готовиться к зиме, запасаясь урожаем и теплыми вещами, создавая домашнюю атмосферу. Это время глубоких размышлений и ожидания новых начинаний, когда каждый день приносит что-то особенное и волшебное.",
  "Люди, которые делают нашу жизнь полноценной и радостной - это настоящие друзья. Они поддерживают в трудные времена, разделяют счастье и создают незабываемые моменты. Настоящая дружба основана на доверии, понимании и взаимной поддержке. Важно ценить эти отношения, ведь они приносят в нашу жизнь тепло и свет. Друзья это семья, которую мы выбираем сами, с которыми можем делиться своими мечтами и переживаниями.",
  "Универсальный язык, который объединяет людей по всему миру - это музыка. Она способна передавать эмоции, рассказывать истории и вдохновлять на действия. Каждый жанр имеет свою уникальную атмосферу: от классики до рока, от джаза до поп-музыки. Музыка сопровождает нас в радости и горе, становится саундтреком нашей жизни и помогает выразить то, что словами не всегда удается передать. Она объединяет души людей.",
  "Волшебство зимы приходит со снегом, который покрывает землю белым одеялом. Каждый снежный день приносит радость детям и взрослым: снежки, снежные крепости и катание на санках. Зима преображает привычные пейзажи, создавая атмосферу сказки и волшебства. Хруст под ногами и холодный воздух делают прогулки особенно приятными. Снег вызывает ностальгию по детству и дарит ощущение уюта в зимние вечера с горячим шоколадом.",
  "Ключи к другим мирам открывают книги. Они позволяют увидеть истории, которые могут изменить восприятие реальности. Чтение развивает воображение, обогащает словарный запас и помогает лучше понимать  мир. Каждая книга - это бесценный опыт, который стоит пережить и исследовать. В литературе мы можем найти утешение, вдохновение и ответы на сложные вопросы жизни. Чтение также развивает критическое мышление и расширяет горизонты нашего понимания.",
  "Способ увидеть мир и узнать что-то новое о себе - это путешествия. Каждая поездка приносит уникальные впечатления, знакомства и открытия. Мы исследуем новые культуры, пробуем экзотическую еду и наслаждаемся красотой природы. Путешествия обогащают душу, расширяют горизонты и дарят незабываемые воспоминания. Именно они делают нашу жизнь ярче, насыщеннее и полнее, наполняя её смыслом, радостью и новыми эмоциями, а также удивительными моментами.",
  "Источник жизни на Земле -  это солнце. Его лучи согревают, наполняют энергией, дарят радость. Каждое утро начинается с восхода, который символизирует новые возможности и надежды. Солнечные дни вдохновляют на активность: прогулки на свежем воздухе, занятия спортом или наслаждение природой. Солнце напоминает нам о том, как важно ценить каждый момент жизни и делиться счастливыми мгновениями с близкими людьми и родными сердцу.",
  "Не просто блюдо, а целый ритуал, шашлык объединяет людей. Мясо маринуется в специях, луке и уксусе, а затем готовится на открытом огне. Запах жареного мяса манит всех вокруг, вызывая аппетит и радость. В компании друзей, с ароматом дыма и свежими овощами, шашлык становится символом теплых встреч и радости. Каждый кусочек - это воспоминание о лете, дружбе и незабываемых моментах вместе.",
  "Восточное лакомство люля-кебаб покоряет своим вкусом, ароматом. Мясной фарш, тщательно смешанный с луком, зеленью и специями, формируется на шампурах и жарится на углях. Сочный, аппетитный и ароматный, он подается с лавашем, свежими овощами, соусами и зеленью. Это не только еда, но и часть культурной традиции, символизирующая гостеприимство и радушие восточных народов, объединяющая людей за общим столом. Каждый кусочек дарит наслаждение",
];

const englishTexts60 = [
  "In the opulent world of East Egg, Jay Gatsby throws extravagant parties, yearning for the love of Daisy Buchanan. His grand mansion echoes with laughter, yet his heart remains empty. The green light across the bay symbolizes his unattainable dreams. As the summer sun sets, the illusion of wealth fades, revealing the stark reality of longing, heartache, and profound loss.",
  "The sun rose over the horizon, casting golden rays on the soft sand. Families gathered, children laughing as they built intricate sandcastles. Waves crashed rhythmically, inviting everyone to swim. Seagulls circled overhead, searching for scraps of food. As the day progressed, the sky turned a beautiful orange, signaling the end of a perfect beach day filled with joy and laughter.",
  "Raindrops tapped against the window, creating a soothing melody. Inside, the warm aroma of freshly brewed coffee filled the air. A cozy blanket wrapped around me as I settled into my favorite chair. Outside, puddles formed on the streets, reflecting the gray sky. It was the perfect afternoon for reading a good book and enjoying the peaceful ambiance of home.",
  "Autumn arrived with vibrant colors painting the landscape. Leaves transformed into shades of red, orange, and yellow, creating a picturesque scene. The crisp air carried the delightful scent of pumpkin spice and cinnamon. Children jumped joyfully into piles of leaves, laughter echoing through the neighborhood. As daylight faded, bonfires lit up cozy backyards, bringing warmth and togetherness to chilly evenings.",
  "Stepping into the old library felt like entering a different era. Dusty books lined the shelves, each holding stories from the past. The scent of aged paper surrounded me as I explored ancient texts. I imagined the lives of those who once read these words. This sanctuary of knowledge reminded me of the importance of preserving history for future generations.",
  "Music has an incredible ability to evoke emotions and memories. A single note can transport you back in time and reminding you of special moments. Whether it’s a soothing melody or an upbeat rhythm, music unites people across cultures and generations. It serves as a universal language, expressing feelings that words often cannot capture, making life richer and more vibrant.",
  "Kindness is a powerful force that can change lives and people. A simple smile or a helping hand can brighten someone’s day immensely. In a world often filled with negativity, acts of kindness create ripples of positivity and hope. By choosing compassion over indifference, we can foster connections and build a more supportive community where everyone feels valued and understood.",
  "The night dark sky sparkled with countless stars, each telling its own story. I lay on the cool grass, mesmerized by the vastness above me. Constellations came to life as I traced their shapes with my finger. The silence was profound, broken only by the occasional rustle of leaves. In that moment, I felt connected to something greater than myself.",
  "In the kitchen, ingredients danced together in harmony. Chopping vegetables released fresh aromas, while spices added warmth to the dish. As I stirred the pot, memories flooded back - family gatherings filled with laughter and delicious food. Cooking became an art form, a way to express love and creativity. The final dish brought smiles to everyone’s faces at the table.",
  "While walking through the park, I stumbled upon an old friend I hadn’t seen in years. We exchanged surprised glances before rushing to warmly embrace each other. Laughter filled the air as we reminisced about our school days and shared joyful stories of our lives. Time seemed to stand still, reminding us of the beauty of friendship and unexpected reunions.",
];

const russianEnglishTexts60 = [
  "Утром я проснулся и сразу begin готовиться к meeting. После этого я went в кафе взять cup of coffee и relax. Я встретил своего friend, который рассказал о новом проекте, над которым он работает. It sounded really interesting! Потом мы together прогулялись по парку, потому что погода была perfect. Вечером я вернулся домой, включил любимый сериал и finally смог chill.",
  "Утром я заварил strong coffee, проверил emails и начал готовиться к urgent project. В lunchtime встретил друга, он предложил join его startup - идея sounded гениально! После work поехали в mall за laptop, а вечером устроили movie night с pizza и popcorn. Всё это сделало день truly special и зарядило energy на завтра! Мы обсудили планы на будущее и мечты.",
  "Сегодня включил favorite playlist, взял fresh juice и начал готовить creative презентацию. В офисе обсудили tricky вопрос с team, выпили smoothie и brainstormились над новым design. После работы заехали в кафе - там попробовали vegan burger, который был surprisingly вкусный! Вечером дома устроил digital detox: читал book, медитировал и finally почувствовал inner peace. Это был день, полный inspiration и радости!",
  "Сегодня на lecture обсудили modern подходы к learning: как digital tools меняют education. После seminar мы с группой решили создать interactive проект - mix технологий и creativity. Преподаватель предложил использовать AI для анализа data, чтобы сделать study process более effective. Это вдохновило нас на deep research и teamwork! Образование теперь — это не просто books, а space для экспериментов и growth.",
  "Современные исследования подтверждают, что balanced diet с оптимальным ratio белков, жиров и carbs снижает риск chronic diseases. Включение superfoods и fermented products улучшает gut microbiome, усиливая nutrient absorption. Мониторинг caloric intake через mobile apps помогает поддерживать metabolic balance, а замена processed foods на whole foods минимизирует inflammation. Здоровое питание - это synergy нутрициологии, биохимии и personalized подходов для long-term wellness.",
  "Вчера на встрече мы discussed важность teamwork в modern бизнесе. The speaker shared insights about effective communication strategies. Мы также рассмотрели performance the most успешных проектов, где collaboration played a key role. Каждый member представил his own идеи, что сделало сессию очень productive. В конце we договорились о планах на future, чтобы improve our процессы и approach общих aims.",
  "На выходных я have visited выставку contemporary art in the center of города. Artists showcased their unique perspectives through various mediums. Это было вдохновляюще! I особенно remembered одну инсталляцию, которая used bright light и loud звук. Она created атмосферу, which погружала зрителя в another world. We discussed with my друзьями, как искусство влияет на наше perception реальности и emotions.",
  "On выходных I decided to try новое хобби - фотографию. Took камеру и отправился на прогулку to the park. Nature nearby была великолепной, и я took a lot снимков. Every кадр передавал atmosphere момента.  Later I обработал photos shared ими with my друзьями. Они rated my effort, и это gave me confidence продолжать improve свои skills in this great области.",
  "В our university have been held конференция по экологии. Ученые с all around the world обсуждали important issues, related с климатом и saving природы. I was впечатлен выступлениями experts и их решениями для устойчивого developing. This event such inspirated меня на участие volunteer projects по охране окружающей environment. Я realized how important to care about планете для наших next generations.",
  "Yesterday все my troubles seemed так far, мы with friends организовали пикник на nature. We приготовили delicious food, took пледы и go к озеру. Atmosphere was расслабляющей, и we enjoyed communicating, играми и fresh oxygen. Sun shines ярко, а вокруг царила harmony. This day remembered me about важности проводить время с близкими, creating незабываемые memories и наслаждаясь simple радостями жизни.",
];

function newTextGenerate(textsArray) {
  const russianRadio = document.querySelector("#russian");
  const englishRadio = document.querySelector("#english");
  const russianEnglishRadio = document.querySelector("#russian-english");

  const words20Radio = document.querySelector("#words-20");
  const words40Radio = document.querySelector("#words-40");
  const words60Radio = document.querySelector("#words-60");

  if (russianRadio.checked) {
    if (words20Radio.checked) {
      textsArray = russianTexts20;
    }
    if (words40Radio.checked) {
      textsArray = russianTexts40;
    }
    if (words60Radio.checked) {
      textsArray = russianTexts60;
    }
  } else if (englishRadio.checked) {
    if (words20Radio.checked) {
      textsArray = englishTexts20;
    }
    if (words40Radio.checked) {
      textsArray = englishTexts40;
    }
    if (words60Radio.checked) {
      textsArray = englishTexts60;
    }
  } else if (russianEnglishRadio.checked) {
    if (words20Radio.checked) {
      textsArray = russianEnglishTexts20;
    }
    if (words40Radio.checked) {
      textsArray = russianEnglishTexts40;
    }
    if (words60Radio.checked) {
      textsArray = russianEnglishTexts60;
    }
  }

  const maxRandom = textsArray.length;
  const randomIndex = Math.floor(Math.random() * maxRandom);
  return textsArray[randomIndex];
}

function formatWord(word) {
  return `<span class="letter">${word
    .split("")
    .join('</span><span class="letter">')}</span>`;
}

const simulator = document.querySelector(".simulator");
const text = document.querySelector(".text");
const generateButton = document.querySelector(".generate-btn");
const restartButton = document.querySelector(".restart-btn");
const focusError = document.querySelector(".focus-error");
window.currentText = "";
let mistakesCounter = 0;
const mistakesCounterSpan = document.querySelector(".mistakes-counter");
const mistakesCounterDiv = document.querySelector(".mistakes");
const amountWords = document.querySelector(".amount-words");

generateButton.addEventListener("click", function () {
  mistakesCounter = 0;
  mistakesCounterSpan.innerText = 0;
  mistakesCounterDiv.style.display = "block";
  mistakesCounterSpan.style.color = "#00ff37";

  let newText = newTextGenerate();
  if (newText !== currentText) {
    text.innerHTML = "";
    const wordsText = newText.split("");
    for (let word of wordsText) {
      text.innerHTML += formatWord(word);
    }
    window.currentText = newText;
  } else {
    while (window.currentText == newText) {
      newText = newTextGenerate();
    }
    text.innerHTML = "";
    const wordsText = newText.split("");
    for (let word of wordsText) {
      text.innerHTML += formatWord(word);
    }
    window.currentText = newText;
  }

  if (
    russianTexts40.includes(newText) ||
    englishTexts40.includes(newText) ||
    russianEnglishTexts40.includes(newText)
  ) {
    amountWords.innerText = 6;
  } else if (
    russianTexts60.includes(newText) ||
    englishTexts60.includes(newText) ||
    russianEnglishTexts60.includes(newText)
  ) {
    amountWords.innerText = 9;
  } else if (
    russianTexts20.includes(newText) ||
    englishTexts20.includes(newText) ||
    russianEnglishTexts20.includes(newText)
  ) {
    amountWords.innerText = 3;
  }

  document.querySelector(".letter").classList.add("current");
  focusError.style.display = "block";
});

document
  .querySelector(".simulator")
  .addEventListener("keydown", function (event) {
    const key = event.key;
    let currentLetter = document.querySelector(".letter.current");
    const expected = currentLetter.innerText;
    const isLetter = key.length === 1;
    const isBackspace = key === "Backspace";

    if (isLetter) {
      if (currentLetter.innerText !== " ") {
        if (key === expected) {
          currentLetter.classList.add("correct");
        } else {
          currentLetter.classList.add("incorrect");
          mistakesCounter += 1;
        }
      } else {
        if (key !== expected) {
          currentLetter.classList.add("spaceIncorrect");
          mistakesCounter += 1;
        }
      }
      currentLetter.classList.remove("current");
      currentLetter.nextSibling.classList.add("current");
      const nextLetter = document.querySelector(".letter.current");
    }

    if (isBackspace) {
      currentLetter.classList.remove("current");
      currentLetter = currentLetter.previousSibling;
      currentLetter.classList.add("current");
      currentLetter.classList.remove(
        "correct",
        "incorrect",
        "spaceCorrect",
        "spaceIncorrect"
      );
    }

    mistakesCounterSpan.innerText = mistakesCounter;
    if (mistakesCounterSpan.innerText - amountWords.innerText === 1) {
      mistakesCounterSpan.style.color = "#f55";
    }
  });

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
  }
});
