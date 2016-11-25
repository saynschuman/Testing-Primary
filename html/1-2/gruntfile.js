module.exports = function(grunt) {
	grunt.initConfig({
	  watch: {
	    files: ['styles/*.scss'],
	    tasks: ['sass']
	  },
	  sass: {
	    dist: {
	      files: [{
	        expand: true,
	        src: ['styles/main.scss'],
	        dest: 'dest/',	
	        ext: '.css'
	      }]
	    }
	  }	  
	});


	
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass', 'watch']);

}
