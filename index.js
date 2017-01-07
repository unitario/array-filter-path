Array.filterPath = function (path, val, objs) {
   'use strict';

   if (arguments.length !== 3) {
      throw new RangeError('Wrong number of arguments');
   } else if (!Array.isArray(objs)) {
      throw new TypeError('Input parameter \'objs\' is not an array');
   }

   objs = objs.filter( obj => {
      return val === path.split('.').reduce( (pre, cur) => { return pre ? pre[cur] : undefined }, obj|| self )
   });

   if (objs.length === 0) { return [] }
   else { return objs }

}
