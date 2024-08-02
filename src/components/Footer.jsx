import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="absolute w-full bottom-0 text-center z-10">
      <div className="relative grad-hr drop-shadow-[0_1px_0_#666] bottom-[1px]" />
      <div className="flex justify-center items-center">
        <h2 className="p-1 align-baseline font-medium">
          Paweł Chudecki &copy; 2023-2024
        </h2>

        <a title="wyślij mail" href="mailto:pawelc29@interia.pl">
          <IoIosMail
            size={24}
            color="var(--icon-gray)"
            className="header-icon hover:brightness-150 transition-all dark:brightness-125"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
