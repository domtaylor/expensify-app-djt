import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as deafult };

/* //child_removed

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}); 

//child_changed 
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}); 

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}); 
/* database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });

    console.log(expenses);
    }); */

//Setup "expenses" with three items (description, note, amount, createdAt)

/* database.ref('expenses').push({ 
        description: "Rent",
        note: "",
        amount: 109500,
        createdAt: 913859346321
    }); */


/* database.ref('notes/LPw7HrQQ5fQv5y9G2Ub').remove();
 */
/* database.ref('notes').push({
    title: 'Course Topics,
    body: 'React Native, Angular, Python'
});
 */

/* database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}) */


/*  database.ref().set({
    name: 'Dom Taylor',
    age: 35,
    stressLevel: 6,
    job: {
        title: 'Software',
        company: 'Google'
    },
    location: {
        city: "Lisbon",
        country: "Portugal"
    }
}).then(() => {
    console.log('Second set call worked');
    }).catch((e) => {
    console.log('Things did not work', e);
}); */
// Change the stresLevel to 9
// Change job company to Amazon
// Change location to Seattle
/* database.ref().update({
   stressLevel: 9,
   'job/company': 'Amazon',
   'location/city': 'Seattle'
});  */

/* database.ref('isSingle')
    .remove()
    .then(() => {
        console.log("remove succeeded");
    })
    .catch((e) => {
        console.log("Remove failed: ", + e)
    }); */

    