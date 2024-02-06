const list1 = ['a' ,'b', 'c'];
const list2 = [1, 2, 3];

function ziplist(first, second) {
   const retlist =[];
   for (let i = 0; i < first.length; i ++) {
     retlist.push(first[i], second[i]);

   }

   return retlist;
}

   console.log(ziplist(list1, list2));

   const ziplistTheSimpleWay = (first, second) => _.flatten(_.zip(first, second));

   console.log(zipListTheSimpleWay(list1, list2));