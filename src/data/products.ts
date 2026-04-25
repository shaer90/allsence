export interface Product {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  count: number;
  color: string;
  colorDark: string;
  bg: [string, string];
  badge: string;
  features: string[];
  desc: string;
  longDesc: string;
  specs: { label: string; value: string }[];
  image?: string; // base64 uploaded image
}

export const PRODUCTS: Product[] = [
  {
    id: 'daily-pads',
    name: 'Daily Pads',
    nameAr: 'فوط يومية',
    price: 12.99,
    count: 60,
    color: '#E91E8C',
    colorDark: '#880E4F',
    bg: ['#1a0010', '#2d0020'],
    badge: 'الأكثر مبيعاً',
    features: ['برائحة الصابون المنعشة', 'ناعمة على البشرة', '60 قطعة في العبوة', 'للاستخدام اليومي'],
    desc: 'فوطتك اليومية المثالية. حماية ناعمة ومريحة طوال اليوم مع رائحة صابون منعشة.',
    longDesc: 'الفوط اليومية من Allsence مصممة لتمنحك الراحة والحماية الكاملة طوال اليوم. بتركيبتها الناعمة المصنوعة من أجود أنواع الألياف، تضمن لك الحماية من التسرب مع إبقاء البشرة جافة ومنتعشة. رائحة الصابون المنعشة تمنحك ثقة لا تنتهي طوال اليوم.',
    specs: [
      { label: 'الكمية', value: '60 فوطة' },
      { label: 'المقاس', value: 'Regular' },
      { label: 'الرائحة', value: 'صابون منعش' },
      { label: 'المادة', value: 'ألياف ناعمة' },
      { label: 'الاستخدام', value: 'يومي' },
    ],
  },
  {
    id: 'ultra-night',
    name: 'Ultra Night',
    nameAr: 'فوط ليلية ألترا',
    price: 9.99,
    count: 7,
    color: '#2196F3',
    colorDark: '#0D47A1',
    bg: ['#000d1a', '#001a33'],
    badge: '100% قطن',
    features: ['تقنية Liquid Lock GEL', 'حماية ليلية فائقة', '100% قطن طبيعي', 'جانبان واقيان'],
    desc: 'الحماية الليلية الأكثر موثوقية بتقنية Liquid Lock GEL اليابانية.',
    longDesc: 'Ultra Night من Allsence هي الحل المثالي للحماية الليلية. تعتمد على تقنية Liquid Lock GEL اليابانية المتقدمة التي تحبس السوائل فوراً وتمنع أي تسرب. مصنوعة من 100% قطن طبيعي يلامس بشرتك بلطف شديد، مع جانبين واقيين يضمنان حماية 360 درجة طوال الليل.',
    specs: [
      { label: 'الكمية', value: '7 فوطة' },
      { label: 'المقاس', value: 'XL Night' },
      { label: 'التقنية', value: 'Liquid Lock GEL' },
      { label: 'المادة', value: '100% قطن طبيعي' },
      { label: 'الاستخدام', value: 'ليلي' },
    ],
  },
  {
    id: 'plus',
    name: 'Plus',
    nameAr: 'فوط بلس',
    price: 10.99,
    count: 8,
    color: '#9C27B0',
    colorDark: '#4A148C',
    bg: ['#0d0015', '#1a0030'],
    badge: 'Extra Large',
    features: ['تقنية Liquid Lock GEL', 'حجم Extra Large', 'حماية طوال اليوم', 'قطن 100% طبيعي'],
    desc: 'حماية معززة في الأيام الصعبة بتقنية Liquid Lock GEL.',
    longDesc: 'فوط بلس من Allsence مصممة للأيام التي تحتاجين فيها لحماية إضافية. بحجم Extra Large وتقنية Liquid Lock GEL اليابانية، تضمن لك القدرة الاستيعابية القصوى مع راحة تامة طوال اليوم. المادة 100% قطن طبيعي تحافظ على نضارة بشرتك.',
    specs: [
      { label: 'الكمية', value: '8 فوطة' },
      { label: 'المقاس', value: 'Extra Large' },
      { label: 'التقنية', value: 'Liquid Lock GEL' },
      { label: 'المادة', value: '100% قطن طبيعي' },
      { label: 'الاستخدام', value: 'نهاري مكثف' },
    ],
  },
  {
    id: 'premium-xxl',
    name: 'Premium XXL',
    nameAr: 'بريميوم XXL',
    price: 15.99,
    count: 7,
    color: '#FF6D00',
    colorDark: '#BF360C',
    bg: ['#1a0a00', '#2d1500'],
    badge: 'للبشرة الحساسة',
    features: ['100 طبقة تنفس', 'لأصحاب PCOS والحساسية', 'مضاد للبكتيريا', 'فردية التغليف'],
    desc: 'مخصصة للنساء ذوات البشرة الحساسة وأصحاب PCOS.',
    longDesc: 'Premium XXL من Allsence هي الخيار الأمثل للنساء اللواتي يعانين من PCOS، الحساسية، الأكزيما، البشرة الحساسة، أو التهيج الجلدي. تحتوي على 100 طبقة تنفس مع خصائص مضادة للبكتيريا، مما يجعلها آمنة حتى في الحالات الأكثر حساسية. التغليف الفردي لكل فوطة يضمن النظافة والراحة الكاملة.',
    specs: [
      { label: 'الكمية', value: '7 فوطة' },
      { label: 'المقاس', value: 'XXL' },
      { label: 'الطبقات', value: '100 طبقة تنفس' },
      { label: 'المادة', value: '100% قطن عضوي' },
      { label: 'الاستخدام', value: 'للبشرة الحساسة' },
    ],
  },
  {
    id: 'premium-pants',
    name: 'Premium Pants',
    nameAr: 'بنطلون بريميوم',
    price: 18.99,
    count: 3,
    color: '#E91E8C',
    colorDark: '#880E4F',
    bg: ['#1a0015', '#2d0025'],
    badge: 'Super Comfort',
    features: ['راحة قصوى 360°', 'يشبه الملابس الداخلية', 'مثالي للسفر والرياضة', 'سهل الارتداء والخلع'],
    desc: 'ثقة كاملة وحرية حركة مع حماية 360 درجة.',
    longDesc: 'Premium Pants من Allsence يمنحك تجربة حماية لم تشعري بها من قبل. يشبه تماماً الملابس الداخلية العادية مما يمنحك حرية الحركة الكاملة. مثالي للسفر، الرياضة، أو أي يوم تريدين فيه نسيان أنك تضعين حماية. حماية 360 درجة بمواد فائقة الامتصاص.',
    specs: [
      { label: 'الكمية', value: '3 قطع' },
      { label: 'المقاس', value: 'One Size Fits Most' },
      { label: 'الحماية', value: '360 درجة' },
      { label: 'المادة', value: 'قطن + ألياف خاصة' },
      { label: 'الاستخدام', value: 'سفر / رياضة / يومي' },
    ],
  },
];

