module.exports = function(grunt) {

	    // Project configuration.

	    grunt.initConfig({

	        msbuild: {
	            dev: {
	                src: ['../ConsoleApplication1/ConsoleApplication1/ConsoleApplication1.csproj'],
	                options: {
	                    projectConfigurations: 'Debug',
	                    targets: ['Clean', 'Rebuild'],
	                    stdout: true,
	                    buildParameters: {
	                        WarningLevel: 2,
	                        OutputPath: 'bin\\Debug'
	                    },
	                    verbosity: 'quiet'
	                }
	            }
	        }
	    });

		grunt.registerTask('default', ['msbuild', 'continuationTest']);

		grunt.registerTask('continuationTest', function() {
			grunt.log.writeln('continued OK...');
		});

	    grunt.loadNpmTasks('grunt-msbuild');

	};
