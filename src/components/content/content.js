
import accountingServices from "../../resources/img/services/accounting_services.jpg"
import businessRegistration from "../../resources/img/services/business_registration.jpg"
import hrRecordsManagement from "../../resources/img/services/hr_records_management.jpg"
import accountingForMarketplaces from "../../resources/img/services/accounting_for_marketplaces.jpg"

import kalyannaya from "../../resources/img/carousel/kalyannaya.jpg"
import blagotvoritelnyjFond from "../../resources/img/carousel/blagotvoritelnyj_fond.jpg"
import barMagazin from "../../resources/img/carousel/bar_magazin.jpg"
import marketplejs from "../../resources/img/carousel/marketplejs.jpg"


export const navigation = [
    {
        id: '1',
        name: 'Главная',
        link: '',
    },
    {
        id: '2',
        name: 'Услуги',
        link: 'services',
    },
    {
        id: '3',
        name: 'Кейсы',
        link: 'case',
    },
    {
        id: '4',
        name: 'Контакты',
        link: 'contacts',
    },
]

export const services = [
    {
        id: '1',
        name: 'Бухгалтерские услуги',
        img: accountingServices,
        link: 'bukhgalterskie_uslugi',
        tabs: [
            {
                id: '1',
                title: 'Ведение бухгалтерского учета ТСЖ, СНТ, ОНТ, ДНП.',
                price: 'от 7 500₽',
                descr: '',
                link: 'vedenie_buhgalterskogo_ucheta_tszh_snt_ont_dnp',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',
            },
            {
                id: '2',
                title: 'Расчет заработной платы',
                price: 'от 1 500₽',
                descr: '',
                link: 'raschet_zarabotnoj_platy',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '3',
                title: 'Отчетность ООО',
                price: 'от 6 000₽',
                descr: 'Подготовка и сдача отчетности ООО',
                link: 'otchetnost_ooo',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '4',
                title: 'Бухгалтерское обслуживание ИП',
                price: 'от 3 000₽',
                descr: 'Занимайтесь бизнесом, а не бухгалтерией! Направьте свои усилия в развитие бизнеса.',
                link: 'buhgalterskoe_obsluzhivanie_ip',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',
            },
            {
                id: '5',
                title: 'Бухгалтерское обслуживание ООО',
                price: 'от 5 000₽',
                descr: 'Переложите головную боль на профессионалов!',
                link: 'buhgalterskoe_obsluzhivanie_ooo',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '6',
                title: 'Консультации бухгалтера',
                price: 'от 1 500₽',
                descr: 'Бухгалтерские консультации — неотъемлемая часть бухгалтерского обслуживания.',
                link: 'konsultacii_buhgaltera',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '7',
                title: 'Восстановление бухгалтерского учета',
                price: 'от 5 000₽',
                descr: 'Обеспечим полный порядок в вашей бухгалтерии в любой ситуации!',
                link: 'vosstanovlenie_buhgalterskogo_ucheta',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '8',
                title: 'Нулевая отчетность',
                price: 'от 1 500₽',
                descr: 'Когда вам нужен тариф «Нулевая отчетность»',
                link: 'nulevaya_otchetnost',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '9',
                title: 'Отчетность ИП',
                price: 'от 1 500₽',
                descr: 'Подготовка и сдача отчетности ИП',
                link: 'otchetnost_ip',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            }
        ]
    },
    {
        id: '2',
        name: 'Регистрация бизнеса',
        img: businessRegistration,
        link: 'registraciya_biznesa',
        tabs: [
            {
                id: '1',
                title: 'Регистрация ООО',
                price: 'от 3 500₽',
                descr: 'от 7 дней',
                link: 'registraciya_ooo',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '2',
                title: 'Регистрация ИП',
                price: 'от 2 500₽',
                descr: 'от 7 дней',
                link: 'registraciya_ip',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '3',
                title: 'Внесение изменений в учредительные документы и в ЕГРЮЛ',
                price: 'от 5 000₽',
                descr: 'от 7 дней',
                link: 'vnesenie_izmenenij_v_uchreditelnye_dokumenty_i_v_egryul',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '4',
                title: 'Внесение изменений в ЕГРИП (для ИП)',
                price: 'от 2 500₽',
                descr: 'от 7 дней',
                link: 'vnesenie_izmenenij_v_egrip_dlya_ip)',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '5',
                title: 'Изменение ОКВЭД',
                price: 'от 1 500₽',
                descr: 'от 7 дней',
                link: 'izmenenie_okved',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '6',
                title: 'Закрытие ИП',
                price: 'от 2 500₽',
                descr: 'от 7 дней',
                link: 'zakrytie_ip',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
        ]
    },
    {
        id: '3',
        name: 'Кадровое делопроизводство',
        img: hrRecordsManagement,
        link: 'kadrovoe_deloproizvodstvo',
        tabs: [
            {
                id: '1',
                title: 'Восстановление кадрового учета',
                price: 'от 25 000₽',
                descr: 'Вы должны быть уверены, что ваши отношения с сотрудниками оформлены грамотно!',
                link: 'vosstanovlenie_kadrovogo_ucheta',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '2',
                title: 'Кадровый аудит',
                price: 'от 10 000₽',
                descr: 'Получите анализ вашего кадрового учета и рекомендации по улучшению.',
                link: 'kadrovyj_audit',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '3',
                title: 'Кадровый учет',
                price: 'от 1 000₽',
                descr: 'Кадровый учет - задача, которая обязательно возникает перед компанией, где есть сотрудники.',
                link: 'kadrovyj_uchet',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
        ]
    },
    {
        id: '4',
        name: 'Учет для маркетплейсов',
        img: accountingForMarketplaces,
        link: 'uchet_dlya_marketplejsov',
        tabs: [
            {
                id: '1',
                title: 'Учет работы через маркетплейс в целях ОСНО',
                price: 'от ?????₽',
                descr: '?????',
                link: 'uchet_raboty_cherez_marketplejs_v_celyah_osno',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '2',
                title: 'Учет работы через маркетплейс для исчисления УСН',
                price: 'от ?????₽',
                descr: '?????',
                link: 'uchet_raboty_cherez_marketplejs_dlya_ischisleniya_usn',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },
            {
                id: '3',
                title: 'Кассовый чек при продажах через маркетплейс',
                price: 'от ?????₽',
                descr: '?????',
                link: 'kassovyj_chek_pri_prodazhah_cherez_marketplejs',
                descrDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quasi saepe iusto quam nulla cumque iure sunt placeat hic sit pariatur, ipsum maiores veritatis non distinctio temporibus accusantium laboriosam?',

            },

        ]
    },
]



export const cases = [
    {
        id: '1',
        title: 'Кальянная',
        img: kalyannaya,
        descr: 'Клиент обратился на этапе запуска с запросом на комплексное ведение бухгалтерского учёта, а так же услуг по сопровождению ресторанного бизнеса, включая выполнение специфических работ по выпуску продукции и проведению плановых и внеплановых инвентаризаций. В соответствии с запросом была проведена работы по подбору и поставке оборудования и софта для Ресторанов, проведен СОУТ, предложена оптимальная систем налогообложения, трудоустроены сотрудники, проверены и оформлены все необходимые документы для Роспотребнадзора, Роструда и иных государственных надзорных органов.'
    },
    {
        id: '2',
        title: 'Благотворительный фонд',
        img: blagotvoritelnyjFond,
        descr: 'Уже более 5-ти лет, мы являемся ведущими бухгалтерами Благотворительного фонда "Детские мечты", внося свою небольшую лепту в безусловно благородное и достойное дело. Клиент обратился к нам в 2015 году с момента своего основания и за это время, нами была проведена большая работа по формированию процессов ведения учёта, оптимизации налогов, правильному построению работы с документацией, а так же учтены все нюансы работы с НКО и в частности с Фондами.'
    },
    {
        id: '3',
        title: 'Бар магазин',
        img: barMagazin,
        descr: 'Бар-магазин "Алкомаркет 24", как можно догадаться из названия, преимущественно занимается торговлей алкогольными напитками, что требует особого внимания со стороны бухгалтерии, поскольку речь идёт о сдаче декларации ЕГАИС. Так же, в ассортименте магазина имеются сигареты, которые требуют контроля со стороны "Честного знака". Поскольку клиент обратился на стадии запуска, нами были осуществлены все необходимые подготовительные работы, выпуск соответствующих ЭЦП, регистрация в ЕГАИС и "Честном знаке", проведены синхронизации баз данных 1С, выполнена настройка складского программного обеспечения.'
    },
    {
        id: '4',
        title: 'Маркетплейс',
        img: marketplejs,
        descr: 'Компания «Soft & Hard» занимается широким спектром IT услуг от программирования софта до технической поддержки. Привлечение клиентов из-за рубежа накладывает определённый отпечаток на ведение их учёта, связанный с внешней экономической деятельностью, а большое количество сотрудников требует отдельного кадрового учёта. Так же, уделяется внимание заключаемым контрактам - мы оказываем правовую помощь при анализе договоров на предмет рисков на предмет нарушения дедлайнов. Поскольку IT компании претендуют на налоговые преференции, нами осуществляется работа по переходу компании на специальный налоговый режим. '
    },
]
