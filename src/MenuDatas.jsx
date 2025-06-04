const coffeeTypes = {
  arabica: "(عربیکا)",
  robusta: "(روبوستا)",
  commercial: "(کامرشال)",
  half: '(50-50)'
};

const MenuData = {
  categories: [
    {
      id: 1,
      name: "نوشیدنی‌های سرد با قهوه",
      items: [
        { id: 1, name: "تونیک انبه", price: 85000 },
        { id: 2, name: "تونیک توت فرنگی", price: 85000 },
        { id: 3, name: "تونیک آناناس", price: 95000 },
        { id: 4, name: "آیسد لاته", price: 105000, type: coffeeTypes.arabica },
        { id: 5, name: "آیسد لاته", price: 90000, type: coffeeTypes.half },
        { id: 6, name: "آیسد لاته نارگیل", price: 110000, type: coffeeTypes.arabica },
        { id: 7, name: "آیسد لاته نارگیل", price: 95000 },
        { id: 8, name: "آیسد لاته با سیروپ", price: 110000, type: coffeeTypes.arabica },
        { id: 9, name: "آیسد لاته با سیروپ", price: 100000, type: coffeeTypes.commercial },
        { id: 10, name: "آیسد موکا", price: 115000, type: coffeeTypes.arabica },
        { id: 11, name: "آیسد موکا", price: 105000, type: coffeeTypes.commercial },
        { id: 12, name: "آفوگاتو وانیل", price: 100000, type: coffeeTypes.arabica },
        { id: 13, name: "آفوگاتو وانیل", price: 100000, type: coffeeTypes.commercial },
        { id: 14, name: "آفوگاتو شکلات", price: 100000, type: coffeeTypes.arabica },
        { id: 15, name: "آفوگاتو شکلات", price: 100000, type: coffeeTypes.commercial },
        { id: 16, name: "قهوه گل سرخ", price: 85000 }
      ]
    },
    {
      id: 2,
      name: "نوشیدنی‌های سرد بدون قهوه",
      items: [
        { id: 17, name: "شیک کره بیسکوییت", price: 100000 },
        { id: 18, name: "شیک بادوم زمینی", price: 100000 },
        { id: 19, name: "شیک شکلات", price: 100000 },
        { id: 20, name: "تونیک (بدون قهوه)", price: 70000 },
        { id: 21, name: "آسمان آبی", price: 130000 },
        { id: 22, name: "موهیتو", price: 90000 },
        { id: 23, name: "تابستانه", price: 100000 }
      ]
    },
    {
      id: 3,
      name: "نوشیدنی‌های گرم با قهوه",
      items: [
        { id: 24, name: "اسپرسو", price: 75000, type: coffeeTypes.arabica },
        { id: 25, name: "اسپرسو", price: 55000, type: coffeeTypes.half },
        { id: 26, name: "اسپرسو", price: 55000, type: coffeeTypes.robusta },
        { id: 27, name: "امریکانو", price: 80000, type: coffeeTypes.arabica },
        { id: 28, name: "امریکانو", price: 60000, type: coffeeTypes.half },
        { id: 29, name: "امریکانو", price: 60000, type: coffeeTypes.robusta },
        { id: 30, name: "لاته", price: 105000, type: coffeeTypes.arabica },
        { id: 31, name: "لاته", price: 90000, type: coffeeTypes.half },
        { id: 32, name: "لاته نارگیل", price: 110000, type: coffeeTypes.arabica },
        { id: 33, name: "لاته نارگیل", price: 95000 },
        { id: 34, name: "لاته با سیروپ", price: 110000, type: coffeeTypes.arabica },
        { id: 35, name: "لاته با سیروپ", price: 100000, type: coffeeTypes.commercial },
        { id: 36, name: "موکا", price: 115000, type: coffeeTypes.arabica },
        { id: 37, name: "موکا", price: 105000, type: coffeeTypes.commercial },
        { id: 38, name: "لاته نارگیل بادوم زمینی", price: 120000, type: coffeeTypes.arabica },
        { id: 39, name: "لاته نارگیل بادوم زمینی", price: 105000, type: coffeeTypes.commercial },
        { id: 40, name: "لاته کرم بیسکوییت", price: 120000, type: coffeeTypes.arabica },
        { id: 41, name: "لاته کرم بیسکوییت", price: 105000, type: coffeeTypes.commercial },
        { id: 42, name: "کاپوچینو", price: 90000, type: coffeeTypes.arabica },
        { id: 43, name: "کاپوچینو", price: 80000, type: coffeeTypes.commercial },
        { id: 44, name: "کاپوچینو پسته", price: 155000 }
      ]
    },
    {
      id: 4,
      name: "نوشیدنی‌های گرم بدون قهوه",
      items: [
        { id: 45, name: "هات چاکلت", price: 90000 },
        { id: 46, name: "هات چاکلت پینات", price: 100000 },
        { id: 47, name: "چای ماسالا", price: 80000 },
        { id: 48, name: "چای کرک", price: 80000 },
        { id: 49, name: "پسته داغ", price: 110000 },
        { id: 50, name: "کارامل نسکافه", price: 80000 }
      ]
    },
    {
      id: 5,
      name: "ماچا بار",
      items: [
        { id: 51, name: "لاته ماچا", price: 80000 },
        { id: 52, name: "لاته ماچا توت فرنگی-نارگیل", price: 90000 }
      ]
    },
    {
      id: 6,
      name: "پروتئین بار",
      items: [
        { id: 53, name: "لاته پروتئین", price: 170000 },
        { id: 54, name: "شیک پروتئین", price: 190000 }
      ]
    }
  ]
};

export default MenuData;