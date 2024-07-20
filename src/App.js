import React from 'react';
import { StrictMode } from 'react';
import AppRoutes from "./Routes"; 
import AnimatedCursor from "react-animated-cursor";



function App() {
  return (
		<StrictMode>

			{/*
				Custom Cursor 
				Documentation: https://github.com/stephenscaff/react-animated-cursor
			*/}
			<AnimatedCursor
				innerSize={5}
				outerSize={5}
				color='255, 255, 255'
				outerAlpha={.3}
				innerScale={0}
				outerScale={8}
				trailingSpeed={8}
				showSystemCursor={false}
				clickables={[
					'a',
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					'label[for]',
					'select',
					'textarea',
					'button',
					'.link'
				]}
			/>


		<AppRoutes />
			
	</StrictMode>
  );
}


export default App;
