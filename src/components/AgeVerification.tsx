import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AgeVerificationProps {
  onVerified: () => void;
}

const AgeVerification = ({ onVerified }: AgeVerificationProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleYes = () => {
    setIsOpen(false);
    onVerified();
  };

  const handleNo = () => {
    window.location.href = "https://google.com";
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md bg-slate-900 border-yellow-500/30 text-white">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-yellow-400 mb-4">
            Подтверждение возраста
          </DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-6">
          <div className="text-lg">
            <p className="mb-2">Вам есть 18 лет?</p>
            <p className="text-sm text-gray-300">
              Наш сервис предназначен только для совершеннолетних
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={handleYes}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8"
            >
              Да, мне есть 18
            </Button>
            <Button
              onClick={handleNo}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8"
            >
              Нет
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerification;
