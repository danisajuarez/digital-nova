import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact02Page = () => (
  <div className="min-h-screen flex items-center justify-center py-16 bg-[#0B0B0D] text-white">
    <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
      <b className="text-white/60">Contacto</b>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
        Hablemos sobre tu próximo proyecto
      </h2>
      <p className="mt-3 text-base sm:text-lg text-white/60">
        Escribinos o completá el formulario y nos pondremos en contacto.
      </p>

      <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
        {/* Información de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-white/10 text-white rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Email</h3>
            <p className="my-2.5 text-white/60">
              Nuestro equipo está para ayudarte.
            </p>
            <Link
              className="font-medium text-cosmicBlue"
              href="mailto:hola@digitalnova.agency"
            >
              hola@digitalnova.agency
            </Link>
          </div>

          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-white/10 text-white rounded-full">
              <MessageCircle />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Chat en vivo</h3>
            <p className="my-2.5 text-white/60">
              ¡Estamos disponibles ahora mismo!
            </p>
            <Link className="font-medium text-cosmicBlue" href="#">
              Iniciar chat
            </Link>
          </div>

          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-white/10 text-white rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Oficina</h3>
            <p className="my-2.5 text-white/60">
              Pasá a tomar un café con nosotros.
            </p>
            <Link
              className="font-medium text-cosmicBlue"
              href="https://maps.google.com"
              target="_blank"
            >
              Rosario, Santa Fe <br /> Argentina
            </Link>
          </div>

          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-white/10 text-white rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Teléfono</h3>
            <p className="my-2.5 text-white/60">Lun a vie de 9 a 18 hs</p>
            <Link
              className="font-medium text-cosmicBlue"
              href="tel:+543412222222"
            >
              +54 341 222-2222
            </Link>
          </div>
        </div>

        {/* Formulario */}
        <Card className="bg-[#131416] text-white shadow-none border border-white/10">
          <CardContent className="p-6 md:p-10">
            <form>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input
                    placeholder="Tu nombre"
                    id="firstName"
                    className="mt-1.5 bg-white text-black h-11 shadow-none"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input
                    placeholder="Tu apellido"
                    id="lastName"
                    className="mt-1.5 bg-white text-black h-11 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    id="email"
                    className="mt-1.5 bg-white text-black h-11 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Contanos tu idea"
                    className="mt-1.5 bg-white text-black shadow-none"
                    rows={6}
                  />
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Checkbox id="acceptTerms" />
                  <Label htmlFor="acceptTerms" className="text-sm">
                    Acepto los{" "}
                    <Link href="#" className="underline text-white">
                      términos y condiciones
                    </Link>
                    .
                  </Label>
                </div>
              </div>
              <Button className="mt-6 w-full" size="lg">
                Enviar mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact02Page;
