var config = {
	preset: "development",
	modules: [
		{
			name: "core",
			path: __dirname,
			buildPath: "debug",
			productionBuildPath: "release",
			sass: {
				loadPath: []
			},
			server: {

			},
			client: {

			},
			transforms: {
				client: [
					{
						source: "node_modules/@client/main.ts",
						dest: "static/bundle.js"
					}
				],
				styles: [
					{
						source: "src/styles/main.scss",
						dest: "static/bundle.css"
					}
				],
				static: [
					{
						source: "src/static/**/*",
						dest: "static"
					},
					{
						source: "src/images/**/*",
						dest: "static/images"
					}
				]
			}
		}
	]
};

module.exports = config;