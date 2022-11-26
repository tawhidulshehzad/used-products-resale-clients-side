import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>

      <Toaster
        toastOptions={{
          style: {
            background: "#3F1B40",
            color: "#fff",
            border: "linear-gradient(45deg,purple,orange) border-box",
          },
        }}
      />
    </div>
  );
}

export default App;

// / import { ToastContainer } from "react-toastify";
// import "./App.css";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./Routes/Routes/Routes";

// function App() {
//   return (
//     <div className="max-w-[1440px] mx-auto">
//       <RouterProvider router={router}></RouterProvider>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;
