document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        // Reactive properties
        darkMode: false, // Initialized in init from local storage / html class
        currentLang: localStorage.getItem('zekerclean_lang') || 'nl',
        activePage: '',
        isMobileMenuOpen: false, // New property for mobile menu
        isLangDropdownOpen: false, // New property for language switcher dropdown
        isRTL: false, // New property to track RTL status
        contactForm: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        formMessage: null, // { type: 'success' | 'error', text: '' }
        logoSrc: 'demo-6.png', // Default, updated in init based on resolved darkMode state
        langFlags: { // Emoji flags for the language switcher
            'nl': '🇳🇱',
            'en': '🇬🇧',
            'ar': '🇸🇾'
        },

        // Translations object
        translations: {
            "nl": {
                "home_page_title": "ZekerClean - Welkom",
                "home_page_meta_description": "ZekerClean biedt professionele schoonmaakdiensten voor kantoren, huizen en meer. Ervaar het verschil van een schoon en verzorgd werk- of leefomgeving.",
                "home_hero_headline": "Welkom bij ZekerClean",
                "home_hero_text": "Wij zijn ZekerClean: een team van toegewijde en professionele schoonmakers. Samen zorgen we dagelijks voor schone, frisse en perfect representatieve ruimtes voor onze klanten.  \nWij werken hard, betrouwbaar en met veel aandacht voor detail. Als team ondersteunen we elkaar en zetten we altijd een stapje extra om een constant hoog niveau van schoonmaak te garanderen.  \nJouw comfort is onze prioriteit.  \nVan scholen, kantoren en winkels tot bedrijven en vakantiehuizen: wij zorgen voor een eenvoudige, nauwkeurige en comfortabele schoonmaak.  \nOnze diensten worden geleverd met duidelijke afspraken en eerlijke, betaalbare prijzen.  \nMet ZekerClean kunt u rekenen op een team dat zijn werk serieus neemt en trots is op de resultaten die het samen bereikt.",
                "home_cta_contact": "Neem contact op",
                "nav_home": "Home",
                "nav_about": "Over ons",
                "nav_services": "Diensten",
                "nav_contact": "Contact",
                "footer_company_name": "ZekerClean Schoonmaakbedrijf",
                "footer_social_media": "Volg ons",
                "footer_all_rights_reserved": "Alle rechten voorbehouden.",
                "features_heading": "Waarom kiezen voor ZekerClean?",
                "feature_quality_heading": "Hoogwaardige Kwaliteit",
                "feature_quality_text": "Wij leveren altijd een onberispelijk resultaat met oog voor detail.",
                "feature_reliable_heading": "Betrouwbaar & Flexibel",
                "feature_reliable_text": "U kunt op ons rekenen. Wij passen ons aan uw schema aan.",
                "feature_customer_heading": "Klanttevredenheid",
                "feature_customer_text": "Uw tevredenheid is onze prioriteit. We streven naar de beste service.",
                "cta_heading": "Klaar voor een schonere omgeving?",
                "cta_text": "Neem vandaag nog contact met ons op voor een vrijblijvende offerte en ontdek wat ZekerClean voor u kan betekenen.",
                "lang_dutch": "Nederlands", // New translation key
                "lang_english": "Engels",    // New translation key
                "lang_arabic": "Arabisch",   // New translation key

                "about_page_title": "ZekerClean - Over ons",
                "about_page_meta_description": "Meer over ZekerClean: ons team van betrokken en professionele schoonmakers, onze waarden en onze toewijding aan kwaliteit.",
                "about_heading": "Over ons – ZekerClean",
                "about_text_paragraph1": "Wij zijn ZekerClean: een team van betrokken en professionele schoonmakers. Samen zorgen we dagelijks voor schone, frisse en representatieve ruimtes bij onze klanten.",
                "about_text_paragraph2": "We werken zorgvuldig, betrouwbaar en met oog voor detail. Als team ondersteunen we elkaar en zetten we altijd nét dat stapje extra om een constant hoog niveau van schoonmaak te garanderen.",
                "about_text_paragraph3": "Bij ZekerClean kunt u rekenen op mensen die hun vak serieus nemen en trots zijn op het resultaat dat ze samen neerzetten.",
                "founders_heading": "Ontmoet Ons Team",
                "founder_name_louden": "Louden Wermenbol",
                "founder_name_oudai": "Oudai Zaino",
                "owner_title_louden": "Oprichter & Directeur", // Changed key
                "owner_title_oudai": "Projectmanager", // Changed key
                "values_heading": "Onze Waarden",
                "value_quality_heading": "Kwaliteit",
                "value_quality_text": "Wij streven altijd naar de hoogste standaard in schoonmaak en service.",
                "value_teamwork_heading": "Teamwork",
                "value_teamwork_text": "Samenwerking en wederzijds respect zijn de kern van ons succes.",
                "value_reliability_heading": "Betrouwbaarheid",
                "value_reliability_text": "U kunt op ons bouwen voor consistente en tijdige diensten.",

                "services_page_title": "ZekerClean - Onze Diensten",
                "services_page_meta_description": "Ontdek de uitgebreide schoonmaakdiensten van ZekerClean: kantoorschoonmaak, periodiek onderhoud, dieptereiniging en opleveringsschoonmaak.",
                "services_heading": "Onze diensten",
                "services_intro_text": "ZekerClean biedt een breed scala aan professionele schoonmaakdiensten, zorgvuldig ontworpen om aan uw specifieke behoeften te voldoen en uw ruimtes en textiel in topconditie te houden.",
                "services_intro_text_secondary": "Dankzij onze expertise, betrouwbaarheid en nauwkeurigheid in het werk garanderen wij u perfecte resultaten.",
                "service_office_commercial_heading": "Schoonmaak van kantoren en commerciële ruimtes",
                "service_office_commercial_intro": "Een schone werkplek draagt bij aan een comfortabele sfeer en verhoogde productiviteit.",
                "service_office_commercial_list_item1": "Periodieke schoonmaak van woningen, winkels en bedrijven.",
                "service_office_commercial_list_item2": "Nauwkeurige reiniging van meubels en tapijten, tot in de kleinste details.",
                "service_office_commercial_list_item3": "Reiniging van ramen binnen en buiten, inclusief gevels en entrees.",
                "service_office_commercial_list_item4": "Grondige schoonmaak van scholen tot in de puntjes om een gezonde en veilige omgeving te behouden.",
                "service_deep_cleaning_heading": "Dieptereiniging",
                "service_deep_cleaning_intro": "Wij bieden een uitgebreide schoonmaakservice om de gezondheid en kwaliteit van de ruimte te waarborgen:",
                "service_deep_cleaning_list_item1": "Intensieve reiniging van vloeren, sanitaire voorzieningen en keukens.",
                "service_deep_cleaning_list_item2": "Luchtzuivering en geurverwijdering, voor een comfortabele en gezonde omgeving.",
                "service_periodic_maintenance_heading": "Periodiek onderhoud",
                "service_periodic_maintenance_text": "Of het nu dagelijks, wekelijks of maandelijks is, wij passen het werkschema aan uw plannen en wensen aan,",
                "service_periodic_maintenance_text_2": "en zorgen voor comfortabele en geschikte tijden voor onze klanten en werkplekken.",
                "service_end_of_lease_heading": "Opleveringsschoonmaak",
                "service_end_of_lease_intro": "Na renovatie, update of verhuizing verzorgen wij een uitgebreide en nauwkeurige schoonmaak van gebouwen:",
                "service_end_of_lease_list_item1": "Verwijdering van bouwstof, vuil en resten om de ruimte nieuw en direct gebruiksklaar te maken.",
                "service_end_of_lease_list_item2": "Reiniging van parkeerplaatsen van onkruid en vuil met gespecialiseerde apparatuur.",
                "service_end_of_lease_list_item3": "Nauwkeurige reiniging van caravans, voertuigen en vakantiehuizen, met volledige indeling van de ruimte en het creëren van een gezonde leefomgeving.",

                "contact_page_title": "ZekerClean - Contact",
                "contact_page_meta_description": "Neem contact op met ZekerClean voor al uw vragen of een vrijblijvende offerte. Wij zijn bereikbaar via telefoon, e-mail en ons contactformulier.",
                "contact_page_heading": "Neem contact op",
                "contact_intro_text": "Heeft u vragen of wilt u een vrijblijvende offerte aanvragen? Vul het formulier in of neem direct contact met ons op.",
                "contact_form_heading": "Stuur ons een bericht",
                "contact_form_name": "Naam",
                "contact_form_email": "E-mail",
                "contact_form_phone": "Telefoon",
                "contact_form_message": "Bericht",
                "contact_form_submit": "Verstuur bericht",
                "contact_info_heading": "Contactgegevens",
                "contact_info_phone_label": "Telefoon",
                "contact_info_email_label": "E-mail",
                "contact_info_address_label": "Adres",
                "contact_info_kvk_label": "KvK Nummer",
                "contact_info_whatsapp_label": "WhatsApp",
                "contact_call_whatsapp": "Bel ons",
                "contact_whatsapp_message": "Stuur een WhatsApp",
                "contact_send_email": "Stuur een e-mail",
                "contact_info_phone": "Telefoon:", // for footer
                "contact_info_email": "E-mail:", // for footer
                "contact_info_address_full": "Kaniestraat 7, 6971 KJ Brummen", // for footer
                "contact_info_kvk": "KvK Nummer:", // for footer

                // New Footer Credit Line Translations
                "footer_credit_line_main": "© 2025 ZekerClean. Alle rechten voorbehouden.",
                "footer_developed_by_prefix": "Ontworpen en ontwikkeld door "
            },
            "en": {
                "home_page_title": "ZekerClean - Welcome",
                "home_page_meta_description": "ZekerClean offers professional cleaning services for offices, homes, and more. Experience the difference of a clean and well-maintained work or living environment.",
                "home_hero_headline": "Welcome to ZekerClean",
                "home_hero_text": "We are ZekerClean: a team of dedicated and professional cleaners. Together, we ensure clean, fresh, and perfectly presentable spaces for our clients every single day.  \nWe work hard, reliably, and with great attention to detail. As a team, we support each other and always go the extra mile to guarantee a consistently high level of cleanliness.  \nYour comfort is our priority.  \nFrom schools, offices, and shops to companies and holiday homes, we provide simple, precise, and stress-free cleaning services.  \nOur services are delivered with clear agreements and fair, affordable pricing.  \nWith ZekerClean, you can rely on a team that takes its work seriously and takes pride in the results they achieve together.",
                "home_cta_contact": "Contact Us",
                "nav_home": "Home",
                "nav_about": "About Us",
                "nav_services": "Services",
                "nav_contact": "Contact",
                "footer_company_name": "ZekerClean Cleaning Company",
                "footer_social_media": "Follow Us",
                "footer_all_rights_reserved": "All rights reserved.",
                "features_heading": "Why Choose ZekerClean?",
                "feature_quality_heading": "High Quality",
                "feature_quality_text": "We always deliver impeccable results with an eye for detail.",
                "feature_reliable_heading": "Reliable & Flexible",
                "feature_reliable_text": "You can count on us. We adapt to your schedule.",
                "feature_customer_heading": "Customer Satisfaction",
                "feature_customer_text": "Your satisfaction is our priority. We strive for the best service.",
                "cta_heading": "Ready for a cleaner environment?",
                "cta_text": "Contact us today for a free quote and discover what ZekerClean can do for you.",
                "lang_dutch": "Dutch",
                "lang_english": "English",
                "lang_arabic": "Arabic",

                "about_page_title": "ZekerClean - About Us",
                "about_page_meta_description": "Learn more about ZekerClean: our team of dedicated and professional cleaners, our values, and our commitment to quality.",
                "about_heading": "About Us – ZekerClean",
                "about_text_paragraph1": "We are ZekerClean: a team of dedicated and professional cleaners. Together, we ensure clean, fresh, and presentable spaces for our clients every day.",
                "about_text_paragraph2": "We work diligently, reliably, and with an eye for detail. As a team, we support each other and always go the extra mile to guarantee a consistently high level of cleanliness.",
                "about_text_paragraph3": "With ZekerClean, you can count on people who take their profession seriously and are proud of the results they achieve together.",
                "founders_heading": "Meet Our Team",
                "founder_name_louden": "Louden Wermenbol",
                "founder_name_oudai": "Oudai Zaino",
                "owner_title_louden": "Founder & Director", // Changed key and value
                "owner_title_oudai": "Project Manager", // Changed key and value
                "values_heading": "Our Values",
                "value_quality_heading": "Quality",
                "value_quality_text": "We always strive for the highest standard in cleaning and service.",
                "value_teamwork_heading": "Teamwork",
                "value_teamwork_text": "Collaboration and mutual respect are at the core of our success.",
                "value_reliability_heading": "Reliability",
                "value_reliability_text": "You can count on us for consistent and timely services.",

                "services_page_title": "ZekerClean - Our Services",
                "services_page_meta_description": "Discover ZekerClean's comprehensive cleaning services: office cleaning, periodic maintenance, deep cleaning, and end-of-lease cleaning.",
                "services_heading": "Our Services",
                "services_intro_text": "ZekerClean offers a wide range of professional cleaning services, carefully designed to meet your specific needs and keep your spaces and textiles in optimal condition.",
                "services_intro_text_secondary": "Thanks to our expertise, reliability, and precision in work, we guarantee you perfect results.",
                "service_office_commercial_heading": "Office and Commercial Cleaning",
                "service_office_commercial_intro": "A clean workplace contributes to a comfortable atmosphere and increased productivity.",
                "service_office_commercial_list_item1": "Regular cleaning of homes, shops, and businesses.",
                "service_office_commercial_list_item2": "Meticulous cleaning of furniture and carpets, down to the smallest details.",
                "service_office_commercial_list_item3": "Cleaning of windows, inside and out, including facades and entrances.",
                "service_office_commercial_list_item4": "Detailed cleaning of schools to maintain a healthy and safe environment.",
                "service_deep_cleaning_heading": "Deep Cleaning",
                "service_deep_cleaning_intro": "We provide a comprehensive cleaning service to maintain the health and quality of the space:",
                "service_deep_cleaning_list_item1": "Intensive cleaning of floors, sanitary facilities, and kitchens.",
                "service_deep_cleaning_list_item2": "Air purification and odor removal, ensuring a comfortable and healthy environment.",
                "service_periodic_maintenance_heading": "Periodic Maintenance",
                "service_periodic_maintenance_text": "Whether daily, weekly, or monthly, we adapt the work schedule to your plans and wishes,",
                "service_periodic_maintenance_text_2": "and ensure comfortable and suitable times for our clients and workplaces.",
                "service_end_of_lease_heading": "End-of-Lease Cleaning",
                "service_end_of_lease_intro": "After renovation, update, or relocation, we provide a comprehensive and meticulous cleaning of buildings:",
                "service_end_of_lease_list_item1": "Removal of construction dust, dirt, and residue to make the space new and immediately ready for use.",
                "service_end_of_lease_list_item2": "Cleaning of parking spaces (the parking) from weeds and dirt using specialized equipment.",
                "service_end_of_lease_list_item3": "Detailed cleaning of caravans, vehicles, and holiday homes, with a complete arrangement of the space and providing a suitable healthy living environment.",

                "contact_page_title": "ZekerClean - Contact",
                "contact_page_meta_description": "Contact ZekerClean for all your questions or a free quote. We are available via phone, email, and our contact form.",
                "contact_page_heading": "Contact Us",
                "contact_intro_text": "Do you have questions or would you like to request a free quote? Fill in the form or contact us directly.",
                "contact_form_heading": "Send us a message",
                "contact_form_name": "Name",
                "contact_form_email": "Email",
                "contact_form_phone": "Phone",
                "contact_form_message": "Message",
                "contact_form_submit": "Send Message",
                "contact_info_heading": "Contact Details",
                "contact_info_phone_label": "Phone",
                "contact_info_email_label": "Email",
                "contact_info_address_label": "Address",
                "contact_info_kvk_label": "KvK Number",
                "contact_info_whatsapp_label": "WhatsApp",
                "contact_call_whatsapp": "Call Us",
                "contact_whatsapp_message": "Send a WhatsApp",
                "contact_send_email": "Send an email",
                "contact_info_phone": "Phone:", // for footer
                "contact_info_email": "Email:", // for footer
                "contact_info_address_full": "Kaniestraat 7, 6971 KJ Brummen", // for footer
                "contact_info_kvk": "KvK Number:", // for footer

                // New Footer Credit Line Translations
                "footer_credit_line_main": "© 2025 ZekerClean. All rights reserved.",
                "footer_developed_by_prefix": "Designed & Developed by "
            },
            "ar": {
                "home_page_title": "زيكركلين - أهلاً وسهلاً",
                "home_page_meta_description": "تقدم زيكركلين خدمات تنظيف احترافية للمكاتب والمنازل والمزيد. اختبر الفرق في بيئة عمل أو معيشة نظيفة ومرتبة.",
                "home_hero_headline": "مرحبًا بكم في زيكركلين",
                "home_hero_text": "نحن زيكركلين: فريق من عمال النظافة المتفانين والمحترفين. معًا، نضمن يوميًا مساحات نظيفة، منعشة، ومثالية لعملائنا.  \nنعمل بجد واجتهاد، وبموثوقية عالية، مع اهتمام كبير بأدق التفاصيل. كفريق، ندعم بعضنا البعض ونبذل دائمًا جهدًا إضافيًا لضمان مستوى عالٍ وثابت من النظافة.  \nراحتك هي أولويتنا.  \nمن المدارس والمكاتب والمتاجر والشركات وحتى منازل العطلات، نقوم بالتنظيف بأسلوب بسيط، دقيق، ومريح.  \nنقدم خدماتنا من خلال اتفاقيات واضحة، وأسعار عادلة ومناسبة.  \nمع زيكركلين، يمكنك الاعتماد على فريق يأخذ عمله بجدية ويفخر بالنتائج التي يحققها معًا.",
                "home_cta_contact": "اتصل بنا",
                "nav_home": "الرئيسية",
                "nav_about": "عنّا",
                "nav_services": "الخدمات",
                "nav_contact": "اتصل بنا",
                "footer_company_name": "شركة زيكركلين للتنظيف",
                "footer_social_media": "تابعنا",
                "footer_all_rights_reserved": "جميع الحقوق محفوظة.",
                "features_heading": "لماذا تختار زيكركلين؟",
                "feature_quality_heading": "جودة عالية",
                "feature_quality_text": "نقدم دائمًا نتائج لا تشوبها شائبة مع الاهتمام بالتفاصيل.",
                "feature_reliable_heading": "موثوقة ومرنة",
                "feature_reliable_text": "يمكنكم الاعتماد علينا. نحن نتكيف مع جدولكم الزمني.",
                "feature_customer_heading": "رضا العملاء",
                "feature_customer_text": "رضاكم هو أولويتنا. نحن نسعى لتقديم أفضل خدمة.",
                "cta_heading": "هل أنت جاهز لبيئة أنظف؟",
                "cta_text": "تواصل معنا اليوم للحصول على عرض أسعار مجاني واكتشف ما يمكن أن تقدمه لك زيكركلين.",
                "lang_dutch": "هولندي",
                "lang_english": "إنجليزي",
                "lang_arabic": "عربي",

                "about_page_title": "زيكركلين - عنّا",
                "about_page_meta_description": "تعرف على المزيد حول زيكركلين: فريقنا من عمال النظافة المتفانين والمحترفين، قيمنا، والتزامنا بالجودة.",
                "about_heading": "عنّا – زيكركلين",
                "about_text_paragraph1": "نحن زيكركلين: فريق من عمال النظافة المتفانين والمحترفين. معًا، نضمن يوميًا مساحات نظيفة، منعشة، وممثلة لعملائنا.",
                "about_text_paragraph2": "نعمل بجد واجتهاد، بموثوقية، ومع اهتمام بالتفاصيل. كفريق، ندعم بعضنا البعض ونبذل دائمًا جهدًا إضافيًا لضمان مستوى عالٍ ومستمر من النظافة.",
                "about_text_paragraph3": "مع زيكركلين، يمكنك الاعتماد على أشخاص يأخذون مهنتهم بجدية ويفخرون بالنتائج التي يحققونها معًا.",
                "founders_heading": "تعرف على فريقنا",
                "founder_name_louden": "لودن فيرمينبول",
                "founder_name_oudai": "عدي زينو",
                "owner_title_louden": "المؤسس والمدير", // Changed key and value
                "owner_title_oudai": "مدير المشاريع", // Changed key and value
                "values_heading": "قيمنا",
                "value_quality_heading": "الجودة",
                "value_quality_text": "نسعى دائمًا لأعلى معايير النظافة والخدمة.",
                "value_teamwork_heading": "العمل الجماعي",
                "value_teamwork_text": "التعاون والاحترام المتبادل هما جوهر نجاحنا.",
                "value_reliability_heading": "الموثوقية",
                "value_reliability_text": "يمكنكم الاعتماد علينا لخدمات متسقة وفي الوقت المناسب.",

                "services_page_title": "زيكركلين - خدماتنا",
                "services_page_meta_description": "اكتشف خدمات التنظيف الشاملة من زيكركلين: تنظيف المكاتب، الصيانة الدورية، التنظيف العميق، وتنظيف ما بعد التسليم.",
                "services_heading": "خدماتنا",
                "services_intro_text": "تقدم زيكركلين مجموعة واسعة من خدمات التنظيف الاحترافية، مصممة بعناية لتلبية احتياجاتكم الخاصة والحفاظ على مساحاتكم ومنسوجاتكم في أفضل حالاتها.",
                "services_intro_text_secondary": "بفضل خبرتنا، وموثوقيتنا، ودقتنا في العمل، نضمن لكم نتائج مثالية.",
                "service_office_commercial_heading": "تنظيف المكاتب والأماكن التجارية",
                "service_office_commercial_intro": "مكان عمل نظيف يساهم في أجواء مريحة وزيادة الإنتاجية.",
                "service_office_commercial_list_item1": "التنظيف الدوري للمنازل، المحلات التجارية، والشركات.",
                "service_office_commercial_list_item2": "تنظيف الأثاث والسجاد بدقة، وصولاً إلى أصغر التفاصيل.",
                "service_office_commercial_list_item3": "تنظيف النوافذ من الداخل والخارج، بالإضافة إلى الواجهات والمداخل.",
                "service_office_commercial_list_item4": "تنظيف المدارس بأدق التفاصيل للحفاظ على بيئة صحية وآمنة.",
                "service_deep_cleaning_heading": "التنظيف العميق",
                "service_deep_cleaning_intro": "نقدم خدمة تنظيف شاملة للحفاظ على صحة وجودة المكان:",
                "service_deep_cleaning_list_item1": "تنظيف مكثف للأرضيات، المرافق الصحية، والمطابخ.",
                "service_deep_cleaning_list_item2": "تنقية الهواء وإزالة الروائح، لضمان بيئة مريحة وصحية.",
                "service_periodic_maintenance_heading": "الصيانة الدورية",
                "service_periodic_maintenance_text": "سواء كان التنظيف يوميًا، أسبوعيًا، أو شهريًا، نحن نكيف جدول العمل مع خططكم ورغباتكم،",
                "service_periodic_maintenance_text_2": "ونضمن مواعيد مريحة وملائمة لعملائنا ولأماكن العمل.",
                "service_end_of_lease_heading": "تنظيف ما بعد التسليم",
                "service_end_of_lease_intro": "بعد التجديد، التحديث، أو الانتقال، نقدم تنظيفًا شاملاً ودقيقًا للمباني:",
                "service_end_of_lease_list_item1": "إزالة غبار البناء، الأوساخ، والبقايا لجعل المكان جديدًا وجاهزًا للاستخدام الفوري.",
                "service_end_of_lease_list_item2": "تنظيف مواقف السيارات (الباركينغ) من الأعشاب والأوساخ باستخدام معدات متخصصة.",
                "service_end_of_lease_list_item3": "تنظيف الكرفانات، المركبات، وبيوت العطل بدقة، مع ترتيب كامل للمكان وتوفير بيئة صحية مناسبة للسكن.",

                "contact_page_title": "زيكركلين - اتصل بنا",
                "contact_page_meta_description": "تواصل مع زيكركلين لجميع استفساراتكم أو للحصول على عرض أسعار مجاني. نحن متواجدون عبر الهاتف والبريد الإلكتروني ونموذج الاتصال الخاص بنا.",
                "contact_page_heading": "اتصل بنا",
                "contact_intro_text": "هل لديك أسئلة أو ترغب في طلب عرض أسعار مجاني؟ املأ النموذج أو اتصل بنا مباشرة.",
                "contact_form_heading": "أرسل لنا رسالة",
                "contact_form_name": "الاسم",
                "contact_form_email": "البريد الإلكتروني",
                "contact_form_phone": "الهاتف",
                "contact_form_message": "الرسالة",
                "contact_form_submit": "إرسال الرسالة",
                "contact_info_heading": "تفاصيل الاتصال",
                "contact_info_phone_label": "الهاتف",
                "contact_info_email_label": "البريد الإلكتروني",
                "contact_info_address_label": "العنوان",
                "contact_info_kvk_label": "رقم السجل التجاري",
                "contact_info_whatsapp_label": "واتساب",
                "contact_call_whatsapp": "اتصل بنا",
                "contact_whatsapp_message": "أرسل واتساب",
                "contact_send_email": "أرسل بريدًا إلكترونيًا",
                "contact_info_phone": "الهاتف:", // for footer
                "contact_info_email": "E-mail:", // for footer
                "contact_info_address_full": "كانسترات 7، 6971 كيه جيه برومين", // for footer
                "contact_info_kvk": "رقم السجل التجاري:", // for footer

                // New Footer Credit Line Translations
                "footer_credit_line_main": "© 2025 زيكركلين. جميع الحقوق محفوظة.",
                "footer_developed_by_prefix": "تصميم وتطوير بواسطة "
            }
        },

        // Initialization function
        init() {
            // Initialize darkMode state from local storage or html class
            const storedTheme = localStorage.getItem('zekerclean_theme');
            if (storedTheme === 'dark') {
                document.documentElement.classList.add('dark');
                this.darkMode = true;
            } else {
                document.documentElement.classList.remove('dark');
                this.darkMode = false;
            }
            this.updateLogoSrc(); // Set initial logo based on resolved darkMode state

            this.applyLanguage(); // Apply language and direction
            this.setActivePage(window.location.href); // Set active page for initial load
            
            // Listen for changes in darkMode property (from x-model)
            this.$watch('darkMode', (value) => {
                if (value) {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('zekerclean_theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('zekerclean_theme', 'light');
                }
                this.updateLogoSrc();
            });

            // Listen for changes in dark mode from local storage (if other tabs change it)
            window.addEventListener('storage', this.handleStorageChange.bind(this));
            // Close mobile menu if window is resized to a larger size
            window.addEventListener('resize', () => {
                if (window.innerWidth > 992 && this.isMobileMenuOpen) {
                    this.isMobileMenuOpen = false;
                    this.isLangDropdownOpen = false; // Also close language dropdown
                }
            });

            // Close language dropdown on Escape key press
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.isLangDropdownOpen = false;
                }
            });

            // New: Intercept internal link clicks for SPA navigation
            document.body.addEventListener('click', (e) => {
                const target = e.target.closest('a');
                // Check if it's an internal link (same origin), not a special link (e.g., mailto, tel),
                // and does not have target="_blank", and is not an anchor link (starts with # or contains # but is same page)
                if (target && target.origin === window.location.origin && !target.hasAttribute('target')) {
                    const currentPath = window.location.pathname;
                    const targetPath = new URL(target.href).pathname;
                    const targetHash = new URL(target.href).hash;

                    // If it's an anchor link on the same page, let default browser behavior handle it (scroll to anchor)
                    if (currentPath === targetPath && targetHash) {
                        return;
                    }
                    
                    // Prevent default navigation for all other internal links
                    e.preventDefault();
                    this.loadPage(target.href);
                }
            });

            // New: Handle browser back/forward buttons
            window.addEventListener('popstate', (e) => {
                this.loadPage(window.location.href, true); // Pass 'true' to indicate it's a popstate, not a new push
            });
        },

        // Methods
        updateLogoSrc() {
            this.logoSrc = this.darkMode ? 'logo_dark_mode.png' : 'demo-6.png';
        },

        setLanguage(lang) {
            this.currentLang = lang;
            localStorage.setItem('zekerclean_lang', lang);
            this.applyLanguage();
            this.isMobileMenuOpen = false; // Close mobile menu on language change
            this.isLangDropdownOpen = false; // Close language dropdown after selection
        },

        applyLanguage() {
            const currentTranslations = this.translations[this.currentLang];
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.dataset.i18n;
                if (currentTranslations && currentTranslations[key]) {
                    // Handle special cases for meta tags
                    if (element.tagName === 'TITLE') {
                        document.title = currentTranslations[key];
                    } else if (element.tagName === 'META' && element.name === 'description') {
                        element.content = currentTranslations[key];
                    } else {
                        element.textContent = currentTranslations[key];
                    }
                }
            });
            // Update document language attribute
            document.documentElement.setAttribute('lang', this.currentLang);

            // Apply directionality only to main content and footer credit
            this.isRTL = (this.currentLang === 'ar');
            const mainElement = document.querySelector('main.page-content');
            if (mainElement) {
                mainElement.setAttribute('dir', this.isRTL ? 'rtl' : 'ltr');
                // Apply 'rtl' class for CSS styling if needed
                if (this.isRTL) {
                    mainElement.classList.add('rtl');
                } else {
                    mainElement.classList.remove('rtl');
                }
            }
            const footerBottomElement = document.querySelector('footer .footer-bottom');
            if (footerBottomElement) {
                footerBottomElement.setAttribute('dir', this.isRTL ? 'rtl' : 'ltr');
            }
        },

        setActivePage(url) {
            const path = new URL(url).pathname;
            // Remove active class from all nav links
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
            });

            // Add active class to the current page's link
            if (path.includes('about.html')) {
                this.activePage = 'about';
                document.querySelector('nav ul li a[href*="about.html"]')?.classList.add('active');
            } else if (path.includes('services.html')) {
                this.activePage = 'services';
                document.querySelector('nav ul li a[href*="services.html"]')?.classList.add('active');
            } else if (path.includes('contact.html')) {
                this.activePage = 'contact';
                document.querySelector('nav ul li a[href*="contact.html"]')?.classList.add('active');
            } else {
                this.activePage = 'home';
                document.querySelector('nav ul li a[href="index.html"]')?.classList.add('active');
            }
        },

        handleStorageChange(event) {
            if (event.key === 'zekerclean_theme') { // Changed from 'darkMode' to 'theme'
                const newThemeIsDark = event.newValue === 'dark';
                if (this.darkMode !== newThemeIsDark) { // Only update if different
                    this.darkMode = newThemeIsDark;
                    if (newThemeIsDark) {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                    this.updateLogoSrc();
                }
            }
            if (event.key === 'zekerclean_lang') {
                if (this.currentLang !== event.newValue) { // Only update if different
                    this.currentLang = event.newValue;
                    this.applyLanguage();
                }
            }
        },

        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
            this.isLangDropdownOpen = false; // Close language dropdown when mobile menu toggles
        },

        closeMobileMenu() {
            this.isMobileMenuOpen = false;
        },

        async loadPage(url, isPopstate = false) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const text = await response.text();

                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'text/html');

                // 1. Update <main> content
                const newMain = doc.querySelector('main.page-content');
                const currentMain = document.querySelector('main.page-content');
                if (newMain && currentMain) {
                    currentMain.replaceWith(newMain);
                }

                // 2. Update <title> and <meta name="description">
                const newTitle = doc.querySelector('title');
                if (newTitle) {
                    document.title = newTitle.textContent;
                }
                const newMetaDescription = doc.querySelector('meta[name="description"]');
                const currentMetaDescription = document.querySelector('meta[name="description"]');
                if (newMetaDescription && currentMetaDescription) {
                    currentMetaDescription.content = newMetaDescription.content;
                }

                // 3. Update URL and history (only for new navigation, not popstate)
                if (!isPopstate) {
                    history.pushState({ path: url }, '', url);
                }

                // 4. Re-apply Alpine state (active page, language, dark mode)
                this.setActivePage(url);
                this.applyLanguage(); // This will re-translate and re-apply dir attribute to new main
                // this.darkMode is already reactive, so it will apply if the html.dark class is present

                // 5. Close mobile menu if open
                this.closeMobileMenu();

                // 6. Scroll to top
                window.scrollTo(0, 0);

            } catch (error) {
                console.error('SPA navigation failed:', error);
                // Fallback to full page reload if fetch/DOM parsing fails
                window.location.href = url;
            }
        },

        submitContactForm() {
            this.formMessage = null; // Clear previous messages
            const { name, email, phone, message } = this.contactForm;

            // Basic validation
            if (!name || !email || !message) {
                this.formMessage = { type: 'error', text: 'Please fill in all required fields.' };
                this.translateFormMessage();
                return;
            }

            // Simulate sending email (in a real app, this would be an API call)
            console.log('Contact form submitted:', { name, email, phone, message });

            // Display success message
            this.formMessage = { type: 'success', text: 'Thank you for your message! We will get back to you soon.' };
            this.translateFormMessage();

            // Clear form
            this.contactForm = { name: '', email: '', phone: '', message: '' };

            // Optional: for a real email, you'd integrate with a backend here.
            // Example for mailto link - not used for direct submission, but good for reference:
            // window.location.href = `mailto:info@zekerclean.nl?subject=Contact%20from%20Website&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
        },

        translateFormMessage() {
            if (this.formMessage) {
                if (this.currentLang === 'nl') {
                    if (this.formMessage.type === 'error') {
                        this.formMessage.text = 'Vul alstublieft alle verplichte velden in.';
                    } else if (this.formMessage.type === 'success') {
                        this.formMessage.text = 'Bedankt voor uw bericht! We nemen spoedig contact met u op.';
                    }
                } else if (this.currentLang === 'ar') {
                    if (this.formMessage.type === 'error') {
                        this.formMessage.text = 'الرجاء تعبئة جميع الحقول المطلوبة.';
                    } else if (this.formMessage.type === 'success') {
                        this.formMessage.text = 'شكرا لرسالتك! سوف نتواصل معك قريبا.';
                    }
                } else if (this.currentLang === 'en') { // Ensure English messages are also translated if applicable
                    if (this.formMessage.type === 'error') {
                        this.formMessage.text = 'Please fill in all required fields.';
                    } else if (this.formMessage.type === 'success') {
                        this.formMessage.text = 'Thank you for your message! We will get back to you soon.';
                    }
                }
            }
        }
    }));
});
