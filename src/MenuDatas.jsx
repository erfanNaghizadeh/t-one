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
        { id: 1, name: "تونیک انبه", price: 90000 },
        { id: 2, name: "تونیک توت فرنگی", price: 90000 },
        { id: 3, name: "تونیک آناناس", price: 90000 },
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
        { id: 16, name: "رز سامر کافی", price: 90000 },
        { id: 17, name: "سامر کافی", price: 85000 }
      ]
    },
    {
      id: 2,
      name: "نوشیدنی‌های سرد بدون قهوه",
      items: [
        { id: 18, name: "شیک کره بیسکوییت", price: 100000 },
        { id: 19, name: "شیک بادوم زمینی", price: 100000 },
        { id: 20, name: "شیک شکلات", price: 100000 },
        { id: 21, name: "تونیک (بدون قهوه)", price: 70000 },
        { id: 22, name: "آسمان آبی", price: 130000 },
        { id: 23, name: "موهیتو", price: 90000 },
        { id: 24, name: "تابستانه", price: 100000 }
      ]
    },
    {
      id: 3,
      name: "نوشیدنی‌های گرم با قهوه",
      items: [
        { id: 25, name: "اسپرسو", price: 75000, type: coffeeTypes.arabica },
        { id: 26, name: "اسپرسو", price: 55000, type: coffeeTypes.half },
        { id: 27, name: "اسپرسو", price: 55000, type: coffeeTypes.robusta },
        { id: 28, name: "امریکانو", price: 80000, type: coffeeTypes.arabica },
        { id: 29, name: "امریکانو", price: 60000, type: coffeeTypes.half },
        { id: 30, name: "امریکانو", price: 60000, type: coffeeTypes.robusta },
        { id: 31, name: "لاته", price: 105000, type: coffeeTypes.arabica },
        { id: 32, name: "لاته", price: 90000, type: coffeeTypes.half },
        { id: 33, name: "لاته نارگیل", price: 110000, type: coffeeTypes.arabica },
        { id: 34, name: "لاته نارگیل", price: 95000 },
        { id: 35, name: "لاته با سیروپ", price: 110000, type: coffeeTypes.arabica },
        { id: 36, name: "لاته با سیروپ", price: 100000, type: coffeeTypes.commercial },
        { id: 37, name: "موکا", price: 115000, type: coffeeTypes.arabica },
        { id: 38, name: "موکا", price: 105000, type: coffeeTypes.commercial },
        { id: 39, name: "لاته نارگیل بادوم زمینی", price: 120000, type: coffeeTypes.arabica },
        { id: 40, name: "لاته نارگیل بادوم زمینی", price: 105000, type: coffeeTypes.commercial },
        { id: 41, name: "لاته کرم بیسکوییت", price: 120000, type: coffeeTypes.arabica },
        { id: 42, name: "لاته کرم بیسکوییت", price: 105000, type: coffeeTypes.commercial },
        { id: 43, name: "کاپوچینو", price: 90000, type: coffeeTypes.arabica },
        { id: 44, name: "کاپوچینو", price: 80000, type: coffeeTypes.commercial },
        { id: 45, name: "کاپوچینو پسته", price: 155000 }
      ]
    },
    {
      id: 4,
      name: "نوشیدنی‌های گرم بدون قهوه",
      items: [
        { id: 46, name: "هات چاکلت", price: 90000 },
        { id: 47, name: "هات چاکلت پینات", price: 100000 },
        { id: 48, name: "چای ماسالا", price: 80000 },
        { id: 49, name: "چای کرک", price: 80000 },
        { id: 50, name: "پسته داغ", price: 110000 },
        { id: 51, name: "کارامل نسکافه", price: 80000 }
      ]
    }
  ]
};

export default MenuData;