import { useState } from "react";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Account = ({
  setAccountState,
  registerSubmit,
  loginSubmit,
  accountExist,
  confirm,
  loginRegister,
  setLoginRegister,
  isLogged,
  setIsLogged,
  userData,
  loginError,
  setLoginError,
}) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passCheck, setPassCheck] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setAccountState(false);
          setLoginError(false);
        }}
        className="account max-sm:grid w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-30 z-20 "
      ></div>
      <div className="settings grid w-80 max-sm:right-auto max-sm:mx-4 max-sm:w-[calc(100%-2rem)] max-sm:top-7 select-none absolute top-[62px] right-8 dark:bg-text-dark bg-text-light rounded-xl drop-shadow-[5px_5px_10px_rgba(0,0,0,0.5)] border-2 dark:border-text-light dark:border-opacity-40 z-20 px-4 pt-1 pb-4 dark:text-text-light text-text-dark">
        <div className={!confirm ? " visible" : " invisible"}>
          {!isLogged ? (
            <div className="flex justify-between items-center gap-3">
              <div className="font-bold text-xl text-accent">
                {loginRegister ? "Logowanie" : "Rejestracja"}
              </div>
              <button
                className="font-semibold text-xl opacity-20 flex items-center gap-1 hover:opacity-40 transition-opacity"
                onClick={() => setLoginRegister(!loginRegister)}
              >
                <FaArrowRight size={16} className="mt-[2px]" />
                {!loginRegister ? "Logowanie" : "Rejestracja"}
              </button>
            </div>
          ) : (
            <div>
              <div className="font-bold text-xl text-accent">Twoje dane</div>
            </div>
          )}

          <div className=" font-medium grid gap-y-1 mt-2 ">
            {/* FORMULARZ */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!loginRegister) {
                  if (password !== confirmPassword) {
                    setPassCheck(true);
                    setPassword("");
                    setConfirmPassword("");
                  } else {
                    setPassCheck(false);
                    registerSubmit({
                      login: login,
                      email: email,
                      password: password,
                    });
                  }
                } else {
                  loginSubmit({
                    login: login,
                    password: password,
                  });
                }
              }}
              className="rounded-md gap-2 flex flex-col"
            >
              {!isLogged ? (
                <div className="flex flex-col gap-2">
                  <div className="rounded-md flex flex-col  justify-between bg-text-dark bg-opacity-20 p-2 pt-1 dark:bg-text-light dark:bg-opacity-20 ">
                    <label className="text-sm">Login:</label>
                    <input
                      onChange={(e) => setLogin(e.target.value)}
                      className="rounded-sm px-1 dark:text-text-light dark:bg-opacity-40 dark:bg-black dark:placeholder-text-light dark:placeholder:opacity-30"
                      type="text"
                      value={login}
                      name="login"
                      placeholder="user"
                      id="login"
                      minLength={3}
                      maxLength={20}
                      required
                    />
                  </div>
                  {!loginRegister && (
                    <div className="rounded-md flex flex-col  justify-between bg-text-dark bg-opacity-20 p-2 pt-1 dark:bg-text-light dark:bg-opacity-20">
                      <label className="text-sm">Email:</label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-sm px-1 dark:text-text-light dark:bg-opacity-40 dark:bg-black dark:placeholder-text-light dark:placeholder:opacity-30"
                        placeholder="user@example.com"
                        type="email"
                        name="email"
                        id="email"
                        title="user@example.com"
                        pattern="^[\w._]+@[\w]+\.[\w]{2,}$"
                        required
                      />
                    </div>
                  )}
                  <div className="rounded-md flex flex-col  justify-between bg-text-dark bg-opacity-20 p-2 pt-1 dark:bg-text-light dark:bg-opacity-20">
                    <label className="text-sm">Hasło:</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="rounded-sm px-1 dark:text-text-light dark:bg-opacity-40 dark:bg-black dark:placeholder-text-light dark:placeholder:opacity-30"
                      type="password"
                      placeholder="********"
                      name="password"
                      id="password"
                      // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$"
                      minLength={5}
                      required
                    />
                  </div>
                  {!loginRegister && (
                    <div className="rounded-md flex flex-col  justify-between bg-text-dark bg-opacity-20 p-2 pt-1 dark:bg-text-light dark:bg-opacity-20">
                      <label className="text-sm">Powtórz hasło:</label>
                      <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="rounded-sm px-1 dark:text-text-light dark:bg-opacity-40 dark:bg-black dark:placeholder-text-light dark:placeholder:opacity-30"
                        type="password"
                        name="passwordConfirm"
                        placeholder="********"
                        id="passwordConfirm"
                        // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$"
                        minLength={5}
                        required
                      />
                    </div>
                  )}
                  {passCheck && (
                    <p className="text-accent-4 text-center -mb-2 -mt-1">
                      Błędne hasło
                    </p>
                  )}
                  {accountExist && (
                    <p className="text-accent-4 text-center -mb-2 -mt-1">
                      Taki login lub email już istnieje
                    </p>
                  )}
                  {loginError && (
                    <p className="text-accent-4 text-center -mb-2 -mt-1">
                      Błędny login lub hasło
                    </p>
                  )}
                </div>
              ) : (
                <div className="rounded-md flex flex-col  justify-between bg-text-dark bg-opacity-20 p-2 pt-1 dark:bg-text-light dark:bg-opacity-20">
                  <div>Login: {userData.login}</div>
                  <div>Email: {userData.email}</div>
                  <div>Hasło: {userData.password.replace(/./g, "*")}</div>
                </div>
              )}
              {/* PRZYCISKI OK / ANULUJ */}
              {!isLogged ? (
                <div className="flex justify-center gap-6 px-8 max-sm:px-0 pt-2 text-white">
                  <button
                    type="submit"
                    className="drop-shadow-lg bg-green-700 py-1 px-4 pb-[6px] hover:brightness-125 text-lg rounded-lg"
                  >
                    {loginRegister ? "Zaloguj" : "Zarejestruj"}
                  </button>
                  <button
                    onClick={() => {
                      setAccountState(false);
                      setLoginError(false);
                    }}
                    className="drop-shadow-lg  bg-accent-4 py-1 px-4 pb-[6px] hover:brightness-125 text-lg rounded-lg"
                  >
                    Anuluj
                  </button>
                </div>
              ) : (
                <div className="flex justify-center gap-6 px-8 max-sm:px-0 pt-2 text-white">
                  {/* PRZYCISKI ZAMKNIJ / WYLOGUJ */}
                  <div
                    onClick={() => setAccountState(false)}
                    className="drop-shadow-lg hover:brightness-125 text-lg  cursor-pointer absolute top-[6px] right-2 text-text-light"
                  >
                    <IoClose size={30} />
                  </div>
                  <div
                    onClick={() => {
                      setIsLogged(false);
                      localStorage.removeItem("user");
                    }}
                    className="drop-shadow-lg  bg-accent-4 py-1 px-4 pb-[6px] hover:brightness-125 text-lg rounded-lg cursor-pointer"
                  >
                    Wyloguj
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        {/* POTWIERDZENIE */}
        <div
          className={
            "confirm flex flex-col gap-3 absolute place-self-center text-3xl drop-shadow-sm font-bold " +
            (!confirm ? "hidden" : "visible")
          }
        >
          {!loginRegister ? "Zarejestrowano" : "Zalogowano"}
          <FaCheck
            size={38}
            className="fill-green-500 mx-auto drop-shadow-[0px_1px_1px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </>
  );
};

export default Account;
