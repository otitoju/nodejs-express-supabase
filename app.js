import express from 'express';
import {createClient} from '@supabase/supabase-js';
import morgan from 'morgan';

const app = express();

// Middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Supabase Initialization
const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_SERVER_API_KEY);

// Routes
app.get('/users', async (req, res) => {
    const {data, error} = await supabase
        .from('profiles')
        .select();

    if (error) {
        return res.status(400).send({error: error.message});
    }

    res.status(200).json({
        data: data,
    })
});

app.get('/user/:id', async (req, res) => {
    const {data, error} = await supabase
        .from('profiles')
        .select()
        .eq('id', req.params.id);

    if (error) {
        return res.status(400).send({error: error.message});
    }

    res.status(200).send(data);
});

app.post('/create', async (req, res) => {
    const {error} = await supabase
        .from('profiles')
        .insert({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
        });

    if (error) {
        return res.status(400).send({error: error.message});
    }

    res.status(201).send({message: "Product created successfully!"});
});

app.put('/user/update/:id', async (req, res) => {
    const {error} = await supabase
        .from('profiles')
        .update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
        })
        .eq('id', req.params.id);

    if (error) {
        return res.status(400).send({error: error.message});
    }

    res.status(200).send({message: "Product updated successfully!"});
});

app.delete('/user/delete/:id', async (req, res) => {
    const {error} = await supabase
        .from('profiles')
        .delete()
        .eq('id', req.params.id);

    if (error) {
        return res.status(400).send({error: error.message});
    }

    res.status(200).send({message: "Product deleted successfully!"});
});

// Default Routes
app.get('/', (req, res) => {
    res.send("Hello! I am working with Supabase <3");
});

app.get('*', (req, res) => {
    res.send("Hello! This route does not exist.");
});

// Start Server
app.listen(3000, () => {
    console.log(`> Ready on http://localhost:3000`);
});

// https://medium.com/@heshramsis/building-a-crud-app-with-supabase-and-express-a-step-by-step-guide-for-junior-developers-81456b850910
