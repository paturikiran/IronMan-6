/**
 * Created by aalap on 6/23/2015.
 */
app.service('cartService',function(){
    var purchasedItems=[]
   return{
       addOrSelectCart : function(item){
           if(item) {
               purchasedItems.push(item);
           }
          return purchasedItems;
       }
   }
});