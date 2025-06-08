import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-montserrat">
            ALCOJET54
          </h3>
          <p className="text-gray-400 mb-6">
            Премиальная доставка алкогольных напитков в Новосибирске
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-yellow-400">
              Контакты
            </h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <Icon name="MessageCircle" size={16} />
                <span>Telegram: @ALCOJET54</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Новосибирск</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-yellow-400">
              Время работы
            </h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <Icon name="Clock" size={16} />
                <span>24/7</span>
              </div>
              <p className="text-sm">Ежедневно, без выходных</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-yellow-400">
              Доставка
            </h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <Icon name="Truck" size={16} />
                <span>От 30 минут</span>
              </div>
              <p className="text-sm">По всему городу</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6">
          <p className="text-gray-500 text-sm mb-2">
            © 2024 ALCOJET54. Все права защищены.
          </p>
          <p className="text-gray-600 text-xs">
            Чрезмерное употребление алкоголя вредит вашему здоровью
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
