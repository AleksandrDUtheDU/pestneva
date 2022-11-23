
// import accountingServices from "../resources/img/services/accounting_services.jpg"
// import businessRegistration from "../resources/img/services/business_registration.jpg"
// import hrRecordsManagement from "../resources/img/services/hr_records_management.jpg"
// import accountingForMarketplaces from "../resources/img/services/accounting_for_marketplaces.jpg"

import market1 from "../resources/img/carousel/market1.jpeg"
import market2 from "../resources/img/carousel/market2.jpg"
import market3 from "../resources/img/carousel/market3.jpeg"
import cafe from "../resources/img/carousel/cafe.jpg"
import clinic from "../resources/img/carousel/clinic.jpg"
import flovers from "../resources/img/carousel/flovers.jpg"


export const navigation = [
    {
        id: '1',
        name: 'Главная',
        link: '',
        descr: '',

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
        name: 'Калькулятор',
        link: 'calc',
    },
    {
        id: '5',
        name: 'Контакты',
        link: 'contacts',
    },

]

export const services = [
    {
        id: '1',
        name: 'Бухгалтерские услуги',
        // img: accountingServices,
        link: 'bukhgalterskie_uslugi',
        descr: 'Работаем со всеми системами налогообложения, минимизируем налоги и даем возможность забыть о бумажных документах в бухгалтерии с помощью настройки электронного документооборота.',
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
        // img: businessRegistration,
        link: 'registraciya_biznesa',
        descr: 'Подготовка и направление документов для регистрации бизнеса с получением результата госуслуги без уплаты госпошлины и без посещения налоговой инспекции.',
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
        // img: hrRecordsManagement,
        link: 'kadrovoe_deloproizvodstvo',
        descr: 'Сопровождение может быть полным, частичным или в формате разовых консультаций. Стоимость услуги определяется численностью персонала и специфичностью учета, например, в вашей компании работают иностранцы.',
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
        // img: accountingForMarketplaces,
        link: 'uchet_dlya_marketplejsov',
        descr: 'Мы знаем, с какими трудностями вы можете столкнуться при работе с онлайн-площадками и предупредим возможные проблемы. Исключим неправильное формирование налоговой базы и ошибки при расчете налогов.',
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
        title: 'Стоматологическая клиника',
        img: clinic,
        descr: 'Стоматологическая клина',
        city: 'Архангельск',
        price: '35 000 р / ООО УСН Д-Р: 10 400 р',
        services: 'бухгалтерское сопровождение  ООО УСН Д-Р, расчет заработной платы сотрудников, кадровый учет, воинский учет, управленческий учет.',
    },
    {
        id: '2',
        title: 'Поставщик маркетплейсов',
        img: market1,
        descr: 'ООО с сотрудниками, продажа товаров на Озон, ВБ.',
        city: 'Санкт-Петербург',
        price: 'ООО УСН Д от 9 000 р',
        services: 'бухгалтерское сопровождение, расчет заработной платы',
    },
    {
        id: '3',
        title: 'Цветочный магазин',
        img: flovers,
        descr: 'Клиент обратился с момента регистрации ИП. Открыли расчетный счет, зарегистрировали кассу, подключили эквайринг. За год клиент открыл второй магазин, запустил сайт. Подключили интернет-эквайринг, взяли кассу в аренду, оформили прием сотрудника.',
        city: '',
        price: '9 000 р / ИП УСН Д: от 6 000 р',
        services: 'бухгалтерское сопровождение ИП УСН Д, расчет заработной платы',
    },
    {
        id: '4',
        title: 'Поставщик маркетплейсов',
        img: market2,
        descr: 'у клиента был розничный магазин. Перешел на продажу через маркетплейсы. Восстановили учет за период действия розничного магазина. Внедрили управленческую отчетность. Клиент увеличил количество торговых площадок за год  с Озона до Озон, ВБ, Яндекс. Маркет, Авито.',
        city: 'Москва',
        price: '29 000 р',
        services: 'ИП УСН Д-Р, 3 расчетных счета, 3 торговых площадки, управленческий учет',
    },
    {
        id: '5',
        title: 'Кафе',
        img: cafe,
        descr: '',
        city: '',
        price: 'ИП на ПСН от 6 000 р',
        services: 'Бухгалтерское обслуживание ИП,  Патент',
    },
    {
        id: '6',
        title: 'Поставщик маркетплейсов',
        img: market3,
        descr: 'Обратился ИП, поставщик Озон, в конце 2021 года поменял регистрацию с С-П на  г. Мурманск для уменьшения налоговой ставки (с 6 до 1%). Обратился для сдачи декларации за 2021 год. Клиент был предупрежден о возможных вопросах ИФНС, по поводу фиктивной регистрации. В мае 2022 ИП обратился повторно, получив требование от ИФНС пересчитать налог по ставке 6%. Отстояли право применять пониженную ставку 1% сэкономили клиенту 887 298,00',
        city: 'Мурманск',
        price: 'ответ на требование от 4 500 р',
        services: 'декларация УСН, ответ на требование.',
    },

]
