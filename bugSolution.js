```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, { projection: { name: 1,  _id:0} }).then(user => {
  if (!user) {
    console.log('User not found');
  } else {
    console.log(user);
  }
});
```