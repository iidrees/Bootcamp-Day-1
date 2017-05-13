module.exports = function dataTypes(arg) {
	if ( arg === null || typeof arg === 'undefined' ) {
      return 'no value';
    } else if (typeof arg === 'boolean') {
      return arg;
    } else if (typeof arg === 'number' && arg < 100) {
      return 'less than 100';
    } else if ( typeof arg === 'number' && arg > 100) {
      return 'more than 100';
    } else if (typeof arg === 'number' && arg === 100) {
    	return 'equal to 100';
    }else if (typeof(arg) === 'string') {
      return arg.length;
    } else if ( typeof(arg) === 'string') {
      return arg.length; 
    } else if (Array.isArray(arg) && arg.length > 0) {
      return arg[2]
    } else if (Array.isArray(arg) && arg.length < 0) {
      return undefined;
    } else if (Array.isArray(arg) && arg.length < 3) {
      return undefined;
    } else if (typeof function callback(arg) {} === 'function'){
      return 'called callback';
    }
	
}