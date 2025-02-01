import pg from 'pg';
const {Client}=pg;

const config={
    user:'db_ropamarq_user',
    host: 'dpg-cuerbftds78s73favakg-a.oregon-postgres.render.com',
    database: 'db_ropamarq',
    password: 'aoLmwOlOjVDHx4rEfGo7q8IafTgqeT2o',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    }
}

export async function Conectar(params){
    const client= new Client(config);
    try{
        await client.connect();
        console.log('Conexión exitosa');
    }catch(error){
        console.log('Error en la conexión');
    }
}

export async function ConsultarProductos() {
    const client = new Client(config);
    try {
        await client.connect();
        const result = await client.query('SELECT * FROM productos');
        return result.rows;
    } catch (error) {
        console.log('Error en la conexión');
    }
}
