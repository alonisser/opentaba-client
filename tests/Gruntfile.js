module.exports = function(grunt){
	
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		casperjs:{
			options:{},
			files:
				['./test_index.js'] //TODO: Add the other testing files when ready
			
		},
		jshint:{
			options:grunt.file.readJSON('package.json')['jshintConfig'],
			files:
				['../app.js']
			
		}

	
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-casperjs-plugin');
	grunt.registerTask('test_all',['jshint', 'casperjs']);
	grunt.registerTask('test',['casperjs']);
	grunt.registerTask('default',['test_all']);

};
