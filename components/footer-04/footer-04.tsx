import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "../navbar-01/logo";

const footerLinks = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Sobre Nosotros",
    href: "#",
  },
  {
    title: "Servicios",
    href: "#",
  },
  {
    title: "Portfolio",
    href: "#",
  },
  {
    title: "Contacto",
    href: "#",
  },
];

const Footer04Page = () => {
  return (
    <div className=" flex flex-col">
      <div className="grow bg-muted" />
      <footer className="bg-[#0B0B0D] text-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            {/* Logo + Links */}
            <div>
              {/* Logo */}
              <Logo></Logo>

              {/* Links */}
              <ul className="mt-6 flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-white/60 hover:text-cosmicBlue transition-colors"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="max-w-xs w-full">
              <h6 className="font-semibold">Suscribite a nuestras novedades</h6>
              <form className="mt-6 flex items-center gap-2">
                <Input
                  type="email"
                  placeholder="Tu email"
                  className="bg-white text-black placeholder:text-gray-500"
                />
                <Button className="bg-white text-black hover:bg-gray-100">
                  Enviar
                </Button>
              </form>
            </div>
          </div>

          <Separator className="bg-white/10" />

          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copy */}
            <span className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Digital Nova. Todos los derechos
              reservados.
            </span>

            {/* Redes */}
            <div className="flex items-center gap-5 text-white/60">
              <Link href="https://twitter.com/" target="_blank">
                <TwitterIcon className="h-5 w-5 hover:text-cosmicBlue transition" />
              </Link>
              <Link href="https://dribbble.com/" target="_blank">
                <DribbbleIcon className="h-5 w-5 hover:text-cosmicBlue transition" />
              </Link>
              <Link href="https://twitch.tv/" target="_blank">
                <TwitchIcon className="h-5 w-5 hover:text-cosmicBlue transition" />
              </Link>
              <Link href="https://github.com/" target="_blank">
                <GithubIcon className="h-5 w-5 hover:text-cosmicBlue transition" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer04Page;
