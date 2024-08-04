import { useTranslation } from "react-i18next";
import Logo from "./components/Logo";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="hover:text-primary flex cursor-pointer text-2xl font-bold underline">
        {t("Hello world")}
      </h1>
      <Logo />
    </>
  );
}
