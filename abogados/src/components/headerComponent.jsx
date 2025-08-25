import Card from 'react-bootstrap/Card';

export const HeaderComponent = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" className="header-img" src="https://blog.edutin.com/wp-content/uploads/2024/10/que-hace-un-abogado.png" />
        <Card.Body>
          <Card.Text>
            Aqui encontraras a los mejores abogados del pais
          </Card.Text>
        </Card.Body>
      </Card>

      </div>
  )
}
