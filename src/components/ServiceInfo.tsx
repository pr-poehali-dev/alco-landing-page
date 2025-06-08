import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServiceInfo = () => {
  const features = [
    {
      icon: "truck",
      title: "Доставка 24/7",
      description: "Работаем круглосуточно для вашего удобства",
    },
    {
      icon: "credit-card",
      title: "Удобная оплата",
      description: "Наличные или карта при получении",
    },
    {
      icon: "map-pin",
      title: "По всему городу",
      description: "Доставляем в любую точку Новосибирска",
    },
    {
      icon: "phone",
      title: "Быстрый заказ",
      description: "Оформите заказ в Telegram за минуту",
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Наши преимущества
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-900 border-slate-700 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardHeader className="text-center pb-3">
                <Icon
                  name={feature.icon as any}
                  size={40}
                  className="text-yellow-400 mx-auto mb-4"
                />
                <CardTitle className="text-white text-lg">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-slate-900 border-yellow-500/30 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-yellow-400 text-2xl mb-4">
                Важная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-3">
              <p>🚫 Продажа алкоголя лицам младше 18 лет запрещена</p>
              <p>📋 При получении требуется предъявить документ</p>
              <p>⚖️ Мы работаем в рамках действующего законодательства</p>
              <p>🛡️ Лицензия на розничную продажу алкогольной продукции</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
