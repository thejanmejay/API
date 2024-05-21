const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();


const PORT = 3000;

//ROUTES
app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

//REST API
app.get('/api/users', (req, res) => {

    return
    res.json(users);
})

app.route('/api/user/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (user) return res.json(user);
        else return res.status(404).json({ errpr: "user not found" });
    })
    .patch((req, res) => {
        //Edit user with id
        return res.json({ status: "Pending" })
    })
    .delete((req, res) => {
        //Delete user with id
        return res.json({ status: "Pending" })
    });

app.post('/api/users', (Req, res) => {
    //TODO : Create new users
    return res.json({ status: 'pending' });
})




app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))
