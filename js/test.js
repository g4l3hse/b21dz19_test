
$(function() {
    //first, create a set of questions, answers and results
    var personalityQuiz = {
      questions: [
        {
          title: "Как хорошо вы знаете Блендер?:",
          answers: [
            {
              answer: "умею удалять дефолтный куб",
              result: "настя ч",
            },
            {
              answer: "могу вспомнить ключевые шорткаты",
              result: ["аня", "артем", "аделина", "настя и", "элис"]
            },
            {
              answer: "читаю ноды как открытую книгу",
              result: ["маша", "степа", "луиза"]
            },
            {
              answer: "знаю как в нем смешать бананы с молоком",
              result: "даша" 
            }
          ]
        },
        
        {
          title: "Вы попали на необитаемый остров. Что возьмете с собой?",
          answers: [
            {
              answer: "портрет Адама Сендлера",
              result: ["элис", "настя ч"]
            },
            {
              answer: "все части форсажа",
              result: ["даша", "аделина", "артем"]
            },
            {
                answer: "куаркод для накопления акций в сабвее",
                result: ["луиза", "степа"]
            },
            {
              answer: "ненужные покупки с авито",
              result: ["настя и", "маша", "аня"]
            }
          ]
        },

        {
          title: "Больше всего вы боитесь...",
          answers: [
            {
              answer: "стать нормисом",
              result: ["артем", "элис", "луиза", "степа", "даша"]
            },
            {
              answer: "обидеть кого-то",
              result: "маша"
            },
            {
              answer: "анимешников",
              result: ["аня", "настя ч", "настя и", "аделина"]
            }
          ]
        },
        
        {
          title: "Выберите рандомную историю из моей жизни:",
          answers: [
            {
              answer: "чуть не спалила кампус в Ирландии, пока грела наггетсы в духовке",
              result: "аделина"
            },
            {
              answer: "стошнила в чужой рот во время первого поцелуя",
              result: ["даша", "луиза", "степа", "настя и", "элис", "маша"]
            },
            {
              answer: "сидела в обнимку со своей дакимакурой на семейном застолье",
              result: "артем"
            },
            {
              answer: "сделала 100 мини-карточек с причинами почему я люблю своего партнера, но так и не отдала потому, что мы расстались",
              result: "настя ч"
            },
            {
              answer: "расколола экран PSP, когда случайно прыгнула на него своей попой",
              result: "аня"
            }
          ]
        },
        {
          title: "Насколько вы тигр?",
          answers: [
            {
              answer: "усы и хвост",
              result: ["аня", "артем", "аделина", "настя и", "элис", "луиза", "маша", "даша", "степа", "настя ч"]
            },
            {
              answer: "гоняю собак",
              result: ["аня", "артем", "аделина", "настя и", "элис", "луиза", "маша", "даша", "степа", "настя ч"]
            },
            {
              answer: "три полоски на попе",
              result: ["аня", "артем", "аделина", "настя и", "элис", "луиза", "маша", "даша", "степа", "настя ч"]
            }
          ]
        },
        {
          title: "Ваша голова...",
          answers: [
            {
              answer: "в шляпе",
              result: ["аня", "артем", "аделина", "настя и", "элис", "луиза", "маша", "даша", "степа", "настя ч"]
            },
            {
              answer: "в порядке",
              result: ["аня", "артем", "аделина", "настя и", "элис", "луиза", "маша", "даша", "степа", "настя ч"]
            },
            {
              answer: "в шоке",
              result: ["аня", "артем", "аделина", "настя и", "элис", "луиза", "маша", "даша", "степа", "настя ч"]
            },
            {
              answer: "в холоде",
              result: ["аня", "артем", "аделина", "настя и", "элис", "луиза", "маша", "даша", "степа", "настя ч"]
            }
          ]
        },
        {
          title: "Что лучше – посмотреть на картинку в галерее и придумать смысл самостоятельно, не узнавать имя автора или посмотреть на картину и провести большое исследование, узнав историю работы?",
          answers: [
            {
              answer: "лучше посмотреть и придумать ответ самому",
              result: ["артем", "настя и", "элис", "луиза", "маша", "степа", "настя ч"]
            },
            {
              answer: "лучше посмотреть и узнать историю",
              result: ["аня", "аделина", "даша"]
            }
          ]
        },
        {
          title: "Сколько раз вы теряли документы?",
          answers: [
            {
              answer: "ни разу",
              result: ["артем", "настя ч", "аня"]
            },
            {
              answer: "никогда",
              result: ["луиза", "аделина", "элис"]
            },
            {
              answer: "больше 2-ух",
              result: ["даша", "степа", "маша"]
            },
            {
              answer: "больше 20-и",
              result: "настя и"
            }
          ]
        }, 
        {
          title: "Какое небо вас вдохновляет?",
          answers: [
            {
              answer: "небо во время грозы, со сверкающими молниями и раскатами грома",
              result: ["луиза", "элис"]
            },
            {
              answer: "небо на рассвете, с плавными переходами от голубого к розовому",
              result: "даша"
            },
            {
              answer: "небо в горах, с высокими пиками, скрытыми в облаках",
              result: ["настя ч", "степа"]
            },
            {
              answer: "ясное ночное небо с миллионами звезд",
              result: ["артем", "аделина", "аня"]
            },
            {
              answer: "небо, сливающееся с океаном на горизонте",
              result: "настя и"
            },
            {
              answer: "небо, полное пушистых белых облаков разной формы",
              result: "маша"
            }
          ]
        }, 
        {
          title: "Что находится у вас на полу во время сессии?",
          answers: [
            {
              answer: "пятна крови",
              result: "луиза"
            },
            {
              answer: "брызги краски",
              result: "артем"
            },
            {
              answer: "я чистюля, и мой пол сияет в любой день недели",
              result: ["аня", "настя ч"]
            },
            {
              answer: "комки пыли",
              result: ["элис", "аделина"]
            },
            {
              answer: "все вместе",
              result: ["даша", "степа", "маша", "настя и"]
            }
          ]
        }, 
        {
          title: "Ваша честная реакция на то, что роща, в которой вы сидите, начала гореть?",
          answers: [
            {
              answer: "выбегу в ужасе",
              result: "аня"
            },
            {
              answer: "выбегу в ужасе, но потеряюсь в трех соснах",
              result: ["степа", "аделина"]
            },
            {
              answer: "я не доел(-а) чипсы за 15 рублей из фикспрайса, никуда я не побегу",
              result: ["луиза", "настя и", "даша"]
            },
            {
              answer: "dumb ways to die",
              result: ["элис", "маша", "артем", "настя ч"]
            }
          ]
        }, 
        {
          title: "Идя по улице, вы чаще всего...",
          answers: [
            {
              answer: "ударитесь в столб и упадете в лужу",
              result: ["элис", "степа", "настя и", "даша"]
            },
            {
              answer: "будете делать зрительный контакт с прохожими",
              result: ["луиза", "аделина", "настя ч"]
            },
            {
              answer: "расскажете другу про архитектуру соседнего дома",
              result: ["артем", "маша"]
            },
            {
              answer: "допишите письмо заказчику",
              result: "аня"
            }
          ]
        }, 
        {
          title: "Какие сны вы видите чаще всего?",
          answers: [
            {
              answer: "часто снится свободное падение или полет",
              result: ["аня", "степа", "аделина"]
            },
            {
              answer: "яркие, захватывающие сны, словно сюжеты кинофильмов",
              result: ["даша", "настя ч"]
            },
            {
              answer: "как катя умнова наливает огромный высокий аквариум воды в аудитории перед просмотром для проекта луизы и говорит “ну пойдет” и берет аквариум и выливает воду в коридор",
              result: ["настя и", "элис"]
            },
            {
              answer: "вам ничего не снится вам свело икру правой ноги в 5:49",
              result: ["луиза", "артем"]
            },
            {
              answer: "редко вижу сны или не запоминаю их",
              result: "маша"
            }
          ]
        }, 
        {
          title: "У вас экзамен больше, чем через 10 часов, чем займетесь?",
          answers: [
            {
              answer: "power nap из 30 минут превращается в здоровый сон здорового человека (2-3 рабочих дня)",
              result: ["аня", "даша", "аделина", "маша"]
            },
            {
              answer: "марафон 10 часов гта",
              result: ["луиза", "степа", "элис"]
            },
            {
              answer: "на авито попадается очередной мусор по очень заманчивой цене и продавец не осведомлен о существовании доставки в современном мире",
              result: ["настя и", "артем"]
            },
            {
              answer: "брат звонит и говорит, что надо приехать посидеть с племянником пару часов, но это билет в один конец",
              result: "настя ч"
            }
          ]
        }, 
        {
          title: "Любите Воронеж?",
          answers: [
            {
              answer: "не знаю/не был(-а)",
              result: ["степа", "маша", "аделина", "настя ч", "настя и"]
            },
            {
              answer: "да",
              result: ["луиза", "аня", "элис", "даша"]
            },
            {
              answer: "нет",
              result: "артем"
            }
          ]
        }, 
        {
          title: "Какое из этих блюд вы бы попробовали?",
          answers: [
            {
              answer: "морской ананас",
              result: ["степа", "маша", "аделина", "артем", "настя и"]
            },
            {
              answer: "бешбармак",
              result: ["аня", "элис", "даша"]
            },
            {
              answer: "копченый курдюк",
              result: "настя ч"
            }, 
            {
              answer: "стейк из крокодильего мяса",
              result: "луиза"
            }
          ]
        }, 
        {
          title: "У вас зависимость от мести людям. Выберете любимый вариант возмездия:",
          answers: [
            {
              answer: "закинуть электронку вашего обидчика в женский туалет",
              result: ["маша", "элис", "настя ч"]
            },
            {
              answer: "выкинуть шелуху от семечек в обувь обидчика, стоящую в раздевалке",
              result: "аделина"
            },
            {
              answer: "вам показалось, что шелухи недостаточно, и вы налили туда строительный клей",
              result: ["аня", "степа", "настя и", "даша"]
            }, 
            {
              answer: "вы налили строительный клей не в те ботинки",
              result: ["луиза", "артем"]
            }
          ]
        }, 
        {
          title: "Вы продумываете свой план на жизнь?",
          answers: [
            {
              answer: "план приходит походу",
              result: ["маша", "артем", "настя и", "аделина", "степа"]
            },
            {
              answer: "да",
              result: ["аня", "настя ч", "даша"]
            },
            {
              answer: "нет",
              result: ["луиза", "элис"]
            }
          ]
        }, 
        {
          title: "Какое мероприятие вы бы скорее всего устроили?",
          answers: [
            {
              answer: "игра в лото",
              result: ["аня", "элис", "настя и", "аделина"]
            },
            {
              answer: "литературный вечер в читательском клубе",
              result: ["луиза", "настя ч", "маша"]
            },
            {
              answer: "покер найт",
              result: ["степа", "даша"]
            }, 
            {
              answer: "вечеринку на новый год",
              result: "артем"
            }
          ]
        }, 
        {
          title: "С каким дефектом вам придет моделька машинки формула 1?",
          answers: [
            {
              answer: "предыдущий владелец модельки в калининграде решил выковырять водителя из машинки и оставить его себе на память",
              result: ["степа", "элис", "артем", "аделина", "степа"]
            },
            {
              answer: "ты забыл сходить на почту и посылку отправили возвратом в Испанию а тебя забанили",
              result: ["луиза", "аня", "маша", "настя ч", "настя и"]
            },
            {
              answer: "отваливаются минимум три детали и это незаметно только под одним углом издалека",
              result: ["аня", "артем", "аделина", "настя и", "элис", "луиза", "маша", "даша", "степа", "настя ч"]
            }
          ]
        }, 
        {
          title: "Ваш транспорт с утра это...",
          answers: [
            {
              answer: "комфорт+",
              result: ["аня", "артем", "аделина", "настя и", "элис", "луиза", "маша", "даша", "степа", "настя ч"]
            },
            {
              answer: "электричка стандарт+ ",
              result: ["аня", "артем", "аделина", "настя и", "элис", "луиза", "маша", "даша", "степа", "настя ч"]
            },
            {
              answer: "дубовозка",
              result: ["аня", "артем", "аделина", "настя и", "элис", "луиза", "маша", "даша", "степа", "настя ч"]
            }, 
            {
              answer: "underground",
              result: ["аня", "артем", "аделина", "настя и", "элис", "луиза", "маша", "даша", "степа", "настя ч"]
            },
            {
              answer: "мультидисциплинарный транспортный рывок",
              result: ["аня", "артем", "аделина", "настя и", "элис", "луиза", "маша", "даша", "степа", "настя ч"]
            }
          ]
        }
      ], 
      results: ["даша", "маша", "луиза", "элис", "аня", "степа", "артем", "аделина", "настя и", "настя ч"],
      descriptions: [
        "DASHA ! Опасное создание надо сказать… Если вы Даша, то, вероятно, часто удивляетесь тому, куда вас внезапно занесло и чего вы успели начудить за ничего не предвещавшие сутки. Тяга к авантюрам – ваша заводская настройка, это всегда раскрашивает рутину, но иногда завязывает такие узлы тайм-менеджмента, что без серии бессонных ночей это не разгрести. Вы легко теряете вещи, возможно потому что думаете, что весь мир для вас дом, разбрасываете носки, ключи, карточки и кружки... Но, несмотря на это, в вас в нужный момент обязательно просыпается твёрдый дух, который сможет даже заставить помыть посуду всю общагу.",
        "mAsHa ! Поздравляю, вы выиграли генетическую лотерею: днем вы прыгаете по комнате и пускаете слезу под треки Тори Эймос, а ночами устраиваете марафон интервью Андрея Губина. Чтобы сконцентрироваться на чем-то дольше 5 минут, вам нужно выпить литр кофе и запугать себя жизнью под мостом в десятилетней перспективе. Зато у вас есть скилл делать проекты за день до дедлайна и выбирать неплохие референсы, а друзья ценят вас за неконфликтность и умение обсмеять себя со всех сторон. Немного терапии, и вы сможете замэтчить свои амбиции с реальными возможностями и научиться убираться в комнате раз в неделю. You’re golden, just keep going!",
        "LUiSA ! Если у вас хватает концентрации читать это, то поздравляю, потому что про сон вы никогда не слышали. Вам всегда мало всего: знаний, работы, заданий, сна... 'И рыбку съесть, и куда надо сесть' – это точно про вас, потому что для вас новая серия Битвы Экстрасенсов не менее важна, чем пятнадцать срочных дедлайнов во все инстанции. У вас хорошее чувство юмора, по словам людей вокруг вас, но не радуйтесь раньше времени: единственная хорошая вещь, которую о вас говорят. Вы очень любите своего кота и хотите, чтобы весь мир его любил. А если у вас нет кота, то заведите себе ментального, ведь без кота и жизнь не та.",
        "ELiS ! Ребенок, которого вырастил интернет. Показательный пример fatherless behavior. Вы боитесь разговаривать с незнакомцами и трясетесь, если на вас слегка повышают голос? элис – это не только физическая оболочка тревожного маленького человека, но и состояние души, знакомое многим. Ваша чувствительность – одновременно проклятие и то, чем стоит гордиться. Будьте осторожны, ведь не все готовы ждать, когда вы наконец откроетесь и будут судить вас по вашему вечно закрытому рту и отстраненному поведению.",
        "АВГС ! Если ты — Аня, то ты ответственная и целеустремленная работяжка. Иногда слишком серьезная и душнила — голова постоянно занята мыслями о судьбах мира и планами на день. Непрерывно рефлексирующая перфекционистка, принципиально делаешь либо идеально и на века, либо никак. Любишь только движущиеся картинки. Любимые виды спорта: делать дизайн под электронное долбилово и кататься на велосипеде по ночам. Знаешь кучу клевых мест в москве, но не успеваешь там бывать. Носишь с собой четки и пьешь дюшес.", 
        "БУБД ! Вы - степа! Вы ни за что не заблудитесь в автобусе, особенно имея огромный хвост за спиной и сборник буковски в руках. Будьте готовы, что ваше окружение вот-вот начнет играть в покер (не без вашего дружеского толчка), а вы сами отрастите себе парочку усов!</p> <img src='https://i.imgur.com/tXTjD9k.jpg'/>",
        "артем ! АААААА вам попался я. Теперь вы 2003 года рождения и учитесь в шд, много нового? Скажу больше, теперь вы мальчик, скажу больше теперь вы из Москвы, скажу больше теперь вы Рязанов Артемий и пишете с очепятками. Все это время это было ваше внутреннее Я, которое просилось наружу, бум бум бах бах, эмбрейс зе реалити!! Надеюсь мы все будем больше улыбаться и радоваться жизни!",
        "ADELE ! Среднестатический тест на тип личности говорит, что вы интроверт с тонкой душевной организацией, но для вас все сложнее, ведь все усложнять — это ваше призвание. Зачастую вам тяжело общаться с окружающими, но в то же время люди — ваш источник вдохновения. Вы задумчивы и нередко зависаете, уставившись в одну точку. Вы цените тишину и порой мечтаете оказаться на берегу моря в компании любимой книги, но стоит только успокоиться, как вашему разуму требуется новая загадка для размышлений. Вы перфекционист, пытающийся структурировать хаос, но осознание собственного несовершенства нередко запускает программу саморазрушения. Порой вы продумываете каждый шаг, но все равно никогда не перестаете сомневаться. Иногда жизнь кажется слишком сложной... Подходящий момент, чтобы перестать все контролировать и просто наблюдать, в который раз убеждаясь, что красота этого мира в его иррациональности…",
        "настя ! Вы привыкли быть в авангарде, и ваш характер помогает нести свет кринжа, не размениваясь на сентиментальность. Вам свойственны нигилизм и технократия, а окружающие давно свыклись с тем, что ваши передовые взгляды отдают людоедством. </p><img src='https://i.imgur.com/tXTjD9k.jpg'/>",
        "ВМИГ ! С утра проснувшись, я взяла свой зелёный дневник, села на коврик для йоги и погрузилась в себя. Девушка босиком бежит по полю, её ступни кровят от мелких камешков, которые попадаются по пути, одежда пропиталась потом, а волосы запутаны в колтуны. Она хочет прилечь, её постоянно манит мягкая трава, но останавливаться нельзя. За ней гонятся ожидания, вина и обязательства. Эта спешка внутри неё кричит в рупор и заставляет виски дрожать от боли. Внутренне она постоянно соревнуетсясама с собой. Физически свернулась клубком на твёрдом полу и спит, иногда встает и пьёт кофе, иногда ходит в походы, иногда говорит с людьми, иногда читает книги, иногда ездит в другие города, иногда... Иногда она просыпается и останавливается среди поля, смотрит в глаза своим преследователям, прощается с кем-то из них, кого-то отпускает, а затем снова засыпает."
      ]
    };
  
    //function allowing to mix the questions and answers so the quiz is more interesting
    function randomize(elements) {
      for (var i = 0; i < elements.length; i++) {
        var j = Math.floor(Math.random() * elements.length);
        var temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
      }
      return elements;
    }
    //variables you will need for the quiz:
    var index = 0; // this is the first question index;
    var quiz = personalityQuiz;
    var questions = quiz.questions;
    var questionSet = questions.length;
    var collectedAnswers = []; //this is the array where the answers are stored, then counted and depending on the occurence of each, result is established
    var startingBtn = $("#start");
    // first initiate the quiz
    startingBtn.on("click", function(event) {
      $(this).remove();
      $(this).parent().remove();
      var testBoard = $("<div>");
      testBoard.addClass("board");
      testBoard.appendTo($("body"));
      testBoard.attr("id", "testBoard");
  
      var button = $("<button>вы готовы, дети?</button>");
      button.appendTo(testBoard);
      button.attr("class", "startTest");
    });
  
    //the functions you need for the quiz once it has started
    function createQuestion() {
      if (index < questionSet) {
        var answers = questions[index].answers;
        randomize(answers);
  
        var title = $("<h5>", {
          class: "title"
        });
        title.appendTo(testBoard);
        var quizDiv = $("<div>", {
          class: "quizDiv"
        });
        quizDiv.insertAfter(title);
        title.text(questions[index].title);
        for (var i = 0; i < answers.length; i++) {
          var label = $("<label>");
          label.appendTo(quizDiv);
        }
  
        var labels = quizDiv.find("label");
        for (var i = 0; i < labels.length; i++) {
          $(labels[i]).text(answers[i].answer); //the label text matches the answer
          $(labels[i]).attr("data", answers[i].result);
        }
  
        labels.each(function(index2, value) {
          var input = $("<input>");
          input.attr("type", "radio");
          input.attr("name", "one");
          input.prependTo($(this));
        });
  
        var inputs = quizDiv.find("input");
        inputs.on("change", function(event) {
          $(this).parent().addClass("checked");
          $(this).parent().siblings("label").removeClass(); //this is how you color only the checked answer and know which it was
        });
  
        var button = $("<button>", {
          class: "quizButton"
        });
        button.appendTo(quizDiv);
        button.text("next");
      } else {
        showResults();
      }
    }
  
    function showResults() {
      var resultsBoard = $("<div>", {
        class: "resultsBoard"
      });
      resultsBoard.appendTo($("body"));
      $("body").children().not(resultsBoard).hide();
      var resultsParagraph = $("<p>", {
        class: "resultsParagraph"
      });
      resultsParagraph.appendTo(resultsBoard);
      var result0 = collectedAnswers.filter(function(item) {
        return item === quiz.results[0];
      }).length;
      var result1 = collectedAnswers.filter(function(item) {
        return item === quiz.results[1];
      }).length;
      var result2 = collectedAnswers.filter(function(item) {
        return item === quiz.results[2];
      }).length;
      var result3 = collectedAnswers.filter(function(item) {
        return item === quiz.results[3];
      }).length;
      var result4 = collectedAnswers.filter(function(item) {
        return item === quiz.results[4];
      }).length;
      var result5 = collectedAnswers.filter(function(item) {
        return item === quiz.results[5];
      }).length;
      var result6 = collectedAnswers.filter(function(item) {
        return item === quiz.results[6];
      }).length;
      var result7 = collectedAnswers.filter(function(item) {
        return item === quiz.results[7];
      }).length;
      var result8 = collectedAnswers.filter(function(item) {
        return item === quiz.results[8];
      }).length;
      var result9 = collectedAnswers.filter(function(item) {
        return item === quiz.results[9];
      }).length;
  
      if (result0 > result1 && result0 > result2) {
        resultsParagraph.text(quiz.descriptions[0]);
      } else if (result1 > result0 && result1 > result2) {
        resultsParagraph.text(quiz.descriptions[1]);
      } else if (result2 > result0 && result2 > result1) {
        resultsParagraph.text(quiz.descriptions[2]);
      } 
        else if (result3 > result2 && result3 > result1 && result3 > result0) {
        resultsParagraph.text(quiz.descriptions[3]);
    }
        else if (result4 > result3 && result4 > result2 && result4 > result1 && result4 > result0) {
        resultsParagraph.text(quiz.descriptions[4]);
    }
        else if (result5 > result4 && result5 > result3 && result5 > result2 && result5 > result1 && result5 > result0) {
        resultsParagraph.text(quiz.descriptions[5]);
    }
        else if (result6 > result5 && result6 > result4 && result6 > result3 && result6 > result2 && result6 > result1 && result6 > result0) {
        resultsParagraph.text(quiz.descriptions[6]);
    }
        else if (result7 > result6 && result7 > result5 && result7 > result4 && result7 > result3 && result7 > result2 && result7 > result1 && result7 > result0) {
        resultsParagraph.text(quiz.descriptions[7]);
    }
        else if (result8 > result7 && result8 > result6 && result8 > result5 && result8 > result4 && result8 > result3 && result8 > result2 && result8 > result1 && result8 > result0) {
        resultsParagraph.text(quiz.descriptions[8]);
    }
        else {
        resultsParagraph.text(quiz.descriptions[9]);
      }
    }
  //if you do not choose an answer- alert is shown and the quiz is halted
    function createAlertBox(element) {
      var alertBox = $("<div>", {
        class: "alertBox"
      });
      var alertP = $("<p>");
      alertBox.prependTo(element);
      alertP.appendTo(alertBox);
      alertP.text("Сначала ответик потом вопросик!");
  
      var hideAlertBtn = $("<button>", {
        class: "hideAlertBtn"
      });
      hideAlertBtn.appendTo(alertBox);
      hideAlertBtn.text("OK");
    }
  
    //test starts
    $("body").on("click", ".startTest", function() {
      $(this).remove();
      randomize(questions);
      createQuestion();
    });
  
    $("body").on("click", ".quizButton", function() {
      var labels = $(this).siblings("label");
      //console.log(labels);
      var checked = labels.find("input:checked");
      //console.log(checked);
      var labelText = checked.parent().text();
      //console.log(labelText);
      var dataText = checked.parent().attr("data");
      if (index < questionSet) {
        //you cannot move on if no answer is given
        if (dataText === undefined) {
          createAlertBox($("#testBoard"));
        } else {
          index++;
          collectedAnswers.push(dataText);
          console.log(collectedAnswers, collectedAnswers.length);
          createQuestion();
          $(this).parent().hide();
          $(this).parent().prev().hide();
        }
        //once the questions are all answered, the results are generated
      } else {
        showResults();
      }
    });
  
    $("body").on("click", ".hideAlertBtn", function() {
      $(this).parent().remove();
    });
  });
  