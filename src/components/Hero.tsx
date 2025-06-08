import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const handleTelegramClick = () => {
    window.open("https://t.me/ALCOJET54", "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-yellow-400 font-montserrat">
            ALCOJET54
          </h1>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
            Премиальная доставка алкоголя
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Быстро • Надёжно • Качественно
          </p>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Icon
                name="Clock"
                size={32}
                className="text-yellow-400 mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-400 text-sm">От 30 минут по городу</p>
            </div>
            <div className="text-center">
              <Icon
                name="Shield"
                size={32}
                className="text-yellow-400 mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold mb-2">Лицензия</h3>
              <p className="text-gray-400 text-sm">Официальная продажа</p>
            </div>
            <div className="text-center">
              <Icon
                name="Star"
                size={32}
                className="text-yellow-400 mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold mb-2">Качество</h3>
              <p className="text-gray-400 text-sm">Только проверенные товары</p>
            </div>
          </div>
        </div>

        <Button
          onClick={handleTelegramClick}
          size="lg"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
        >
          <Icon name="MessageCircle" size={24} className="mr-3" />
          Заказать в Telegram
        </Button>

        <p className="mt-6 text-sm text-gray-500">
          Нажимая кнопку, вы подтверждаете свой возраст 18+
        </p>
      </div>
    </section>
  );
};

export default Hero;
