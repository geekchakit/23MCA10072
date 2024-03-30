/* eslint-disable react/prop-types */
const Wrapper = ({ children }) => {
  return (
    <div className="w-full max-w-screen-2xl px-4 sm:px-4 lg:px-6 mx-auto">
      {children}
    </div>
  );
};

export default Wrapper;
