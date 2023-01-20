import { HiEnvelope } from "react-icons/hi2";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";

const contactForm = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("First name required"),
  lastName: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Last name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  message: Yup.string(),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast("Message sent successfully.");
      } else {
        console.error(response);
        toast(response);
      }
    } catch (error) {
      console.error(error);
      toast(error);
    }
    setLoading(false);
  };

  return (
    <section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex border-b-2 mb-3">
        <HiEnvelope className="w-6 h-6 text-skin" />
        <h3 className="text-lg font-bold ml-2">Contact Me</h3>
      </div>
      <div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          }}
          validationSchema={contactForm}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="px-5">
              <motion.div
                initial={{ y: "10%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-5"
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                      errors.firstName && touched.firstName
                        ? "text-red-600 dark:text-red-500"
                        : ""
                    }`}
                  >
                    First Name:
                  </label>
                  <Field
                    name="firstName"
                    type="text"
                    id="firstName"
                    className={
                      errors.firstName && touched.firstName
                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                  />
                  {errors.firstName && touched.firstName ? (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className="font-medium">!</span> {errors.firstName}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                      errors.lastName && touched.lastName
                        ? "text-red-600 dark:text-red-500"
                        : ""
                    }`}
                  >
                    Last Name:
                  </label>
                  <Field
                    name="lastName"
                    type="text"
                    id="lastName"
                    className={
                      errors.lastName && touched.lastName
                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                  />
                  {errors.lastName && touched.lastName ? (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className="font-medium">!</span> {errors.lastName}
                    </p>
                  ) : null}
                </div>
              </motion.div>
              <motion.div
                initial={{ y: "10%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                    errors.email && touched.email
                      ? "text-red-600 dark:text-red-500"
                      : ""
                  }`}
                >
                  Email:
                </label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  className={
                    errors.email && touched.email
                      ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  }
                />
                {errors.email && touched.email ? (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">!</span> {errors.email}
                  </p>
                ) : null}
              </motion.div>
              <motion.div
                initial={{ y: "10%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message:
                </label>
                <Field name="message">
                  {({ field, form, meta }) => {
                    return (
                      <textarea
                        name="message"
                        rows={5}
                        value={field.value}
                        onChange={field.onChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></textarea>
                    );
                  }}
                </Field>
              </motion.div>
              <motion.div
                initial={{ y: "10%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="mt-3 flex flex-col lg:flex-row gap-2"
              >
                <button
                  type="submit"
                  className="w-full lg:w-32 px-3 h-9 mt-2 bg-skin text-white rounded-md shadow-md"
                >
                  {loading ? (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                  Submit
                </button>
              </motion.div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
