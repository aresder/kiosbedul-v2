const ForgotPasswordPage = () => {
  return (
    <div className="h-screen container flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">Lupa Password</h1>
        <span>Masukan username akun kamu!</span>
        <form action="">
          <div className="grid gap-2 mt-8">
            <label htmlFor="username">Username</label>
            <input
              className="border border-black py-2 px-4 rounded-lg"
              type="text"
              placeholder="username"
              name="username"
              id="username"
            />
          </div>
          <div className="mt-8">
            <button className="btn-lr" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
