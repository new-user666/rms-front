//Loading Firebase Package
var firebase = require("firebase/app");
var firebasedb = require("firebase/database");

/**
 * Update your Firebase Project
 * Credentials and Firebase Database
 * URL
 */

const firebaseConfig = {
  apiKey: "AIzaSyDhaKh0v1SY2zMr-jfT-TRkjsyQb0I5-ws",
  authDomain: "live-result-235df.firebaseapp.com",
  databaseURL: "https://live-result-235df-default-rtdb.firebaseio.com",
  projectId: "live-result-235df",
  storageBucket: "live-result-235df.appspot.com",
  messagingSenderId: "265886718567",
  appId: "1:265886718567:web:b54125e6b172104ce112c2",
  measurementId: "G-E19GCCCFYE",
}; //by adding your credentials, you get authorized to read and write from the database

var app = firebase.initializeApp(firebaseConfig);
/**
 * Loading Firebase Database and refering
 * to user_data Object from the Database
 */
var db = firebasedb.getDatabase(app);

var jol = [
  { age: 1, name: "Ahmed" },
  { age: 12, name: "Aaban" },
  { age: 1234, name: "Adnan" },
  { age: 15, name: "Aabid" },
  { age: 126, name: "Ahsan" },
  { age: 1237, name: "Hisham" },
  { age: 129, name: "Jabir" },
];
let count = 0;

// The arguments passed after the
// delay (in milliseconds) will
// be received in our function
// inside the setInterval() method

const jau = (timeInSec) => {
  const intervalId = setInterval(
    (a, b) => {
      console.log(`The sum of ${a} and ${b} is ${a + b}`);
      count++;

      if (count === 5) {
        console.log("Clearing the interval id after 5 executions");
        clearInterval(intervalId);
      }
    },
    timeInSec * 1000,
    5,
    10 //parameters
  );
};

const hik = (timeInSec, elem) => {
  const intervalId = setInterval(() => {
    console.log(elem);
  }, timeInSec * 1000);
};

// for (let i = 0; i < jol.length; i++) {
//     // console.log(jol[i]);
//     const myInterval = setInterval(myTimer, 1000);

// function myTimer() {
//   const date = new Date();
//   console.log(date.toLocaleTimeString());
// }

// if () {
//     clearInterval(myInterval)
// }
//     // var con = 0
// const intervalId1 = setInterval(
//     () => {
//         // console.log(i)
//         // console.log(jol.length);
//         con++
//         console.log(con);
//         if (con==jol.length) {
//             // console.log(i)
//             clearInterval(intervalId1)
//         }
//     },
//     1000,
// );
// }

// var list = [1, 2, 3, 4, 5];

// for (var i = 0, len = list.length; i < len; i += 1) {
//     (function(i) {
//         setInterval(function() {
//             list[i] += 10;
//             console.log(i + "=>" + list[i] + "\n");
//         }, 1000)
//     })(i);
// }
// jau(1)

// writing data
var ref = firebasedb.ref(db, "current");
// firebasedb.set(ref, { username: 'ae' }).then(() => {
//     console.log('saved');
// })
//     .catch((error) => {
//         console.log(error);
//     });

// //   reading data
// firebasedb.onValue(ref, (snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
// });
// firebasedb.onChildAdded(firebasedb.child(firebasedb.ref(db), 'posts'), (snapshot) => {
//     const changedPost = snapshot.val();
//     console.log(changedPost);
//     // console.log('The updated post title is ' + changedPost);
// })
// // updating data
// const newPostKey = firebasedb.push(firebasedb.child(firebasedb.ref(db), 'posts')).key;
// var ko = {
//     'asdf': 'asdf',
//     '123': 123
// }
// const updates = {};
// updates['/posts/' + newPostKey] = ko;
// updates['/user-posts/' + '12345' + '/' + newPostKey] = ko;
// firebasedb.update(firebasedb.ref(db), updates)

// // ref.on('child_changed', (snapshot) => {
// //     const changedPost = snapshot.val();
// //     console.log('The updated post title is ' + changedPost.title);
// //   });
// firebasedb.onChildRemoved(firebasedb.ref(db, 'posts'), (snapshot) => {
//     console.log('remove');
//     const changedPost = snapshot.val();
//     console.log(changedPost);
//     // console.log('The updated post title is ' + changedPost);
// })
// firebasedb.remove(firebasedb.child(firebasedb.ref(db), 'posts/' + newPostKey))

const addResult = (timeInSec, datas) => {
  var dat = {
    "/main": datas,
  };
  firebasedb.update(firebasedb.ref(db), dat);
  var datList;
  firebasedb
    .get(firebasedb.child(firebasedb.ref(db), "main"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        datList = snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  var isResultEnd = false;

  const intervalId = setInterval(() => {
    // console.log(jol[count]);

    // firebasedb.onValue(firebasedb.child(firebasedb.ref(db), 'current'), (snapshot) => {
    //     const data = snapshot.val();
    //     console.log(data);
    // });

    firebasedb
      .get(ref)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    datList[count]["startTime"] = new Date().getTime();
    datList[count]["time"] = timeInSec;
    console.log(datList);
    var upo = {
      "/current": datList[count],
    };
    firebasedb.update(firebasedb.ref(db), upo);

    // firebasedb.set(ref, jol[count]).then(() => {
    //     console.log('saved');
    // })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    // firebasedb.onChildAdded(firebasedb.child(firebasedb.ref(db), 'current'), (snapshot) => {
    //     // console.log(snapshot.val());
    //     firebasedb.onValue(firebasedb.child(firebasedb.ref(db), 'current'), (snapshot) => {
    //         const data = snapshot.val();
    //         console.log(data);
    //     });
    //     // console.log('The updated post title is ' + changedPost);
    // })
    count++;

    if (count === datList.length) {
      console.log("stopped");
      clearInterval(intervalId);
      isResultEnd = true;
      setTimeout(() => {
        firebasedb.update(firebasedb.ref(db), {
          "/current": "congratulations",
        });
        isResultEnd = true;
      }, timeInSec * 1000);
      setTimeout(() => {
        firebasedb.update(firebasedb.ref(db), { "/current": "no data" });
        isResultEnd = true;
      },10000);

      // firebasedb.remove(firebasedb.child(firebasedb.ref(db), 'current'))
    }
    // if (isResultEnd){
    //   firebasedb.update(firebasedb.ref(db), {'/current':'no data'})
    // clearInterval(intervalId);
    // }
  }, timeInSec * 1000);

  // firebasedb.update(firebasedb.ref(db), {
  //   "/current": "congratulations",
  // });

  // let timeoutId = setTimeout(() => {
  //   firebasedb.update(firebasedb.ref(db), {
  //     "/current": "congratulations",
  //   });
  //   isResultEnd = true;
  // }, 1000);
  // clearTimeout(timeoutId);
};

addResult(5, jol);
