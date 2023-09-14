/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
			  'backCode': "url('./code-light.jpg')",
			},
			gridTemplateColumns:{
				'grilla':"repeat(auto-fit,minmax(200px,1fr))",
				'gridContact':"repeat(auto-fit,minmax(130px,1fr))",
				'gridContactDesktop':"repeat(auto-fit,minmax(200px,1fr))",
			},
			
			
		},
	plugins: [],
	}
}