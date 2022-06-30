let todos = [];     /* store database entry */

const renderTodos = function(){

    dbRef.get(child(dbRef, `todos/${id1}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

}

renderTodos();