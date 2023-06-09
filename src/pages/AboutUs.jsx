import React from 'react';

const Blog = () => {
  const posts = [
    {
      titulo: 'Por que la pizza es tan rica?',
      contenido: 'Aqui deberia de ir mucho texto, pero todos sabemos que la pizza es rica!',
    },
    {
      titulo: 'Es el calzonene una quesadilla?',
      contenido: 'Hoy descubriremos la verdad sobre este platillo',
    },
  ];

  return (
    <div>
   <h1>Bienvenido a nuestro blog!</h1>
      <List>
        {posts.map((post) => (
          <List.Item key={post.titulo}>
            <Card>
              <Card.Body>
                <h4>{post.titulo}</h4>
                <p>{post.contenido}</p>
              </Card.Body>
            </Card>
          </List.Item>
        ))}
      </List>

      <br />

      <Pagination />
    </div>
  );
};
export default AboutUs