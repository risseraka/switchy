function switchy(cond, funcs) {
   var item = funcs[cond];

   if (item instanceof Function) {
      return item();
   }
   return item;
}
