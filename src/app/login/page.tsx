"use client"
import { TabPane, Tabs } from "@/app/component";

const Login = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="max-w-screen-lg w-full p-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div className="login-image relative">
              {/* <img
                src="https://i.pinimg.com/originals/cd/19/c6/cd19c6995371fb9fe41c90a1eb4e7b56.jpg"
                alt="Login Image"
                className="w-full h-auto" />

              <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/google-play-badge-2022-2.svg"
                  alt="Google Play"
                />
              </button>

              <button className="absolute bottom-0 right-1/2 transform -translate-x-1/2 mb-4">
                <img
                  src="https://freeiconshop.com/wp-content/uploads/edd/app-store-badge.png"
                  alt="App Store"
                />
              </button> */}
            </div>

            <div>
              <div className="bg-white rounded-lg p-4">
                {/* Sign In Section */}
                <div className="bg-blue-500 text-white rounded-lg p-4">
                  <h2 className="text-3xl font-semibold mb-2 text-center">Sign In</h2>
                </div>

                <Tabs>
                  <TabPane title="Parent">
                    <div>
                      <form>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="sm:col-span-4">
                            <label
                              htmlFor="username"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Student No
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                <input
                                  type="text"
                                  name="sname"
                                  id="sname"
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="sm:col-span-4">
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Password
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                <input
                                  type="text"
                                  name="sname"
                                  id="sname"
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </TabPane>

                  <TabPane title="Parent">
                    <form>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                          <label
                            htmlFor="phone no / email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Phone Number / Email
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                              <input
                                type="text"
                                name="phone number / email"
                                id="phone number / email"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>

                    <form>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Password / OTP
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                              <input
                                type="text"
                                name="password"
                                id="password"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </TabPane>
                  <TabPane title="Staff">
                    <form>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                          <label
                            htmlFor="staffname"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Phone Number./Email
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                              <input
                                type="text"
                                name="phonenumber/email"
                                id="phonenumber/email"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <form>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                          <label
                            htmlFor="phone no / email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Password./OTP
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                              <input
                                type="text"
                                name="staffpassword"
                                id="staffpassword"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </TabPane>
                </Tabs>
                <br></br>
                <div className="w-full flex items-center justify-between">
                  <div className="mt-8 flex items-center">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <p className="text-sm"> Remember me</p>
                  </div>
                  <p className="text-sm font medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                    Forget Password?
                  </p>
                </div>
                <div className="w-full flex flex-col my-4">
                  <button className="w-full text-white my-2 bg-green-700 rounded-md p-3 text center flex items-center justify-center">
                    Sign In
                  </button>
                </div>

                <div className="w-full flex items-center justify-center relative py-2">
                  <div className="w-full h-[1px] bg-black"> </div>
                  <p className="absolute text-black/80 bg-slate-50">or</p>
                </div>
                <br></br>
                <div className="w-full flex itmes-center justify-center">
                  <p className="text-sm font-normal text-[#060606]">Need help? Go to the help center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
