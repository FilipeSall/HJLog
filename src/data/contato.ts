import type { ContatoInfoProps } from "../components/ContatoInfo.astro";
import emailIcon from "../images/contato/email-icon.svg";
import localIcon from "../images/contato/local-icon.svg";
import phoneIcon from "../images/contato/phone-icon.svg";

export const contatoInfo: ContatoInfoProps[] = [
  {
    label: "adm@hjlogtransportes.com.br",
    icon: emailIcon,
  },
  {
    label: "Avenida Dep Emilio Carlos 114 Sala 08 Limao - São Paulo/SP - 02720-000",
    icon: localIcon,
  },
  {
    label: "(11) 98221 7679",
    icon: phoneIcon,
  },
]