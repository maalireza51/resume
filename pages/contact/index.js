import { HiEnvelope } from "react-icons/hi2";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  const [sent, setSent] = useState(false);
  return (
    <section>
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
            setSent(true);
            setTimeout(() => setSent(false), 2000);
            console.log(values);
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
                <textarea
                  name="message"
                  rows={5}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </motion.div>
              <motion.div
                initial={{ y: "10%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="mt-3 flex flex-col lg:flex-row gap-2"
              >
                <button
                  type="submit"
                  className="w-full lg:w-20 h-9 mt-2 bg-skin text-white rounded-md shadow-md"
                >
                  Submit
                </button>
                {sent ? (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      id="toast-simple"
                      className="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow-lg dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
                      role="alert"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-skin"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paper-plane"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
                        ></path>
                      </svg>
                      <div className="pl-4 text-sm font-normal">
                        Message sent successfully.
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  ""
                )}
              </motion.div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
