import gulpfileHelper from 'core-next/gulpfile-helper.js';

export const {
	clean,
	transfer_assets,
	build_cframe,
	build_cframe_minify,
	build_scripts,
	build_scripts_minify,
	build_styles,
	build_styles_minify,
	build,
	build_minify,
	watch,
	serve
} = gulpfileHelper('./src', './dist');

export default build;