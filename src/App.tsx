import { useTranslation } from "react-i18next";
import Logo from "./components/Logo";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="flex cursor-pointer text-2xl font-bold underline hover:text-primary">
        {t("Hello world")}
      </h1>
      <Logo />
    </>
  );
}
