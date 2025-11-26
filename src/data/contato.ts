import type { ContatoInfoProps } from "../components/ContatoInfo.astro";
import emailIcon from "../images/icons/email.svg";
import localIcon from "../images/icons/local.svg";
import phoneIcon from "../images/icons/tel.svg";

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
