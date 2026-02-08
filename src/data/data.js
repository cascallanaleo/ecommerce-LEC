const products = [
  {
    id: 1,
    name: "Balanza Comercial Systel Croma 31kg",
    description: "Balanza electrónica diseñada para entornos comerciales que requieren precisión y confiabilidad. Soporta hasta 31 kg, cuenta con pantalla digital de fácil lectura para operador y cliente, y ofrece un diseño moderno y resistente, ideal para comercios minoristas, almacenes y supermercados. Garantiza mediciones rápidas y exactas para una operatoria diaria eficiente.",
    stock: 5,
    image: "/image/balanza-1.png",
    price: 285426,
    category: "balanza"
  },
  {
    id: 2,
    name: "Pilon Ganchera Electronica Systel 300 K",
    description: "Equipo electrónico robusto y confiable, diseñado para el pesaje de cargas colgantes de hasta 300 kg. Ideal para entornos comerciales e industriales, ofrece lectura precisa, estructura resistente y fácil operación, garantizando seguridad y eficiencia en tareas de pesaje diario.",
    stock: 2,
    image: "/image/balanza-2.png",
    price: 472394,
    category: "balanza"
  },
  {
    id: 3,
    name: "Amasadora Planetaria Borgen 1200w",
    description: "Batidora planetaria potente y versátil, equipada con motor de 1200 W, bol de 6 litros y 12 velocidades para adaptarse a distintas preparaciones. Incluye accesorios intercambiables que facilitan el amasado, batido y mezclado, y presenta un diseño moderno en color blanco, ideal para uso doméstico intensivo o semi-profesional. Combina rendimiento, capacidad y comodidad en cada receta.",
    stock: 6,
    image: "/image/amasadora-1.png",
    price: 311397,
    category: "amasadora"
  },
  {
    id: 4,
    name: "Amasadora Rapida 25kg Brito",
    description: "Amasadora industrial de alto rendimiento, diseñada para el procesamiento eficiente de masas de hasta 25 kg. Cuenta con estructura robusta, funcionamiento rápido y confiable, ideal para panaderías, pizzerías y establecimientos gastronómicos que requieren producción continua y homogénea. Garantiza potencia, durabilidad y resultados consistentes en cada uso.",
    stock: 16,
    image: "/image/amasadora-2.png",
    price: 6126500,
    category: "amasadora"
  },
  {
    id: 5,
    name: "Cortadora De Fiambre Fadeco 330 Mm",
    description: "Cortadora profesional de fiambre con disco de 330 mm, diseñada para lograr cortes precisos y uniformes. Su terminación brillante aporta durabilidad y fácil limpieza, mientras que la pinza de sujeción mejora la seguridad y el control durante el uso. Ideal para carnicerías, fiambrerías y comercios gastronómicos.",
    stock: 7,
    image: "/image/cortadora-1.png",
    price: 1280000,
    category: "cortadora"
  },
  {
    id: 6,
    name: "Cortadora De Fiambre Moretti Duecento",
    description: "Cortadora profesional compacta y confiable, diseñada para ofrecer cortes precisos y parejos en cada uso. Su estructura robusta en color plateado garantiza durabilidad, estabilidad y fácil limpieza. Ideal para fiambrerías, rotiserías y comercios gastronómicos que buscan rendimiento y calidad comprobada.",
    stock: 3,
    image: "/image/cortadora-2.png",
    price: 732840,
    category: "cortadora"
  },
  {
    id: 7,
    name: "Picadora de carne eléctrica Turboblender TB-PM1000",
    description: "Picadora eléctrica potente y eficiente, ideal para el procesamiento rápido de carne en el hogar o pequeños comercios. Ofrece cortes uniformes, fácil limpieza y un diseño práctico que garantiza rendimiento confiable y seguro en cada uso.",
    stock: 7,
    image: "/image/picadora-1.png",
    price: 93549,
    category: "otro"
  },
  {
    id: 8,
    name: "Set De Cuchilla 13 Y Chaira 11",
    description: "Set esencial para trabajos de corte y afilado profesional, ideal para carnicerías, cocinas industriales y uso intensivo. La cuchilla de 13” ofrece cortes firmes y precisos, mientras que la chaira de 11” permite mantener el filo en óptimas condiciones. Mangos ergonómicos en color blanco, de fácil limpieza y agarre seguro.",
    stock: 95,
    image: "/image/cuchilal-1.png",
    price: 8800,
    category: "otro"
  }
]


export const getProducts = () => {
  return new Promise((resolve, reject) => {
      resolve(products);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject)=> {
      const product = products.find( (productData) => productData.id === Number(productId) );
      resolve(product);
  });
}