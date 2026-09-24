/* KJ Fitness — shared prototype script for the four design directions.
   Holds the EN/HE copy, the language toggle, menu, modal, accordion/tab
   behaviour and the WhatsApp links. In the final single-file build this
   is inlined. Hebrew copy is a DRAFT for Kirsten to review. */
(function () {
  var WA = '972533985895';
  var L = function (s) { return '<span class="ltr" dir="ltr">' + s + '</span>'; };

  var DICT = {
    en: {
      'meta.title': 'KJ Fitness — Empowered Through Movement',
      'nav.home': 'Home', 'nav.about': 'About', 'nav.services': 'Services',
      'nav.events': 'Upcoming Events', 'nav.contact': 'Contact',
      'cta.consult': 'Free Consultation', 'cta.learn': 'Learn More',
      'cta.login': 'Login', 'menu.open': 'Open menu', 'menu.close': 'Close menu', 'menu.label': 'Menu',
      'lang.label': 'Language',

      'hero.location': 'Tel Aviv &amp; surrounding areas',
      'hero.title': 'Empowered Through Movement',
      'hero.title.l1': 'Empowered', 'hero.title.l2': 'Through Movement',
      'hero.mission': 'Strength isn’t just about how you look — it’s about how you feel. Move better, get stronger, and build a body that supports you for life.',
      'hero.note': 'Personal training · Online &amp; hybrid coaching · Outdoor classes · Corporate',

      'about.eyebrow': 'About',
      'about.title': 'Who is Kirsten Jemma?',
      'about.p1': 'My journey started in competitive sport, representing South Africa in judo and MMA. I learned early that strength isn’t just something you build in training — it carries into every part of your life, giving you confidence, capability and the freedom to move through life feeling strong and in control, especially as you get older.',
      'about.p2': 'Over the past ' + L('10+') + ' years I’ve coached across martial arts, group fitness and CrossFit — from complete beginners to experienced athletes.',
      'about.p3': 'Today my focus is helping people build strength that lasts. My approach combines functional strength training, movement quality, consistency and long-term progression.',
      'about.closing': 'Strength creates freedom, and that’s what we’re building.',
      'about.f1.k': 'Judo &amp; MMA', 'about.f1.v': 'Competed for South Africa',
      'about.f2.k': L('10+') + ' years', 'about.f2.v': 'Martial arts, group fitness, CrossFit',
      'about.f3.k': 'All levels', 'about.f3.v': 'Complete beginners to athletes',
      'about.cap': 'Kirsten Jemma · KJ Fitness',
      'about.photo': 'Kirsten Jemma, founder of KJ Fitness, training with a barbell',

      'approach.eyebrow': 'What we’re about',
      'approach.title': 'The KJ Fitness Approach',
      'approach.sub': 'Not quick fixes or short-term results — a body and mindset that keep you strong, capable and feeling good, for life.',
      'p1.t': 'Strength', 'p1.d': 'Real, functional strength that serves you in everyday life — not just in the gym.',
      'p2.t': 'Longevity', 'p2.d': 'Training for the long game: protecting your body, preventing injury and keeping mobility as you age.',
      'p3.t': 'Movement Quality', 'p3.d': 'Technique comes first. Moving well, efficiently and safely is the foundation for everything else.',
      'p4.t': 'Consistency', 'p4.d': 'No shortcuts — just showing up, again and again, with habits that fit your life.',

      'events.eyebrow': 'What’s on',
      'events.title': 'Upcoming Events',
      'events.sub': 'Workshops, pop-up workouts and collaborations.',
      'events.sample': 'Sample events',
      'e1.day': '14', 'e1.mon': 'Nov', 'e1.date': 'Sat, 14 Nov 2026', 'e1.time': L('12:00–13:30'),
      'e1.t': 'Strength &amp; Conditioning Seminar for Martial Artists',
      'e1.loc': 'Fight TLV, Tel Aviv', 'e1.price': L('₪100'),
      'e1.d': 'Theory plus hands-on coaching: build strength, improve performance and reduce injury risk.',
      'e2.day': '30', 'e2.mon': 'Oct', 'e2.date': 'Fri, 30 Oct 2026', 'e2.time': L('08:00–09:00'),
      'e2.t': 'Pop-up Workout: Strength in the Park',
      'e2.loc': 'Park behind the Daniel Moritz building', 'e2.price': L('₪60'),
      'e2.d': 'An open, all-levels session outdoors. Bring water and a friend.',
      'events.book': 'Details &amp; booking',
      'events.empty.t': 'No events right now',
      'events.empty.d': 'New workshops and pop-ups are announced on WhatsApp first. Leave your number and you’ll hear about the next one.',
      'events.empty.cta': 'Get notified on WhatsApp',
      'events.note': 'Want to hear about new events?',
      'events.note.cta': 'Join the WhatsApp list',
      'proto.events': 'Events', 'proto.full': 'With events', 'proto.empty': 'Empty',

      'quote.text': 'True strength isn’t just about how you look — it’s about how you feel. Confident, capable, and in control of your body for life.',
      'quote.by': 'Kirsten', 'quote.role': 'Founder of KJ Fitness',

      'svc.eyebrow': 'Services',
      'svc.title': 'Find Your Path',
      'svc.sub': 'Every service is tailored to your level, goals and lifestyle — with professional support every step of the way.',
      'svc.month': '/ month', 'svc.from': 'from', 'svc.min': '/ ' + L('55') + ' min',
      'svc.includes': 'What’s included',

      's1.t': 'Private Coaching', 's1.tag': 'In-person',
      's1.d': 'Personalised strength and conditioning sessions tailored to your goals, fitness level and lifestyle.',
      's1.r1': '1:1 training', 's1.r1p': L('₪350'),
      's1.r2': 'Couples (' + L('1:2') + ')', 's1.r2p': L('₪600'),
      's1.r3': 'Small group (' + L('4–6') + ' people)', 's1.r3p': L('₪1,000–1,200'),
      's1.summary': L('₪350') + ' / session',
      's1.cta': 'Book on WhatsApp',

      's2.t': 'Online Coaching', 's2.tag': 'App + calls', 's2.price': L('₪450'),
      's2.d': 'A structured, personalised plan you follow independently — with coaching, accountability and feedback.',
      's2.f1': 'Initial assessment call',
      's2.f2': 'Monthly check-in call with plan updates',
      's2.f3': 'App access — tracking, logging, progress &amp; video feedback',
      's2.f4': 'Ongoing chat support',
      's2.cta': 'Ask about Online',

      's3.t': 'Hybrid Coaching', 's3.tag': 'In-person + app', 's3.price': L('₪600'),
      's3.d': 'Personal programming plus in-person coaching to refine technique and stay accountable.',
      's3.f1': 'Everything in Online Coaching',
      's3.f2': '1 in-person session per month',
      's3.f3': 'Extra sessions at a reduced rate',
      's3.cta': 'Ask about Hybrid',

      's4.t': 'Longevity Strength Class', 's4.tag': 'Outdoor group', 's4.price': L('₪280'),
      's4.d': 'Strength, balance and coordination, outdoors — to help you move better and feel stronger.',
      's4.f1': 'Tuesdays at ' + L('18:15'),
      's4.f2': 'Park behind the Daniel Moritz building',
      's4.f3': 'All levels welcome',
      's4.f4': 'Single-session option',
      's4.f5': 'Free trial class',
      's4.when': 'Tue ' + L('18:15'),
      's4.cta': 'Book a free trial',

      's5.t': 'Corporate / Hi-Tech', 's5.tag': 'Teams &amp; companies', 's5.price': 'Enquiry-based',
      's5.d': 'Fitness experiences that boost employee wellbeing, energy and team connection.',
      's5.f1': 'Wellness days',
      's5.f2': 'Team-building sessions',
      's5.f3': 'In-house weekly or monthly training',
      's5.f4': 'Events',
      's5.cta': 'Enquire on WhatsApp',

      'cmp.title': 'Compare coaching plans',
      'cmp.row.inperson': 'In-person sessions', 'cmp.row.app': 'App: tracking, logging, video feedback',
      'cmp.row.calls': 'Assessment + monthly check-in calls', 'cmp.row.chat': 'Ongoing chat support',
      'cmp.v.every': 'Every session', 'cmp.v.monthly': L('1') + ' per month + extras at a reduced rate', 'cmp.v.no': 'Not included',
      'cmp.best': 'Best of both', 'cmp.anywhere': 'Train anywhere', 'cmp.face': 'Face to face', 'cmp.more': 'Also on offer',
      'cmp.v.yes': 'Included',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Ready to Get Started?',
      'contact.sub': 'Start with a free consultation — let’s get to know each other and build the right plan for you.',
      'c.wa': 'WhatsApp', 'c.wa.v': L('0533-985-895'), 'c.wa.d': 'Message us and we’ll get back to you soon',
      'c.ig': 'Instagram', 'c.ig.v': L('@kj__fitness__'), 'c.ig.d': 'Daily training content',
      'c.fb': 'Facebook', 'c.fb.v': 'KJ Fitness', 'c.fb.d': 'Updates and events',
      'contact.cta': 'Send a Message Now',

      'footer.tagline': 'Empowered Through Movement',
      'footer.copy': '© 2026 KJ Fitness · Built by Pappo Studios',

      'modal.eyebrow': 'Free, no commitment',
      'modal.title': 'Book a Free Consultation',
      'modal.sub': 'Choose a topic and WhatsApp opens with your message ready.',
      'm.personal': 'Personal Training', 'm.online': 'Online Coaching', 'm.hybrid': 'Hybrid Coaching',
      'm.longevity': 'Longevity Strength Class', 'm.corporate': 'Corporate / Hi-Tech', 'm.general': 'General question',
      'modal.close': 'Close', 'modal.foot': 'Opens WhatsApp · ' + L('0533-985-895'),

      'ph.class': 'PHOTO: outdoor Longevity class, group mid-exercise, evening light',
      'ph.team': 'PHOTO: corporate team session in an office space',
      'ph.coach': 'PHOTO: Kirsten coaching a client 1:1, close-up on cueing'
    },

    he: {
      'meta.title': 'KJ Fitness — עוצמה דרך תנועה',
      'nav.home': 'בית', 'nav.about': 'אודות', 'nav.services': 'שירותים',
      'nav.events': 'אירועים קרובים', 'nav.contact': 'יצירת קשר',
      'cta.consult': 'שיחת ייעוץ חינם', 'cta.learn': 'למידע נוסף',
      'cta.login': 'כניסה', 'menu.open': 'פתיחת תפריט', 'menu.close': 'סגירת תפריט', 'menu.label': 'תפריט',
      'lang.label': 'שפה',

      'hero.location': 'תל אביב והסביבה',
      'hero.title': 'עוצמה דרך תנועה',
      'hero.title.l1': 'עוצמה', 'hero.title.l2': 'דרך תנועה',
      'hero.mission': 'כוח זה לא רק איך שנראים — זה איך שמרגישים. לנוע טוב יותר, להתחזק, ולבנות גוף שתומך בך לכל החיים.',
      'hero.note': 'אימון אישי · ליווי אונליין והיברידי · אימונים בחוץ · חברות',

      'about.eyebrow': 'אודות',
      'about.title': 'מי זו קירסטן ג׳מה?',
      'about.p1': 'הדרך שלי התחילה בספורט תחרותי — ייצגתי את דרום אפריקה בג׳ודו וב־MMA. כבר אז הבנתי שכוח הוא לא רק משהו שבונים באימון: הוא נכנס לכל תחום בחיים, ונותן ביטחון, יכולת וחופש לנוע בעולם מתוך תחושת שליטה — במיוחד ככל שמתבגרים.',
      'about.p2': 'במשך יותר מ־' + L('10') + ' שנים אימנתי באומנויות לחימה, באימונים קבוצתיים ובקרוספיט — מאנשים שרק מתחילים ועד ספורטאים מנוסים.',
      'about.p3': 'היום אני מתמקדת בבניית כוח שנשאר לאורך שנים. הגישה שלי משלבת אימוני כוח פונקציונליים, איכות תנועה, עקביות והתקדמות לטווח ארוך.',
      'about.closing': 'כוח יוצר חופש — וזה בדיוק מה שאנחנו בונים.',
      'about.f1.k': 'ג׳ודו ו־MMA', 'about.f1.v': 'בנבחרת דרום אפריקה',
      'about.f2.k': L('10+') + ' שנות אימון', 'about.f2.v': 'אומנויות לחימה, קבוצות, קרוספיט',
      'about.f3.k': 'לכל הרמות', 'about.f3.v': 'ממתחילים ועד ספורטאים',
      'about.cap': 'קירסטן ג׳מה · KJ Fitness',
      'about.photo': 'קירסטן ג׳מה, מייסדת KJ Fitness, באימון עם מוט',

      'approach.eyebrow': 'במה אנחנו מאמינים',
      'approach.title': 'הגישה של KJ Fitness',
      'approach.sub': 'בלי פתרונות קסם ובלי תוצאות לטווח קצר — בונים גוף ותודעה שישאירו אותך חזק/ה, מסוגל/ת ומרגיש/ה טוב, לכל החיים.',
      'p1.t': 'כוח', 'p1.d': 'כוח אמיתי ופונקציונלי שמשרת אותך ביומיום — לא רק בחדר הכושר.',
      'p2.t': 'אריכות ימים', 'p2.d': 'מתאמנים לטווח הארוך: שומרים על הגוף, מונעים פציעות ושומרים על טווחי תנועה גם עם השנים.',
      'p3.t': 'איכות תנועה', 'p3.d': 'הטכניקה קודמת לכול. תנועה נכונה, יעילה ובטוחה היא הבסיס לכל השאר.',
      'p4.t': 'עקביות', 'p4.d': 'אין קיצורי דרך — פשוט להגיע, שוב ושוב, עם הרגלים שמשתלבים בחיים שלך.',

      'events.eyebrow': 'מה קורה',
      'events.title': 'אירועים קרובים',
      'events.sub': 'סדנאות, אימוני פופ־אפ ושיתופי פעולה.',
      'events.sample': 'אירועים לדוגמה',
      'e1.day': '14', 'e1.mon': 'נוב׳', 'e1.date': 'שבת, 14 בנובמבר 2026', 'e1.time': L('12:00–13:30'),
      'e1.t': 'סמינר כוח וכושר לאומני לחימה',
      'e1.loc': 'Fight TLV, תל אביב', 'e1.price': L('₪100'),
      'e1.d': 'תיאוריה ואימון מעשי: איך לבנות כוח, לשפר ביצועים ולהפחית סיכון לפציעות.',
      'e2.day': '30', 'e2.mon': 'אוק׳', 'e2.date': 'שישי, 30 באוקטובר 2026', 'e2.time': L('08:00–09:00'),
      'e2.t': 'אימון פופ־אפ: כוח בפארק',
      'e2.loc': 'הפארק מאחורי בניין דניאל מוריץ', 'e2.price': L('₪60'),
      'e2.d': 'אימון פתוח לכל הרמות באוויר הפתוח. להביא מים — ואפשר גם חבר/ה.',
      'events.book': 'לפרטים ולהרשמה',
      'events.empty.t': 'אין אירועים כרגע',
      'events.empty.d': 'סדנאות ואימוני פופ־אפ חדשים מתפרסמים קודם בוואטסאפ. אפשר להשאיר מספר ולקבל עדכון על האירוע הבא.',
      'events.empty.cta': 'לקבלת עדכונים בוואטסאפ',
      'events.note': 'רוצה לשמוע על אירועים חדשים?',
      'events.note.cta': 'להצטרפות לרשימת הוואטסאפ',
      'proto.events': 'אירועים', 'proto.full': 'עם אירועים', 'proto.empty': 'ריק',

      'quote.text': 'כוח אמיתי הוא לא רק איך שנראים — אלא איך שמרגישים. בטוחים, מסוגלים, ובשליטה על הגוף שלנו לכל החיים.',
      'quote.by': 'קירסטן', 'quote.role': 'מייסדת KJ Fitness',

      'svc.eyebrow': 'שירותים',
      'svc.title': 'המסלול שמתאים לך',
      'svc.sub': 'כל מסלול מותאם לרמה, למטרות ולאורח החיים שלך — עם ליווי מקצועי לאורך כל הדרך.',
      'svc.month': 'לחודש', 'svc.from': 'החל מ־', 'svc.min': '/ ' + L('55') + ' דק׳',
      'svc.includes': 'מה כלול',

      's1.t': 'אימון אישי', 's1.tag': 'פרונטלי',
      's1.d': 'אימוני כוח וכושר מותאמים אישית למטרות, לרמת הכושר ולאורח החיים שלך.',
      's1.r1': 'אימון אישי ' + L('1:1'), 's1.r1p': L('₪350'),
      's1.r2': 'אימון זוגי (' + L('1:2') + ')', 's1.r2p': L('₪600'),
      's1.r3': 'קבוצה קטנה (' + L('4–6') + ' משתתפים)', 's1.r3p': L('₪1,000–1,200'),
      's1.summary': L('₪350') + ' לאימון',
      's1.cta': 'לתיאום בוואטסאפ',

      's2.t': 'ליווי אונליין', 's2.tag': 'אפליקציה + שיחות', 's2.price': L('₪450'),
      's2.d': 'תוכנית אימונים אישית ומובנית לביצוע עצמאי — עם ליווי, מחויבות ופידבק שוטף.',
      's2.f1': 'שיחת אבחון ראשונית',
      's2.f2': 'שיחת מעקב חודשית ועדכון התוכנית',
      's2.f3': 'גישה לאפליקציה — מעקב, תיעוד, התקדמות ופידבק על סרטונים',
      's2.f4': 'ליווי שוטף בצ׳אט',
      's2.cta': 'לפרטים על ליווי אונליין',

      's3.t': 'ליווי היברידי', 's3.tag': 'פרונטלי + אפליקציה', 's3.price': L('₪600'),
      's3.d': 'תוכנית אישית בשילוב אימון פרונטלי — לדיוק הטכניקה ולשמירה על רצף.',
      's3.f1': 'כל מה שכלול בליווי אונליין',
      's3.f2': 'אימון פרונטלי אחד בחודש',
      's3.f3': 'אימונים נוספים במחיר מוזל',
      's3.cta': 'לפרטים על ליווי היברידי',

      's4.t': 'קבוצת כוח לאריכות ימים', 's4.tag': 'קבוצה בחוץ', 's4.price': L('₪280'),
      's4.d': 'כוח, שיווי משקל וקואורדינציה באוויר הפתוח — כדי לנוע טוב יותר ולהרגיש חזק/ה יותר.',
      's4.f1': 'בימי שלישי ב־' + L('18:15'),
      's4.f2': 'בפארק מאחורי בניין דניאל מוריץ',
      's4.f3': 'מתאים לכל הרמות',
      's4.f4': 'אפשר להגיע גם לאימון בודד',
      's4.f5': 'אימון ניסיון בחינם',
      's4.when': 'שלישי ' + L('18:15'),
      's4.cta': 'לתיאום אימון ניסיון',

      's5.t': 'חברות והייטק', 's5.tag': 'צוותים וארגונים', 's5.price': 'לפי פנייה',
      's5.d': 'חוויות כושר שמחזקות את הבריאות, האנרגיה והחיבור בין אנשי הצוות.',
      's5.f1': 'ימי בריאות',
      's5.f2': 'אימוני גיבוש',
      's5.f3': 'אימונים קבועים בחברה — שבועיים או חודשיים',
      's5.f4': 'אירועים',
      's5.cta': 'לפנייה בוואטסאפ',

      'cmp.title': 'השוואת מסלולי ליווי',
      'cmp.row.inperson': 'אימונים פרונטליים', 'cmp.row.app': 'אפליקציה: מעקב, תיעוד ופידבק בווידאו',
      'cmp.row.calls': 'שיחת אבחון ושיחת מעקב חודשית', 'cmp.row.chat': 'ליווי שוטף בצ׳אט',
      'cmp.v.every': 'בכל מפגש', 'cmp.v.monthly': 'אימון אחד בחודש + תוספות במחיר מוזל', 'cmp.v.no': 'לא כלול',
      'cmp.best': 'הטוב משני העולמות', 'cmp.anywhere': 'מתאמנים מכל מקום', 'cmp.face': 'פנים מול פנים', 'cmp.more': 'ועוד',
      'cmp.v.yes': 'כלול',

      'contact.eyebrow': 'יצירת קשר',
      'contact.title': 'מוכן/ה להתחיל?',
      'contact.sub': 'הכול מתחיל בשיחת ייעוץ חינם: נכיר, נדבר, ונבנה יחד את התוכנית שמתאימה לך.',
      'c.wa': 'וואטסאפ', 'c.wa.v': L('0533-985-895'), 'c.wa.d': 'אפשר לשלוח הודעה ונחזור אליך בהקדם',
      'c.ig': 'אינסטגרם', 'c.ig.v': L('@kj__fitness__'), 'c.ig.d': 'תכנים יומיים מהאימונים',
      'c.fb': 'פייסבוק', 'c.fb.v': 'KJ Fitness', 'c.fb.d': 'עדכונים ואירועים',
      'contact.cta': 'לשליחת הודעה עכשיו',

      'footer.tagline': 'עוצמה דרך תנועה',
      'footer.copy': '© 2026 KJ Fitness · נבנה ע״י Pappo Studios',

      'modal.eyebrow': 'חינם וללא התחייבות',
      'modal.title': 'תיאום שיחת ייעוץ חינם',
      'modal.sub': 'בחר/י נושא, ו־WhatsApp ייפתח עם הודעה מוכנה.',
      'm.personal': 'אימון אישי', 'm.online': 'ליווי אונליין', 'm.hybrid': 'ליווי היברידי',
      'm.longevity': 'קבוצת כוח לאריכות ימים', 'm.corporate': 'חברות והייטק', 'm.general': 'שאלה כללית',
      'modal.close': 'סגירה', 'modal.foot': 'נפתח בוואטסאפ · ' + L('0533-985-895'),

      'ph.class': 'צילום: קבוצת אריכות ימים בפארק, באמצע תרגיל, אור ערב',
      'ph.team': 'צילום: אימון צוות של חברה בחלל משרדי',
      'ph.coach': 'צילום: קירסטן באימון אישי, תקריב על הדרכה'
    }
  };

  // Prefilled WhatsApp messages, per language.
  var MSG = {
    en: {
      personal: 'Hi Kirsten, I’m interested in Personal Training',
      online: 'Hi Kirsten, I’d like to know more about Online Coaching',
      hybrid: 'Hi Kirsten, I’d like to know more about Hybrid Coaching',
      longevity: 'Hi Kirsten, I’d like to join the Longevity Strength Class',
      corporate: 'Hi Kirsten, I’m interested in Corporate / Hi-Tech packages',
      general: 'Hi Kirsten, I’d like to find out more about KJ Fitness',
      events: 'Hi Kirsten, please keep me updated on upcoming KJ Fitness events'
    },
    he: {
      personal: 'היי קירסטן, אני מתעניין/ת באימון אישי',
      online: 'היי קירסטן, אשמח לשמוע עוד על ליווי אונליין',
      hybrid: 'היי קירסטן, אשמח לשמוע עוד על ליווי היברידי',
      longevity: 'היי קירסטן, אשמח להצטרף לקבוצת הכוח לאריכות ימים',
      corporate: 'היי קירסטן, אני מתעניין/ת באימונים לחברות והייטק',
      general: 'היי קירסטן, אשמח לשמוע עוד על KJ Fitness',
      events: 'היי קירסטן, אשמח לקבל עדכונים על אירועים קרובים של KJ Fitness'
    }
  };


  // Inline icon sprite (no icon-font dependency).
  var S = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    wa: '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/><path fill="currentColor" d="M8.6 7.6c.2-.4.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.3 0 .5.6 1 1.4 1.8 2.4 2.4.2.1.4.1.5 0l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.2.1.4.2.4.4 0 .6-.2 1.3-.8 1.7-.6.4-1.5.6-2.6.2-1.6-.5-3.1-1.6-4.3-3.1-1-1.3-1.5-2.6-1.3-3.6.1-.6.4-1.1.7-1.5z"/>',
    ig: '<g ' + S + '><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/></g><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>',
    fb: '<path fill="currentColor" d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z"/>',
    pin: '<g ' + S + '><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></g>',
    user: '<g ' + S + '><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></g>',
    clock: '<g ' + S + '><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>',
    cal: '<g ' + S + '><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></g>',
    phone: '<g ' + S + '><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18h2"/></g>',
    layers: '<g ' + S + '><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></g>',
    leaf: '<g ' + S + '><path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15"/><path d="M5 19l7-7"/></g>',
    building: '<g ' + S + '><path d="M4 21V3h11v18M15 9h5v12M2 21h20M8 7h3M8 11h3M8 15h3"/></g>',
    chat: '<g ' + S + '><path d="M4 5h16v11H9l-5 4z"/></g>',
    x: '<g ' + S + '><path d="M6 6l12 12M18 6L6 18"/></g>',
    flag: '<g ' + S + '><path d="M5 21V4h11l-2 4 2 4H5"/></g>',
    check: '<g ' + S + '><path d="M5 12.5l4.5 4.5L19 7.5"/></g>',
    minus: '<g ' + S + '><path d="M6 12h12"/></g>'
  };
  var sp = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">';
  for (var k in ICONS) sp += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + ICONS[k] + '</symbol>';
  document.body.insertAdjacentHTML('afterbegin', sp + '</svg>');

  var params = new URLSearchParams(location.search);
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  function applyLang(lang) {
    var d = DICT[lang] || DICT.en;
    var root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.title = d['meta.title'];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n-aria')];
      if (v != null) el.setAttribute('aria-label', v.replace(/<[^>]+>/g, ''));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n-alt')];
      if (v != null) el.alt = v;
    });
    document.querySelectorAll('[data-wa]').forEach(function (el) {
      var m = MSG[lang][el.getAttribute('data-wa')] || '';
      el.href = 'https://wa.me/' + WA + (m ? '?text=' + encodeURIComponent(m) : '');
      el.target = '_blank';
      el.rel = 'noopener';
    });
    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang-btn') === lang));
    });
    store.set('kj-lang', lang);
  }

  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    document.querySelectorAll('[data-menu-toggle]').forEach(function (b) {
      b.setAttribute('aria-expanded', String(open));
    });
  }

  var lastFocus = null;
  function openModal() {
    var m = document.getElementById('consult');
    if (!m) return;
    setMenu(false);
    lastFocus = document.activeElement;
    m.hidden = false;
    document.body.classList.add('modal-open');
    var f = m.querySelector('.consult-opt, a, button');
    if (f) f.focus({ preventScroll: true });
  }
  function closeModal() {
    var m = document.getElementById('consult');
    if (!m || m.hidden) return;
    m.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }

  function setEvents(state) {
    var s = document.getElementById('events');
    if (s) s.setAttribute('data-state', state);
    document.querySelectorAll('[data-events-btn]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-events-btn') === state));
    });
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-lang-btn],[data-menu-toggle],[data-menu-link],[data-consult],[data-close],[data-acc],[role="tab"],[data-events-btn]');
    if (!t) {
      if (e.target.id === 'consult') closeModal();
      return;
    }
    if (t.hasAttribute('data-lang-btn')) applyLang(t.getAttribute('data-lang-btn'));
    else if (t.hasAttribute('data-menu-toggle')) setMenu(!document.body.classList.contains('menu-open'));
    else if (t.hasAttribute('data-menu-link')) setMenu(false);
    else if (t.hasAttribute('data-consult')) { e.preventDefault(); openModal(); }
    else if (t.hasAttribute('data-close')) closeModal();
    else if (t.hasAttribute('data-events-btn')) setEvents(t.getAttribute('data-events-btn'));
    else if (t.hasAttribute('data-acc')) {
      var open = t.getAttribute('aria-expanded') !== 'true';
      t.setAttribute('aria-expanded', String(open));
      var p = document.getElementById(t.getAttribute('aria-controls'));
      if (p) p.hidden = !open;
    } else if (t.getAttribute('role') === 'tab') {
      var list = t.closest('[role="tablist"]');
      list.querySelectorAll('[role="tab"]').forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', String(on));
        x.tabIndex = on ? 0 : -1;
        var p = document.getElementById(x.getAttribute('aria-controls'));
        if (p) p.hidden = !on;
      });
    }
    if (e.target.closest('.consult-opt')) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeModal(); setMenu(false); }
    var t = e.target;
    if (t.getAttribute && t.getAttribute('role') === 'tab' && /Arrow(Left|Right|Up|Down)/.test(e.key)) {
      var tabs = Array.prototype.slice.call(t.closest('[role="tablist"]').querySelectorAll('[role="tab"]'));
      var i = tabs.indexOf(t);
      var rtl = document.documentElement.dir === 'rtl';
      var fwd = e.key === 'ArrowDown' || e.key === (rtl ? 'ArrowLeft' : 'ArrowRight');
      var n = tabs[(i + (fwd ? 1 : -1) + tabs.length) % tabs.length];
      n.click(); n.focus(); e.preventDefault();
    }
  });

  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 24); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (params.has('shot')) document.documentElement.classList.add('shot');
  applyLang(params.get('lang') || (location.hash === '#he' ? 'he' : location.hash === '#en' ? 'en' : null) || store.get('kj-lang') || 'en');
  setEvents(params.get('events') === 'empty' ? 'empty' : 'full');
  window.KJ = { applyLang: applyLang, openModal: openModal, closeModal: closeModal, setMenu: setMenu, setEvents: setEvents };
})();
