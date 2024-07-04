import React from 'react';
import Typewriter from 'typewriter-effect';

function Typewriters() {
	return (
		<div className="typewriter">
			<h1>
				<Typewriter
					options={{
						autoStart: true,
						loop: true,
						delay: 100,
						strings: ["Hi, I'm Keegan..."]
					}}
				/>
			</h1>
		</div>
	)
}

export default Typewriters;
