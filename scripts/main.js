const db = firebase.firestore();
const taskForm = document.getElementById("task-form");
const taskContainer = document.getElementById("tasks-container");
const totalExpenses = document.getElementById("totalexpenses");

let editStatus = false;
let id;
var sum;

const saveTask = (amount, category_match, category_bet) =>
  db.collection("expenses").doc().set({
    amount,
    category_match,
    category_bet
  });

const getTasks = () => db.collection("expenses").get();

const onGetTasks = (callback) => db.collection("expenses").onSnapshot(callback);

const deleteTask = (id) => db.collection("expenses").doc(id).delete();

const getTask = (id) => db.collection("expenses").doc(id).get();

const updateTask = (id, updatedTask) =>
  db.collection("expenses").doc(id).update(updatedTask);

//---------------------------
//var total = 0;
var ganacias = 0;
var val = false;
window.addEventListener("DOMContentLoaded", async (e) => {
  onGetTasks((querySnapshot) => {
    sum = 0;
    var total = 0;
    taskContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      task.id = doc.id;
      //-------------------------------
      database = firebase.database();
      var ref = database.ref("footballbd");
      ref.on("value", gotData2, errData2);

      function gotData2(data) {
        var football = data.val();
        var keys = Object.keys(football);

        //var s1 = document.getElementById(s1);
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          var n_home = football[k].name_home;
          var n_away = football[k].name_away;
          var n_match = n_home + " vs " + n_away;

          if (n_match === String(task.category_match)) {
            val = true;
          }

          var n_hgp = football[k].home_goals_predicted;
          var n_agp = football[k].away_goals_predicted;
          var n_suma = parseInt(n_hgp) + parseInt(n_agp);

          var obj = {
            n_Exact_Score_0_0: football[k].Exact_Score_0_0,
            n_Exact_Score_0_1: football[k].Exact_Score_0_1,
            n_Exact_Score_0_2: football[k].Exact_Score_0_2,
            n_Exact_Score_0_3: football[k].Exact_Score_0_3,
            n_Exact_Score_0_4: football[k].Exact_Score_0_4,
            n_Exact_Score_0_5: football[k].Exact_Score_0_5,
            n_Exact_Score_0_6: football[k].Exact_Score_0_6,
            n_Exact_Score_0_7: football[k].Exact_Score_0_7,
            n_Exact_Score_0_8: football[k].Exact_Score_0_8,
            n_Exact_Score_0_9: football[k].Exact_Score_0_9,
            n_Exact_Score_1_0: football[k].Exact_Score_1_0,
            n_Exact_Score_1_1: football[k].Exact_Score_1_1,
            n_Exact_Score_1_2: football[k].Exact_Score_1_2,
            n_Exact_Score_1_3: football[k].Exact_Score_1_3,
            n_Exact_Score_1_4: football[k].Exact_Score_1_4,
            n_Exact_Score_1_5: football[k].Exact_Score_1_5,
            n_Exact_Score_1_6: football[k].Exact_Score_1_6,
            n_Exact_Score_1_7: football[k].Exact_Score_1_7,
            n_Exact_Score_1_8: football[k].Exact_Score_1_8,
            n_Exact_Score_2_0: football[k].Exact_Score_2_0,
            n_Exact_Score_2_1: football[k].Exact_Score_2_1,
            n_Exact_Score_2_2: football[k].Exact_Score_2_2,
            n_Exact_Score_2_3: football[k].Exact_Score_2_3,
            n_Exact_Score_2_4: football[k].Exact_Score_2_4,
            n_Exact_Score_2_5: football[k].Exact_Score_2_5,
            n_Exact_Score_2_6: football[k].Exact_Score_2_6,
            n_Exact_Score_2_7: football[k].Exact_Score_2_7,
            n_Exact_Score_3_0: football[k].Exact_Score_3_0,
            n_Exact_Score_3_1: football[k].Exact_Score_3_1,
            n_Exact_Score_3_2: football[k].Exact_Score_3_2,
            n_Exact_Score_3_3: football[k].Exact_Score_3_3,
            n_Exact_Score_3_4: football[k].Exact_Score_3_4,
            n_Exact_Score_3_5: football[k].Exact_Score_3_5,
            n_Exact_Score_3_6: football[k].Exact_Score_3_6,
            n_Exact_Score_4_0: football[k].Exact_Score_4_0,
            n_Exact_Score_4_1: football[k].Exact_Score_4_1,
            n_Exact_Score_4_2: football[k].Exact_Score_4_2,
            n_Exact_Score_4_3: football[k].Exact_Score_4_3,
            n_Exact_Score_4_4: football[k].Exact_Score_4_4,
            n_Exact_Score_4_5: football[k].Exact_Score_4_5,
            n_Exact_Score_5_0: football[k].Exact_Score_5_0,
            n_Exact_Score_5_1: football[k].Exact_Score_5_1,
            n_Exact_Score_5_2: football[k].Exact_Score_5_2,
            n_Exact_Score_5_3: football[k].Exact_Score_5_3,
            n_Exact_Score_5_4: football[k].Exact_Score_5_4,
            n_Exact_Score_6_0: football[k].Exact_Score_6_0,
            n_Exact_Score_6_1: football[k].Exact_Score_6_1,
            n_Exact_Score_6_2: football[k].Exact_Score_6_2,
            n_Exact_Score_6_3: football[k].Exact_Score_6_3,
            n_Exact_Score_7_0: football[k].Exact_Score_7_0,
            n_Exact_Score_7_1: football[k].Exact_Score_7_1,
            n_Exact_Score_7_2: football[k].Exact_Score_7_2,
            n_Exact_Score_8_0: football[k].Exact_Score_8_0
          };
          //------------------
          if (val == true) {
            if (task.category_bet === "Exact_Score_") {
              var busc_ex_score = "n_Exact_Score_" + n_hgp + "_" + n_agp;
              var temp_score = " ";
              var key;
              for (key in obj) {
                if (key === busc_ex_score) {
                  //console.log(key + ': ' + obj[key]);
                  temp_score = obj[key];
                }
              }
              var n_exascore = temp_score;
              ganacias = task.amount * parseInt(n_exascore);
            }
          }
          //-----------------------

          var obj2 = {
            n_Exact_Goals_Number_0: football[k].Exact_Goals_Number_0,
            n_Exact_Goals_Number_1: football[k].Exact_Goals_Number_1,
            n_Exact_Goals_Number_2: football[k].Exact_Goals_Number_2,
            n_Exact_Goals_Number_3: football[k].Exact_Goals_Number_3,
            n_Exact_Goals_Number_4: football[k].Exact_Goals_Number_4,
            n_Exact_Goals_Number_5: football[k].Exact_Goals_Number_5,
            n_Exact_Goals_Number_6: football[k].Exact_Goals_Number_6
          };

          //------------------
          if (val == true) {
            if (task.category_bet == "Exact_Goals_Number_") {
              var busc_ex_goal_num = "n_Exact_Goals_Number_" + n_suma;

              var temp_goal_num = " ";
              var key2;
              for (key2 in obj2) {
                if (key2 == busc_ex_goal_num) {
                  //console.log(key2 + ': ' + obj2[key2]);
                  temp_goal_num = obj2[key2];
                } else if (n_suma >= 7) {
                  temp_goal_num = football[k].Exact_Goals_Number_more_7;
                }
              }
              var n_exa_goal_num = temp_goal_num;
              ganacias = task.amount * parseInt(n_exa_goal_num);
            }
          }
          //-----------------------
          if (val == true) {
            if (task.category_bet == "Match_Winner_") {
              //Match_Winner
              var n_match_winner = " ";
              if (parseInt(n_hgp) == parseInt(n_agp)) {
                n_match_winner = football[k].Match_Winner_Draw;
                //n_match_winner = "Draw";
              } else if (parseInt(n_hgp) > parseInt(n_agp)) {
                n_match_winner = football[k].Match_Winner_Home;
                //n_match_winner = "Home";
              } else {
                n_match_winner = football[k].Match_Winner_Away;
                //n_match_winner = "Away";
              }
              ganacias = task.amount * parseInt(n_match_winner);
            }
          }
          //console.log(ganacias);
          if (ganacias != 0) {
            total = ganacias;
          }

          ganacias = 0;
          val = false;
        }
      }
      function errData2(err) {
        console.log("Error!");
        console.log(err);
      }
      //----------------------------

      /*const task = doc.data();
      task.id = doc.id;*/
      //sum += Number(task.amount);
      sum += total;

      taskContainer.innerHTML += `
            <div class="card card-body mt-2">
                
                <h3 class="h5 text-dark">Monto: $ ${task.amount}</h3>
                <h3 class="h5 text-dark">Ganancia: $ ${total}</h3>
                <div>
                <p class="badge badge-pill badge-warning">Partido: ${task.category_match}</p><br>
                <p class="badge badge-pill badge-warning">Apuesta: ${task.category_bet}</p><br>

                    <button class="btn btn-danger btn-delete" data-id="${task.id}">Borrar</button>
                    <button class="btn btn-warning btn-edit" data-id="${task.id}">Editar</button>
                </div>
            </div>
        `;

      /*taskContainer.innerHTML += `
            <div class="card card-body mt-2">
                
                <h3 class="h5 text-dark">Monto: $ ${task.amount}</h3>
                <h3 class="h5 text-dark">Ganancia: $ ${total}</h3>
                <div>
                <p class="badge badge-pill badge-warning">Partido: ${task.category_match}</p><br>
                <p class="badge badge-pill badge-warning">Apuesta: ${task.category_bet}</p><br>

                    <button class="btn btn-danger btn-delete" data-id="${task.id}">Borrar</button>
                    <button class="btn btn-warning btn-edit" data-id="${task.id}">Editar</button>
                </div>
            </div>
        `;*/
      //ganacias = 0;
      const btnDelete = document.querySelectorAll(".btn-delete");

      btnDelete.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          await deleteTask(e.target.dataset.id);
        });
      });

      const btnToggle = document.querySelectorAll(".btn-toggle");

      btnToggle.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          await toggleDesc(e.target.dataset.id);
        });
      });

      const btnEdit = document.querySelectorAll(".btn-edit");

      btnEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          const task = await getTask(e.target.dataset.id);

          editStatus = true;
          id = task.id;
          taskForm["amount"].value = task.data().amount;
          taskForm["category_match"].value = task.data().category_match;
          taskForm["category_bet"].value = task.data().category_bet;
          taskForm["btn-task-form"].innerHTML = "Guardar cambios";
        });
      });
    });
    totalExpenses.innerHTML = `$ ${sum}`;
  });
});

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const amount = taskForm["amount"];
  const category_match = taskForm["category_match"];
  const category_bet = taskForm["category_bet"];

  if (!editStatus) {
    await saveTask(amount.value, category_match.value, category_bet.value);
  } else {
    await updateTask(id, {
      amount: amount.value,
      category_match: category_match.value,
      category_bet: category_bet.value
    });
    editStatus = false;
    id = "";
    taskForm["btn-task-form"].innerHTML = "Crear";
  }

  getTasks();
  taskForm.reset();
  amount.focus();
});
