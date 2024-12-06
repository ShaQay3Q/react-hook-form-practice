import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./index.css";
import Form from "./Form";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* <App /> */}
		<div className='bg-fuchsia-400 py-4 px-5 max-w-fit'>
			<Form />
		</div>
	</StrictMode>
);
