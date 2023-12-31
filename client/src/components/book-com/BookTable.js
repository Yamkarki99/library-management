import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

export const BookTable = () => {
  const { books } = useSelector((state) => state.bookInfo);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>thumbnail</th>
          <th>Book Title</th>
          <th>Author Name</th>
          <th>year</th>
        </tr>
      </thead>
      <tbody>
        {books.map((item, i) => (
          <tr key={item._id}>
            <td>{i + 1}</td>
            <td>
              <img src={item.thumbnail} width="150px" alt="" />
            </td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.year}</td>
            <td>
              <Button variant="warning">Edit</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
