import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Dummy data for display purposes
  // Includes firstName to display alongside email, password is fixed as '123'
  const employees = [
    { firstName: "Arjun", email: "employee1@gmail.com" },
    { firstName: "Sneha", email: "employee2@gmail.com" },
    { firstName: "Ravi", email: "employee3@gmail.com" },
    { firstName: "Priya", email: "employee4@gmail.com" },
    { firstName: "Karan", email: "employee5@gmail.com" },
  ];

  const admin = { email: "admin@gmail.com" }; // Password removed from here as it's common

  /**
   * Handles the form submission.
   * Prevents the default form submission behavior,
   * calls the `handleLogin` function passed as a prop with the current email and password,
   * and then clears the input fields.
   * @param {Object} e - The event object from the form submission.
   */
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission to handle it with React
    handleLogin(email, password); // Call the parent login handler
    setEmail(""); // Clear the email input
    setPassword(""); // Clear the password input
  };

  return (
    // Outer container: full screen height and width, black background, Inter font.
    // Uses flexbox to center the login form horizontally and vertically.
    // The demo credentials card will be absolutely positioned within this container.
    <div className="relative flex h-screen w-screen items-center justify-center bg-black font-inter">
      {/* Login Form Card */}
      <div className="border-2 rounded-xl border-emerald-600 p-10 w-full max-w-md bg-gray-900 shadow-lg">
        {/* Login Form */}
        <form
          onSubmit={submitHandler} // Attach the submit handler
          className="flex flex-col items-center justify-center" // Flex column layout, centered items
        >
          {/* Email Input Field */}
          <input
            value={email} // Controlled component: binds value to state
            onChange={(e) => setEmail(e.target.value)} // Updates state on change
            required // HTML5 validation: field is required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-500 text-white w-full mb-3 focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
            type="email" // Specifies input type for email validation
            placeholder="Enter your email" // Placeholder text
            aria-label="Email" // Accessibility label
          />
          {/* Password Input Field */}
          <input
            value={password} // Controlled component: binds value to state
            onChange={(e) => setPassword(e.target.value)} // Updates state on change
            required // HTML5 validation: field is required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-500 text-white w-full focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
            type="password" // Specifies input type for password (hides characters)
            placeholder="Enter password" // Placeholder text
            aria-label="Password" // Accessibility label
          />
          {/* Submit Button */}
          <button
            type="submit" // Specifies button type for form submission
            className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            Log in
          </button>
        </form>
      </div>

      {/* Demo Credentials Card - Fixed position at top-right */}
      {/* Retains adjusted max-width and padding for a smaller appearance. */}
      <div className="fixed top-8 right-8 border-2 rounded-xl border-emerald-600 p-5 w-full max-w-xs bg-gray-900 shadow-lg">
        <h3 className="font-bold text-emerald-500 mb-2 text-base">
          🧪 Demo Credentials
        </h3>
        {/* Common Password Display */}
        <div className="mb-3 text-gray-300 text-sm">
          <strong className="text-emerald-400">Password:</strong> 123 (For admin
          and employees both)
        </div>
        {/* Admin Credentials */}
        <div className="mb-1 text-gray-300 text-sm">
          <strong className="text-emerald-400">Admin:</strong> {admin.email}
        </div>
        {/* Employee Credentials List */}
        <div>
          <strong className="text-emerald-400 text-sm">Employees:</strong>
          <ul className="list-disc pl-5 mt-1 text-gray-300 text-xs">
            {/* Map through employees array to display each employee's credentials */}
            {employees.map((emp, index) => (
              <li key={index}>
                {emp.firstName} ({emp.email})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
